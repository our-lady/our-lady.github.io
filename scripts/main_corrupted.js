// Our Lady Devotional Website - Multilingual Support
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
        },
        // Consecration content
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
            },
            testimony: {
                title: "Personal Testimony",
                quote: "My consecration to Mary has been the greatest grace of my spiritual life. Through her maternal hands, I have found peace, guidance, and a deeper love for Jesus. I am not a theologian - I am simply a child of the Mother."
            }
        },
        // Prayer categories
        prayerCategories: {
            daily: "Daily Prayers",
            consecrations: "Consecrations", 
            litanies: "Litanies"
        },
        // Prayer items
        prayerItems: {
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
        reflectionItems: {
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
        },
        // Consecration content
        consecration: {
            title: "Consagração Mariana",
            explanation: {
                title: "O que é a Consagração Total a Maria?",
                p1: "A consagração total a Maria é uma entrega completa de si mesmo a Jesus através de Maria. É um modo de vida espiritual baseado nas palavras de Jesus na Cruz: \"Eis aí tua mãe\" (João 19,27).",
                p2: "Através desta consagração, confiamos tudo a Maria - nossas orações, obras, alegrias e sofrimentos - para que ela os apresente a Jesus com seu amor maternal e intercessão."
            },
            preparation: {
                title: "Preparação de 33 Dias",
                step1: {
                    title: "Conhecimento de Si (12 dias)",
                    description: "Compreender sua natureza humana e necessidade da graça"
                },
                step2: {
                    title: "Conhecimento de Maria (7 dias)",
                    description: "Aprender sobre as virtudes e privilégios de Nossa Senhora"
                },
                step3: {
                    title: "Conhecimento de Jesus (7 dias)",
                    description: "Aprofundar seu relacionamento com Cristo"
                },
                step4: {
                    title: "Vivendo a Consagração (7 dias)",
                    description: "Preparar-se para o ato de consagração"
                }
            },
            testimony: {
                title: "Testemunho Pessoal",
                quote: "Minha consagração a Maria tem sido a maior graça de minha vida espiritual. Através de suas mãos maternais, encontrei paz, orientação e um amor mais profundo por Jesus. Não sou teólogo - sou simplesmente um filho da Mãe."
            }
        },
        // Prayer categories
        prayerCategories: {
            daily: "Orações Diárias",
            consecrations: "Consagrações", 
            litanies: "Ladainhas"
        },
        // Prayer items
        prayerItems: {
            angelus: {
                title: "O Angelus",
                description: "O Anjo do Senhor anunciou a Maria...",
                button: "Ler Oração"
            },
            rosary: {
                title: "Santo Rosário", 
                description: "A oração mais amada a Nossa Senhora...",
                button: "Ler Oração"
            },
            regina: {
                title: "Regina Caeli",
                description: "Rainha do Céu, alegrai-vos...",
                button: "Ler Oração"
            },
            montfort: {
                title: "São Luís de Montfort",
                description: "Verdadeira Devoção a Maria...", 
                button: "Ler Oração"
            },
            daily: {
                title: "Consagração Diária Simples",
                description: "Uma oferta diária a Nossa Senhora...",
                button: "Ler Oração"
            },
            loreto: {
                title: "Ladainha de Loreto",
                description: "Senhor, tende piedade. Cristo, tende piedade...",
                button: "Ler Oração"
            }
        },
        // Reflections
        reflectionItems: {
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
                    <p>5. Say the Fatima Prayer (optional)</p>
                    
                    <h5>Closing:</h5>
                    <p>Say the Hail Holy Queen</p>
                    
                    <h4>The Mysteries:</h4>
                    <p><strong>Joyful (Monday & Saturday):</strong> Annunciation, Visitation, Nativity, Presentation, Finding in the Temple</p>
                    <p><strong>Sorrowful (Tuesday & Friday):</strong> Agony in Garden, Scourging, Crowning with Thorns, Carrying Cross, Crucifixion</p>
                    <p><strong>Glorious (Wednesday & Sunday):</strong> Resurrection, Ascension, Descent of Holy Spirit, Assumption, Coronation</p>
                    <p><strong>Luminous (Thursday):</strong> Baptism, Wedding at Cana, Proclamation of Kingdom, Transfiguration, Institution of Eucharist</p>
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
        }
    },
    pt: {
        angelus: {
            title: "O Angelus",
            content: `
                <div class="prayer-text">
                    <p><strong>℣.</strong> O Anjo do Senhor anunciou a Maria.</p>
                    <p><strong>℟.</strong> E ela concebeu do Espírito Santo.</p>
                    <p class="prayer-indent"><em>Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora da nossa morte. Amém.</em></p>
                    
                    <p><strong>℣.</strong> Eis aqui a serva do Senhor.</p>
                    <p><strong>℟.</strong> Faça-se em mim segundo a vossa palavra.</p>
                    <p class="prayer-indent"><em>Ave Maria...</em></p>
                    
                    <p><strong>℣.</strong> E o Verbo se fez carne.</p>
                    <p><strong>℟.</strong> E habitou entre nós.</p>
                    <p class="prayer-indent"><em>Ave Maria...</em></p>
                    
                    <p><strong>℣.</strong> Rogai por nós, Santa Mãe de Deus.</p>
                    <p><strong>℟.</strong> Para que sejamos dignos das promessas de Cristo.</p>
                    
                    <h4>Oremos:</h4>
                    <p class="prayer-final">
                        Infundi, Senhor, a vossa graça em nossas almas para que nós, 
                        que pela anunciação do Anjo conhecemos a encarnação de Cristo, 
                        vosso Filho, por sua paixão e cruz sejamos conduzidos à glória 
                        da ressurreição. Por Cristo nosso Senhor. 
                        <strong>Amém.</strong>
                    </p>
                </div>
            `
        },
        rosary: {
            title: "Santo Rosário",
            content: `
                <div class="prayer-text">
                    <h4>Como rezar o Rosário:</h4>
                    
                    <h5>Início:</h5>
                    <p>1. Sinal da Cruz</p>
                    <p>2. Creio em Deus Pai</p>
                    <p>3. Pai Nosso</p>
                    <p>4. Três Ave Marias (fé, esperança e caridade)</p>
                    <p>5. Glória ao Pai</p>
                    
                    <h5>Para cada dezena:</h5>
                    <p>1. Anunciar o Mistério</p>
                    <p>2. Pai Nosso</p>
                    <p>3. Dez Ave Marias meditando o Mistério</p>
                    <p>4. Glória ao Pai</p>
                    <p>5. Oração de Fátima (opcional)</p>
                    
                    <h5>Final:</h5>
                    <p>Salve Rainha</p>
                    
                    <h4>Os Mistérios:</h4>
                    <p><strong>Gozosos (segunda e sábado):</strong> Anunciação, Visitação, Natividade, Apresentação, Encontro no Templo</p>
                    <p><strong>Dolorosos (terça e sexta):</strong> Agonia no Horto, Flagelação, Coroação de Espinhos, Carregamento da Cruz, Crucificação</p>
                    <p><strong>Gloriosos (quarta e domingo):</strong> Ressurreição, Ascensão, Vinda do Espírito Santo, Assunção, Coroação</p>
                    <p><strong>Luminosos (quinta):</strong> Batismo, Bodas de Caná, Pregação do Reino, Transfiguração, Eucaristia</p>
                </div>
            `
        },
        regina: {
            title: "Regina Caeli", 
            content: `
                <div class="prayer-text">
                    <p class="prayer-note"><em>Rezada no Tempo Pascal em lugar do Angelus</em></p>
                    
                    <p><strong>℣.</strong> Rainha do Céu, alegrai-vos, aleluia.</p>
                    <p><strong>℟.</strong> Porque Aquele que merecestes trazer, aleluia.</p>
                    
                    <p><strong>℣.</strong> Ressuscitou como disse, aleluia.</p>
                    <p><strong>℟.</strong> Rogai por nós a Deus, aleluia.</p>
                    
                    <p><strong>℣.</strong> Alegrai-vos e exultai, ó Virgem Maria, aleluia.</p>
                    <p><strong>℟.</strong> Porque o Senhor ressuscitou verdadeiramente, aleluia.</p>
                    
                    <h4>Oremos:</h4>
                    <p class="prayer-final">
                        Ó Deus, que pela ressurreição do vosso Filho, nosso Senhor Jesus Cristo, 
                        vos dignastes alegrar o mundo, concedei-nos, por intercessão da Virgem Maria, 
                        sua Mãe, alcançar as alegrias da vida eterna. Por Cristo nosso Senhor. 
                        <strong>Amém.</strong>
                    </p>
                </div>
            `
        }
    }
};

