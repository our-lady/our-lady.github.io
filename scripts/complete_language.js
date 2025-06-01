// Complete Language System for Our Lady Website
// This file handles all language switching functionality

(function() {
    'use strict';
    
    // Language content database
    const translations = {
        en: {
            // Navigation
            nav: {
                home: "Home",
                prayers: "Prayers",
                reflections: "Reflections",
                consecration: "Consecration",
                gallery: "Gallery",
                about: "About"
            },
            
            // Hero Section
            hero: {
                title: "Totus Tuus, Maria",
                subtitle: "My Mother, take me entirely",
                welcome: "This space was born from love for the Mother of God. Welcome to walk with Her in faith and devotion.",
                buttons: {
                    prayers: "Prayers",
                    reflections: "Reflections",
                    consecration: "Consecration"
                }
            },
            
            // Section Titles
            sections: {
                prayers: "Marian Prayers",
                reflections: "Reflections & Meditations",
                consecration: "Marian Consecration",
                gallery: "Devotional Gallery",
                books: "Books, Hymns & Inspirations",
                about: "About This Space"
            },
            
            // Gallery
            gallery: {
                intro: [
                    "We know so much about Jesus after 30... and so little about his childhood. I have always been moved by imagining Mary, loving mother, taking care of Jesus in the first years of life. And you, have you ever stopped to think about it?",
                    "With the help of Artificial Intelligence, I was able to give shape to some of these images that have long inhabited my imagination. Mary changing Jesus' diapers, helping him take his first steps, offering food and water, caring for his wounds, protecting him with tenderness, and loving him so deeply that it becomes difficult to describe — and even to imagine.",
                    "Hail, Holy Mother of God!"
                ]
            },
            
            // Prayer Categories
            prayerCategories: {
                daily: "Daily Prayers",
                consecrations: "Consecrations",
                litanies: "Litanies"
            },
            
            // Prayer Items
            prayers: {
                angelus: {
                    title: "The Angelus",
                    description: "The Angel of the Lord declared unto Mary...",
                    button: "Read Prayer"
                },
                rosary: {
                    title: "Holy Rosary",
                    description: "The most beloved prayer to Our Lady...",
                    button: "Read Prayer"
                },
                regina: {
                    title: "Regina Caeli",
                    description: "Queen of Heaven, rejoice...",
                    button: "Read Prayer"
                },
                montfort: {
                    title: "St. Louis de Montfort",
                    description: "True Devotion to Mary...",
                    button: "Read Prayer"
                },
                daily: {
                    title: "Daily Simple Consecration",
                    description: "A daily offering to Our Lady...",
                    button: "Read Prayer"
                },
                loreto: {
                    title: "Litany of Loreto",
                    description: "Lord, have mercy. Christ, have mercy...",
                    button: "Read Prayer"
                }
            },
            
            // Reflections
            reflections: {
                joyful: {
                    title: "The Joyful Mysteries",
                    excerpt: "Meditations on the Annunciation, Visitation, Nativity, Presentation, and Finding in the Temple...",
                    button: "Read More"
                },
                fiat: {
                    title: "Mary's Fiat",
                    excerpt: "On the perfect \"Yes\" of Our Lady and what it means for our spiritual journey...",
                    button: "Read More"
                },
                sorrowful: {
                    title: "The Sorrowful Mysteries",
                    excerpt: "Meditations on the Passion of Christ and Mary's compassion during His suffering...",
                    button: "Read More"
                },
                saints: {
                    title: "Saints on Mary",
                    excerpt: "Words from John Paul II, St. Louis de Montfort, St. Padre Pio and other Marian saints...",
                    button: "Read More"
                }
            },
            
            // Luther Quote
            lutherQuote: {
                text: "She, the Lady who is above heaven and earth, must forget all her goods, have a heart so humble that she would not be ashamed to wash clothes, prepare a bath for John the Baptist, like any servant in Elizabeth's room. Such humility! It would have been more just to prepare a carriage drawn by 4,000 horses and pray and sing before her carriage: 'Behold the woman raised above all women; above the entire human race.' But no! Mary made the long journey on foot and she was already the mother of God! It would have been more reasonable for all the hills to jump and dance, preceding her.",
                attribution: "(Luther, cited in \"Na Escola da Oração\" p. 178)"
            },
            
            // Consecration
            consecration: {
                title: "Marian Consecration",
                explanation: {
                    title: "What is Total Consecration to Mary?",
                    p1: "Total consecration to Mary is a complete gift of oneself to Jesus through Mary. It is a spiritual way of life based on the words of Jesus on the Cross: \"Behold your Mother\" (John 19:27).",
                    p2: "Through this consecration, we entrust everything to Mary - our prayers, works, joys, and sufferings - so that she may present them to Jesus with her maternal love and intercession."
                },
                preparation: {
                    title: "33-Day Preparation",
                    step1: {
                        title: "Knowledge of Self (12 days)",
                        description: "Understand your human nature and need for grace"
                    },
                    step2: {
                        title: "Knowledge of Mary (7 days)",
                        description: "Learn about Our Lady's virtues and privileges"
                    },
                    step3: {
                        title: "Knowledge of Jesus (7 days)",
                        description: "Deepen your relationship with Christ"
                    },
                    step4: {
                        title: "Living the Consecration (7 days)",
                        description: "Prepare for the act of consecration"
                    }
                }
            },
            
            // About Section
            about: {
                p1: "This website was created as a labor of love and devotion to Our Blessed Mother Mary. It serves as a peaceful sanctuary for those seeking to deepen their relationship with Mary and, through her, with Jesus Christ.",
                p2: "I am not a theologian. I am simply a child of the Mother, called to share the beauty and peace that comes from Marian devotion. This space is meant to be a place of welcome, comfort, and spiritual growth.",
                purpose: "<strong>Purpose:</strong> To create a space of love, welcome, and Marian spirituality where hearts can find rest and souls can draw closer to Heaven through Mary's maternal intercession."
            },
            
            // Books Section
            books: {
                recommended: "Recommended Reading",
                hymns: "Marian Hymns",
                items: {
                    montfort: "\"True Devotion to Mary\" - St. Louis de Montfort",
                    alphonsus: "\"The Glories of Mary\" - St. Alphonsus Liguori",
                    secret: "\"The Secret of Mary\" - St. Louis de Montfort",
                    johnpaul: "\"Mother of the Redeemer\" - Pope John Paul II",
                    avemaria: "\"Ave Maria\" - Traditional",
                    immaculate: "\"Immaculate Mary\" - Lourdes Hymn",
                    salve: "\"Hail Holy Queen\" - Salve Regina",
                    didyouknow: "\"Mary, Did You Know?\" - Modern"
                }
            },
            
            // Footer
            footer: {
                prayer: "\"Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.\"",
                copyright: "© 2025 Our Lady - A Devotional Space. Created with love and devotion."
            }
        },
        
        pt: {
            // Navigation
            nav: {
                home: "Início",
                prayers: "Orações",
                reflections: "Reflexões",
                consecration: "Consagração",
                gallery: "Galeria",
                about: "Sobre"
            },
            
            // Hero Section
            hero: {
                title: "Totus Tuus, Maria",
                subtitle: "Minha Mãe, toma-me por inteiro",
                welcome: "Este espaço nasceu do amor pela Mãe de Deus. Bem-vindo a caminhar com Ela na fé e devoção.",
                buttons: {
                    prayers: "Orações",
                    reflections: "Reflexões",
                    consecration: "Consagração"
                }
            },
            
            // Section Titles
            sections: {
                prayers: "Orações Marianas",
                reflections: "Reflexões & Meditações",
                consecration: "Consagração Mariana",
                gallery: "Galeria Devocional",
                books: "Livros, Hinos & Inspirações",
                about: "Sobre Este Espaço"
            },
            
            // Gallery
            gallery: {
                intro: [
                    "Sabemos tanto sobre Jesus após os 30 anos… e tão pouco sobre sua infância. Sempre me emocionei ao imaginar Maria, mãe amorosa, cuidando de Jesus nos primeiros anos de vida. E você, já parou para pensar nisso?",
                    "Com a ajuda da Inteligência Artificial, consegui dar forma a algumas dessas imagens que há tanto tempo habitavam minha imaginação. Maria trocando as fraldas de Jesus, ajudando-o nos primeiros passos, oferecendo comida e água, cuidando de seus machucados, protegendo-o com ternura e amando-o de forma tão profunda que chega a ser difícil de descrever — e até mesmo de imaginar.",
                    "Salve a Santa Mãe de Deus!"
                ]
            },
            
            // Prayer Categories
            prayerCategories: {
                daily: "Orações Diárias",
                consecrations: "Consagrações",
                litanies: "Ladainhas"
            },
            
            // Prayer Items
            prayers: {
                angelus: {
                    title: "Angelus",
                    description: "O Anjo do Senhor anunciou a Maria...",
                    button: "Ler Oração"
                },
                rosary: {
                    title: "Santo Rosário",
                    description: "A mais amada oração a Nossa Senhora...",
                    button: "Ler Oração"
                },
                regina: {
                    title: "Regina Caeli",
                    description: "Rainha do Céu, alegra-te...",
                    button: "Ler Oração"
                },
                montfort: {
                    title: "São Luís de Montfort",
                    description: "Verdadeira Devoção a Maria...",
                    button: "Ler Oração"
                },
                daily: {
                    title: "Consagração Diária Simples",
                    description: "Uma oferenda diária a Nossa Senhora...",
                    button: "Ler Oração"
                },
                loreto: {
                    title: "Ladainha de Loreto",
                    description: "Senhor, tende piedade. Cristo, tende piedade...",
                    button: "Ler Oração"
                }
            },
            
            // Reflections
            reflections: {
                joyful: {
                    title: "Os Mistérios Gozosos",
                    excerpt: "Meditações sobre a Anunciação, Visitação, Natividade, Apresentação e Encontro no Templo...",
                    button: "Ler Mais"
                },
                fiat: {
                    title: "O Fiat de Maria",
                    excerpt: "Sobre o perfeito \"Sim\" de Nossa Senhora e o que significa para nossa jornada espiritual...",
                    button: "Ler Mais"
                },
                sorrowful: {
                    title: "Os Mistérios Dolorosos",
                    excerpt: "Meditações sobre a Paixão de Cristo e a compaixão de Maria durante Seu sofrimento...",
                    button: "Ler Mais"
                },
                saints: {
                    title: "Santos sobre Maria",
                    excerpt: "Palavras de João Paulo II, São Luís de Montfort, São Padre Pio e outros santos marianos...",
                    button: "Ler Mais"
                }
            },
            
            // Luther Quote
            lutherQuote: {
                text: "Ela, a Senhora que está acima do céu e da terra, deve-se esquecer de todos os seus bens, ter um coração tão humilde que não lhe envergonhe lavar as roupas, preparar um banho para João Batista, como qualquer doméstica no quarto de Isabel. Quanta humildade! Teria sido mais justo preparar uma carruagem puxada por 4.000 cavalos e rezar e cantar à frente de sua carruagem: \"Eis que passa a mulher erguida acima de todas as mulheres; acima do gênero humano inteiro.\" Mas, não! Maria fez a pé o longo trajeto e ela já era a mãe de Deus! Teria sido mais razoável que todas as colinas saltassem e dançassem, precedendo-a.",
                attribution: "(Lutero, citado em \"Na Escola da Oração\" Pág. 178.)"
            },
            
            // Consecration
            consecration: {
                title: "Consagração Mariana",
                explanation: {
                    title: "O que é a Consagração Total a Maria?",
                    p1: "A consagração total a Maria é uma doação completa de si mesmo a Jesus através de Maria. É um modo de vida espiritual baseado nas palavras de Jesus na Cruz: \"Eis a tua Mãe\" (João 19,27).",
                    p2: "Através desta consagração, confiamos tudo a Maria - nossas orações, obras, alegrias e sofrimentos - para que ela os apresente a Jesus com seu amor maternal e intercessão."
                },
                preparation: {
                    title: "Preparação de 33 Dias",
                    step1: {
                        title: "Conhecimento de Si Mesmo (12 dias)",
                        description: "Compreenda sua natureza humana e necessidade da graça"
                    },
                    step2: {
                        title: "Conhecimento de Maria (7 dias)",
                        description: "Aprenda sobre as virtudes e privilégios de Nossa Senhora"
                    },
                    step3: {
                        title: "Conhecimento de Jesus (7 dias)",
                        description: "Aprofunde seu relacionamento com Cristo"
                    },
                    step4: {
                        title: "Vivendo a Consagração (7 dias)",
                        description: "Prepare-se para o ato de consagração"
                    }
                }
            },
            
            // About Section
            about: {
                p1: "Este website foi criado como trabalho de amor e devoção à Nossa Bendita Mãe Maria. Serve como santuário pacífico para aqueles que buscam aprofundar seu relacionamento com Maria e, através dela, com Jesus Cristo.",
                p2: "Não sou teólogo. Sou simplesmente uma criança da Mãe, chamado a compartilhar a beleza e paz que vem da devoção mariana. Este espaço pretende ser um lugar de acolhimento, conforto e crescimento espiritual.",
                purpose: "<strong>Propósito:</strong> Criar um espaço de amor, acolhimento e espiritualidade mariana onde corações possam encontrar descanso e almas possam se aproximar do Céu através da intercessão maternal de Maria."
            },
            
            // Books Section
            books: {
                recommended: "Leituras Recomendadas",
                hymns: "Hinos Marianos",
                items: {
                    montfort: "\"Verdadeira Devoção a Maria\" - São Luís de Montfort",
                    alphonsus: "\"As Glórias de Maria\" - Santo Afonso de Ligório",
                    secret: "\"O Segredo de Maria\" - São Luís de Montfort",
                    johnpaul: "\"Mãe do Redentor\" - Papa João Paulo II",
                    avemaria: "\"Ave Maria\" - Tradicional",
                    immaculate: "\"Imaculada Maria\" - Hino de Lourdes",
                    salve: "\"Salve Rainha\" - Salve Regina",
                    didyouknow: "\"Maria, Você Sabia?\" - Moderno"
                }
            },
            
            // Footer
            footer: {
                prayer: "\"Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém.\"",
                copyright: "© 2025 Nossa Senhora - Um Espaço Devocional. Criado com amor e devoção."
            }
        }
    };
    
    // Current language
    let currentLang = 'en';
    
    // Initialize language system
    function initLanguageSystem() {
        console.log('Complete language system initializing...');
        
        // Check URL parameters first, then localStorage, then default to English
        const urlParams = new URLSearchParams(window.location.search);
        const urlLang = urlParams.get('lang');
        currentLang = urlLang || localStorage.getItem('ourLadyLanguage') || 'en';
        
        console.log('Language detection:', { urlLang, localStorage: localStorage.getItem('ourLadyLanguage'), currentLang });
        
        // Set up event listeners
        setupEventListeners();
        
        // Apply initial language
        switchLanguage(currentLang);
    }
    
    // Set up event listeners for language buttons
    function setupEventListeners() {
        const enButton = document.getElementById('lang-en');
        const ptButton = document.getElementById('lang-pt');
        
        console.log('Setting up event listeners...', { enButton: !!enButton, ptButton: !!ptButton });
        
        if (enButton) {
            // Remove any existing listeners
            enButton.removeEventListener('click', handleEnglishClick);
            enButton.addEventListener('click', handleEnglishClick);
        }
        
        if (ptButton) {
            // Remove any existing listeners
            ptButton.removeEventListener('click', handlePortugueseClick);
            ptButton.addEventListener('click', handlePortugueseClick);
        }
    }
    
    // Separate handler functions to prevent conflicts
    function handleEnglishClick(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('English button clicked');
        switchLanguage('en');
    }
    
    function handlePortugueseClick(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Portuguese button clicked');
        switchLanguage('pt');
    }
    
    // Main language switching function
    function switchLanguage(lang) {
        console.log('Switching to language:', lang);
        
        currentLang = lang;
        localStorage.setItem('ourLadyLanguage', lang);
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Update button states
        updateButtonStates(lang);
        
        // Update all content
        updateContent(lang);
    }
    
    // Update language button states
    function updateButtonStates(lang) {
        const enButton = document.getElementById('lang-en');
        const ptButton = document.getElementById('lang-pt');
        
        console.log('Updating button states to:', lang);
        
        if (enButton && ptButton) {
            // Force remove active class from both buttons
            enButton.classList.remove('active');
            ptButton.classList.remove('active');
            
            // Wait a bit then add active class to selected language
            setTimeout(() => {
                if (lang === 'en') {
                    enButton.classList.add('active');
                    console.log('EN button activated');
                } else if (lang === 'pt') {
                    ptButton.classList.add('active');
                    console.log('PT button activated');
                }
            }, 10);
        } else {
            console.error('Language buttons not found for state update');
        }
    }
    
    // Update all page content
    function updateContent(lang) {
        const t = translations[lang];
        
        updateNavigation(t.nav);
        updateHeroSection(t.hero);
        updateSectionTitles(t.sections);
        updatePrayersSection(t);
        updateReflectionsSection(t.reflections);
        updateLutherQuote(t.lutherQuote);
        updateConsecrationSection(t.consecration);
        updateGallerySection(t.gallery);
        updateBooksSection(t.books);
        updateAboutSection(t.about);
        updateFooter(t.footer);
    }
    
    // Update navigation
    function updateNavigation(nav) {
        const navLinks = {
            'home': document.querySelector('a[href="#home"]'),
            'prayers': document.querySelector('a[href="#prayers"]'),
            'reflections': document.querySelector('a[href="#reflections"]'),
            'consecration': document.querySelector('a[href="#consecration"]'),
            'gallery': document.querySelector('a[href="#gallery"]'),
            'about': document.querySelector('a[href="#about"]')
        };
        
        Object.keys(navLinks).forEach(key => {
            if (navLinks[key] && nav[key]) {
                navLinks[key].textContent = nav[key];
            }
        });
    }
    
    // Update hero section
    function updateHeroSection(hero) {
        const title = document.querySelector('.hero-title');
        const subtitle = document.querySelector('.hero-subtitle');
        const welcome = document.querySelector('.welcome-text');
        
        if (title) title.textContent = hero.title;
        if (subtitle) subtitle.textContent = hero.subtitle;
        if (welcome) welcome.textContent = hero.welcome;
        
        // Update quick access buttons
        const prayersBtn = document.querySelector('.quick-access a[href="#prayers"]');
        const reflectionsBtn = document.querySelector('.quick-access a[href="#reflections"]');
        const consecrationBtn = document.querySelector('.quick-access a[href="#consecration"]');
        
        if (prayersBtn) {
            const icon = prayersBtn.querySelector('i');
            prayersBtn.innerHTML = '';
            if (icon) prayersBtn.appendChild(icon);
            prayersBtn.appendChild(document.createTextNode(' ' + hero.buttons.prayers));
        }
        
        if (reflectionsBtn) {
            const icon = reflectionsBtn.querySelector('i');
            reflectionsBtn.innerHTML = '';
            if (icon) reflectionsBtn.appendChild(icon);
            reflectionsBtn.appendChild(document.createTextNode(' ' + hero.buttons.reflections));
        }
        
        if (consecrationBtn) {
            const icon = consecrationBtn.querySelector('i');
            consecrationBtn.innerHTML = '';
            if (icon) consecrationBtn.appendChild(icon);
            consecrationBtn.appendChild(document.createTextNode(' ' + hero.buttons.consecration));
        }
    }
    
    // Update section titles
    function updateSectionTitles(sections) {
        const sectionMap = {
            'prayers': document.querySelector('#prayers .section-title'),
            'reflections': document.querySelector('#reflections .section-title'),
            'consecration': document.querySelector('#consecration .section-title'),
            'gallery': document.querySelector('#gallery .section-title'),
            'about': document.querySelector('#about .section-title')
        };
        
        Object.keys(sectionMap).forEach(key => {
            if (sectionMap[key] && sections[key]) {
                sectionMap[key].textContent = sections[key];
            }
        });
        
        // Books section (doesn't have ID)
        const booksTitle = document.querySelector('.books-section .section-title');
        if (booksTitle) {
            booksTitle.textContent = sections.books;
        }
    }
    
    // Update prayers section
    function updatePrayersSection(t) {
        // Update category titles
        const categories = document.querySelectorAll('.prayer-category h3');
        if (categories.length >= 3) {
            categories[0].innerHTML = '<i class="fas fa-sun"></i> ' + t.prayerCategories.daily;
            categories[1].innerHTML = '<i class="fas fa-crown"></i> ' + t.prayerCategories.consecrations;
            categories[2].innerHTML = '<i class="fas fa-music"></i> ' + t.prayerCategories.litanies;
        }
        
        // Update prayer items
        const prayerItems = document.querySelectorAll('.prayer-item');
        const prayerKeys = ['angelus', 'rosary', 'regina', 'montfort', 'daily', 'loreto'];
        
        prayerItems.forEach((item, index) => {
            const key = prayerKeys[index];
            if (key && t.prayers[key]) {
                const title = item.querySelector('h4');
                const description = item.querySelector('p');
                const button = item.querySelector('.btn-small');
                
                if (title) title.textContent = t.prayers[key].title;
                if (description) description.textContent = t.prayers[key].description;
                if (button) button.textContent = t.prayers[key].button;
            }
        });
    }
    
    // Update reflections section
    function updateReflectionsSection(reflections) {
        const reflectionCards = document.querySelectorAll('.reflection-card');
        const reflectionKeys = ['joyful', 'fiat', 'sorrowful', 'saints'];
        
        reflectionCards.forEach((card, index) => {
            const key = reflectionKeys[index];
            if (key && reflections[key]) {
                const title = card.querySelector('h3');
                const excerpt = card.querySelector('.reflection-excerpt');
                const button = card.querySelector('.btn-read-more');
                
                if (title) title.textContent = reflections[key].title;
                if (excerpt) excerpt.textContent = reflections[key].excerpt;
                if (button) button.textContent = reflections[key].button;
            }
        });
    }
    
    // Update consecration section
    function updateConsecrationSection(consecration) {
        const explanationTitle = document.querySelector('.consecration-explanation h3');
        const explanationPs = document.querySelectorAll('.consecration-explanation p');
        
        if (explanationTitle) explanationTitle.textContent = consecration.explanation.title;
        if (explanationPs.length >= 2) {
            explanationPs[0].textContent = consecration.explanation.p1;
            explanationPs[1].textContent = consecration.explanation.p2;
        }
        
        const preparationTitle = document.querySelector('.preparation-steps h3');
        if (preparationTitle) preparationTitle.textContent = consecration.preparation.title;
        
        const steps = document.querySelectorAll('.step');
        const stepKeys = ['step1', 'step2', 'step3', 'step4'];
        
        steps.forEach((step, index) => {
            const key = stepKeys[index];
            if (key && consecration.preparation[key]) {
                const title = step.querySelector('h4');
                const description = step.querySelector('p');
                
                if (title) title.textContent = consecration.preparation[key].title;
                if (description) description.textContent = consecration.preparation[key].description;
            }
        });
    }
    
    // Update Luther quote section
    function updateLutherQuote(lutherQuote) {
        const quoteText = document.querySelector('.luther-quote');
        const attribution = document.querySelector('.quote-attribution');
        
        if (quoteText) quoteText.textContent = lutherQuote.text;
        if (attribution) attribution.textContent = lutherQuote.attribution;
    }
    
    // Update gallery section
    function updateGallerySection(gallery) {
        const galleryIntro = document.querySelector('.gallery-intro');
        if (galleryIntro) {
            const paragraphs = galleryIntro.querySelectorAll('p');
            if (paragraphs.length >= 3) {
                paragraphs[0].textContent = gallery.intro[0];
                paragraphs[1].textContent = gallery.intro[1];
                paragraphs[2].textContent = gallery.intro[2];
            }
        }
    }
    
    // Update books section
    function updateBooksSection(books) {
        const categories = document.querySelectorAll('.book-category h3');
        if (categories.length >= 2) {
            categories[0].textContent = books.recommended;
            categories[1].textContent = books.hymns;
        }
        
        const bookLists = document.querySelectorAll('.book-list');
        if (bookLists.length >= 2) {
            // Recommended books
            const recommendedItems = bookLists[0].querySelectorAll('li');
            const recommendedKeys = ['montfort', 'alphonsus', 'secret', 'johnpaul'];
            recommendedItems.forEach((item, index) => {
                const key = recommendedKeys[index];
                if (key && books.items[key]) {
                    item.textContent = books.items[key];
                }
            });
            
            // Hymns
            const hymnItems = bookLists[1].querySelectorAll('li');
            const hymnKeys = ['avemaria', 'immaculate', 'salve', 'didyouknow'];
            hymnItems.forEach((item, index) => {
                const key = hymnKeys[index];
                if (key && books.items[key]) {
                    item.textContent = books.items[key];
                }
            });
        }
    }
    
    // Update about section
    function updateAboutSection(about) {
        const aboutPs = document.querySelectorAll('.about-content p');
        if (aboutPs.length >= 3) {
            aboutPs[0].textContent = about.p1;
            aboutPs[1].textContent = about.p2;
            aboutPs[2].innerHTML = about.purpose;
        }
    }
    
    // Update footer
    function updateFooter(footer) {
        const footerPrayer = document.querySelector('.footer-prayer p em');
        const footerCopyright = document.querySelector('.footer-links p');
        
        if (footerPrayer) footerPrayer.textContent = footer.prayer;
        if (footerCopyright) footerCopyright.innerHTML = footer.copyright;
    }
    
    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLanguageSystem);
    } else {
        initLanguageSystem();
    }
    
})();
