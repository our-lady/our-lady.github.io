// Direct language button fixes
document.addEventListener('DOMContentLoaded', function() {
    console.log('Language fix script loaded');
    
    // Create a direct click handler for the PT button
    const ptButton = document.getElementById('lang-pt');
    const enButton = document.getElementById('lang-en');
    
    if (ptButton) {
        ptButton.addEventListener('click', function(event) {
            console.log('PT button clicked directly');
            
            // Set the language in localStorage
            localStorage.setItem('ourLadyLanguage', 'pt');
            
            // Update active button styles
            ptButton.classList.add('active');
            enButton.classList.remove('active');
            
            // Set the document language
            document.documentElement.lang = 'pt';
            
            // Force update the content
            if (typeof updatePageContent === 'function') {
                updatePageContent();
            }
            
            // Force update gallery text
            if (typeof window.updateGalleryIntroTexts === 'function') {
                window.updateGalleryIntroTexts();
            }
            
            // Update links with language param
            if (typeof updateLanguageInLinks === 'function') {
                updateLanguageInLinks();
            }
        });
    } else {
        console.error('PT button not found');
    }
    
    // Also add a direct handler for EN button for consistency
    if (enButton) {
        enButton.addEventListener('click', function(event) {
            console.log('EN button clicked directly');
            
            // Set the language in localStorage
            localStorage.setItem('ourLadyLanguage', 'en');
            
            // Update active button styles
            enButton.classList.add('active');
            ptButton.classList.remove('active');
            
            // Set the document language
            document.documentElement.lang = 'en';
            
            // Force update the content
            if (typeof updatePageContent === 'function') {
                updatePageContent();
            }
            
            // Force update gallery text
            if (typeof window.updateGalleryIntroTexts === 'function') {
                window.updateGalleryIntroTexts();
            }
            
            // Update links with language param
            if (typeof updateLanguageInLinks === 'function') {
                updateLanguageInLinks();
            }
        });
    } else {
        console.error('EN button not found');
    }
});
