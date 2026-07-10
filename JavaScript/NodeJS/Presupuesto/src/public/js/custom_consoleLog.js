const originalConsoleLog = console.log; // Guardar el console.log original
const originalConsoleError = console.error; // Guardar el console.error original
const originalConsoleWarn = console.warn; // Guardar el console.warn original
const originalConsoleInfo = console.info; // Guardar el console.info original

document.addEventListener("DOMContentLoaded", async () => {
  const footerHTML = `
  <!-- Footer Log -->
    <footer class="sticky-bottom top-100">
        <hr class="mt-3 border-top">
        <div class="form-switch form-check-inline mx-2">
            <input type="checkbox" class="form-check-input" id="enableConsole" name="enableConsole">
        </div>
        <button type="button" class="btn btn-sm btn-outline-secondary" id="cleanConsole">Clean Console</button>
        <pre id="preConsole" style="display: none;">CONSOLA:\n<br></pre>
        <script>
            document.getElementById('enableConsole').addEventListener('change', function () {
                const preConsole = document.getElementById('preConsole');
                preConsole.style.display = this.checked ? 'block' : 'none';
            });
            document.getElementById('cleanConsole').addEventListener('click', function () {
                document.getElementById('preConsole').textContent = '';
            });
        </script>
    </footer>
    <!--  -->
  `;
  document.body.insertAdjacentHTML("beforeend", footerHTML);

  document.getElementById('enableConsole').addEventListener('change', function () {
    const preConsole = document.getElementById('preConsole');
    preConsole.style.display = this.checked ? 'block' : 'none';
  });
  document.getElementById('cleanConsole').addEventListener('click', function () {
    document.getElementById('preConsole').textContent = '';
  });
});

console.log = (...args) => {
  preConsoleParse("[LOG]\t", ...args);    // para que llegue entero como Array para el .map
  originalConsoleLog(...args); // Llamar al console.log original.
};

console.warn = function (...args) {
  preConsoleParse("[WARN]\t", ...args);    // para que llegue entero como Array para el .map
  originalConsoleWarn(...args); // Llamar al console.warn original.
}

console.info = function (...args) {
  preConsoleParse("[INFO]\t", ...args);    // para que llegue entero como Array para el .map
  originalConsoleInfo(...args); // Llamar al console.info original.
}

console.error = function (...args) {
  // console.log("Error stack trace:", args); // Imprimir el stack trace en la consola original
  preConsoleParse("[ERROR]\t",args[0].stack);    // para que llegue entero como Array para el .map
  originalConsoleError(...args); // Llamar al console.error original.
}

function preConsoleParse(encabezado, ...args) {
  let mensaje = encabezado;
  
  mensaje += args.map(arg => {
    if (typeof arg === 'object') {
      return arg.toString() === "[object Object]" ? JSON.stringify(arg, null, 2) : arg.toString();
      return JSON.stringify(arg, null, 2);
    }
    return arg;
  }).join('\n');
  const stack = (new Error().stack.split("\n")).slice(3).join("\n\t").trim(); // Obtener el stack trace, omitiendo las primeras 2 líneas (Error y esta función)
  mensaje += `\t[${stack}]\n`;

  document.querySelector("pre#preConsole").textContent += mensaje + "\n";
}
