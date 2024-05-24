function generateUserId() {
    return 'user_' + Date.now();
}

function toggleForm(formId) {
    const form = document.getElementById(formId);
    const otherFormId = formId === 'loginForm' ? 'registerForm' : 'loginForm';
    const otherForm = document.getElementById(otherFormId);

    if (form && otherForm) {
        if (form.style.display === 'none' || form.style.display === '') {
            form.style.display = 'flex';
            setTimeout(() => form.classList.add('active'), 10);
            otherForm.style.display = 'none';
            otherForm.classList.remove('active');
        } else {
            form.style.display = 'none';
            form.classList.remove('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    displayNavButtons();

    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            toggleForm('loginForm');
        });
    }

    if (registerBtn) {
        registerBtn.addEventListener('click', function () {
            toggleForm('registerForm');
        });
    }

    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', function () {
            const form = this.parentElement;
            form.style.display = 'none';
            form.classList.remove('active');
        });
    });

    const loginForm = document.querySelector('#loginForm form');
    const registerForm = document.querySelector('#registerForm form');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
});

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password');
    }
}

function handleRegister(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(u => u.email === email);

    if (userExists) {
        alert('User already exists');
    } else {
        const userId = generateUserId();
        users.push({ id: userId, name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        toggleForm('loginForm');
    }
}

function displayNavButtons() {
    const navButtons = document.getElementById('navButtons');

    if (!navButtons) {
        console.error('navButtons element not found');
        return;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        navButtons.innerHTML = `
            <span>Welcome, ${currentUser.name}</span>
            <button onclick="handleSignOut()" class="nav-button">Sign Out</button>
        `;
    } else {
        navButtons.innerHTML = `
            <a href="#" id="loginBtn"><button class="nav-button">Login</button></a>
            <a href="#" id="registerBtn"><button class="nav-button">Register</button></a>
        `;

        // Add event listeners for the dynamically added buttons
        document.getElementById('loginBtn').addEventListener('click', function () {
            toggleForm('loginForm');
        });
        document.getElementById('registerBtn').addEventListener('click', function () {
            toggleForm('registerForm');
        });
    }
    console.log('Nav buttons updated');
}

function handleSignOut() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

function checkAuthentication() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        window.location.href = 'login.html';
    }
}