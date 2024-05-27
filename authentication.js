document.addEventListener('DOMContentLoaded', function() {
    // user registration
    const registerForm = document.getElementById('register-form');
    const registerError = document.getElementById('error');
    const registerSuccess = document.getElementById('success');

    if (registerForm) {
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            registerError.textContent = 'Passwords do not match';

            setTimeout(()=>{
            registerError.textContent = '';
            }, 5000)
            return;
        }

        const data = {
            name: name,
            email: email,
            phone: phone,
            password: password
        };

        fetch('http://localhost:8000/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            registerSuccess.textContent="Account Created Successfully. Redirecting to Dashboard..."
            setTimeout(()=>{
                registerSuccess.textContent = '';
            }, 5000)
            registerForm.reset();
            return response.json()
        }).catch((error) => {
            registerError.textContent = 'Error when Creating Your Account. Try Again';
            setTimeout(()=>{
            registerError.textContent = '';
            window.location.href = '/login.html';
            }, 5000)
            console.error('Error:', error);
        });
    });
    }

    // user login
    const loginForm = document.getElementById('login-form');
    const loginError = document.getElementById('login-error');
    const loginSuccess = document.getElementById('login-success');

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            const data = {
                email: email,
                password: password
            };

            fetch('http://localhost:8000/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) 
            })
            .then(response => {
                if (!response.ok) { 
                // if response is 500 that is incorrect credentials
                    if (response.status === 500) {
                        throw new Error("Invalid Login credentials")
                    }else{
                        throw new Error('Network response was not ok');
                    }
                }
                // if login is successful
                return response.json()
            })
            .then(data => {
                // set items to the cookie storage
                 sessionStorage.setItem('user', JSON.stringify(data));
                 loginSuccess.textContent="Login Successful. Redirecting to Dashboard..."
                 setTimeout(()=>{
                     loginSuccess.textContent = '';
                     window.location.href = '/client_dashboard.html';
                 }, 5000)
            })
            .catch((error) => {
                loginError.textContent = error;
                setTimeout(()=>{
                loginError.textContent = '';
                }, 5000)
                console.error('Error:', error);
            });
        });
    }
});
