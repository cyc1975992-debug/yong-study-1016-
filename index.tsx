/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.getElementById('title');
    const typingCursor = document.getElementById('typing-cursor');
    const catElement = document.getElementById('cat');
    const finalPrompt = document.getElementById('final-prompt');

    if (!titleElement || !typingCursor || !catElement || !finalPrompt) {
        console.error("Required elements not found in the DOM.");
        return;
    }

    const textToType = "어서오시게 닝겐 냥해커월드다!!";
    let index = 0;
    const typingSpeed = 150; // milliseconds

    function typeWriter() {
        if (index < textToType.length) {
            titleElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // Typing finished
            typingCursor.classList.add('hidden'); // Hide the typing cursor
            
            // Show the cat and the new prompt line
            catElement.classList.remove('hidden');
            finalPrompt.classList.remove('hidden');
        }
    }

    typeWriter();
});
