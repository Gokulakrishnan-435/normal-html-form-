let username=document.getElementById('username');
let password=document.getElementById('password');
let form=document.getElementById('form');

// dom event
form.addEventListener('submit',e=>{
    e.preventDefault();
    let name=e.target[0].value;
    let pass=e.target[1].value;
    console.log(name,pass);
})