'use strict';

document.querySelector('.saveTask').addEventListener('click', function () {
    let task = document.querySelector('.task').value;
    let newContent = document.createTextNode(task);

    const newDiv = document.createElement('div');
    const currentDiv = document.getElementById('footer_div');
    document.body.insertBefore(newDiv, currentDiv);
    newDiv.appendChild(newContent);

    console.log(newContent);
});
