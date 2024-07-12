import { Add as AddIcon, Remove as RemoveIcon } from '@mui/icons-material';
import { Avatar, IconButton } from '@mui/material';
import { memo } from 'react';

const UserItem = ({ user, handler, handlerIsLoading }) => {
  const { name, _id, avatar, isAdded } = user;
  return (
    <div>
      <div className="flex items-center justify-center m-2 w-full space-x-4">
        <Avatar />
        <h1 className="text-nowrap overflow-hidden text-ellipsis w-full">{name}</h1>
        <IconButton className="p-2" onClick={() => handler(_id)} disabled={handlerIsLoading}>
          {isAdded ? (
            <RemoveIcon className="bg-red-600 rounded-full  text-white" />
          ) : (
            <AddIcon className="bg-blue-600 rounded-full  text-white" />
          )}
        </IconButton>
      </div>
    </div>
  );
};

export default memo(UserItem);
