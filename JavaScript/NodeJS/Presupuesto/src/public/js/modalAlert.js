const htmlModalAlert = `
<!-- Modal -->
<dialog class="modal fade bg-transparent border-0" id="modalAlert" tabindex="-1" aria-labelledby="modalAlertLabel" aria-hidden="true" data-bs-backdrop="static">
  <div class="modal-dialog">
    <div class="modal-content placeholder-glow">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="modalAlertLabel"><span class="placeholder">Titulo de Modal</span></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="this.closest('dialog').close()"></button>
      </div>
      <div class="modal-body">
        <p class="placeholder col-7">Mensaje</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="this.closest('dialog').close()" hidden>Close</button>
        <button type="button" class="btn btn-primary" hidden>Save changes</button>
      </div>
    </div>
  </div>
</dialog>
`;

document.body.insertAdjacentHTML('beforeend', htmlModalAlert);


var modalAlert = document.getElementById('modalAlert')
var modal = bootstrap.Modal.getOrCreateInstance(modalAlert) // Returns a Bootstrap modal instance


function mensajeModal(titulo, mensaje, closeButton = true, saveButton = false) {
  console.log(mensaje);
  try {
    mensaje = (mensaje.replaceAll("\n", "<br>")).replaceAll("  ", "&nbsp;&nbsp;");
  } catch (error) {
    try {
      mensaje = JSON.stringify(mensaje, null, 2).replaceAll("\n", "<br>").replaceAll("  ", "&nbsp;&nbsp;");
    } catch (error) {
      mensaje = JSON.stringify(mensaje, null, 2);
    }
    
  }
  document.querySelector('#modalAlert .modal-title#modalAlertLabel').innerText = titulo;
  document.querySelector('#modalAlert .modal-body').innerHTML = mensaje;
  document.querySelector('#modalAlert .modal-body').classList.add('font-monospace', 'small');
  document.querySelector('#modalAlert button.btn.btn-secondary').hidden = !closeButton;
  document.querySelector('#modalAlert button.btn.btn-secondary').focus();
  document.querySelector('#modalAlert button.btn.btn-primary').hidden = !saveButton;
  modal.show();
  modalAlert.showModal();
}

export { mensajeModal };
export default mensajeModal;

// modal.show()