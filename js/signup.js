"use strict"

let nameInput = document.getElementById('name')
let emailInput = document.getElementById('email');
let passInput = document.getElementById('pass');
let btnInput = document.getElementById('btn');



let usersContainer = [];

if (localStorage.getItem('users')) {
    usersContainer = JSON.parse(localStorage.getItem('users'));

}

function isExist() 
{
    for (let i = 0; i < usersContainer.length; i++) {
        if (emailInput.value == usersContainer[i].email) {
            return true;
        }
    }
    return false;
}
function clearForm() {
    nameInput.value = null;
    emailInput.value = null;
    passInput.value = null;
}


function isAllFilled() {
    if (emailInput.value == '' || passInput.value == '') {
        return false;
    }
    return true;

}


btnInput.addEventListener('click', addUser);
function addUser() {
    if (!isAllFilled()) {

        document.getElementById('all-inputs').classList.replace('d-none', 'd-block');
        document.getElementById('success').classList.replace('d-block', 'd-none');
        document.getElementById('exist').classList.replace('d-block', 'd-none');
    }
    else if (isExist()) {
        document.getElementById('exist').classList.replace('d-none', 'd-block');
        document.getElementById('all-inputs').classList.replace('d-block', 'd-none');
        document.getElementById('success').classList.replace('d-block', 'd-none');
    }
    else {
        let user =
        {
            name: nameInput.value,
            email: emailInput.value,
            password: passInput.value
        }
     
  
        localStorage.setItem('boxName',nameInput.value);
        document.getElementById('success').classList.replace('d-none', 'd-block');
        document.getElementById('exist').classList.replace('d-block', 'd-none');
        document.getElementById('all-inputs').classList.replace('d-block', 'd-none');
        usersContainer.push(user);
        localStorage.setItem('users', JSON.stringify(usersContainer));
        clearForm();
    }


}

