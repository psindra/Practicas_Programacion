const originalConsoleLog = console.log; // Guardar el console.log original
const originalConsoleError = console.error; // Guardar el console.error original
const originalConsoleWarn = console.warn; // Guardar el console.warn original
const originalConsoleInfo = console.info; // Guardar el console.info original
    
console.log = function(...args) {
  preConsoleParse(args, "[LOG]\t");    // para que llegue entero como Array para el .map
  originalConsoleLog(...args); // Llamar al console.log original.
};

console.warn = function(...args) {
  preConsoleParse(args, "[WARN]\t");    // para que llegue entero como Array para el .map
  originalConsoleWarn(...args); // Llamar al console.warn original.
}

console.info = function(...args) {
  preConsoleParse(args, "[INFO]\t");    // para que llegue entero como Array para el .map
  originalConsoleInfo(...args); // Llamar al console.info original.
}

console.error = function(...args) {
  preConsoleParse(args, "[ERROR]\t");    // para que llegue entero como Array para el .map
  originalConsoleError(...args); // Llamar al console.error original.
}

function preConsoleParse(args, encabezado) {
    let mensaje = encabezado;
    mensaje += args.map(arg => {
        if (typeof arg === 'object') {
            return JSON.stringify(arg, null, 2);
        }
        return arg;
    }).join('\n');
    document.querySelector("pre#preConsole").textContent += mensaje + "\n";
}
