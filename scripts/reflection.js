// Language System and Database (copied from main.js)
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
        // Footer
        footer: {
            prayer: "Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.",
            copyright: "&copy; 2025 Our Lady - A Devotional Space. Created with love and devotion."
        },
        // Back button
        backButton: "Back to Reflections"
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
        // Footer
        footer: {
            prayer: "Santa Maria, Mãe de Deus, rogai por nós pecadores, agora e na hora de nossa morte. Amém.",
            copyright: "&copy; 2025 Nossa Senhora - Um Espaço Devocional. Criado com amor e devoção."
        },
        // Back button
        backButton: "Voltar para Reflexões"
    }
};

// Reflections content database with multilingual support
const reflections = {
  en: {
    "The Joyful Mysteries": {
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
                        proclaims Mary "blessed amongst women." Mary responds with the Magnificat, 
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
    
    "Mary's Fiat": {
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
                        Mary's "yes" is the perfect model of surrender to God's will. Unlike Eve, whose
                        disobedience brought sin into the world, Mary's obedience opened the door 
                        to our salvation. She did not understand everything that would happen, 
                        but she trusted completely.
                    </p>
                    
                    <h5>A Model for Our Own Response to God</h5>
                    <p>
                        We are all called to echo Mary's fiat in our own lives. Each time we face a difficult 
                        decision, each time God asks something of us that seems beyond our strength or understanding, 
                        we can look to Mary as our model.
                    </p>
                    
                    <p>
                        Her fiat was not a passive resignation but an active embrace of God's will. 
                        It was not given just once, but renewed daily throughout her life, 
                        even as she stood at the foot of the Cross.
                    </p>
                    
                    <h5>Five Lessons from Mary's Fiat:</h5>
                    <ol>
                        <li><strong>Openness to God's voice</strong> - Mary was attentive to the angel's message.</li>
                        <li><strong>Courage to question</strong> - She asked, "How can this be?"</li>
                        <li><strong>Trust in the impossible</strong> - She believed that "nothing is impossible with God."</li>
                        <li><strong>Surrender of personal plans</strong> - She set aside her own vision for her life.</li>
                        <li><strong>Commitment to God's path</strong> - She followed through with her yes, from Bethlehem to Calvary.</li>
                    </ol>
                    
                    <div class="reflection-prayer">
                        <h5>Prayer:</h5>
                        <p>
                            "Mary, Mother of the Divine Word, teach me to say 'yes' to God as you did. 
                            Help me to trust in His plan for my life, even when I don't understand. 
                            May my own fiat echo yours in generosity and completeness. Amen."
                        </p>
                    </div>
                </div>
            `
    },
    
    "The Sorrowful Mysteries": {
      title: "The Sorrowful Mysteries",
      content: `
                <div class="reflection-text">
                    <h4>Meditations on the Sorrowful Mysteries</h4>
                    
                    <h5>1. The Agony in the Garden</h5>
                    <p>
                        As Jesus prays in Gethsemane, His soul "sorrowful unto death," Mary keeps 
                        vigil in her heart. She participates spiritually in His agony, offering her 
                        maternal love as comfort for His suffering humanity.
                    </p>
                    <p>This mystery teaches us about surrendering to God's will in moments of fear and dread.</p>
                    <p><em>Fruit of the Mystery: True Sorrow for Sin</em></p>
                    
                    <h5>2. The Scourging at the Pillar</h5>
                    <p>
                        Jesus is stripped and tied to a pillar, His sacred body torn by cruel whips. 
                        Though not physically present, Mary feels each lash in her maternal heart. 
                        Her Immaculate Heart is pierced as the prophecy of Simeon begins to unfold.
                    </p>
                    <p>This mystery teaches us about patiently bearing physical and emotional suffering.</p>
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
    },
    
    "Saints on Mary": {
      title: "Saints on Mary",
      content: `
                <div class="reflection-text">
                    <h4>Words From the Saints About Our Lady</h4>
                    
                    <h5>Saint John Paul II</h5>
                    <blockquote>
                        "The history of devotion to the Mother of God and her image in Christian 
                        art clearly show that the Marian affirmation of the Church is both a 
                        reflection of and stimulus to her affirmation of Christ and her 
                        affirmation of man."
                    </blockquote>
                    <p>
                        Pope John Paul II, known for his deep Marian devotion and his motto 
                        "Totus Tuus" (Totally Yours), emphasized that authentic devotion to Mary 
                        always leads us to Jesus.
                    </p>
                    
                    <h5>Saint Louis de Montfort</h5>
                    <blockquote>
                        "The more a soul is consecrated to Mary, the more it will be consecrated to Jesus."
                    </blockquote>
                    <p>
                        St. Louis Marie de Montfort's spiritual classic, "True Devotion to Mary," 
                        presents a comprehensive Marian spirituality centered on the idea that 
                        Mary is the most perfect path to Jesus.
                    </p>
                    
                    <h5>Saint Padre Pio</h5>
                    <blockquote>
                        "Love the Madonna and pray the Rosary, for her Rosary is the weapon 
                        against the evils of the world today."
                    </blockquote>
                    <p>
                        St. Padre Pio was known to pray over 30 Rosaries a day. He saw the Rosary 
                        as a powerful spiritual weapon and encouraged all to turn to Mary in prayer.
                    </p>
                    
                    <h5>Saint Maximilian Kolbe</h5>
                    <blockquote>
                        "Never be afraid of loving the Blessed Virgin too much. You can never love her 
                        more than Jesus did."
                    </blockquote>
                    <p>
                        St. Maximilian Kolbe founded the Militia Immaculatae (Army of the Immaculate One) 
                        and dedicated his life to promoting total consecration to Mary.
                    </p>
                    
                    <h5>Saint Teresa of Calcutta</h5>
                    <blockquote>
                        "If you ever feel distressed during your day, call upon our Lady. Just say 
                        'Mary, Mother of Jesus, please be a mother to me now.' This prayer has never failed me."
                    </blockquote>
                    <p>
                        Mother Teresa had a simple but profound devotion to Mary. She taught her 
                        Missionaries of Charity to entrust their work to Mary's hands.
                    </p>
                    
                    <div class="reflection-prayer">
                        <h5>Prayer:</h5>
                        <p>
                            "Holy Mary, Mother of God, who has been loved and honored by the saints 
                            throughout the ages, help us to follow their example of devotion. 
                            Lead us, as you led them, ever closer to your Son, Jesus Christ. Amen."
                        </p>
                    </div>
                </div>
            `
    }
  },
  pt: {
    "The Joyful Mysteries": {
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
    "Mary's Fiat": {
      title: "O Fiat de Maria",
      content: `
                <div class="reflection-text">
                    <h4>O Perfeito "Sim" de Nossa Senhora</h4>
                    
                    <p>
                        Quando o Anjo Gabriel anunciou a Maria que ela conceberia e daria à luz o Filho de Deus, 
                        sua resposta foi imediata e completa: "Fiat mihi secundum verbum tuum" - 
                        "Faça-se em mim segundo a tua palavra."
                    </p>
                    
                    <p>
                        O "sim" de Maria é o modelo perfeito de entrega à vontade de Deus. Ao contrário de Eva, cuja
                        desobediência trouxe o pecado ao mundo, a obediência de Maria abriu a porta 
                        para nossa salvação. Ela não compreendeu tudo o que aconteceria, 
                        mas confiou completamente.
                    </p>
                    
                    <h5>Um Modelo para Nossa Própria Resposta a Deus</h5>
                    <p>
                        Todos somos chamados a ecoar o fiat de Maria em nossas próprias vidas. Cada vez que enfrentamos uma decisão difícil, 
                        cada vez que Deus nos pede algo que parece além de nossa força ou compreensão, 
                        podemos olhar para Maria como nosso modelo.
                    </p>
                    
                    <p>
                        Seu fiat não foi uma resignação passiva, mas um abraço ativo à vontade de Deus. 
                        Não foi dado apenas uma vez, mas renovado diariamente ao longo de sua vida, 
                        mesmo quando ela estava ao pé da Cruz.
                    </p>
                    
                    <h5>Cinco Lições do Fiat de Maria:</h5>
                    <ol>
                        <li><strong>Abertura à voz de Deus</strong> - Maria estava atenta à mensagem do anjo.</li>
                        <li><strong>Coragem para questionar</strong> - Ela perguntou: "Como pode ser isso?"</li>
                        <li><strong>Confiança no impossível</strong> - Ela acreditou que "nada é impossível para Deus."</li>
                        <li><strong>Entrega dos planos pessoais</strong> - Ela deixou de lado sua própria visão para sua vida.</li>
                        <li><strong>Compromisso com o caminho de Deus</strong> - Ela seguiu adiante com seu sim, de Belém ao Calvário.</li>
                    </ol>
                    
                    <div class="reflection-prayer">
                        <h5>Oração:</h5>
                        <p>
                            "Maria, Mãe do Verbo Divino, ensina-me a dizer 'sim' a Deus como tu fizeste. 
                            Ajuda-me a confiar no Seu plano para minha vida, mesmo quando não o compreendo. 
                            Que meu próprio fiat ecoe o teu em generosidade e plenitude. Amém."
                        </p>
                    </div>
                </div>
            `
    },
    "The Sorrowful Mysteries": {
      title: "Os Mistérios Dolorosos",
      content: `
                <div class="reflection-text">
                    <h4>Meditações sobre os Mistérios Dolorosos</h4>
                    
                    <h5>1. A Agonia no Horto</h5>
                    <p>
                        Enquanto Jesus reza no Getsêmani, com sua alma "triste até a morte", Maria 
                        mantém vigília em seu coração. Ela participa espiritualmente da agonia dele, oferecendo seu 
                        amor maternal como consolo para o sofrimento da humanidade de Jesus.
                    </p>
                    <p>Este mistério nos ensina sobre a entrega à vontade de Deus em momentos de medo e pavor.</p>
                    <p><em>Fruto do Mistério: Verdadeiro Arrependimento pelos Pecados</em></p>
                    
                    <h5>2. A Flagelação</h5>
                    <p>
                        Jesus é despido e amarrado a uma coluna, Seu corpo sagrado dilacerado por chicotes cruéis. 
                        Embora não fisicamente presente, Maria sente cada chicotada em seu coração maternal. 
                        Seu Coração Imaculado é traspassado enquanto a profecia de Simeão começa a se cumprir.
                    </p>
                    <p>Este mistério nos ensina sobre suportar pacientemente o sofrimento físico e emocional.</p>
                    <p><em>Fruto do Mistério: Pureza e Mortificação</em></p>
                    
                    <h5>3. A Coroação de Espinhos</h5>
                    <p>
                        Os soldados zombam de Jesus como Rei, pressionando uma coroa de espinhos em Sua cabeça sagrada. 
                        Maria vê seu Filho, o verdadeiro Rei dos Reis, humilhado e ridicularizado. 
                        Seu coração se parte ao testemunhar Sua paciente resistência às zombarias.
                    </p>
                    <p>Este mistério nos ensina sobre suportar insultos e humilhações com paciência.</p>
                    <p><em>Fruto do Mistério: Coragem Moral</em></p>
                    
                    <h5>4. O Carregamento da Cruz</h5>
                    <p>
                        Jesus carrega Sua cruz pelas ruas de Jerusalém. Quando Maria O encontra 
                        no caminho, seus olhares se cruzam em um momento de amor infinito e sofrimento compartilhado. 
                        Ela caminha com Ele em espírito, carregando sua própria cruz de angústia maternal.
                    </p>
                    <p>Este mistério nos mostra como carregar nossas cruzes com Jesus e Maria.</p>
                    <p><em>Fruto do Mistério: Paciência no Sofrimento</em></p>
                    
                    <h5>5. A Crucificação</h5>
                    <p>
                        Maria está ao pé da cruz, cumprindo a profecia de Simeão de que uma espada 
                        traspassaria seu coração. Enquanto Jesus morre, ela se torna a Mãe de toda a humanidade: 
                        "Eis aí tua mãe." Sua compaixão alcança seu ápice neste momento.
                    </p>
                    <p>Este mistério revela as profundezas do amor e da misericórdia divinos.</p>
                    <p><em>Fruto do Mistério: Amor a Jesus e Maria</em></p>
                    
                    <div class="reflection-prayer">
                        <h5>Oração:</h5>
                        <p>
                            "Maria, Mãe das Dores, tu que estiveste fielmente ao pé da cruz, 
                            ajuda-nos a unir nossos sofrimentos aos de Jesus. Ensina-nos a encontrar 
                            sentido em nossa dor e a confiar no amor de Deus mesmo na escuridão. Amém."
                        </p>
                    </div>
                </div>
            `
    },
    "Saints on Mary": {
      title: "Santos sobre Maria",
      content: `
                <div class="reflection-text">
                    <h4>Palavras dos Santos Sobre Nossa Senhora</h4>
                    
                    <h5>São João Paulo II</h5>
                    <blockquote>
                        "A história da devoção à Mãe de Deus e sua imagem na arte cristã 
                        mostram claramente que a afirmação mariana da Igreja é tanto um 
                        reflexo como um estímulo à sua afirmação de Cristo e sua 
                        afirmação do homem."
                    </blockquote>
                    <p>
                        O Papa João Paulo II, conhecido por sua profunda devoção mariana e seu lema 
                        "Totus Tuus" (Todo Teu), enfatizou que a devoção autêntica a Maria 
                        sempre nos leva a Jesus.
                    </p>
                    
                    <h5>São Luís de Montfort</h5>
                    <blockquote>
                        "Quanto mais uma alma é consagrada a Maria, mais será consagrada a Jesus."
                    </blockquote>
                    <p>
                        O clássico espiritual de São Luís Maria de Montfort, "Tratado da Verdadeira Devoção à Santíssima Virgem", 
                        apresenta uma espiritualidade mariana abrangente centrada na ideia de que 
                        Maria é o caminho mais perfeito para Jesus.
                    </p>
                    
                    <h5>São Padre Pio</h5>
                    <blockquote>
                        "Ame a Madonna e reze o Rosário, pois seu Rosário é a arma 
                        contra os males do mundo de hoje."
                    </blockquote>
                    <p>
                        Sabe-se que São Padre Pio rezava mais de 30 Rosários por dia. Ele via o Rosário 
                        como uma poderosa arma espiritual e incentivava todos a recorrerem a Maria em oração.
                    </p>
                    
                    <h5>São Maximiliano Kolbe</h5>
                    <blockquote>
                        "Nunca tenha medo de amar a Santíssima Virgem em demasia. Você nunca poderá amá-la 
                        mais do que Jesus a amou."
                    </blockquote>
                    <p>
                        São Maximiliano Kolbe fundou a Militia Immaculatae (Exército da Imaculada) 
                        e dedicou sua vida a promover a consagração total a Maria.
                    </p>
                    
                    <h5>Santa Teresa de Calcutá</h5>
                    <blockquote>
                        "Se alguma vez você se sentir angustiado durante o dia, invoque Nossa Senhora. Apenas diga 
                        'Maria, Mãe de Jesus, por favor seja uma mãe para mim agora.' Esta oração nunca me falhou."
                    </blockquote>
                    <p>
                        Madre Teresa tinha uma devoção simples, mas profunda, a Maria. Ela ensinou suas 
                        Missionárias da Caridade a confiar seu trabalho às mãos de Maria.
                    </p>
                    
                    <div class="reflection-prayer">
                        <h5>Oração:</h5>
                        <p>
                            "Santa Maria, Mãe de Deus, que foste amada e honrada pelos santos 
                            ao longo dos séculos, ajuda-nos a seguir seu exemplo de devoção. 
                            Conduze-nos, como os conduziste, cada vez mais perto de teu Filho, Jesus Cristo. Amém."
                        </p>
                    </div>
                </div>
            `
    }
  }
};

// Get reflection key from URL parameter
function getReflectionKey() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('reflection');
}

// Get language from URL or localStorage
function getLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    // Use URL parameter if available, otherwise use localStorage
    return urlLang || localStorage.getItem('ourLadyLanguage') || 'en';
}

