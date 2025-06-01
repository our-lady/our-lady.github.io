// Test script to verify language system is working
console.log('Testing language system...');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, checking language buttons...');
    
    const enBtn = document.getElementById('lang-en');
    const ptBtn = document.getElementById('lang-pt');
    
    console.log('EN button:', enBtn);
    console.log('PT button:', ptBtn);
    
    if (enBtn && ptBtn) {
        console.log('Both buttons found!');
        console.log('EN button classes:', enBtn.className);
        console.log('PT button classes:', ptBtn.className);
    } else {
        console.error('Language buttons not found!');
    }
    
    // Test local storage
    const storedLang = localStorage.getItem('ourLadyLanguage');
    console.log('Stored language:', storedLang);
    
    // Test gallery intro
    const galleryIntro = document.querySelector('.gallery-intro');
    console.log('Gallery intro found:', !!galleryIntro);
    
    if (galleryIntro) {
        const paragraphs = galleryIntro.querySelectorAll('p');
        console.log('Gallery paragraphs count:', paragraphs.length);
        console.log('First paragraph text:', paragraphs[0]?.textContent.substring(0, 50) + '...');
    }
});
