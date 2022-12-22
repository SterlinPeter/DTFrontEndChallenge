import taskList from '../project.json' assert {type: 'json'};
import {headerComponent} from './headerComponent.js';
import { addTask } from './taskComponent.js';



const body = document.getElementById('container');
// console.log(typeof(taskList), taskList.tasks)
body.appendChild(headerComponent());
body.appendChild(addTask(taskList.tasks));