// Load reflection content based on URL parameter
function loadReflectionContent() {
    const reflectionKey = getReflectionKey();
    const lang = getLanguage();
    
    // Make sure localStorage is updated with the current language
    if (lang !== localStorage.getItem('ourLadyLanguage')) {
        localStorage.setItem('ourLadyLanguage', lang);
    }
    
    // Set page title
    if (reflectionKey && reflections[lang] && reflections[lang][reflectionKey]) {
        const siteTitle = lang === 'pt' ? 'Nossa Senhora' : 'Our Lady';
        document.title = reflections[lang][reflectionKey].title + ' - ' + siteTitle;
        
        // Display reflection content
        document.querySelector('.reflection-title').textContent = reflections[lang][reflectionKey].title;
        document.querySelector('.reflection-content').innerHTML = reflections[lang][reflectionKey].content;
    } else {
        // Handle invalid reflection key with more helpful error message
        const errorMessage = lang === 'pt' 
            ? `<div class="error-message"><h3>Reflexão não encontrada</h3>
               <p>Desculpe, não conseguimos encontrar esta reflexão. <a href="index.html?lang=${lang}#reflections">Voltar para a lista de reflexões</a>.</p></div>` 
            : `<div class="error-message"><h3>Reflection Not Found</h3>
               <p>Sorry, we couldn't find this reflection. <a href="index.html?lang=${lang}#reflections">Return to the list of reflections</a>.</p></div>`;
        document.querySelector('.reflection-content').innerHTML = errorMessage;
        
        // Set page title for error state
        const siteTitle = lang === 'pt' ? 'Nossa Senhora' : 'Our Lady';
        document.title = (lang === 'pt' ? 'Reflexão não encontrada' : 'Reflection Not Found') + ' - ' + siteTitle;
    }
}

