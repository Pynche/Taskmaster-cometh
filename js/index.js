function validFormFieldInput(data) {
    if (data == null || data == '') {
       const warning = document.querySelector('#form-warning');
        warning.style.display = "block"
    }
};
const newTaskInput = document.querySelector('#assign');

newTaskInput.addEventListener('submit', (eventE) => {
    const taskNameInput = document.querySelector('#doThis');
    const taskNameValue = taskNameInput.value;
    const descriptionInput = document.querySelector('#describeIt');
    const descriptionInputValue = descriptionInput.value;
    const assignedToInput = document.querySelector('#forYou');
    const assignedToValue = assignedToInput.value;
validFormFieldInput(taskNameValue);
    
})





//console.log("name:  "+name);