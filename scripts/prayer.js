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
        backButton: "Back to Prayers"
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
        backButton: "Voltar para Orações"
    }
};

// Prayer content database with multilingual support
const prayers = {
  en: {
    "The Angelus": {
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
    "Holy Rosary": {
      title: "Holy Rosary",
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
    "Regina Caeli": {
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
    "St. Louis de Montfort": {
      title: "St. Louis de Montfort",
      content: `
                <div class="prayer-text">
                    <h4>Consecration Prayer by Saint Louis Marie de Montfort</h4>
                    
                    <p class="prayer-intro">
                      This prayer is traditionally recited at the end of the 33-day preparation for Total Consecration to Jesus through Mary in the method of Saint Louis de Montfort.
                    </p>
                    
                    <hr>
                    
                    <p>
                      I, (name), a faithless sinner, renew and ratify today in thy hands the vows of my Baptism; 
                      I renounce forever Satan, his pomps and works; and I give myself entirely to Jesus Christ, 
                      the Incarnate Wisdom, to carry my cross after Him all the days of my life, 
                      and to be more faithful to Him than I have ever been before.
                    </p>
                    
                    <p>
                      In the presence of all the heavenly court I choose thee this day for my Mother and Queen. 
                      I deliver and consecrate to thee, as thy slave, my body and soul, 
                      my goods, both interior and exterior, and even the value of all my good actions, 
                      past, present and future; leaving to thee the entire and full right of disposing of me, 
                      and all that belongs to me, without exception, according to thy good pleasure, 
                      for the greater glory of God, in time and in eternity.
                    </p>
                    
                    <p class="prayer-final">
                      Receive, O benignant Virgin, this little offering of my slavery, 
                      in honor of, and in union with, that subjection which the Eternal Wisdom 
                      deigned to have to thy maternity, in homage to the power which both of you have 
                      over this poor sinner, and in thanksgiving for the privileges with which 
                      the Holy Trinity has favored thee. I declare that I wish henceforth, 
                      as thy true slave, to seek thy honor and to obey thee in all things.
                      <br><br>
                      O admirable Mother, present me to thy dear Son as His eternal slave, 
                      so that as He has redeemed me by thee, by thee He may receive me! 
                      <br><br>
                      <strong>Amen.</strong>
                    </p>
                </div>
            `
    },
    "Daily Simple Consecration": {
      title: "Daily Simple Consecration",
      content: `
                <div class="prayer-text">
                    <h4>Daily Consecration to Our Lady</h4>
                    
                    <p class="prayer-intro">
                      This simple prayer can be recited daily as an offering to renew one's personal consecration to the Blessed Virgin Mary.
                    </p>
                    
                    <hr>
                    
                    <p>
                      My Queen and my Mother, I give myself entirely to you, 
                      and to show my devotion to you, I consecrate to you this day: 
                      my eyes, my ears, my mouth, my heart, my whole being without reserve.
                    </p>
                    
                    <p>
                      As I am your own, my good Mother, 
                      guard me and defend me as your property and possession. 
                    </p>
                    
                    <p class="prayer-accent">
                      <em>
                      Remember, O most blessed Virgin Mary,
                      that never was it known that anyone who fled to your protection,
                      implored your help, or sought your intercession was left unaided.
                      </em>
                    </p>
                    
                    <p>
                      Inspired by this confidence, I fly unto you,
                      O Virgin of virgins, my Mother.
                      To you do I come, before you I stand, sinful and sorrowful.
                    </p>
                    
                    <p class="prayer-final">
                      O Mother of the Word Incarnate,
                      despise not my petitions,
                      but in your mercy, hear and answer me.
                      <br><br>
                      <strong>Amen.</strong>
                    </p>
                </div>
            `
    },
    "Litany of Loreto": {
      title: "Litany of Loreto",
      content: `
                <div class="prayer-text">
                    <h4>The Litany of the Blessed Virgin Mary (Litany of Loreto)</h4>
                    
                    <p class="prayer-intro">
                      This Litany to the Blessed Virgin Mary was composed during the Middle Ages and approved by Pope Sixtus V in 1587.
                      It is one of the most beautiful Marian prayers and is sung at the shrine of the Holy House in Loreto, Italy.
                    </p>
                    
                    <hr>
                    <div class="litany-content">
                      <p><strong>℣.</strong> Lord, have mercy.</p>
                      <p><strong>℟.</strong> Christ, have mercy.</p>
                      <p><strong>℣.</strong> Lord, have mercy.</p>
                      <p><strong>℣.</strong> Christ, hear us.</p>
                      <p><strong>℟.</strong> Christ, graciously hear us.</p>
                      <p><strong>℣.</strong> God the Father of Heaven,</p>
                      <p><strong>℟.</strong> Have mercy on us.</p>
                      <p><strong>℣.</strong> God the Son, Redeemer of the world,</p>
                      <p><strong>℟.</strong> Have mercy on us.</p>
                      <p><strong>℣.</strong> God the Holy Spirit,</p>
                      <p><strong>℟.</strong> Have mercy on us.</p>
                      <p><strong>℣.</strong> Holy Trinity, One God,</p>
                      <p><strong>℟.</strong> Have mercy on us.</p>
                      
                      <p><strong>℣.</strong> Holy Mary,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Holy Mother of God,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Holy Virgin of virgins,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Mother of Christ,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Mother of the Church,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Mother of divine grace,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Mother most pure,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Mother most chaste,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Mother inviolate,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Mother undefiled,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Mother most amiable,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Mother most admirable,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Mother of good counsel,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Mother of our Creator,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Mother of our Savior,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Virgin most prudent,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Virgin most venerable,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Virgin most renowned,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Virgin most powerful,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Virgin most merciful,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Virgin most faithful,</p>
                      <p><strong>℟.</strong> Pray for us.</p>

                      <p class="litany-section">Added by Pope Francis in 2020:</p>
                      <p><strong>℣.</strong> Mother of mercy,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Mother of hope,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      <p><strong>℣.</strong> Comfort of migrants,</p>
                      <p><strong>℟.</strong> Pray for us.</p>
                      
                      <p class="prayer-final">
                        <strong>℣.</strong> Lamb of God, who takes away the sins of the world,
                        <br><strong>℟.</strong> Spare us, O Lord.
                        <br><strong>℣.</strong> Lamb of God, who takes away the sins of the world,
                        <br><strong>℟.</strong> Graciously hear us, O Lord.
                        <br><strong>℣.</strong> Lamb of God, who takes away the sins of the world,
                        <br><strong>℟.</strong> Have mercy on us.
                        <br><br>
                        <strong>℣.</strong> Pray for us, O Holy Mother of God,
                        <br><strong>℟.</strong> That we may be made worthy of the promises of Christ.
                        
                        <br><br>
                        <strong>Let us pray:</strong>
                        Grant, we beseech Thee, O Lord God, that we Thy servants may enjoy perpetual health of mind and body, and by the glorious intercession of the Blessed Mary, ever Virgin, be delivered from present sorrow and enjoy eternal happiness. Through Christ our Lord.
                        <br><br>
                        <strong>Amen.</strong>
                      </p>
                    </div>
                </div>
            `
    }
  },
  pt: {
    "The Angelus": {
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
    "Holy Rosary": {
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
    "Regina Caeli": {
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
    },
    "St. Louis de Montfort": {
      title: "São Luís de Montfort",
      content: `
                <div class="prayer-text">
                    <h4>Oração de Consagração de São Luís Maria de Montfort</h4>
                    
                    <p class="prayer-intro">
                      Esta oração é tradicionalmente recitada ao fim dos 33 dias de preparação para a Consagração Total a Jesus por Maria segundo o método de São Luís Maria de Montfort.
                    </p>
                    
                    <hr>
                    
                    <p>
                      Eu, (nome), pecador infiel, renovo e ratifico hoje, em vossas mãos, os votos do meu Batismo; 
                      renuncio para sempre a Satanás, suas pompas e suas obras, e dou-me inteiramente a Jesus Cristo, 
                      Sabedoria encarnada, para carregar minha cruz após Ele todos os dias da minha vida, 
                      e a fim de Lhe ser mais fiel do que tenho sido até agora.
                    </p>
                    
                    <p>
                      Na presença de toda a Corte celeste, escolho-vos neste dia para minha Mãe e Rainha. 
                      Entrego-vos e consagro-vos, como vosso escravo, meu corpo e minha alma, 
                      meus bens interiores e exteriores, e até mesmo o valor de todas as minhas boas ações 
                      passadas, presentes e futuras, deixando-vos inteiro e pleno direito de dispor de mim 
                      e de tudo o que me pertence, sem exceção, segundo o vosso agrado, 
                      para a maior glória de Deus, no tempo e na eternidade.
                    </p>
                    
                    <p class="prayer-final">
                      Recebei, ó benigna Virgem, esta pequena oferenda da minha escravidão, 
                      em honra e em união com a sujeição que a Sabedoria eterna 
                      quis ter à vossa maternidade, em homenagem ao poder que ambos tendes 
                      sobre este miserável pecador, e em ação de graças pelos privilégios com que 
                      a Santíssima Trindade vos favoreceu. Declaro que, de agora em diante, 
                      como vosso verdadeiro escravo, quero buscar vossa honra e obedecer-vos em todas as coisas.
                      <br><br>
                      Ó Mãe admirável, apresentai-me ao vosso querido Filho como seu eterno escravo, 
                      a fim de que, tendo-me resgatado por vós, por vós também me receba! 
                      <br><br>
                      <strong>Amém.</strong>
                    </p>
                </div>
            `
    },
    "Daily Simple Consecration": {
      title: "Consagração Diária Simples",
      content: `
                <div class="prayer-text">
                    <h4>Consagração Diária a Nossa Senhora</h4>
                    
                    <p class="prayer-intro">
                      Esta oração simples pode ser recitada diariamente como uma oferenda para renovar a consagração pessoal à Virgem Maria.
                    </p>
                    
                    <hr>
                    
                    <p>
                      Minha Rainha e minha Mãe, eu me entrego inteiramente a vós, 
                      e para mostrar minha devoção para convosco, eu vos consagro neste dia: 
                      meus olhos, meus ouvidos, minha boca, meu coração, todo o meu ser, sem reserva.
                    </p>
                    
                    <p>
                      Como sou vosso, ó minha boa Mãe, 
                      guardai-me e defendei-me como propriedade e possessão vossa. 
                    </p>
                    
                    <p class="prayer-accent">
                      <em>
                      Lembrai-vos, ó piíssima Virgem Maria,
                      que nunca se ouviu dizer que algum daqueles que tivessem recorrido à vossa proteção,
                      implorado a vossa assistência, ou reclamado o vosso socorro, fosse por vós abandonado.
                      </em>
                    </p>
                    
                    <p>
                      Animado com esta confiança, eu me dirijo a vós,
                      ó Virgem das virgens, minha Mãe.
                      A vós venho, diante de vós me prostro, pecador e triste.
                    </p>
                    
                    <p class="prayer-final">
                      Ó Mãe do Verbo Encarnado,
                      não desprezeis minhas súplicas,
                      mas, ouvindo-me favoravelmente, atendei-me.
                      <br><br>
                      <strong>Amém.</strong>
                    </p>
                </div>
            `
    },
    "Litany of Loreto": {
      title: "Ladainha de Loreto",
      content: `
                <div class="prayer-text">
                    <h4>A Ladainha da Bem-Aventurada Virgem Maria (Ladainha de Loreto)</h4>
                    
                    <p class="prayer-intro">
                      Esta Ladainha à Virgem Maria foi composta durante a Idade Média e aprovada pelo Papa Sisto V em 1587.
                      É uma das mais belas orações marianas e é cantada no santuário da Santa Casa em Loreto, Itália.
                    </p>
                    
                    <hr>
                    <div class="litany-content">
                      <p><strong>℣.</strong> Senhor, tende piedade de nós.</p>
                      <p><strong>℟.</strong> Cristo, tende piedade de nós.</p>
                      <p><strong>℣.</strong> Senhor, tende piedade de nós.</p>
                      <p><strong>℣.</strong> Cristo, ouvi-nos.</p>
                      <p><strong>℟.</strong> Cristo, atendei-nos.</p>
                      <p><strong>℣.</strong> Deus Pai dos céus,</p>
                      <p><strong>℟.</strong> Tende piedade de nós.</p>
                      <p><strong>℣.</strong> Deus Filho, Redentor do mundo,</p>
                      <p><strong>℟.</strong> Tende piedade de nós.</p>
                      <p><strong>℣.</strong> Deus Espírito Santo,</p>
                      <p><strong>℟.</strong> Tende piedade de nós.</p>
                      <p><strong>℣.</strong> Santíssima Trindade, que sois um só Deus,</p>
                      <p><strong>℟.</strong> Tende piedade de nós.</p>
                      
                      <p><strong>℣.</strong> Santa Maria,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Santa Mãe de Deus,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Santa Virgem das virgens,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Mãe de Cristo,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Mãe da Igreja,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Mãe da divina graça,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Mãe puríssima,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Mãe castíssima,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Mãe intacta,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Mãe imaculada,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Mãe amável,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Mãe admirável,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Mãe do bom conselho,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Mãe do Criador,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Mãe do Salvador,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Virgem prudentíssima,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Virgem venerável,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Virgem louvável,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Virgem poderosa,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Virgem clemente,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Virgem fiel,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>

                      <p class="litany-section">Adicionadas pelo Papa Francisco em 2020:</p>
                      <p><strong>℣.</strong> Mãe da misericórdia,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Mãe da esperança,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      <p><strong>℣.</strong> Conforto dos migrantes,</p>
                      <p><strong>℟.</strong> Rogai por nós.</p>
                      
                      <p class="prayer-final">
                        <strong>℣.</strong> Cordeiro de Deus, que tirais o pecado do mundo,
                        <br><strong>℟.</strong> Perdoai-nos, Senhor.
                        <br><strong>℣.</strong> Cordeiro de Deus, que tirais o pecado do mundo,
                        <br><strong>℟.</strong> Ouvi-nos, Senhor.
                        <br><strong>℣.</strong> Cordeiro de Deus, que tirais o pecado do mundo,
                        <br><strong>℟.</strong> Tende piedade de nós.
                        <br><br>
                        <strong>℣.</strong> Rogai por nós, Santa Mãe de Deus,
                        <br><strong>℟.</strong> Para que sejamos dignos das promessas de Cristo.
                        
                        <br><br>
                        <strong>Oremos:</strong>
                        Concedei, nós vos suplicamos, Senhor nosso Deus, que nós, vossos servos, gozemos sempre de saúde de alma e corpo e, pela gloriosa intercessão da bem-aventurada Virgem Maria, sejamos livres da tristeza presente e alcancemos a alegria eterna. Por Cristo, nosso Senhor.
                        <br><br>
                        <strong>Amém.</strong>
                      </p>
                    </div>
                </div>
            `
    }
  }
};

// Get prayer key from URL parameter
function getPrayerKey() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('prayer');
}

// Get language from URL or localStorage
function getLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    // Use URL parameter if available, otherwise use localStorage
    return urlLang || localStorage.getItem('ourLadyLanguage') || 'en';
}

// Load prayer content based on URL parameter
function loadPrayerContent() {
    const prayerKey = getPrayerKey();
    const lang = getLanguage();
    
    // Make sure localStorage is updated with the current language
    if (lang !== localStorage.getItem('ourLadyLanguage')) {
        localStorage.setItem('ourLadyLanguage', lang);
    }
    
    // Set page title
    if (prayerKey && prayers[lang] && prayers[lang][prayerKey]) {
        const siteTitle = lang === 'pt' ? 'Nossa Senhora' : 'Our Lady';
        document.title = prayers[lang][prayerKey].title + ' - ' + siteTitle;
        
        // Display prayer content
        document.querySelector('.prayer-title').textContent = prayers[lang][prayerKey].title;
        document.querySelector('.prayer-content').innerHTML = prayers[lang][prayerKey].content;
    } else {
        // Handle invalid prayer key with more helpful error message
        const errorMessage = lang === 'pt' 
            ? `<div class="error-message"><h3>Oração não encontrada</h3>
               <p>Desculpe, não conseguimos encontrar esta oração. <a href="index.html?lang=${lang}#prayers">Voltar para a lista de orações</a>.</p></div>` 
            : `<div class="error-message"><h3>Prayer Not Found</h3>
               <p>Sorry, we couldn't find this prayer. <a href="index.html?lang=${lang}#prayers">Return to the list of prayers</a>.</p></div>`;
        document.querySelector('.prayer-content').innerHTML = errorMessage;
        
        // Set page title for error state
        const siteTitle = lang === 'pt' ? 'Nossa Senhora' : 'Our Lady';
        document.title = (lang === 'pt' ? 'Oração não encontrada' : 'Prayer Not Found') + ' - ' + siteTitle;
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
        backLink.setAttribute('title', lang === 'pt' ? 'Voltar para a lista de orações' : 'Return to the prayers list');
    }
    
    // Footer
    document.querySelector('.footer-prayer em').textContent = languages[lang].footer.prayer;
    document.querySelector('.footer-links p').innerHTML = languages[lang].footer.copyright;
    
    // Reload prayer content to update language
    loadPrayerContent();
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
