const chatButton = document.querySelector('.chatbox__button');
const chatContent = document.querySelector('.chatbox__support');
const icons = {
    isClicked: '<span id="boot-icon" class="bi bi-chat-square-dots-fill" style="font-size: 35px; color: #e84393;"></span>',
    isNotClicked: '<span id="boot-icon" class="bi bi-chat-square-dots-fill" style="font-size: 35px; color: #e84393;"></span>'
}
const chatbox = new InteractiveChatbox(chatButton, chatContent, icons);
chatbox.display();
chatbox.toggleIcon(false, chatButton);