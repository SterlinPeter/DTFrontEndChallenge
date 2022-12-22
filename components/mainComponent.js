import taskList from '../project.json' assert {type: 'json'};
import {headerComponent} from './headerComponent.js';
import { addTask } from './taskComponent.js';



const body = document.getElementById('container');
// console.log(typeof(taskList), taskList.tasks)
body.appendChild(headerComponent());
body.appendChild(addTask(taskList.tasks));

const coll = document.getElementsByClassName("collapse-button");
// console.log(coll);
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        // console.log(coll[i])
        this.classList.toggle("active");
        var content = this.previousElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        }
        else {
            content.style.maxHeight = content.scrollHeight + 'px';
        } 
    });
}


const colbut = document.getElementById('collapse-list');
colbut.addEventListener("click", function(){
    // console.log(shortlist)
    var shortlist = document.getElementsByClassName('short-list')[0];
    var longlist = document.getElementsByClassName('long-list')[0];
    var title = document.getElementsByClassName('task-list-title')[0];
    console.log(shortlist.style.maxHeight)
    if(shortlist.style.maxHeight === 'fit-content'){
        shortlist.style.maxWidth = 0;
        shortlist.style.maxHeight = 0;
        longlist.style.maxWidth = 'fit-content';
        longlist.style.maxHeight = 'fit-content';
        title.style.maxWidth = 'fit-content';
        title.style.maxHeight = 'fit-content';
    }
    else{
        
        shortlist.style.maxWidth = 'fit-content';
        shortlist.style.maxHeight = 'fit-content';
        longlist.style.maxWidth = 0;
        longlist.style.maxHeight = 0;
        title.style.maxWidth = 0;
        title.style.maxHeight = 0;
    }
});
