const { Json } = require("sequelize/types/lib/utils");

async function signUp(event) {
    event.preventDefault();

    const username = document.querySelector('').value.trim();
    const email = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log('done')
        } else {
            alert(response.statusText);
        }
    }
}

async function loginHandler(event) {
    event.preventDefault();

    const email = document.querySelector('').value.trim();
    const password = document.querySelector('').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('').addEventListener('submit', signUp);
document.querySelector('').addEventListener('submit', loginHandler);