// Update page content based on language
function updatePageContent() {
    const lang = localStorage.getItem('ourLadyLanguage') || 'en';
    
    // Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const navKeys = ['home', 'prayers', 'reflections', 'consecration', 'gallery', 'about'];
    navLinks.forEach((link, i) => {
        link.textContent = languages[lang].nav[navKeys[i]];
        // Update nav links to include language parameter
        const href = link.getAttribute('href');
        if (href && href.includes('index.html')) {
            // Check if URL already has parameters
            const url = new URL(href, window.location.origin);
            url.searchParams.set('lang', lang);
            link.setAttribute('href', url.pathname + url.search + url.hash);
        }
    });
    
    // Back button
    document.querySelector('.back-text').textContent = languages[lang].backButton;
    
    // Update back link to include language parameter
    const backLink = document.getElementById('back-link');
    if (backLink) {
        let href = backLink.getAttribute('href');
        const url = new URL(href, window.location.origin);
        url.searchParams.set('lang', lang);
        backLink.setAttribute('href', url.pathname + url.search + url.hash);
        backLink.setAttribute('title', lang === 'pt' ? 'Voltar para a lista de reflexões' : 'Return to the reflections list');
    }
    
    // Footer
    document.querySelector('.footer-prayer em').textContent = languages[lang].footer.prayer;
    document.querySelector('.footer-links p').innerHTML = languages[lang].footer.copyright;
    
    // Reload reflection content to update language
    loadReflectionContent();
}

