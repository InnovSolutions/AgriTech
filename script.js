function toggleForm(formId) {
    const form = document.getElementById(formId);
    const otherFormId = formId === 'loginForm' ? 'registerForm' : 'loginForm';
    const otherForm = document.getElementById(otherFormId);

    if (form.style.display === 'none') {
        form.style.display = 'flex';
        setTimeout(() => form.classList.add('active'), 10);
        otherForm.style.display = 'none';
        otherForm.classList.remove('active');
    } else {
        form.style.display = 'none';
        form.classList.remove('active');
    }
}

document.getElementById('loginBtn').addEventListener('click', function () {
    toggleForm('loginForm');
});

document.getElementById('registerBtn').addEventListener('click', function () {
    toggleForm('registerForm');
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function () {
        const form = this.parentElement;
        form.style.display = 'none';
        form.classList.remove('active');
    });
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
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        toggleForm('loginForm');
    }
}