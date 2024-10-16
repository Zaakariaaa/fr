document.addEventListener('DOMContentLoaded', function() {
    const chatbotIcon = document.getElementById('chatbot-icon');
    const chatbotWindow = document.getElementById('chatbot-window');
    const closeBtn = document.querySelector('.close-btn');
    const sendBtn = document.querySelector('.send-btn');
    const input = document.querySelector('.chatbot-input');
    const messagesContainer = document.querySelector('.chatbot-messages');
  
    function toggleChatbot() {
        chatbotWindow.classList.toggle('visible');
    }
  
    function closeChatbot() {
        chatbotWindow.classList.remove('visible');
    }
  
    function addMessage(content, isUser = false) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', isUser ? 'user-message' : 'bot-message');
        messageElement.textContent = content;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
  
    function handleUserInput() {
        const userMessage = input.value.trim();
        if (userMessage) {
            addMessage(userMessage, true);
            input.value = '';
            setTimeout(() => {
                addMessage("Merci pour votre message. Comment puis-je vous aider davantage ?");
            }, 1000);
        }
    }
  
    chatbotIcon.addEventListener('click', toggleChatbot);
    closeBtn.addEventListener('click', closeChatbot);
    sendBtn.addEventListener('click', handleUserInput);
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
  
    addMessage("Bonjour ! Comment puis-je vous aider aujourd'hui ?");
});
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    // Ajouter la classe 'visible' à chaque section après un délai
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('visible');
        }, index * 500); // 500 ms d'intervalle entre chaque section
    });
});
