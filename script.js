// Reference to the main section where we want to add/remove
const main = document.querySelector('main');

// Create a function that generates the text section
function createTextSection() {
    const section = document.createElement('section');
    section.id = 'text-section';
    const p = document.createElement('p');
    p.id = 'dynamic-text';
    p.textContent = "This is a placeholder text that will change dynamically.";
    section.appendChild(p);
    return section;
}

// Change the text content dynamically
document.getElementById('change-text-btn').addEventListener('click', function() {
    const dynamicText = document.getElementById('dynamic-text');
    if (dynamicText) {
        dynamicText.textContent = "The text has been changed dynamically!";
    } else {
        alert('The text section is missing!');
    }
});

// Toggle CSS styles via JavaScript
document.getElementById('toggle-style-btn').addEventListener('click', function() {
    const dynamicText = document.getElementById('dynamic-text');
    if (dynamicText) {
        dynamicText.classList.toggle('highlight-text');
    } else {
        alert('The text section is missing!');
    }
});

// Add or remove an element when a button is clicked
document.getElementById('remove-element-btn').addEventListener('click', function() {
    const textSection = document.getElementById('text-section');
    if (textSection) {
        textSection.remove();
        this.textContent = "Add Element"; // Change button text
    } else {
        const newSection = createTextSection();
        // Insert the new section before the buttons
        const buttonsSection = this.parentElement;
        main.insertBefore(newSection, buttonsSection);
        this.textContent = "Remove Element"; // Change button text back
    }
});