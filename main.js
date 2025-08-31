const btns = document.querySelectorAll("button");
const modalPieces = document.getElementById("modal-pieces");



btns.forEach(btn => {
    btn.addEventListener("click", function () {
        const taskVal = this.dataset.btnModal;
        if (taskVal === "breakPiece") {
            this.style.display = "none";
            document.getElementsByClassName("modal-body")[0].style.display = "block";
        }
        if (taskVal === "saveChanges") {
            const form = document.querySelector('[data-form="addModalForm"]');
            const formData = new FormData(form);
            const dataObject = Object.fromEntries(formData);
            const keysObj = Object.keys(dataObject);
            delete dataObject[keysObj[keysObj.length - 1]];
            const jsonData = JSON.stringify(dataObject);
            jsonParse(jsonData);

            document.querySelectorAll('[data-btn-modal="breakPiece"]')[0].style['display'] = 'block';
            document.getElementsByClassName("modal-body")[0].style.display = "none";
            this.blur();
        }
    })
})
function addInputListener(input) {
    input.addEventListener('input', function () {
        const inputs = modalPieces.querySelectorAll('input.task-piece');
        if (inputs[inputs.length - 1].value.trim() !== '') {
            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.className = 'form-control task-piece mb-1';
            const idInput = inputs.length + 1;
            newInput.name='piece/'+idInput;
            newInput.placeholder = 'Piece name';
            modalPieces.appendChild(newInput);
            addInputListener(newInput);
        }
    });
}
function jsonParse(json) {
    console.log(json);

}



addInputListener(modalPieces.querySelector('input.task-piece'));