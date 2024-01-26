function backToMenu()
{
    window.location.href = '../index.html';
}

function goToSection(section)
{
    var targetElement = document.getElementById(section);

    if (targetElement) {
        // Scroll to the target element
        targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.error('Element with ID "' + targetElement + '" not found.');
    }
}

