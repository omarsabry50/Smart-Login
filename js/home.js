"use strict"

let boxName = document.getElementById('boxName');
document.getElementById('boxName').innerHTML = `<h1>Welcome ${localStorage.getItem('boxName')}</h1>` 