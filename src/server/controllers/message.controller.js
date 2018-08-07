const messageList = [
    {
        id: 1,
        authorId: '1',
        chatId: '123',
        text: 'Hello there!',
    },
    {
        id: 2,
        authorId: '1',
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
];

module.exports.getAllMessages = () => {
    return messageList;
};

module.exports.sendMessage = (messageText) => {
    messageList.push({
        id: messageList.length,
        authorId: '1',
        chatId: '123',
        text: messageText
    });
}