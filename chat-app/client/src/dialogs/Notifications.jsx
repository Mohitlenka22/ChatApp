import { Avatar, Dialog, DialogTitle, IconButton } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { sampleNotifications } from '../utils/constants';
import { memo } from 'react';

const Notifications = () => {
  const friendRequestHandler = ({ _id, accept }) => {
    // Accept friend request
  };
  return (
    <Dialog open>
      <div className="w-96 p-6 m-2 text-center">
        <DialogTitle>Notifications</DialogTitle>

        {sampleNotifications.length > 0 ? (
          sampleNotifications.map(({ sender, _id }) => (
            <NotificationItem sender={sender} _id={_id} key={_id} handler={friendRequestHandler} />
          ))
        ) : (
          <h1 className="text-center text-lg">0 notifications</h1>
        )}
      </div>
    </Dialog>
  );
};

const NotificationItem = memo(({ sender, _id, handler }) => {
  const { name, avatar } = sender;
  return (
    <div>
      <div className="flex items-center justify-center m-2 w-full space-x-4">
        <Avatar src={avatar} />
        <h1 className="text-nowrap overflow-hidden text-ellipsis w-full">{`${name} sent you a friend request`}</h1>
        <div className="flex space-x-4 justify-center">
          <button className="text-blue-600" onClick={() => handler({ _id, accept: true })}>
            Accept
          </button>
          <button className="text-red-700" onClick={() => handler({ _id, accept: false })}>
            Reject
          </button>
        </div>
      </div>
    </div>
  );
});

export default Notifications;
