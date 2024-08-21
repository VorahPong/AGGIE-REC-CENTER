// test account
const admin_id = 'admin';
const admin_password = '999';
//

const user_id = document.querySelector('#user_id');
const user_password = document.querySelector('#user_password');

const login_btn = document.querySelector('#login_btn');
login_btn.addEventListener('click', function(){
    if(user_id.value === admin_id && user_password.value === admin_password){
        alert('login successful');
        window.location.href = './HomePage/home.html';
    }
    else{
        alert('account does not exist');
    }
});