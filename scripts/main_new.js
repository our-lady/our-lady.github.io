// Gallery intro translation function
function updateGalleryIntroTexts() {
    const lang = localStorage.getItem('ourLadyLanguage') || 'en';
    const galleryIntro = document.querySelector('.gallery-intro');
    const galleryTitle = document.querySelector('#gallery .section-title');
    
    console.log('Gallery translation called - Current language:', lang);
    
    // Update gallery title (for visual confirmation that language is changing)
    if (galleryTitle) {
        galleryTitle.textContent = lang === 'pt' ? 'Galeria Devocional' : 'Devotional Gallery';
    }
    
    if (!galleryIntro) {
        console.log('Gallery intro element not found!');
        return;
    }
    
    const paragraphs = galleryIntro.querySelectorAll('p');
    console.log('Gallery paragraphs found:', paragraphs.length);
    
    if (paragraphs.length < 3) {
        console.log('Not enough paragraphs found in gallery intro');
        return;
    }
    
    if (lang === 'pt') {
        // Portuguese text
        paragraphs[0].textContent = "Sabemos tanto sobre Jesus após os 30 anos… e tão pouco sobre sua infância. Sempre me emocionei ao imaginar Maria, mãe amorosa, cuidando de Jesus nos primeiros anos de vida. E você, já parou para pensar nisso?";
        paragraphs[1].textContent = "Com a ajuda da Inteligência Artificial, consegui dar forma a algumas dessas imagens que há tanto tempo habitavam minha imaginação. Maria trocando as fraldas de Jesus, ajudando-o nos primeiros passos, oferecendo comida e água, cuidando de seus machucados, protegendo-o com ternura e amando-o de forma tão profunda que chega a ser difícil de descrever — e até mesmo de imaginar.";
        paragraphs[2].textContent = "Salve a Santa Mãe de Deus!";
        console.log('Gallery text updated to Portuguese');
    } else if (lang === 'en') {
        // English translation
        paragraphs[0].textContent = "We know so much about Jesus after 30... and so little about his childhood. I have always been moved by imagining Mary, loving mother, taking care of Jesus in the first years of life. And you, have you ever stopped to think about it?";
        paragraphs[1].textContent = "With the help of Artificial Intelligence, I was able to give shape to some of these images that have long inhabited my imagination. Mary changing Jesus' diapers, helping him take his first steps, offering food and water, caring for his wounds, protecting him with tenderness, and loving him so deeply that it becomes difficult to describe — and even to imagine.";
        paragraphs[2].textContent = "Hail, Holy Mother of God!";
        console.log('Gallery text updated to English');
    }
}

// Export the function to make it available to main.js
window.updateGalleryIntroTexts = updateGalleryIntroTexts;

// Add additional event listeners for language buttons to ensure gallery translation happens
document.addEventListener('DOMContentLoaded', () => {
    console.log('main_new.js: DOM content loaded');
    
    // Call initially to set language on page load
    updateGalleryIntroTexts();
    
    // Re-attach event listeners to language buttons for extra safety
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            console.log('Language button clicked:', btn.getAttribute('data-lang'));
            // Get the language attribute
            const clickedLang = btn.getAttribute('data-lang');
            // Manually set localStorage to the selected language
            localStorage.setItem('ourLadyLanguage', clickedLang);
            // Update gallery text
            setTimeout(updateGalleryIntroTexts, 100); // Give time for main.js to update localStorage
        });
    });
});
