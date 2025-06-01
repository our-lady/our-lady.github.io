// This is a standalone script to handle language switching
// It doesn't depend on any other script

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Direct language switcher loaded');
    
    // Get language buttons
    const ptButton = document.getElementById('lang-pt');
    const enButton = document.getElementById('lang-en');
    
    if (!ptButton || !enButton) {
        console.error('Language buttons not found');
        return;
    }
    
    // Function to switch language
    function changeLanguage(lang) {
        console.log('Simple language change to:', lang);
        
        // Store language preference
        localStorage.setItem('ourLadyLanguage', lang);
        
        // Update active button
        if (lang === 'pt') {
            ptButton.classList.add('active');
            enButton.classList.remove('active');
        } else {
            enButton.classList.add('active');
            ptButton.classList.remove('active');
        }
        
        // Update document language
        document.documentElement.lang = lang;
        
        // Update gallery section
        updateGallery(lang);
        
        // Update section titles based on language
        updateSectionTitles(lang);
    }
    
    // Function to update gallery intro text
    function updateGallery(lang) {
        const galleryIntro = document.querySelector('.gallery-intro');
        if (!galleryIntro) return;
        
        const paragraphs = galleryIntro.querySelectorAll('p');
        if (paragraphs.length < 3) return;
        
        if (lang === 'pt') {
            // Portuguese
            paragraphs[0].textContent = "Sabemos tanto sobre Jesus após os 30 anos… e tão pouco sobre sua infância. Sempre me emocionei ao imaginar Maria, mãe amorosa, cuidando de Jesus nos primeiros anos de vida. E você, já parou para pensar nisso?";
            paragraphs[1].textContent = "Com a ajuda da Inteligência Artificial, consegui dar forma a algumas dessas imagens que há tanto tempo habitavam minha imaginação. Maria trocando as fraldas de Jesus, ajudando-o nos primeiros passos, oferecendo comida e água, cuidando de seus machucados, protegendo-o com ternura e amando-o de forma tão profunda que chega a ser difícil de descrever — e até mesmo de imaginar.";
            paragraphs[2].textContent = "Salve a Santa Mãe de Deus!";
        } else {
            // English
            paragraphs[0].textContent = "We know so much about Jesus after 30... and so little about his childhood. I have always been moved by imagining Mary, loving mother, taking care of Jesus in the first years of life. And you, have you ever stopped to think about it?";
            paragraphs[1].textContent = "With the help of Artificial Intelligence, I was able to give shape to some of these images that have long inhabited my imagination. Mary changing Jesus' diapers, helping him take his first steps, offering food and water, caring for his wounds, protecting him with tenderness, and loving him so deeply that it becomes difficult to describe — and even to imagine.";
            paragraphs[2].textContent = "Hail, Holy Mother of God!";
        }
    }
    
    // Function to update section titles
    function updateSectionTitles(lang) {
        const sectionTitles = {
            pt: {
                'prayers': 'Orações Marianas',
                'reflections': 'Reflexões & Meditações',
                'consecration': 'Consagração Mariana',
                'gallery': 'Galeria Devocional',
                'books': 'Livros, Hinos & Inspirações',
                'about': 'Sobre Este Espaço'
            },
            en: {
                'prayers': 'Marian Prayers',
                'reflections': 'Reflections & Meditations',
                'consecration': 'Marian Consecration',
                'gallery': 'Devotional Gallery',
                'books': 'Books, Hymns & Inspirations',
                'about': 'About This Space'
            }
        };
        
        // Update all section titles
        document.querySelectorAll('.section-title').forEach(title => {
            const sectionId = title.closest('section').id;
            if (sectionTitles[lang][sectionId]) {
                title.textContent = sectionTitles[lang][sectionId];
            }
        });
        
        // Special case for books section which doesn't have an ID
        const booksSection = document.querySelector('.books-section .section-title');
        if (booksSection) {
            booksSection.textContent = sectionTitles[lang]['books'];
        }
    }
    
    // Add click handlers
    ptButton.addEventListener('click', function() {
        changeLanguage('pt');
    });
    
    enButton.addEventListener('click', function() {
        changeLanguage('en');
    });
    
    // Initialize with saved language
    const savedLang = localStorage.getItem('ourLadyLanguage') || 'en';
    changeLanguage(savedLang);
});
