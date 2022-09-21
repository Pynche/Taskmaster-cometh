let tM = new TaskManager(0);

function validFormFieldInput(data) {
    if (data == null || data == '') {
        const warning = document.querySelector('#form-warning');
        warning.style.display = "block"
    }
};
const newTaskInput = document.querySelector('#assign');
console.log(newTaskInput);
newTaskInput.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('Test');
    const taskNameInput = document.querySelector('#doThis');
    const taskNameValue = taskNameInput.value;
    console.log(taskNameValue);
    const descriptionInput = document.querySelector('#describeIt');
    const descriptionInputValue = descriptionInput.value;
    console.log(descriptionInputValue);
    const assignedToInput = document.querySelector('#forYou');
    const assignedToValue = assignedToInput.value;
    validFormFieldInput(taskNameValue);

})

//tM.addTask(this.currentId, "Wash dishes", "Use soap", "Clarabele", "09/17/22"); < works

const taskHtml = createTaskHtml('Laundry', 'two loads', 'amber', '12/21/2022', 'not done');
console.log(taskHtml)



//console.log("name:  "+name);


// Call render: Event listener selector
TaskManager.addTask
TaskManager.render();

