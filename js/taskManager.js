//function createTaskHtml()
//createTaskHtml(name, description, assignedTo, dueDate, status)


class TaskManager {
    constructor(currentId = 0){ 
        this.currentId = currentId
        this.tasks = [];
    
    }
    addTask(id = this.currentId, nme, description, assignedTo, dueDate, stat ='TODO') {
        this.currentId++;
        this.tasks.push({id, nme, description, assignedTo, dueDate, stat});
console.log(this.tasks);
    } 
}



