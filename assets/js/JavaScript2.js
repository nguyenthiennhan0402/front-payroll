const savebtn = document.querySelector('.save-btn');
const cancelbtn = document.querySelector('.cancel-btn');
const addannounce = document.querySelector('.addannouce-form');
const addannouncebtn = document.querySelector('.addannouce-btn');
const addannounceformbody= document.querySelector('.addannouce-form-body');
cancelbtn.addEventListener('click', function(event) {
    addannounce.classList.add('unable-display');
});

addannouncebtn.addEventListener('click', function(event) {
    addannounce.classList.remove('unable-display');
});
