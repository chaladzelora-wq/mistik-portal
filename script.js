// ==========================================
// MYSTIC AI - GLOBAL LOGIC & FUNCTIONALITY
// ==========================================

// ==================== TRANSLATIONS ====================
const translations = {
  en: {
    title: 'Mystic AI',
    home: 'Home',
    astrology: 'Astrology',
    tarot: 'Tarot',
    dreams: 'Dreams',
    meditation: 'Meditation',
    palmistry: 'Palmistry',
    awareness: 'Awareness',
    admin: 'Admin',
    language: 'Language',
    deleteData: 'Delete My Data',
    chatPlaceholder: 'Ask the Mystic...',
    send: 'Send',
    premiumTitle: 'Unlock Premium Access',
    premiumPrice: '$10/month',
    premiumFeatures: [
      'Unlimited AI Messages',
      'Complete Book Access',
      'Advanced Readings',
      'Priority Support'
    ],
    subscribe: 'Subscribe Now',
    close: 'Close',
    disclaimer: 'Mystic AI is an experimental AI project for entertainment and educational purposes only. Not a substitute for professional advice.',
    astologyDesc: 'Explore the cosmos and celestial wisdom',
    tarotDesc: 'Divine guidance through the cards',
    dreamsDesc: 'Interpret your subconscious visions',
    meditationDesc: 'Find inner peace and mindfulness',
    palmistryDesc: 'Unlock the mysteries in your hands',
    awarenessDesc: 'Expand your consciousness with wisdom texts',
    messageLimitReached: 'You have reached the message limit. Upgrade to Premium for unlimited access!'
  },
  ru: {
    title: 'Мистический ИИ',
    home: 'Главная',
    astrology: 'Астрология',
    tarot: 'Таро',
    dreams: 'Сны',
    meditation: 'Медитация',
    palmistry: 'Хиромантия',
    awareness: 'Осознание',
    admin: 'Администратор',
    language: 'Язык',
    deleteData: 'Удалить мои данные',
    chatPlaceholder: 'Спросите Мистика...',
    send: 'Отправить',
    premiumTitle: 'Разблокировать премиум доступ',
    premiumPrice: '$10/месяц',
    premiumFeatures: [
      'Неограниченные сообщения ИИ',
      'Полный доступ к книгам',
      'Расширенные чтения',
      'Приоритетная поддержка'
    ],
    subscribe: 'Подписаться',
    close: 'Закрыть',
    disclaimer: 'Мистический ИИ - это экспериментальный проект ИИ для развлечения и образовательных целей. Не является заменой профессиональной консультации.',
    astologyDesc: 'Изучите космос и небесную мудрость',
    tarotDesc: 'Божественное руководство через карты',
    dreamsDesc: 'Интерпретируйте видения вашего подсознания',
    meditationDesc: 'Найдите внутренний мир и осознанность',
    palmistryDesc: 'Раскройте тайны в ваших руках',
    awarenessDesc: 'Расширьте сознание мудростью',
    messageLimitReached: 'Вы достигли лимита сообщений. Перейдите на премиум!'
  },
  es: {
    title: 'IA Mística',
    home: 'Inicio',
    astrology: 'Astrología',
    tarot: 'Tarot',
    dreams: 'Sueños',
    meditation: 'Meditación',
    palmistry: 'Quiromancia',
    awareness: 'Conciencia',
    admin: 'Administrador',
    language: 'Idioma',
    deleteData: 'Eliminar mis datos',
    chatPlaceholder: 'Pregunta al Místico...',
    send: 'Enviar',
    premiumTitle: 'Desbloquear acceso Premium',
    premiumPrice: '$10/mes',
    premiumFeatures: [
      'Mensajes de IA ilimitados',
      'Acceso completo a libros',
      'Lecturas avanzadas',
      'Soporte prioritario'
    ],
    subscribe: 'Suscribirse',
    close: 'Cerrar',
    disclaimer: 'IA Mística es un proyecto de IA experimental solo para entretenimiento y educación. No es un sustituto del consejo profesional.',
    astologyDesc: 'Explora el cosmos y la sabiduría celestial',
    tarotDesc: 'Orientación divina a través de las cartas',
    dreamsDesc: 'Interpreta las visiones de tu subconsciente',
    meditationDesc: 'Encuentra paz interior y conciencia plena',
    palmistryDesc: 'Desbloquea los misterios en tus manos',
    awarenessDesc: 'Expande tu conciencia con textos de sabiduría',
    messageLimitReached: '¡Has alcanzado el límite de mensajes! ¡Actualiza a Premium!'
  },
  de: {
    title: 'Mystische KI',
    home: 'Startseite',
    astrology: 'Astrologie',
    tarot: 'Tarot',
    dreams: 'Träume',
    meditation: 'Meditation',
    palmistry: 'Handlesen',
    awareness: 'Bewusstsein',
    admin: 'Administrator',
    language: 'Sprache',
    deleteData: 'Meine Daten löschen',
    chatPlaceholder: 'Frag den Mystiker...',
    send: 'Senden',
    premiumTitle: 'Premium-Zugang entsperren',
    premiumPrice: '$10/Monat',
    premiumFeatures: [
      'Unbegrenzte KI-Nachrichten',
      'Vollständiger Buchzugriff',
      'Erweiterte Lesarten',
      'Prioritärer Support'
    ],
    subscribe: 'Jetzt abonnieren',
    close: 'Schließen',
    disclaimer: 'Mystische KI ist ein experimentelles KI-Projekt nur für Unterhaltung und Bildung. Kein Ersatz für professionelle Beratung.',
    astologyDesc: 'Erkunden Sie den Kosmos und die himmlische Weisheit',
    tarotDesc: 'Göttliche Führung durch die Karten',
    dreamsDesc: 'Interpretiere die Visionen deines Unterbewusstseins',
    meditationDesc: 'Finde inneren Frieden und Achtsamkeit',
    palmistryDesc: 'Unlock the mysteries in your hands',
    awarenessDesc: 'Erweitern Sie Ihr Bewusstsein mit Weisheitstexten',
    messageLimitReached: 'Du hast das Nachrichtenlimit erreicht. Upgrade auf Premium!'
  },
  pt: {
    title: 'IA Mística',
    home: 'Início',
    astrology: 'Astrologia',
    tarot: 'Tarô',
    dreams: 'Sonhos',
    meditation: 'Meditação',
    palmistry: 'Quiromancia',
    awareness: 'Consciência',
    admin: 'Administrador',
    language: 'Idioma',
    deleteData: 'Deletar meus dados',
    chatPlaceholder: 'Pergunte ao Místico...',
    send: 'Enviar',
    premiumTitle: 'Desbloquear acesso Premium',
    premiumPrice: '$10/mês',
    premiumFeatures: [
      'Mensagens de IA ilimitadas',
      'Acesso completo a livros',
      'Leituras avançadas',
      'Suporte prioritário'
    ],
    subscribe: 'Inscreva-se agora',
    close: 'Fechar',
    disclaimer: 'IA Mística é um projeto de IA experimental apenas para entretenimento e educação. Não é um substituto para aconselhamento profissional.',
    astologyDesc: 'Explore o cosmos e a sabedoria celestial',
    tarotDesc: 'Orientação divina através das cartas',
    dreamsDesc: 'Interprete as visões do seu subconsciente',
    meditationDesc: 'Encontre paz interior e atenção plena',
    palmistryDesc: 'Desbloqueie os mistérios nas suas mãos',
    awarenessDesc: 'Expanda sua consciência com textos de sabedoria',
    messageLimitReached: 'Você atingiu o limite de mensagens. Atualize para Premium!'
  },
  hi: {
    title: 'रहस्यमय एआई',
    home: 'होम',
    astrology: 'ज्योतिष',
    tarot: 'टैरो',
    dreams: 'सपने',
    meditation: 'ध्यान',
    palmistry: 'हस्तरेखा',
    awareness: 'जागरूकता',
    admin: 'प्रशासक',
    language: 'भाषा',
    deleteData: 'मेरा डेटा हटाएं',
    chatPlaceholder: 'रहस्यवादी से पूछें...',
    send: 'भेजें',
    premiumTitle: 'प्रीमियम एक्सेस अनलॉक करें',
    premiumPrice: '$10/माह',
    premiumFeatures: [
      'असीमित एआई संदेश',
      'संपूर्ण पुस्तक पहुंच',
      'उन्नत रीडिंग',
      'प्राथमिकता समर्थन'
    ],
    subscribe: 'अभी सदस्यता लें',
    close: 'बंद करें',
    disclaimer: 'रहस्यमय एआई केवल मनोरंजन और शिक्षा के लिए एक प्रायोगिक एआई परियोजना है। पेशेवर सलाह का विकल्प नहीं।',
    astologyDesc: 'ब्रह्मांड और आकाशीय ज्ञान की खोज करें',
    tarotDesc: 'कार्ड के माध्यम से दिव्य मार्गदर्शन',
    dreamsDesc: 'अपने अवचेतन दृष्टि की व्याख्या करें',
    meditationDesc: 'आंतरिक शांति और माइंडफुलनेस खोजें',
    palmistryDesc: 'अपने हाथों में रहस्य अनलॉक करें',
    awarenessDesc: 'ज्ञान ग्रंथों के साथ चेतना का विस्तार करें',
    messageLimitReached: 'आप संदेश सीमा तक पहुंच गए हैं। प्रीमियम अपग्रेड करें!'
  }
};

