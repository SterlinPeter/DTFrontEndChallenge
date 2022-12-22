
export const taskListDiv = (tasks) => {
    const listContainer = document.createElement('div');
    listContainer.setAttribute('id', 'task-list');
    listContainer.innerHTML = `
        <div class="task-list-header">
            <h3 class='task-list-title'>Journey Board</h3>
			<i class="fa fa-2x fa-bars" id='collapse-list' aria-hidden="true"></i>
		</div>
    `;
    const shortlist = document.createElement('div');
    shortlist.setAttribute('class', 'short-list');
    // console.log(shortlist)
    var i = 1;
    tasks.forEach(() => {
        const taskbutton = document.createElement('button');
        taskbutton.setAttribute('value', i);
        taskbutton.innerHTML = i;
        taskbutton.setAttribute('class', 'task-list-button')
        i++;
        shortlist.appendChild(taskbutton);
    });
    listContainer.appendChild(shortlist);
    // console.log(listContainer)
    const longlist = document.createElement('div');
    longlist.setAttribute('class', 'long-list');
    const tasklist = document.createElement('ol');
    tasklist.setAttribute('class', 'task-long-list');
    i = 1;
    tasks.forEach((task) => {
        tasklist.innerHTML += `<li class='long-list-li'><b>${task.task_title}</b></li>`;
        const assetlist = document.createElement('ul');
        task.assets.forEach((asset) => {
            assetlist.innerHTML += `<li class='long-list-li'>${asset.asset_title}</li>`;
        })
        tasklist.appendChild(assetlist);
    })
    longlist.appendChild(tasklist);
    listContainer.appendChild(longlist);

    return listContainer;
}