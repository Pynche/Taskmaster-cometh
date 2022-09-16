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
<<<<<<< HEAD
    constructor(currentId = 0) {
        this.currentID = currentID
        this.tasks = [];
    }
    render() {
        let taskHtmlList = []

=======
    constructor(currentId = 0){ 
        this.currentId = currentId
        this.tasks = [];
    
>>>>>>> main
    }
    addTask(id = this.currentId, nme, description, assignedTo, dueDate, stat ='TODO') {
        this.currentId++;
        this.tasks.push({id, nme, description, assignedTo, dueDate, stat});
console.log(this.tasks);
    } 
}



<<<<<<< HEAD

=======
>>>>>>> main
