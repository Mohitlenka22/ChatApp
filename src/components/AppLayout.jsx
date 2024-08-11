import { useParams } from 'react-router-dom';
import { sampleData } from '../utils/constants';
import ChatList from './ChatList';
import Header from './Header';
import Title from './Title';
import Profile from './Profile';

const AppLayout = WrappedComponent => {
  return props => {
    const params = useParams();
    const chatId = params?.chatId;

    const handleDeleteChat = (e, _id, groupChat) => {
      e.preventDefault();
      console.log(_id, groupChat);
    };
    return (
      <>
        <Title />
        <Header />
        <div className="grid grid-cols-12 gap-2 h-dvh">
          <div className="col-span-3 overflow-y-auto">
            <ChatList
              handleDeleteChat={handleDeleteChat}
              chats={sampleData}
              chatId={chatId}
              newMessagesAlert={[
                {
                  chatId,
                  count: 4,
                },
              ]}
              onlineUsers={['1', '2']}
            />
          </div>
          <div className="col-span-6">
            <WrappedComponent {...props} />
          </div>
          <div className="col-span-3 bg-gray-800 text-white">
            <Profile />
          </div>
        </div>
      </>
    );
  };
};

export default AppLayout;
