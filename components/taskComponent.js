import { addAsset } from "./assetComponent.js";
import { taskListDiv } from './taskList.js';

export const addTask = (tasks) => {
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('id', 'task-container');
    taskContainer.appendChild(taskListDiv(tasks));
    const taskList = tasks.map((task) => {
        const taskdiv = document.createElement('div');
        taskdiv.setAttribute('class', 'task');
        taskdiv.innerHTML += `
        <a class='task-title'><h3>${task.task_title}</h3></a>
        `
        const assetContainer = document.createElement('div');
        assetContainer.setAttribute('class', 'asset-container');
        const assetList = task.assets.map((asset) => {
            assetContainer.appendChild(addAsset(asset));
        })
        taskdiv.appendChild(assetContainer);
        // taskdiv.innerHTML = assetList;
        taskContainer.appendChild(taskdiv);
    })
    return taskContainer;
}
