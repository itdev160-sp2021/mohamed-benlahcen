// Array to store messages.
var messages = [];

// Messages type lookup objects.
var messageType = {
  out: 'out-message',
  in: 'in-message',
  unknown: 'unknown-message'
};

// Send data
var data = [
  {
    type: messageType.out,
    user: 'Simo',
    message: 'Hey, any plans for the weekend?'
  },
  {
    type: messageType.in,
    user: 'Jeff',
    message: 'Hi Simo! yes, Hiking!'
  },
  {
    type: messageType.out,
    user: 'Simo',
    message: "Can I join?"
  },
  {
    type: messageType.in,
    user: 'Jeff',
    message: "Sure, That'll be awsome"
  }
];

// Constructor function
function Message(type, user, message) {
  this.type = type;
  this.user = user;
  this.message = message;
}

// Function to Create and Return elements for input message.
function createMessageElement(message){
  // Text element for the message
  var messageText = document.createTextNode(
    message.user + ';' + message.message
  );

  var messageEl = document.createElement('div');
  messageEl.appendChild(messageText);

  // Add a Class
  messageEl.className = message.type;

  return messageEl;
}

// Button click event handler to add a new message.
function addMessageHandler(event){
  var user, type;
  var messageInput = document.getElementById('message-input');
  var messageContainerEl = document.getElementById('message-container');

  // Determine message type and set message variables.
  switch (event.target.id){
    case 'send-button':
      user: 'Simo';
      type: messageType.out;
      break;
    case 'reply-button':
      user: 'Jeff';
      type: messageType.in;
      break;
    default:
      user: 'Unknown';
      type: messageType.unknown;
  }

  // Create new message.
  if (messageInput.value !=''){
    // Construct a message to add to the Array.
    var message =  new Message(type, user, messageInput.value);
    messages.push(message);

    //Create a message element.
    var el = createMessageElement(message);

    // Add the message element to the DOM.
    messageContainerEl.appendChild(el);

    // Reset Input.
    messageInput.value = '';
  }
}

// Loa seed data from the array above
function loadSeedData(){
  for(var i=0; i < data.length; i++){
    var message = new Message(date[i].type, data[i].user, data[i].message);
    messages.push(message);
  }

  // Load view with pre-loaded messages.
  var messagesContainerEl = document.getElementById('message-container');

  for (var i = 0; i < messages.length; i++){
    var message = messages[i];
    var el  = createMessageElement(message)

    messagesContainerEl.appendChild
  }
}

var init = function(){
  // wire event handlers.
  document.getElementById('send-button').onclick = addMessageHandler;
  document.getElementById('reply-button').onclick = addMessageHandler;

  // Load seed data from data array above.
  loadSeedData();
}
init();