// ==================== STATE MANAGEMENT ====================
let currentLanguage = localStorage.getItem('language') || 'en';
let messageCount = parseInt(localStorage.getItem('messageCount') || '0');
let isPremium = localStorage.getItem('isPremium') === 'true';
const MAX_FREE_MESSAGES = 5;

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', () => {
  initializeLanguage();
  initializeTilt();
  initializeChat();
  setupEventListeners();
  updateUIText();
});

// ==================== LANGUAGE FUNCTIONS ====================
function initializeLanguage() {
  const selector = document.querySelector('.language-switcher');
  if (selector) {
    selector.value = currentLanguage;
    selector.addEventListener('change', (e) => {
      currentLanguage = e.target.value;
      localStorage.setItem('language', currentLanguage);
      updateUIText();
      location.reload(); // Refresh to apply translations
    });
  }
}

function updateUIText() {
  const trans = translations[currentLanguage] || translations.en;
  
  // Update header
  const headerTitle = document.querySelector('header h1');
  if (headerTitle) headerTitle.textContent = trans.title;
  
  // Update navigation links (if they exist)
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach((link) => {
    const page = link.getAttribute('data-page');
    if (page && trans[page]) link.textContent = trans[page];
  });
  
  // Update chat placeholder
  const chatInput = document.querySelector('.chat-input');
  if (chatInput) chatInput.placeholder = trans.chatPlaceholder;
  
  // Update section descriptions
  document.querySelectorAll('[data-trans]').forEach((el) => {
    const key = el.getAttribute('data-trans');
    if (trans[key]) el.textContent = trans[key];
  });
}

