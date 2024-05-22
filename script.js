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

document.getElementById('loginBtn').addEventListener('click', function() {
    toggleForm('loginForm');
});

document.getElementById('registerBtn').addEventListener('click', function() {
    toggleForm('registerForm');
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function() {
        const form = this.parentElement;
        form.style.display = 'none';
        form.classList.remove('active');
    });
});

function validateForm(form) {
    let isValid = true;function toggleForm(formId) {
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
    
    document.getElementById('loginBtn').addEventListener('click', function() {
        toggleForm('loginForm');
    });
    
    document.getElementById('registerBtn').addEventListener('click', function() {
        toggleForm('registerForm');
    });
    
    document.querySelectorAll('.close-btn').forEach(button => {
        button.addEventListener('click', function() {
            const form = this.parentElement;
            form.style.display = 'none';
            form.classList.remove('active');function toggleForm(formId) {
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

document.getElementById('loginBtn').addEventListener('click', function() {
    toggleForm('loginForm');
});

document.getElementById('registerBtn').addEventListener('click', function() {
    toggleForm('registerForm');
});

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', function() {
        const form = this.parentElement;
        form.style.display = 'none';
        form.classList.remove('active');
    });
});

function validateForm(form) {
    let isValid = true;
    form.querySelectorAll('input').forEach(input => {
        if (!input.value.trim()) {
            alert('Please fill out all fields');
            isValid = false;
            return;
        }
        if (input.type === 'email' && !input.value.includes('@')) {
            alert('Please enter a valid email address');
            isValid = false;
            return;
        }
    });
    return isValid;
}

document.querySelectorAll('.form button[type="submit"]').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const form = this.closest('.form');
        if (validateForm(form)) {
            // Simulate form submission for demo purposes
            alert('Form submitted successfully!');
            form.style.display = 'none';
            form.classList.remove('active');
        }
    });
});

        });
    });
    
    function validateForm(form) {
        let isValid = true;
        form.querySelectorAll('input').forEach(input => {
            if (!input.value.trim()) {
                alert('Please fill out all fields');
                isValid = false;
                return;
            }
            if (input.type === 'email' && !input.value.includes('@')) {
                alert('Please enter a valid email address');
                isValid = false;
                return;
            }
        });
        return isValid;
    }
    
    document.querySelectorAll('.form button[type="submit"]').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const form = this.closest('.form');
            if (validateForm(form)) {
                // Simulate form submission for demo purposes
                alert('Form submitted successfully!');
                form.style.display = 'none';
                form.classList.remove('active');
            }
        });
    });
    
    form.querySelectorAll('input').forEach(input => {
        if (!input.value.trim()) {
            alert('Please fill out all fields');
            isValid = false;
            return;
        }
        if (input.type === 'email' && !input.value.includes('@')) {
            alert('Please enter a valid email address');
            isValid = false;
            return;
        }
    });
    return isValid;
}

document.querySelectorAll('.form button[type="submit"]').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const form = this.closest('.form');
        if (validateForm(form)) {
            // Simulate form submission for demo purposes
            alert('Form submitted successfully!');
            form.style.display = 'none';
            form.classList.remove('active');
        }
    });
});


