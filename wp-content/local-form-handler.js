document.addEventListener('submit', function (event) {
    // Check if the submit button or form is part of an elementor form or just any form
    const form = event.target.closest('form');
    if (form) {
        event.preventDefault();
        event.stopImmediatePropagation();

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log('--- Form Submission Captured Locally ---');
        console.log('Form Name:', form.name || 'Unnamed Form');
        console.log('Action:', form.action);
        printDataRecursively(data);
        console.log('---------------------------------------');

        alert('Form submission captured locally! Check the browser console (F12) to see the sent data.');
    }
}, true);

function printDataRecursively(data, indent = '') {
    for (const key in data) {
        if (typeof data[key] === 'object' && data[key] !== null) {
            console.log(`${indent}${key}:`);
            printDataRecursively(data[key], indent + '  ');
        } else {
            console.log(`${indent}${key}: ${data[key]}`);
        }
    }
}