function t(key) {
  return (translations[currentLanguage] || translations.en)[key] || key;
}

// ==================== 3D TILT (Vanilla Tilt) ====================
function initializeTilt() {
  // Check if Vanilla Tilt script is available
  if (typeof VanillaTilt === 'undefined') {
    // Load Vanilla Tilt from CDN
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/vanilla-tilt@1.8.0/dist/vanilla-tilt.min.js';
    script.onload = () => {
      applyTilt();
    };
    document.head.appendChild(script);
  } else {
    applyTilt();
  }
}

function applyTilt() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    VanillaTilt.init(card, {
      max: 25,
      speed: 400,
      scale: 1.05
    });
  });
}

// ==================== CHAT FUNCTIONALITY ====================
function initializeChat() {
  // Create chat window if it doesn't exist
  if (!document.querySelector('.chat-window')) {
    createChatWindow();
  }
  
  const chatInput = document.querySelector('.chat-input');
  const chatSend = document.querySelector('.chat-send');
  
  if (chatSend) {
    chatSend.addEventListener('click', sendMessage);
  }
  
  if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
      }
    });
  }
}

function createChatWindow() {
  const chatWindow = document.createElement('div');
  chatWindow.className = 'chat-window';
  chatWindow.innerHTML = `
    <div class="chat-header">
      <h3>🌙 ${t('title')}</h3>
      <button class="chat-close">✕</button>
    </div>
    <div class="chat-messages" id="chat-messages"></div>
    <div class="chat-input-area">
      <input type="text" class="chat-input" placeholder="${t('chatPlaceholder')}">
      <button class="chat-send">${t('send')}</button>
    </div>
  `;
  document.body.appendChild(chatWindow);
  
  // Add close button functionality
  chatWindow.querySelector('.chat-close').addEventListener('click', () => {
    chatWindow.style.display = 'none';
  });
}