// Function to update all links with current language
function updateLanguageInLinks() {
    const lang = localStorage.getItem('ourLadyLanguage') || 'en';
    
    // Update links to prayer and reflection pages
    document.querySelectorAll('a[href^="prayer-template.html"], a[href^="reflection-template.html"]').forEach(link => {
        const href = link.getAttribute('href');
        const url = new URL(href, window.location.origin);
        
        // Add or update language parameter
        url.searchParams.set('lang', lang);
        link.setAttribute('href', url.pathname + url.search);
    });
    
    // Update all index links to maintain language when returning to home
    document.querySelectorAll('a[href^="index.html"]').forEach(link => {
        const href = link.getAttribute('href');
        const url = new URL(href, window.location.origin);
        url.searchParams.set('lang', lang);
        link.setAttribute('href', url.pathname + url.search + url.hash);
    });
}

// Language switching
function switchLanguage(lang) {
    localStorage.setItem('ourLadyLanguage', lang);
    
    // Atualiza os botões de idioma ativos
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) btn.classList.add('active');
    });
    
    // Atualiza o atributo lang do HTML (importante para acessibilidade)
    document.documentElement.lang = lang;
    
    // Adiciona uma classe para animar a transição de idioma
    document.body.classList.add('lang-transition');
    setTimeout(() => {
        document.body.classList.remove('lang-transition');
    }, 500);
    
    // Update page content with the new language
    updatePageContent();
    
    // Update all links with the current language
    updateLanguageInLinks();
    
    // Update logo text based on language
    const logoText = document.querySelector('.nav-logo span');
    if (logoText) {
        logoText.textContent = lang === 'pt' ? 'Nossa Senhora' : 'Our Lady';
    }
    
    // If we're on a prayer or reflection page, update URL to include language parameter
    const path = window.location.pathname;
    if (path.includes('prayer-template.html') || path.includes('reflection-template.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('lang', lang);
        const newUrl = window.location.pathname + '?' + urlParams.toString();
        history.replaceState(null, '', newUrl);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se há parâmetro lang na URL
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    
    // Se houver parâmetro lang na URL, usa-o; caso contrário, usa o valor do localStorage
    const initialLang = urlLang || localStorage.getItem('ourLadyLanguage') || 'en';
    
    // Define o atributo lang do HTML antes mesmo de chamar switchLanguage
    document.documentElement.lang = initialLang;
    
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchLanguage(this.getAttribute('data-lang'));
        });
    });
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Initialize with determined language
    switchLanguage(initialLang);
    
    // Ensure all links have proper language parameters
    updateLanguageInLinks();
});
