const messageList = [
  {
    id: 1,
    authorId: '2',
    chatId: '123',
    text: 'Hello there!',
  },
  {
    id: 2,
    authorId: '2',
    chatId: '123',
    text: 'Hello there!',
  },
  {
    id: 3,
    authorId: '1',
    chatId: '123',
    text: 'Hello there!',
  },
  {
    id: 4,
    authorId: '1',
    chatId: '123',
    text: 'Hello there!',
  },
  {
  id: 5,
  authorId: '2',
  chatId: '123',
  text: 'Hello there!',
  },
];

module.exports.getAllMessages = () => {
  return messageList;
};

module.exports.addMessage = (messageText) => {
  const msg = {
    id: messageList.length,
    authorId: '1',
    chatId: '123',
    text: messageText
  };

  messageList.push(msg);
  return msg;
};