function sendMessage() {
  const chatInput = document.querySelector('.chat-input');
  const chatMessages = document.getElementById('chat-messages');
  const message = chatInput.value.trim();
  
  if (!message) return;
  
  // Check message limit
  if (!isPremium && messageCount >= MAX_FREE_MESSAGES) {
    showPremiumModal();
    return;
  }
  
  // Add user message
  const userMsg = document.createElement('div');
  userMsg.className = 'chat-message user';
  userMsg.textContent = message;
  chatMessages.appendChild(userMsg);
  chatInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
  
  // Increment message count
  messageCount++;
  localStorage.setItem('messageCount', messageCount);
  
  // Simulate AI response (replace with actual API call)
  setTimeout(() => {
    const aiMsg = document.createElement('div');
    aiMsg.className = 'chat-message ai';
    aiMsg.textContent = generateMysticResponse(message);
    chatMessages.appendChild(aiMsg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 500);
  
  // Show premium modal after limit reached
  if (!isPremium && messageCount >= MAX_FREE_MESSAGES) {
    setTimeout(() => showPremiumModal(), 1000);
  }
}

function generateMysticResponse(message) {
  const responses = [
    '✦ The cosmic forces are aligned with your question...',
    '✦ The cards reveal a deeper truth within your words...',
    '✦ Your spirit seeks wisdom beyond the veil...',
    '✦ The universe whispers its secrets to those who listen...',
    '✦ Ascend to higher understanding through introspection...',
    '✦ The ancient prophecies echo your inquiry...',
    '✦ Your destiny unfolds in mysterious ways...',
    '✦ The mystic energies converge around your question...'
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

// ==================== PREMIUM MODAL ====================
function showPremiumModal() {
  let modal = document.querySelector('.premium-modal');
  
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'premium-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <h2>${t('premiumTitle')}</h2>
        <p>${t('messageLimitReached')}</p>
        <div class="modal-price">${t('premiumPrice')}</div>
        <ul class="modal-features">
          ${t('premiumFeatures').map(f => `<li>${f}</li>`).join('')}
        </ul>
        <div class="modal-buttons">
          <button class="btn-subscribe">${t('subscribe')}</button>
          <button class="btn-close-modal">${t('close')}</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    
    modal.querySelector('.btn-close-modal').addEventListener('click', () => {
      modal.classList.remove('active');
    });
    
    modal.querySelector('.btn-subscribe').addEventListener('click', () => {
      // In production, integrate with payment processor (Stripe, etc.)
      console.log('Subscribe clicked - integrate with payment processor');
      // Simulate subscription
      isPremium = true;
      localStorage.setItem('isPremium', 'true');
      messageCount = 0;
      localStorage.setItem('messageCount', '0');
      modal.classList.remove('active');
      alert('Thank you for subscribing! You now have unlimited access.');
    });
  }
  
  modal.classList.add('active');
}

// ==================== AWARENESS (BOOKS) FUNCTIONS ====================
function initializeBooks() {
  const booksList = document.querySelector('.books-list');
  if (!booksList) return;
  
  const books = JSON.parse(localStorage.getItem('books') || '[]');
  
  if (books.length === 0) {
    booksList.innerHTML = '<p style="color: #d4af37; text-align: center;">No books available yet. Add books from the admin panel.</p>';
    return;
  }
  
  booksList.innerHTML = '';
  books.forEach((book, index) => {
    const bookItem = document.createElement('div');
    bookItem.className = 'book-item';
    
    const isFullText = isPremium;
    const textContent = isFullText ? book.text : book.text.substring(0, Math.floor(book.text.length * 0.3));
    
    bookItem.innerHTML = `
      <div class="book-title">${book.title}</div>
      <div class="book-content ${!isFullText ? 'blurred' : ''}">
        ${textContent}
        ${!isFullText ? '<div class="subscribe-overlay"><button class="subscribe-btn">${t('subscribe')}</button></div>' : ''}
      </div>
    `;
    
    if (!isFullText) {
      const btn = bookItem.querySelector('.subscribe-btn');
      if (btn) {
        btn.textContent = t('subscribe');
        btn.addEventListener('click', showPremiumModal);
      }
    }
    
    booksList.appendChild(bookItem);
  });
}

// ==================== ADMIN FUNCTIONS ====================
function initializeAdmin() {
  const form = document.querySelector('.admin-form');
  if (!form) return;
  
  const submitBtn = form.querySelector('.btn-submit');
  if (submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      addBook(form);
    });
  }
  
  displayBooks();
}

function addBook(form) {
  const titleInput = form.querySelector('input[type="text"]');
  const textInput = form.querySelector('textarea');
  
  if (!titleInput.value.trim() || !textInput.value.trim()) {
    alert('Please fill in all fields');
    return;
  }
  
  const books = JSON.parse(localStorage.getItem('books') || '[]');
  books.push({
    title: titleInput.value,
    text: textInput.value,
    id: Date.now()
  });
  
  localStorage.setItem('books', JSON.stringify(books));
  titleInput.value = '';
  textInput.value = '';
  displayBooks();
  alert('Book added successfully!');
}

function displayBooks() {
  const booksManagement = document.querySelector('.books-management');
  if (!booksManagement) return;
  
  const books = JSON.parse(localStorage.getItem('books') || '[]');
  const booksList = booksManagement.querySelector('.admin-books-list') || document.createElement('div');
  booksList.className = 'admin-books-list';
  booksList.innerHTML = '';
  
  books.forEach((book) => {
    const item = document.createElement('div');
    item.className = 'book-admin-item';
    item.innerHTML = `
      <span class="book-admin-title">${book.title}</span>
      <button class="btn-delete" onclick="deleteBook(${book.id})">Delete</button>
    `;
    booksList.appendChild(item);
  });
  
  if (!booksManagement.querySelector('.admin-books-list')) {
    booksManagement.appendChild(booksList);
  }
}

function deleteBook(id) {
  if (!confirm('Are you sure you want to delete this book?')) return;
  
  let books = JSON.parse(localStorage.getItem('books') || '[]');
  books = books.filter(book => book.id !== id);
  localStorage.setItem('books', JSON.stringify(books));
  displayBooks();
}

// ==================== GDPR - DELETE DATA ====================
function setupEventListeners() {
  const deleteDataBtn = document.querySelector('.delete-data-btn');
  if (deleteDataBtn) {
    deleteDataBtn.addEventListener('click', deleteAllData);
  }
}

function deleteAllData() {
  if (!confirm('Are you sure you want to delete all your data? This cannot be undone.')) return;
  
  // Clear localStorage
  localStorage.clear();
  
  // Reset state
  currentLanguage = 'en';
  messageCount = 0;
  isPremium = false;
  
  // Clear chat messages
  const chatMessages = document.getElementById('chat-messages');
  if (chatMessages) chatMessages.innerHTML = '';
  
  alert('All your data has been deleted.');
  location.reload();
}

// ==================== EXPORT FUNCTIONS ====================
window.deleteBook = deleteBook;
window.showPremiumModal = showPremiumModal;
window.initializeBooks = initializeBooks;
window.initializeAdmin = initializeAdmin;
