const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    const task1 = `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="lilTitle">${name}</h5>
        <h6 class="teenyTitle">Assigned To: ${assignedTo}</h6> <!-- Assigned To-->
     <h6 class="teenyTitle">Due Date: ${dueDate}</h6> <!--Due Date-->
         <p class="smallContent">${description}</p> <!--Description-->
         <p class="smallContent">${status}</p>
         <button type="submit">Done</button>
      </div>
    </div>`
    return task1


}



class TaskManager {
    constructor(currentId = 0) {
        this.currentID = currentID
        this.tasks = [];
    }
    render() {
        let taskHtmlList = []

    }
}