// Prayer modal functions
function showPrayer(prayerKey) {
    const modal = document.getElementById('prayerModal');
    const content = document.getElementById('prayerContent');
    const prayer = prayers[currentLanguage][prayerKey];
    
    if (prayer) {
        content.innerHTML = `<h2>${prayer.title}</h2>${prayer.content}`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Reflections content database with multilingual support
const reflections = {
    en: {
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
        },
        
        sorrowful: {
            title: "The Sorrowful Mysteries",
            content: `
                <div class="reflection-text">
                    <h4>Meditations on the Sorrowful Mysteries</h4>
                    
                    <h5>1. The Agony in the Garden</h5>
                    <p>
                        Jesus prays in the Garden of Gethsemane, knowing His passion approaches. 
                        His sweat becomes like drops of blood as He accepts the Father's will: 
                        "Not my will, but yours be done." Mary, though not physically present, 
                        shares in His anguish through her maternal heart.
                    </p>
                    <p>This mystery teaches us about accepting suffering in union with Christ.</p>
                    <p><em>Fruit of the Mystery: Conformity to God's Will</em></p>
                    
                    <h5>2. The Scourging at the Pillar</h5>
                    <p>
                        Jesus is brutally scourged by Roman soldiers. Each strike of the whip 
                        pierces Mary's heart as she contemplates her Son's suffering for our sins. 
                        She offers her maternal compassion to console His Sacred Heart.
                    </p>
                    <p>This mystery reminds us of the price of our redemption and Mary's share in it.</p>
                    <p><em>Fruit of the Mystery: Purity and Mortification</em></p>
                    
                    <h5>3. The Crowning with Thorns</h5>
                    <p>
                        The soldiers mock Jesus as King, pressing a crown of thorns into His sacred head. 
                        Mary sees her Son, the true King of Kings, humiliated and ridiculed. 
                        Her heart breaks as she witnesses His patient endurance of mockery.
                    </p>
                    <p>This mystery teaches us about bearing insults and humiliations with patience.</p>
                    <p><em>Fruit of the Mystery: Moral Courage</em></p>
                    
                    <h5>4. The Carrying of the Cross</h5>
                    <p>
                        Jesus carries His cross through the streets of Jerusalem. When Mary meets Him 
                        on the way, their eyes lock in a moment of infinite love and shared suffering. 
                        She walks with Him in spirit, carrying her own cross of maternal anguish.
                    </p>
                    <p>This mystery shows us how to carry our crosses with Jesus and Mary.</p>
                    <p><em>Fruit of the Mystery: Patience in Suffering</em></p>
                    
                    <h5>5. The Crucifixion</h5>
                    <p>
                        Mary stands at the foot of the cross, fulfilling Simeon's prophecy that a sword 
                        would pierce her heart. As Jesus dies, she becomes the Mother of all humanity: 
                        "Behold your mother." Her compassion reaches its summit in this moment.
                    </p>
                    <p>This mystery reveals the depths of divine love and mercy.</p>
                    <p><em>Fruit of the Mystery: Love of Jesus and Mary</em></p>
                    
                    <div class="reflection-prayer">
                        <h5>Prayer:</h5>
                        <p>
                            "Mary, Mother of Sorrows, you who stood faithfully at the cross, 
                            help us to unite our sufferings with those of Jesus. Teach us to find 
                            meaning in our pain and to trust in God's love even in darkness. Amen."
                        </p>
                    </div>
                </div>
            `
        }
    },
    pt: {
        joyful: {
            title: "Os Mistérios Gozosos",
            content: `
                <div class="reflection-text">
                    <h4>Meditações sobre os Mistérios Gozosos</h4>
                    
                    <h5>1. A Anunciação</h5>
                    <p>
                        Neste primeiro mistério gozoso, contemplamos o perfeito "sim" de Maria ao plano de Deus. 
                        O Anjo Gabriel aparece para Maria, e ela responde com confiança completa: 
                        "Eis aqui a serva do Senhor; faça-se em mim segundo a vossa palavra."
                    </p>
                    <p>Este mistério nos ensina a beleza da entrega à vontade de Deus, mesmo quando não compreendemos Seus planos.</p>
                    <p><em>Fruto do Mistério: Humildade</em></p>
                    
                    <h5>2. A Visitação</h5>
                    <p>
                        Maria, carregando Jesus em seu ventre, visita sua prima Isabel. 
                        Ao cumprimento de Maria, João Batista salta no ventre de Isabel, e Isabel 
                        proclama Maria "bendita entre as mulheres." Maria responde com o Magnificat, 
                        seu cântico de louvor.
                    </p>
                    <p>Este mistério nos mostra como Maria leva Jesus aos outros através de seu serviço amoroso.</p>
                    <p><em>Fruto do Mistério: Amor ao Próximo</em></p>
                    
                    <h5>3. O Nascimento de Jesus</h5>
                    <p>
                        Jesus nasce em Belém. Maria dá à luz o Filho de Deus numa humilde estrebaria, 
                        rodeada de animais. Os pastores vêm adorar o Rei recém-nascido, 
                        e Maria "guardava todas essas coisas, meditando-as em seu coração."
                    </p>
                    <p>Este mistério nos lembra que Deus frequentemente vem a nós nas circunstâncias mais humildes.</p>
                    <p><em>Fruto do Mistério: Pobreza de Espírito</em></p>
                    
                    <h5>4. A Apresentação no Templo</h5>
                    <p>
                        Maria e José apresentam Jesus no Templo conforme a lei judaica. 
                        Simeão profetiza que uma espada traspassará o coração de Maria, e Ana, a profetisa, 
                        reconhece Jesus como o Messias.
                    </p>
                    <p>Este mistério nos ensina sobre a obediência à lei de Deus e a aceitação de Sua vontade, mesmo quando envolve sofrimento.</p>
                    <p><em>Fruto do Mistério: Obediência</em></p>
                    
                    <h5>5. O Encontro no Templo</h5>
                    <p>
                        Após três dias de busca, Maria e José encontram Jesus, de doze anos, 
                        no Templo, ensinando os doutores. Jesus pergunta: "Não sabíeis que devo 
                        ocupar-me das coisas de meu Pai?" Maria guardava todas essas coisas em seu coração.
                    </p>
                    <p>Este mistério nos lembra de sempre buscar Jesus, especialmente quando Ele parece distante ou oculto.</p>
                    <p><em>Fruto do Mistério: Alegria de Encontrar Jesus</em></p>
                    
                    <div class="reflection-prayer">
                        <h5>Oração:</h5>
                        <p>
                            "Maria, através destes mistérios gozosos, ensina-nos a dizer 'sim' à vontade de Deus 
                            como tu fizeste. Ajuda-nos a levar Jesus aos outros, a recebê-Lo com alegria, 
                            e a sempre buscá-Lo quando parece distante. Amém."
                        </p>
                    </div>
                </div>
            `
        },
        
        fiat: {
            title: "O Fiat de Maria",
            content: `
                <div class="reflection-text">
                    <h4>O Perfeito "Sim" de Nossa Senhora</h4>
                    
                    <p>
                        Quando o Anjo Gabriel anunciou a Maria que ela conceberia e daria à luz o Filho de Deus, 
                        sua resposta foi imediata e completa: "Fiat mihi secundum verbum tuum" - 
                        "Faça-se em mim segundo a vossa palavra."
                    </p>
                    
                    <p>
                        Este "fiat" - este "sim" - mudou o curso da história humana. Através da 
                        entrega de Maria à vontade de Deus, o Verbo se fez carne e habitou entre nós. Seu "sim" 
                        tornou possível nossa redenção.
                    </p>
                    
                    <h5>O que o Fiat de Maria nos Ensina:</h5>
                    
                    <p><strong>Confiança Completa:</strong> Maria confiou em Deus completamente, mesmo quando não 
                    compreendia tudo. Ela acreditou que os planos de Deus eram bons, mesmo quando 
                    pareciam impossíveis ou difíceis.</p>
                    
                    <p><strong>Entrega da Vontade:</strong> O "sim" de Maria não foi apenas uma aceitação; 
                    foi uma entrega completa de sua própria vontade à vontade de Deus. Ela colocou toda 
                    sua vida nas mãos de Deus.</p>
                    
                    <p><strong>Cooperação Ativa:</strong> O "sim" de Maria não foi passivo. Ela cooperou 
                    ativamente com a graça de Deus durante toda sua vida, da Anunciação à Cruz.</p>
                    
                    <p><strong>Compromisso Contínuo:</strong> O "fiat" de Maria não foi um evento único. 
                    Ela renovou seu "sim" a Deus diariamente, através da alegria e da tristeza, do triunfo e da provação.</p>
                    
                    <h5>Nosso Próprio Fiat:</h5>
                    
                    <p>
                        Maria nos chama a fazer nosso próprio "fiat" - nosso próprio "sim" completo a Deus. 
                        Isto significa confiar no plano de Deus para nossas vidas, entregar nossa própria vontade 
                        à Sua, e cooperar com Sua graça em todas as circunstâncias.
                    </p>
                    
                    <p>
                        Nosso "fiat" pode não trazer a Encarnação, mas pode trazer 
                        o nascimento de Cristo em nossos corações e nos corações daqueles ao nosso redor.
                    </p>
                    
                    <div class="reflection-prayer">
                        <h5>Oração:</h5>
                        <p>
                            "Maria, Mãe do 'sim', ensina-me a confiar no plano de Deus para minha vida. 
                            Ajuda-me a entregar minha vontade à Sua, e a dizer 'sim' a tudo que Ele me pedir. 
                            Através de tua intercessão, que Cristo nasça novamente em meu coração. Amém."
                        </p>
                    </div>
                </div>
            `
        },
        
        saints: {
            title: "Santos sobre Maria",
            content: `
                <div class="reflection-text">
                    <h4>Sabedoria dos Santos Marianos</h4>
                    
                    <h5>Papa São João Paulo II</h5>
                    <blockquote>
                        "Maria é quem tem o conhecimento mais profundo do mistério de Deus que se fez homem. 
                        É ela quem melhor conhece o mistério da Encarnação."
                    </blockquote>
                    <blockquote>
                        "Totus tuus ego sum" - "Sou todo teu." Estas palavras expressam pertença total 
                        a Jesus através de Maria.
                    </blockquote>
                    
                    <h5>São Luís de Montfort</h5>
                    <blockquote>
                        "É através da Santíssima Virgem Maria que Jesus veio ao mundo, 
                        e é também através dela que ele deve reinar no mundo."
                    </blockquote>
                    <blockquote>
                        "A Jesus por Maria - esta é a característica de nossa devoção."
                    </blockquote>
                    
                    <h5>São Padre Pio</h5>
                    <blockquote>
                        "Ama a Madonna e reza o rosário, pois seu rosário é a arma contra 
                        os males do mundo hoje."
                    </blockquote>
                    <blockquote>
                        "A Madonna é o atalho para chegar a Jesus."
                    </blockquote>
                    
                    <h5>Santo Afonso de Ligório</h5>
                    <blockquote>
                        "Maria é chamada a porta do céu porque ninguém pode entrar naquele reino bendito 
                        sem passar por ela."
                    </blockquote>
                    <blockquote>
                        "Todos os santos tiveram devoção a Maria; e nunca alguém que perseverou 
                        nela se perdeu."
                    </blockquote>
                    
                    <h5>São Maximiliano Kolbe</h5>
                    <blockquote>
                        "Nunca tenha medo de amar demais a Santíssima Virgem. Você nunca pode amá-la 
                        mais do que Jesus a amou."
                    </blockquote>
                    <blockquote>
                        "Deixemos que ela tome posse completa de nossos corações."
                    </blockquote>
                    
                    <h5>São Bernardo de Claraval</h5>
                    <blockquote>
                        "Lembrai-vos, ó piíssima Virgem Maria, que jamais se ouviu dizer que alguém 
                        que tenha recorrido à vossa proteção, implorado vossa ajuda ou pedido vossa intercessão 
                        fosse por vós abandonado."
                    </blockquote>
                    
                    <h5>Santa Teresa de Ávila</h5>
                    <blockquote>
                        "Nada te perturbe. Tudo passa. Deus não muda. 
                        Aqueles que têm Maria como advogada nada têm a temer."
                    </blockquote>
                    
                    <div class="reflection-prayer">
                        <h5>Oração:</h5>
                        <p>
                            "Maria, Mãe de todos os santos, tu que guiaste tantas almas santas ao teu Filho, 
                            guia-nos também no caminho da santidade. Através da sabedoria dos santos 
                            que te amaram, ajuda-nos a te amar mais perfeitamente e a servir Jesus mais fielmente. Amém."
                        </p>
                    </div>
                </div>
            `
        },
        
        sorrowful: {
            title: "Os Mistérios Dolorosos",
            content: `
                <div class="reflection-text">
                    <h4>Meditações sobre os Mistérios Dolorosos</h4>
                    
                    <h5>1. A Agonia no Jardim</h5>
                    <p>
                        Jesus ora no Jardim do Getsêmani, sabendo que sua paixão se aproxima. 
                        Seu suor torna-se como gotas de sangue enquanto aceita a vontade do Pai: 
                        "Não a minha vontade, mas a vossa seja feita." Maria, embora não fisicamente presente, 
                        compartilha de sua angústia através de seu coração maternal.
                    </p>
                    <p>Este mistério nos ensina sobre aceitar o sofrimento em união com Cristo.</p>
                    <p><em>Fruto do Mistério: Conformidade à Vontade de Deus</em></p>
                    
                    <h5>2. A Flagelação</h5>
                    <p>
                        Jesus é brutalmente flagelado pelos soldados romanos. Cada golpe do açoite 
                        transpassa o coração de Maria enquanto ela contempla o sofrimento de seu Filho por nossos pecados. 
                        Ela oferece sua compaixão maternal para consolar Seu Sagrado Coração.
                    </p>
                    <p>Este mistério nos lembra do preço de nossa redenção e da participação de Maria nela.</p>
                    <p><em>Fruto do Mistério: Pureza e Mortificação</em></p>
                    
                    <h5>3. A Coroação de Espinhos</h5>
                    <p>
                        Os soldados zombam de Jesus como Rei, pressionando uma coroa de espinhos em sua cabeça sagrada. 
                        Maria vê seu Filho, o verdadeiro Rei dos Reis, humilhado e ridicularizado. 
                        Seu coração se parte ao testemunhar sua paciência diante do escárnio.
                    </p>
                    <p>Este mistério nos ensina sobre suportar insultos e humilhações com paciência.</p>
                    <p><em>Fruto do Mistério: Coragem Moral</em></p>
                    
                    <h5>4. O Caminho do Calvário</h5>
                    <p>
                        Jesus carrega sua cruz pelas ruas de Jerusalém. Quando Maria o encontra 
                        no caminho, seus olhares se cruzam num momento de amor infinito e sofrimento compartilhado. 
                        Ela caminha com Ele em espírito, carregando sua própria cruz de angústia maternal.
                    </p>
                    <p>Este mistério nos mostra como carregar nossas cruzes com Jesus e Maria.</p>
                    <p><em>Fruto do Mistério: Paciência no Sofrimento</em></p>
                    
                    <h5>5. A Crucificação</h5>
                    <p>
                        Maria permanece ao pé da cruz, cumprindo a profecia de Simeão de que uma espada 
                        traspassaria seu coração. Quando Jesus morre, ela se torna Mãe de toda a humanidade: 
                        "Eis aí tua mãe." Sua compaixão atinge seu ápice neste momento.
                    </p>
                    <p>Este mistério revela as profundezas do amor e misericórdia divinos.</p>
                    <p><em>Fruto do Mistério: Amor de Jesus e Maria</em></p>
                    
                    <div class="reflection-prayer">
                        <h5>Oração:</h5>
                        <p>
                            "Maria, Mãe das Dores, tu que permaneceste fielmente ao pé da cruz, 
                            ajuda-nos a unir nossos sofrimentos aos de Jesus. Ensina-nos a encontrar 
                            sentido em nossa dor e a confiar no amor de Deus mesmo na escuridão. Amém."
                        </p>
                    </div>
                </div>
            `
        }
    }
};

function showReflection(reflectionKey) {
    const modal = document.getElementById('reflectionModal');
    const content = document.getElementById('reflectionContent');
    
    const reflection = reflections[currentLanguage][reflectionKey];
    if (reflection) {
        content.innerHTML = `<h2>${reflection.title}</h2>${reflection.content}`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Modal close functionality
function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

// Smooth scrolling
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    updatePageContent();
    
    // Set active language button
    document.querySelector(`[data-lang="${currentLanguage}"]`)?.classList.add('active');
    
    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = this.getAttribute('href');
            if (target !== '#') {
                smoothScroll(target);
            }
        });
    });
    
    // Modal close events
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', closeModal);
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('modal')) {
            closeModal();
        }
    });
    
    // Escape key to close modal
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('section, .prayer-item, .reflection-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
});

