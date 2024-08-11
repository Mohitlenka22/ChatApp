import { Link } from 'react-router-dom';
import AvatarCard from './AvatarCard';
import { memo } from 'react';

const ChatItem = ({ avatar = [], name, _id, groupChat = false, sameSender, isOnline, newMessageAlert, index = 0, handleDeleteChat }) => {
  return (
    <Link className="hover:bg-slate-500" to={`/chat/${_id}`} onContextMenu={e => handleDeleteChat(e, _id, groupChat)}>
      <div
        className="flex gap-4 items-center p-4 relative  hover:shadow-lg"
        style={{ backgroundColor: sameSender ? 'black' : 'unset', color: sameSender ? 'white' : 'unset' }}
      >
        <AvatarCard avatar={avatar} />
        <div className="pl-8 z-50">
          <h1>{name}</h1>
          {newMessageAlert && <div>{newMessageAlert.count} new Message</div>}
        </div>

        {isOnline && <div className="w-2 h-2 bg-green-600 rounded-full absolute top-1/2 right-4 -translate-y-1/2"></div>}
      </div>
    </Link>
  );
};

export default memo(ChatItem);
