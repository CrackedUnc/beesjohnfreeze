document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('funnyButton');
    const result = document.getElementById('result');

    button.addEventListener('click', () => {
        result.classList.remove('hidden');
        button.classList.add('hidden');
    });
});