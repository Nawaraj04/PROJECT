document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'admin' && password === 'password') 
    {
        window.location.href = 'select-semester.html'; 
    } 
    else 
    {
        alert('Incorrect username or password');
    }
}
);
