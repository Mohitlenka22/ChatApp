import moment from 'moment';
import { memo } from 'react';
import RenderAttachment from './RenderAttachment';
import { fileFormat } from '../utils/features';

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachments = [], createdAt } = message;
  const sameSender = sender?._id === user?._id;

  const timeAgo = moment(createdAt).fromNow();

  console.log(attachments);
  return (
    <div
      style={{
        alignSelf: sameSender ? 'flex-end' : 'flex-start',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '5px ',
        padding: '0.5rem',
        width: 'fit-content',
      }}
    >
      {!sameSender && <h1 className="text-cyan-600 font-bold text-sm">{sender.name}</h1>}
      {content && <h1>{content}</h1>}
      {attachments.length > 0 &&
        attachments.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);
          return (
            <div key={index}>
              <a href={url} target="_blank" download className="text-black">
                {RenderAttachment(file, url)}
              </a>
            </div>
          );
        })}
      <h1 className="text-sm text-gray-400">{timeAgo}</h1>
    </div>
  );
};

export default memo(MessageComponent);
