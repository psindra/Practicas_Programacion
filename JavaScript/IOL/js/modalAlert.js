const htmlModalAlert = `
<!-- Modal -->
<div class="modal fade text-black" id="modalAlert" tabindex="-1" aria-labelledby="modalAlertLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content placeholder-glow">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="modalAlertLabel"><span class="placeholder">Titulo de Modal</span></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="placeholder col-7">Mensaje</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" hidden>Close</button>
        <button type="button" class="btn btn-primary" hidden>Save changes</button>
      </div>
    </div>
  </div>
</div>`;

document.body.insertAdjacentHTML('beforeend', htmlModalAlert);


var modalAlert = document.getElementById('modalAlert')
var modal = bootstrap.Modal.getOrCreateInstance(modalAlert) // Returns a Bootstrap modal instance


function mensajeModal(titulo, mensaje, closeButton = true, saveButton = false) {
  mensaje = (mensaje.replaceAll("\n", "<br>")).replaceAll("  ", "&nbsp;&nbsp;");
  console.log(mensaje);
  document.querySelector('#modalAlert .modal-title#modalAlertLabel').innerText = titulo;
  document.querySelector('#modalAlert .modal-body').innerHTML = mensaje;
  document.querySelector('#modalAlert .modal-body').classList.add('font-monospace', 'small');
  document.querySelector('#modalAlert button.btn.btn-secondary').hidden = !closeButton;
  document.querySelector('#modalAlert button.btn.btn-secondary').focus();
  document.querySelector('#modalAlert button.btn.btn-primary').hidden = !saveButton;
  modal.show();
}

// modal.show()