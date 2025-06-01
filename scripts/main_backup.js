
// Language System
let currentLanguage = localStorage.getItem('ourLadyLanguage') || 'en';

// Language Content Database
const languages = {
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
        // Sections
        sections: {
            prayers: "Marian Prayers",
            reflections: "Reflections & Meditations",
            consecration: "Marian Consecration",
            gallery: "Devotional Gallery",
            books: "Books, Hymns & Inspirations",
            about: "About This Space"
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
            subtitle: "Minha Mãe, toma-me inteiramente",
            welcome: "Este espaço nasceu do amor à Mãe de Deus. Seja bem-vindo(a) para caminhar com Ela na fé e devoção.",
            buttons: {
                prayers: "Orações",
                reflections: "Reflexões",
                consecration: "Consagração"
            }
        },
        // Sections
        sections: {
            prayers: "Orações Marianas",
            reflections: "Reflexões & Meditações", 
            consecration: "Consagração Mariana",
            gallery: "Galeria Devocional",
            books: "Livros, Hinos & Inspirações",
            about: "Sobre Este Espaço"
        }
    }
};

// Prayer content database with multilingual support
const prayers = {
    en: {
        angelus: {
            title: "The Angelus",
            content: `
                <div class="prayer-text">
                    <p><strong>℣.</strong> The Angel of the Lord declared unto Mary.</p>
                    <p><strong>℟.</strong> And she conceived of the Holy Spirit.</p>
                    <p class="prayer-indent"><em>Hail Mary, full of grace, the Lord is with thee. Blessed art thou amongst women, and blessed is the fruit of thy womb, Jesus. Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.</em></p>
                    
                    <p><strong>℣.</strong> Behold the handmaid of the Lord.</p>
                    <p><strong>℟.</strong> Be it done unto me according to thy word.</p>
                    <p class="prayer-indent"><em>Hail Mary, full of grace...</em></p>
                    
                    <p><strong>℣.</strong> And the Word was made Flesh.</p>
                    <p><strong>℟.</strong> And dwelt among us.</p>
                    <p class="prayer-indent"><em>Hail Mary, full of grace...</em></p>
                    
                    <p><strong>℣.</strong> Pray for us, O holy Mother of God.</p>
                    <p><strong>℟.</strong> That we may be made worthy of the promises of Christ.</p>
                    
                    <h4>Let us pray:</h4>
                    <p class="prayer-final">
                        Pour forth, we beseech Thee, O Lord, Thy grace into our hearts, 
                        that we to whom the Incarnation of Christ Thy Son was made known 
                        by the message of an Angel, may by His Passion and Cross be brought 
                        to the glory of His Resurrection. Through the same Christ Our Lord. 
                        <strong>Amen.</strong>
                    </p>
                </div>
            `
        },
    
    rosary: {
        title: "The Holy Rosary",
        content: `
            <div class="prayer-text">
                <h4>How to Pray the Rosary:</h4>
                
                <h5>Opening:</h5>
                <p>1. Make the Sign of the Cross</p>
                <p>2. Say the Apostles' Creed</p>
                <p>3. Say the Our Father</p>
                <p>4. Say three Hail Marys (for faith, hope, and charity)</p>
                <p>5. Say the Glory Be</p>
                
                <h5>For each decade:</h5>
                <p>1. Announce the Mystery</p>
                <p>2. Say the Our Father</p>
                <p>3. Say ten Hail Marys while meditating on the Mystery</p>
                <p>4. Say the Glory Be</p>
                <p>5. Say the Fatima Prayer (optional): "O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy."</p>
                
                <h5>Closing:</h5>
                <p>Say the Hail Holy Queen</p>
                
                <h4>The Joyful Mysteries (Monday & Saturday):</h4>
                <ol>
                    <li>The Annunciation</li>
                    <li>The Visitation</li>
                    <li>The Nativity</li>
                    <li>The Presentation in the Temple</li>
                    <li>The Finding in the Temple</li>
                </ol>
                
                <h4>The Sorrowful Mysteries (Tuesday & Friday):</h4>
                <ol>
                    <li>The Agony in the Garden</li>
                    <li>The Scourging at the Pillar</li>
                    <li>The Crowning with Thorns</li>
                    <li>The Carrying of the Cross</li>
                    <li>The Crucifixion</li>
                </ol>
                
                <h4>The Glorious Mysteries (Wednesday & Sunday):</h4>
                <ol>
                    <li>The Resurrection</li>
                    <li>The Ascension</li>
                    <li>The Descent of the Holy Spirit</li>
                    <li>The Assumption of Mary</li>
                    <li>The Coronation of Mary</li>
                </ol>
                
                <h4>The Luminous Mysteries (Thursday):</h4>
                <ol>
                    <li>The Baptism of Jesus</li>
                    <li>The Wedding at Cana</li>
                    <li>The Proclamation of the Kingdom</li>
                    <li>The Transfiguration</li>
                    <li>The Institution of the Eucharist</li>
                </ol>
                
                <div class="prayer-note">
                    <p><em>"The Rosary is the most excellent form of prayer and the most efficacious means of attaining eternal life." - Pope Pius IX</em></p>
                </div>
            </div>
        `
    },
    
    regina: {
        title: "Regina Caeli",
        content: `
            <div class="prayer-text">
                <p class="prayer-note"><em>Prayed during Easter Season instead of the Angelus</em></p>
                
                <p><strong>℣.</strong> Queen of Heaven, rejoice, alleluia.</p>
                <p><strong>℟.</strong> For He whom you did merit to bear, alleluia.</p>
                
                <p><strong>℣.</strong> Has risen, as he said, alleluia.</p>
                <p><strong>℟.</strong> Pray for us to God, alleluia.</p>
                
                <p><strong>℣.</strong> Rejoice and be glad, O Virgin Mary, alleluia.</p>
                <p><strong>℟.</strong> For the Lord has truly risen, alleluia.</p>
                
                <h4>Let us pray:</h4>
                <p class="prayer-final">
                    O God, who gave joy to the world through the resurrection of Thy Son, 
                    our Lord Jesus Christ, grant we beseech Thee, that through the 
                    intercession of the Virgin Mary, His Mother, we may obtain the joys 
                    of everlasting life. Through the same Christ our Lord. 
                    <strong>Amen.</strong>
                </p>
            </div>
        `
    },
    
    montfort: {
        title: "Consecration Prayer of St. Louis de Montfort",
        content: `
            <div class="prayer-text">
                <p class="prayer-intro">
                    <em>To be prayed after the 33-day preparation period, preferably on a Marian feast day.</em>
                </p>
                
                <p class="prayer-final">
                    I, (name), a faithless sinner, renew and ratify today in thy hands 
                    the vows of my Baptism; I renounce forever Satan, his pomps and works; 
                    and I give myself entirely to Jesus Christ, the Incarnate Wisdom, 
                    to carry my cross after Him all the days of my life, and to be more 
                    faithful to Him than I have ever been before.
                </p>
                
                <p class="prayer-final">
                    In the presence of all the heavenly court, I choose thee this day 
                    for my Mother and Mistress. I deliver and consecrate to thee, as thy 
                    slave, my body and soul, my goods, both interior and exterior, and 
                    even the value of all my good actions, past, present and future; 
                    leaving to thee the entire and full right of disposing of me, and 
                    all that belongs to me, without exception, according to thy good 
                    pleasure, for the greater glory of God, in time and in eternity.
                </p>
                
                <p class="prayer-final">
                    <strong>Amen.</strong>
                </p>
                
                <div class="prayer-note">
                    <p><em>"Through Mary, with Mary, in Mary, and for Mary" - St. Louis de Montfort</em></p>
                </div>
            </div>
        `
    },
    
    daily: {
        title: "Daily Simple Consecration",
        content: `
            <div class="prayer-text">
                <p class="prayer-intro">
                    <em>A simple daily offering to renew our consecration to Mary:</em>
                </p>
                
                <p class="prayer-final">
                    My Queen, my Mother, I offer myself entirely to thee. 
                    And to show my devotion to thee, I consecrate to thee 
                    this day, my eyes, my ears, my mouth, my heart, my whole being 
                    without reserve. Wherefore, good Mother, as I am thine own, 
                    keep me, guard me as thy property and possession. 
                    <strong>Amen.</strong>
                </p>
                
                <p class="prayer-center"><strong>or</strong></p>
                
                <p class="prayer-final">
                    O Mary, my Mother, into your hands I place my day. 
                    All that I do, think, and say, I offer to Jesus through you. 
                    Help me to love Him more perfectly and to serve Him more faithfully. 
                    <strong>Amen.</strong>
                </p>
                
                <div class="prayer-note">
                    <p><em>"It is through the Most Holy Virgin Mary that Jesus came into the world, and it is also through her that he must reign in the world." - St. Louis de Montfort</em></p>
                </div>
            </div>
        `
    },
    
    loreto: {
        title: "Litany of Loreto",
        content: `
            <div class="prayer-text">
                <p>Lord, have mercy on us.</p>
                <p>Christ, have mercy on us.</p>
                <p>Lord, have mercy on us.</p>
                <p>Christ, hear us.</p>
                <p>Christ, graciously hear us.</p>
                
                <p>God, the Father of Heaven, <strong>have mercy on us.</strong></p>
                <p>God the Son, Redeemer of the world, <strong>have mercy on us.</strong></p>
                <p>God, the Holy Spirit, <strong>have mercy on us.</strong></p>
                <p>Holy Trinity, one God, <strong>have mercy on us.</strong></p>
                
                <p>Holy Mary, <strong>pray for us.</strong></p>
                <p>Holy Mother of God, <strong>pray for us.</strong></p>
                <p>Holy Virgin of virgins, <strong>pray for us.</strong></p>
                <p>Mother of Christ, <strong>pray for us.</strong></p>
                <p>Mother of divine grace, <strong>pray for us.</strong></p>
                <p>Mother most pure, <strong>pray for us.</strong></p>
                <p>Mother most chaste, <strong>pray for us.</strong></p>
                <p>Mother inviolate, <strong>pray for us.</strong></p>
                <p>Mother undefiled, <strong>pray for us.</strong></p>
                <p>Mother most amiable, <strong>pray for us.</strong></p>
                <p>Mother most admirable, <strong>pray for us.</strong></p>
                <p>Mother of good counsel, <strong>pray for us.</strong></p>
                <p>Mother of our Creator, <strong>pray for us.</strong></p>
                <p>Mother of our Savior, <strong>pray for us.</strong></p>
                <p>Virgin most prudent, <strong>pray for us.</strong></p>
                <p>Virgin most venerable, <strong>pray for us.</strong></p>
                <p>Virgin most renowned, <strong>pray for us.</strong></p>
                <p>Virgin most powerful, <strong>pray for us.</strong></p>
                <p>Virgin most merciful, <strong>pray for us.</strong></p>
                <p>Virgin most faithful, <strong>pray for us.</strong></p>
                <p>Mirror of justice, <strong>pray for us.</strong></p>
                <p>Seat of wisdom, <strong>pray for us.</strong></p>
                <p>Cause of our joy, <strong>pray for us.</strong></p>
                <p>Spiritual vessel, <strong>pray for us.</strong></p>
                <p>Vessel of honor, <strong>pray for us.</strong></p>
                <p>Singular vessel of devotion, <strong>pray for us.</strong></p>
                <p>Mystical rose, <strong>pray for us.</strong></p>
                <p>Tower of David, <strong>pray for us.</strong></p>
                <p>Tower of ivory, <strong>pray for us.</strong></p>
                <p>House of gold, <strong>pray for us.</strong></p>
                <p>Ark of the covenant, <strong>pray for us.</strong></p>
                <p>Gate of heaven, <strong>pray for us.</strong></p>
                <p>Morning star, <strong>pray for us.</strong></p>
                <p>Health of the sick, <strong>pray for us.</strong></p>
                <p>Refuge of sinners, <strong>pray for us.</strong></p>
                <p>Comfort of the afflicted, <strong>pray for us.</strong></p>
                <p>Help of Christians, <strong>pray for us.</strong></p>
                <p>Queen of Angels, <strong>pray for us.</strong></p>
                <p>Queen of Patriarchs, <strong>pray for us.</strong></p>
                <p>Queen of Prophets, <strong>pray for us.</strong></p>
                <p>Queen of Apostles, <strong>pray for us.</strong></p>
                <p>Queen of Martyrs, <strong>pray for us.</strong></p>
                <p>Queen of Confessors, <strong>pray for us.</strong></p>
                <p>Queen of Virgins, <strong>pray for us.</strong></p>
                <p>Queen of all Saints, <strong>pray for us.</strong></p>
                <p>Queen conceived without original sin, <strong>pray for us.</strong></p>
                <p>Queen assumed into heaven, <strong>pray for us.</strong></p>
                <p>Queen of the most holy Rosary, <strong>pray for us.</strong></p>
                <p>Queen of families, <strong>pray for us.</strong></p>
                <p>Queen of peace, <strong>pray for us.</strong></p>
                
                <p>Lamb of God, who takes away the sins of the world, <strong>spare us, O Lord.</strong></p>
                <p>Lamb of God, who takes away the sins of the world, <strong>graciously hear us, O Lord.</strong></p>
                <p>Lamb of God, who takes away the sins of the world, <strong>have mercy on us.</strong></p>
                
                <p><strong>℣.</strong> Pray for us, O holy Mother of God.</p>
                <p><strong>℟.</strong> That we may be made worthy of the promises of Christ.</p>
                
                <h4>Let us pray:</h4>
                <p class="prayer-final">
                    Grant, we beseech thee, O Lord God, unto us thy servants, that we may 
                    rejoice in continual health of mind and body; and, by the glorious 
                    intercession of Blessed Mary ever Virgin, may be delivered from present 
                    sadness, and enter into the joy of thine eternal gladness. Through Christ 
                    our Lord. <strong>Amen.</strong>
                </p>
            </div>
        `
    }
};

// Reflection content database
const reflections = {
    joyful: {
        title: "The Joyful Mysteries",
        content: `
            <div class="reflection-text">
                <h4>Meditations on the Joyful Mysteries</h4>
                
                <h5>1. The Annunciation</h5>
                <p>
                    In this first joyful mystery, we contemplate Mary's perfect "yes" to God's plan. 
                    The Angel Gabriel appears to Mary, and she responds with complete trust: 
                    "Behold, I am the handmaid of the Lord; let it be done unto me according to your word."
                </p>
                <p>This mystery teaches us the beauty of surrender to God's will, even when we don't understand His plans.</p>
                <p><em>Fruit of the Mystery: Humility</em></p>
                
                <h5>2. The Visitation</h5>
                <p>
                    Mary, carrying Jesus in her womb, visits her cousin Elizabeth. 
                    At Mary's greeting, John the Baptist leaps in Elizabeth's womb, and Elizabeth 
                    proclaims Mary "blessed among women." Mary responds with the Magnificat, 
                    her canticle of praise.
                </p>
                <p>This mystery shows us how Mary brings Jesus to others through her loving service.</p>
                <p><em>Fruit of the Mystery: Love of Neighbor</em></p>
                
                <h5>3. The Nativity</h5>
                <p>
                    Jesus is born in Bethlehem. Mary gives birth to the Son of God in a humble stable, 
                    surrounded by animals. The shepherds come to adore the newborn King, 
                    and Mary "kept all these things, pondering them in her heart."
                </p>
                <p>This mystery reminds us that God often comes to us in the most humble circumstances.</p>
                <p><em>Fruit of the Mystery: Poverty of Spirit</em></p>
                
                <h5>4. The Presentation</h5>
                <p>
                    Mary and Joseph present Jesus in the Temple according to Jewish law. 
                    Simeon prophesies that a sword will pierce Mary's heart, and Anna the prophetess 
                    recognizes Jesus as the Messiah.
                </p>
                <p>This mystery teaches us about obedience to God's law and acceptance of His will, even when it involves suffering.</p>
                <p><em>Fruit of the Mystery: Obedience</em></p>
                
                <h5>5. The Finding in the Temple</h5>
                <p>
                    After three days of searching, Mary and Joseph find the twelve-year-old Jesus 
                    in the Temple, teaching the doctors. Jesus asks, "Did you not know that I must 
                    be about my Father's business?" Mary treasured all these things in her heart.
                </p>
                <p>This mystery reminds us to always seek Jesus, especially when He seems distant or hidden.</p>
                <p><em>Fruit of the Mystery: Joy in Finding Jesus</em></p>
                
                <div class="reflection-prayer">
                    <h5>Prayer:</h5>
                    <p>
                        "Mary, through these joyful mysteries, teach us to say 'yes' to God's will 
                        as you did. Help us to carry Jesus to others, to welcome Him with joy, 
                        and to always seek Him when He seems far away. Amen."
                    </p>
                </div>
            </div>
        `
    },
    
    fiat: {
        title: "Mary's Fiat",
        content: `
            <div class="reflection-text">
                <h4>The Perfect "Yes" of Our Lady</h4>
                
                <p>
                    When the Angel Gabriel announced to Mary that she would conceive and bear the Son of God, 
                    her response was immediate and complete: "Fiat mihi secundum verbum tuum" - 
                    "Let it be done unto me according to your word."
                </p>
                
                <p>
                    This "fiat" - this "yes" - changed the course of human history. Through Mary's 
                    surrender to God's will, the Word became flesh and dwelt among us. Her "yes" 
                    made our redemption possible.
                </p>
                
                <h5>What Mary's Fiat Teaches Us:</h5>
                
                <p><strong>Complete Trust:</strong> Mary trusted God completely, even when she didn't 
                understand everything. She believed that God's plans were good, even when they 
                seemed impossible or difficult.</p>
                
                <p><strong>Surrender of Will:</strong> Mary's "yes" was not just an acceptance; 
                it was a complete surrender of her own will to God's will. She placed her entire 
                life in God's hands.</p>
                
                <p><strong>Active Cooperation:</strong> Mary's "yes" wasn't passive. She actively 
                cooperated with God's grace throughout her life, from the Annunciation to the Cross.</p>
                
                <p><strong>Ongoing Commitment:</strong> Mary's "fiat" wasn't a one-time event. 
                She renewed her "yes" to God daily, through joy and sorrow, triumph and trial.</p>
                
                <h5>Our Own Fiat:</h5>
                
                <p>
                    Mary calls us to make our own "fiat" - our own complete "yes" to God. 
                    This means trusting God's plan for our lives, surrendering our own will 
                    to His, and cooperating with His grace in all circumstances.
                </p>
                
                <p>
                    Our "fiat" may not bring about the Incarnation, but it can bring about 
                    the birth of Christ in our hearts and in the hearts of those around us.
                </p>
                
                <div class="reflection-prayer">
                    <h5>Prayer:</h5>
                    <p>
                        "Mary, Mother of the 'yes,' teach me to trust in God's plan for my life. 
                        Help me to surrender my will to His, and to say 'yes' to whatever He asks of me. 
                        Through your intercession, may Christ be born anew in my heart. Amen."
                    </p>
                </div>
            </div>
        `
    },
    
    saints: {
        title: "Saints on Mary",
        content: `
            <div class="reflection-text">
                <h4>Wisdom from Marian Saints</h4>
                
                <h5>Pope St. John Paul II</h5>
                <blockquote>
                    "Mary is the one who has the deepest knowledge of the mystery of God who became man. 
                    It is she who best knows the mystery of the Incarnation."
                </blockquote>
                <blockquote>
                    "Totus tuus ego sum" - "I am totally yours." These words express total belonging 
                    to Jesus through Mary.
                </blockquote>
                
                <h5>St. Louis de Montfort</h5>
                <blockquote>
                    "It is through the Most Holy Virgin Mary that Jesus came into the world, 
                    and it is also through her that he must reign in the world."
                </blockquote>
                <blockquote>
                    "To Jesus through Mary - this is the characteristic of our devotion."
                </blockquote>
                
                <h5>St. Padre Pio</h5>
                <blockquote>
                    "Love the Madonna and pray the rosary, for her rosary is the weapon against 
                    the evils of the world today."
                </blockquote>
                <blockquote>
                    "The Madonna is the shortcut to reach Jesus."
                </blockquote>
                
                <h5>St. Alphonsus Liguori</h5>
                <blockquote>
                    "Mary is called the gate of heaven because no one can enter that blessed kingdom 
                    without passing through her."
                </blockquote>
                <blockquote>
                    "All the saints have had devotion to Mary; and never has anyone who persevered 
                    in it been lost."
                </blockquote>
                
                <h5>St. Maximilian Kolbe</h5>
                <blockquote>
                    "Never be afraid of loving the Blessed Virgin too much. You can never love her 
                    more than Jesus did."
                </blockquote>
                <blockquote>
                    "Let us allow her to take complete possession of our hearts."
                </blockquote>
                
                <h5>St. Bernard of Clairvaux</h5>
                <blockquote>
                    "Remember, O most gracious Virgin Mary, that never was it known that anyone 
                    who fled to your protection, implored your help, or sought your intercession 
                    was left unaided."
                </blockquote>
                
                <h5>St. Teresa of Avila</h5>
                <blockquote>
                    "Let nothing disturb you. All things pass. God does not change. 
                    Those who have Mary as an advocate have nothing to fear."
                </blockquote>
                
                <div class="reflection-prayer">
                    <h5>Prayer:</h5>
                    <p>
                        "Mary, Mother of all saints, you who guided so many holy souls to your Son, 
                        guide us also on the path of holiness. Through the wisdom of the saints 
                        who loved you, help us to love you more perfectly and to serve Jesus more faithfully. Amen."
                    </p>
                </div>
            </div>
        `
    }
};

// Modal functionality
function showPrayer(prayerId) {
    const modal = document.getElementById('prayerModal');
    const content = document.getElementById('prayerContent');
    const prayer = prayers[prayerId];
    
    if (prayer) {
        content.innerHTML = `
            <h2>${prayer.title}</h2>
            ${prayer.content}
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function showReflection(reflectionId) {
    const modal = document.getElementById('reflectionModal');
    const content = document.getElementById('reflectionContent');
    const reflection = reflections[reflectionId];
    
    if (reflection) {
        content.innerHTML = `
            <h2>${reflection.title}</h2>
            ${reflection.content}
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Close modal functionality
function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Close button functionality
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (event.target === modal) {
                closeModal();
            }
        });
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link, .btn[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Add fade-in animation to sections on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections for fade-in animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});

// Gallery image lazy loading
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initLazyLoading);
