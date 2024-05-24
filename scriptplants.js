function loadPlants() {
    const plants = JSON.parse(localStorage.getItem('plants')) || [];
    const plantContainer = document.getElementById('plantContainer');
    plantContainer.innerHTML = '';

    plants.forEach(plant => {
        const plantBox = document.createElement('div');
        plantBox.className = 'plant-box';

        const plantButton = document.createElement('button');
        plantButton.textContent = plant.name;
        plantButton.style.backgroundColor = '#4CAF50';
        plantButton.style.color = 'white';
        plantButton.style.border = 'none';
        plantButton.style.cursor = 'pointer';
        plantButton.style.padding = '5px 10px';
        plantButton.style.transition = 'background-color 0.3s';
        plantButton.onclick = () => {
            window.location.href = `plantdetails.html?name=${encodeURIComponent(plant.name)}`;
        };

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.style.backgroundColor = '#f44336';
        removeButton.style.color = 'white';
        removeButton.style.border = 'none';
        removeButton.style.cursor = 'pointer';
        removeButton.style.padding = '5px 10px';
        removeButton.style.transition = 'background-color 0.3s';
        removeButton.onclick = () => {
            removePlant(plant.name);
        };

        plantBox.appendChild(plantButton);
        plantBox.appendChild(removeButton);
        plantContainer.appendChild(plantBox);
    });
}

function addPlant() {
    const plantName = document.getElementById('newPlantName').value.trim();
    if (plantName === '') {
        alert('Please enter a plant name');
        return;
    }

    const plants = JSON.parse(localStorage.getItem('plants')) || [];
    plants.push({ name: plantName });
    localStorage.setItem('plants', JSON.stringify(plants));
    loadPlants();
    document.getElementById('newPlantName').value = '';
}

function removePlant(plantName) {
    let plants = JSON.parse(localStorage.getItem('plants')) || [];
    plants = plants.filter(plant => plant.name !== plantName);
    localStorage.setItem('plants', JSON.stringify(plants));
    loadPlants();
}

document.addEventListener('DOMContentLoaded', loadPlants);