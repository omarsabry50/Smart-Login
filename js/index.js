"use strict"

let emailInput = document.getElementById('email');
let passInput = document.getElementById('pass');
let loginAncor = document.querySelector('.form #test');


console.log(loginAncor);


let usersContainer = []; 
if(localStorage.getItem('users'))
{
    usersContainer = JSON.parse(localStorage.getItem('users'));
}

function isFound()
{

    for(let i=0;i<usersContainer.length;i++)
        {
            if((emailInput.value==usersContainer[i].email) && (passInput.value==usersContainer[i].password))
            {
                 return true;
            }
        }   
        return false;
   
}

function isAllFilled()
{
    if(emailInput.value =='' || passInput.value=='' )
    {
        return false;     
    }
      return true; 
}

function clearForm()
{
    emailInput.value = null;
    passInput.value = null;
}


loginAncor.addEventListener('click',login);

function login()
{

    if(!isAllFilled())
    {

        document.getElementById('all-inputs').classList.replace('d-none','d-block');
        document.getElementById('invalid').classList.replace('d-block','d-none');
    }
    else if(!isFound())
    {
        document.querySelector('.form .invalid').classList.replace('d-none','d-block');
        document.getElementById('all-inputs').classList.replace('d-block','d-none');

    }
    else
    {
        document.querySelector('.form .invalid').classList.replace('d-block','d-none');
        document.getElementById('all-inputs').classList.replace('d-block','d-none');
        clearForm();
        loginAncor.setAttribute('href','home.html');
       
    }
        
}


