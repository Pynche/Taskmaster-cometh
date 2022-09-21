const createTaskHtml = (name, description, assignedTo, dueDate, status) => {
    const task1 = `<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="lilTitle">${name}</h5>
        <h6 class="teenyTitle">Assigned To: ${assignedTo}</h6> <!-- Assigned To-->
     <h6 class="teenyTitle">Due Date: ${dueDate}</h6> <!--Due Date-->
         <p class="smallContent">${description}</p> <!--Description-->
         <p class="smallContent">${status}</p>
         <button type="submit">Done</button>

        <!--button--> 
        <button class="btn btn-$indigo-300" type="Mark as Done">Button</button>
      </div>
    </div>`
    return task1


}

// console.log('danielle', 'something something', 'rose', '12/03/21');

class TaskManager {
    constructor(currentId = 0) {
        this.currentId = currentId
        this.tasks = [];
    }

    addTask(id = this.currentId, name, description, assignedTo, dueDate, stat = 'TODO') {
        this.currentId++;
        this.tasks.push({ id, name, description, assignedTo, dueDate, stat });
        console.log(this.tasks);
    }
};


// Render method
render() {
    {
        let tasksHtmlList = [];
        for (let i = 0; i < taskHtmlList.length; i++) {
            let taskHtmlList = this.tasks[i];
            let date = newDate("2022, 21, 12");
            // let formattedDate = []

            let taskHtml = createTaskHtml(this.tasks.name, this.tasks.description, this.tasks.assignedTo, this.tasks.dueDate, formattedDate, this.tasks.Date, this.tasks.stat);
            taskHtml.push(taskHtmlList);
        };

        let tasksHtml = tasksHtmlList.join("\n");
        document.querySelector('render-task-list'), innerHtml = taskHtml;

    };

    // 5.Need help on Task list in index.htl has id so it can be selected.//
    //    6. setting inner Html to the taskHtml //


    // console.log(taskHtmlList[i]);

};


