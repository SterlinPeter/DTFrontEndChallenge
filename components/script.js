
//---------------Task List sidebar collapse functionality
const colbut = document.getElementById('collapse-list');
var shortlist = document.getElementsByClassName('short-list')[0];
var longlist = document.getElementsByClassName('long-list')[0];
var title = document.getElementsByClassName('task-list-title')[0];
// console.log(colbut)
shortlist.style.maxHeight = 'fit-content';
colbut.addEventListener("click", function(){
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


//----------Description collapse functionality
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


//-----------Thread collapse functionality
const threadcoll = document.getElementsByClassName("thread-collapse-button");
const cls = document.getElementsByClassName('collapsible-thread');
// console.log(coll);
var i;

for (i = 0; i < threadcoll.length; i++) {
    if(cls[i])
    cls[i].style.maxHeight = 'fit-content';
    threadcoll[i].addEventListener("click", function() {
        this.firstChild.classList.toggle("active");
        var content = this.parentElement.nextElementSibling;
        if (content.style.maxHeight === 'fit-content'){
            content.style.maxHeight = 0;
        }
        else {
            content.style.maxHeight = 'fit-content';
        } 
    });
}