// Our Lady Devotional Website - Multilingual Support
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
        },
        // Consecration content
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
            },
            testimony: {
                title: "Personal Testimony",
                quote: "My consecration to Mary has been the greatest grace of my spiritual life. Through her maternal hands, I have found peace, guidance, and a deeper love for Jesus. I am not a theologian - I am simply a child of the Mother."
            }
        },
        // Prayer categories
        prayerCategories: {
            daily: "Daily Prayers",
            consecrations: "Consecrations", 
            litanies: "Litanies"
        },
        // Prayer items
        prayerItems: {
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
        reflectionItems: {
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
        },
        // Consecration content
        consecration: {
            title: "Consagração Mariana",
            explanation: {
                title: "O que é a Consagração Total a Maria?",
                p1: "A consagração total a Maria é uma entrega completa de si mesmo a Jesus através de Maria. É um modo de vida espiritual baseado nas palavras de Jesus na Cruz: \"Eis aí tua mãe\" (João 19,27).",
                p2: "Através desta consagração, confiamos tudo a Maria - nossas orações, obras, alegrias e sofrimentos - para que ela os apresente a Jesus com seu amor maternal e intercessão."
            },
            preparation: {
                title: "Preparação de 33 Dias",
                step1: {
                    title: "Conhecimento de Si (12 dias)",
                    description: "Compreender sua natureza humana e necessidade da graça"
                },
                step2: {
                    title: "Conhecimento de Maria (7 dias)",
                    description: "Aprender sobre as virtudes e privilégios de Nossa Senhora"
                },
                step3: {
                    title: "Conhecimento de Jesus (7 dias)",
                    description: "Aprofundar seu relacionamento com Cristo"
                },
                step4: {
                    title: "Vivendo a Consagração (7 dias)",
                    description: "Preparar-se para o ato de consagração"
                }
            },
            testimony: {
                title: "Testemunho Pessoal",
                quote: "Minha consagração a Maria tem sido a maior graça de minha vida espiritual. Através de suas mãos maternais, encontrei paz, orientação e um amor mais profundo por Jesus. Não sou teólogo - sou simplesmente um filho da Mãe."
            }
        },
        // Prayer categories
        prayerCategories: {
            daily: "Orações Diárias",
            consecrations: "Consagrações", 
            litanies: "Ladainhas"
        },
        // Prayer items
        prayerItems: {
            angelus: {
                title: "O Angelus",
                description: "O Anjo do Senhor anunciou a Maria...",
                button: "Ler Oração"
            },
            rosary: {
                title: "Santo Rosário", 
                description: "A oração mais amada a Nossa Senhora...",
                button: "Ler Oração"
            },
            regina: {
                title: "Regina Caeli",
                description: "Rainha do Céu, alegrai-vos...",
                button: "Ler Oração"
            },
            montfort: {
                title: "São Luís de Montfort",
                description: "Verdadeira Devoção a Maria...", 
                button: "Ler Oração"
            },
            daily: {
                title: "Consagração Diária Simples",
                description: "Uma oferta diária a Nossa Senhora...",
                button: "Ler Oração"
            },
            loreto: {
                title: "Ladainha de Loreto",
                description: "Senhor, tende piedade. Cristo, tende piedade...",
                button: "Ler Oração"
            }
        },
        // Reflections
        reflectionItems: {
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
        }
    }
};

