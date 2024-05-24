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




function addPlant() {
    const plantName = document.getElementById('newPlantName').value.trim();
    if (plantName === '') {
        alert('Please enter a plant name');
        return;
    }

    const plantContainer = document.getElementById('plantContainer');
    const plantBox = document.createElement('div');
    plantBox.className = 'plant-box';

    const plantButton = document.createElement('button');
    plantButton.textContent = plantName;
    plantButton.style.backgroundColor = '#4CAF50'; // Set background color
    plantButton.style.color = 'white'; // Set text color
    plantButton.style.border = 'none'; // Remove border
    plantButton.style.cursor = 'pointer'; // Add pointer cursor
    plantButton.style.padding = '5px 10px'; // Add padding
    plantButton.style.transition = 'background-color 0.3s'; // Add transition
    plantButton.onclick = () => {
        window.location.href = `plant-details.html?name=${encodeURIComponent(plantName)}`;
    };

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.style.backgroundColor = '#f44336'; // Set background color
    removeButton.style.color = 'white'; // Set text color
    removeButton.style.border = 'none'; // Remove border
    removeButton.style.cursor = 'pointer'; // Add pointer cursor
    removeButton.style.padding = '5px 10px'; // Add padding
    removeButton.style.transition = 'background-color 0.3s'; // Add transition
    removeButton.onclick = () => {
        plantContainer.removeChild(plantBox);
    };

    plantBox.appendChild(plantButton);
    plantBox.appendChild(removeButton);
    plantContainer.appendChild(plantBox);

    document.getElementById('newPlantName').value = '';
}
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const plantName = urlParams.get('name');
    
    if (plantName) {
        const plantNameContainer = document.getElementById('plantNameContainer');
        plantNameContainer.textContent = `Plant Name: ${plantName}`;
    } else {
        // Handle the case where no plant name is found in the URL parameters
        alert('No plant name specified in the URL');
    }
});
