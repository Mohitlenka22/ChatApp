import ChatItem from './ChatItem';

const ChatList = ({
  w = '100%',
  chats = [],
  chatId,
  onlineUsers = [],
  newMessagesAlert = [
    {
      chatId: '',
      count: 0,
    },
  ],
  handleDeleteChat,
}) => {
  return (
    <div>
      {chats?.map((data, index) => {
        const { avatar, name, _id, groupChat, members } = data;

        const newMessageAlert = newMessagesAlert.find(({ chatId }) => chatId === _id);
        const isOnline = members?.some(member => onlineUsers.includes(_id));

        return (
          <div>
            <ChatItem
              newMessageAlert={newMessageAlert}
              isOnline={isOnline}
              avatar={avatar}
              name={name}
              _id={_id}
              key={_id}
              groupChat={groupChat}
              sameSender={chatId === _id}
              handleDeleteChat={handleDeleteChat}
              index={index}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChatList;