// Prayer modal functions
function showPrayer(prayerKey) {
    const modal = document.getElementById('prayerModal');
    const content = document.getElementById('prayerContent');
    const prayer = prayers[currentLanguage][prayerKey];
    
    if (prayer) {
        content.innerHTML = `<h2>${prayer.title}</h2>${prayer.content}`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Reflections content database with multilingual support
const reflections = {
    en: {
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
        },
        
        sorrowful: {
            title: "The Sorrowful Mysteries",
            content: `
                <div class="reflection-text">
                    <h4>Meditations on the Sorrowful Mysteries</h4>
                    
                    <h5>1. The Agony in the Garden</h5>
                    <p>
                        Jesus prays in the Garden of Gethsemane, knowing His passion approaches. 
                        His sweat becomes like drops of blood as He accepts the Father's will: 
                        "Not my will, but yours be done." Mary, though not physically present, 
                        shares in His anguish through her maternal heart.
                    </p>
                    <p>This mystery teaches us about accepting suffering in union with Christ.</p>
                    <p><em>Fruit of the Mystery: Conformity to God's Will</em></p>
                    
                    <h5>2. The Scourging at the Pillar</h5>
                    <p>
                        Jesus is brutally scourged by Roman soldiers. Each strike of the whip 
                        pierces Mary's heart as she contemplates her Son's suffering for our sins. 
                        She offers her maternal compassion to console His Sacred Heart.
                    </p>
                    <p>This mystery reminds us of the price of our redemption and Mary's share in it.</p>
                    <p><em>Fruit of the Mystery: Purity and Mortification</em></p>
                    
                    <h5>3. The Crowning with Thorns</h5>
                    <p>
                        The soldiers mock Jesus as King, pressing a crown of thorns into His sacred head. 
                        Mary sees her Son, the true King of Kings, humiliated and ridiculed. 
                        Her heart breaks as she witnesses His patient endurance of mockery.
                    </p>
                    <p>This mystery teaches us about bearing insults and humiliations with patience.</p>
                    <p><em>Fruit of the Mystery: Moral Courage</em></p>
                    
                    <h5>4. The Carrying of the Cross</h5>
                    <p>
                        Jesus carries His cross through the streets of Jerusalem. When Mary meets Him 
                        on the way, their eyes lock in a moment of infinite love and shared suffering. 
                        She walks with Him in spirit, carrying her own cross of maternal anguish.
                    </p>
                    <p>This mystery shows us how to carry our crosses with Jesus and Mary.</p>
                    <p><em>Fruit of the Mystery: Patience in Suffering</em></p>
                    
                    <h5>5. The Crucifixion</h5>
                    <p>
                        Mary stands at the foot of the cross, fulfilling Simeon's prophecy that a sword 
                        would pierce her heart. As Jesus dies, she becomes the Mother of all humanity: 
                        "Behold your mother." Her compassion reaches its summit in this moment.
                    </p>
                    <p>This mystery reveals the depths of divine love and mercy.</p>
                    <p><em>Fruit of the Mystery: Love of Jesus and Mary</em></p>
                    
                    <div class="reflection-prayer">
                        <h5>Prayer:</h5>
                        <p>
                            "Mary, Mother of Sorrows, you who stood faithfully at the cross, 
                            help us to unite our sufferings with those of Jesus. Teach us to find 
                            meaning in our pain and to trust in God's love even in darkness. Amen."
                        </p>
                    </div>
                </div>
            `
        }
    }
};

function showReflection(reflectionKey) {
    const modal = document.getElementById('reflectionModal');
    const content = document.getElementById('reflectionContent');
    
    const reflection = reflections[currentLanguage][reflectionKey];
    if (reflection) {
        content.innerHTML = `<h2>${reflection.title}</h2>${reflection.content}`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Modal close functionality
function closeModal() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.style.display = 'none';
    });
    document.body.style.overflow = 'auto';
}

// Smooth scrolling
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    updatePageContent();
    
    // Set active language button
    document.querySelector(`[data-lang="${currentLanguage}"]`)?.classList.add('active');
    
    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function