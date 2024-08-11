import { IconButton } from '@mui/material';
import AppLayout from './AppLayout';
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material';
import { useRef } from 'react';
import FileMenu from '../dialogs/FileMenu';
import { sampleMessages } from '../utils/constants';
import MessageComponent from './MessageComponent';

const user = {
  _id: 'kjdhfkjhdkf',
  name: 'mohit',
};

const Chat = () => {
  const containerRef = useRef(null);

  return (
    <>
      <div ref={containerRef} className="h-5/6 p-4 flex flex-col bg-gray-100 m-2">
        {sampleMessages.map(message => (
          <MessageComponent key={message._id} message={message} user={user} />
        ))}
      </div>

      <div className="flex">
        <IconButton style={{ backgroundColor: 'gray', color: 'white', padding: '0.4rem', marginRight: '0.5rem' }}>
          <AttachFileIcon />
        </IconButton>

        <input className="w-full bg-gray-200 rounded-lg p-2" type="text" name="" id="" placeholder="Type Message Here..." />

        <IconButton style={{ backgroundColor: 'gray', color: 'white', padding: '0.4rem', marginLeft: '0.5rem' }} type="submit">
          <SendIcon />
        </IconButton>
      </div>
      <FileMenu />
    </>
  );
};

export default AppLayout(Chat);
