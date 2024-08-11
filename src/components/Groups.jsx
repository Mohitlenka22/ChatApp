import {
  Add as AddIcon,
  Delete as DeleteIcon,
  Done as DoneIcon,
  Edit as EditIcon,
  KeyboardBackspace as KeyboardBackspaceIcon,
} from '@mui/icons-material';
import { Backdrop, IconButton, Tooltip } from '@mui/material';
import { Suspense, lazy, memo, useEffect, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { sampleData, users } from '../utils/constants';
import AvatarCard from './AvatarCard';
import UserItem from './UserItem';

const ConfirmDeleteDialog = lazy(() => import('../dialogs/ConfirmDeleteDialog'));
const AddMemberDialog = lazy(() => import('../dialogs/AddMemberDialog'));

const Group = () => {
  const chatId = useSearchParams()[0].get('group');
  const navigate = useNavigate();

  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState('');
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);

  const isAddMember = false;

  const navigateBack = () => {
    navigate('/');
  };

  const updateGroupName = () => {
    setIsEdit(false);
  };

  useEffect(() => {
    if (chatId) {
      setGroupName(`Group Name ${chatId}`);
      setGroupNameUpdatedValue(`Group Name ${chatId}`);
    }

    return () => {
      setGroupName('');
      setGroupNameUpdatedValue('');
      setIsEdit(false);
    };
  }, [chatId]);

  const openAddMemberHandler = () => {};

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const deleteHandler = () => {};

  const removeMemberHandler = () => {};

  const IconBtns = (
    <>
      <Tooltip>
        <IconButton
          style={{
            backgroundColor: 'gray',
            color: '#fff',
            margin: '1rem',
            alignSelf: 'flex-start',
          }}
          onClick={navigateBack}
        >
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <div className="flex items-center justify-center -m-12">
      {isEdit ? (
        <>
          <input
            value={groupNameUpdatedValue}
            onChange={e => setGroupNameUpdatedValue(e.target.value)}
            className="border p-2"
            type="text"
            name=""
            id=""
          />
          <IconButton onClick={updateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <h1 className="text-3xl">{groupName}</h1>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </div>
  );

  const ButtonGroup = (
    <div className="flex flex-col space-y-4">
      <button className="text-white bg-blue-500 p-2 rounded-lg flex items-center" onClick={openAddMemberHandler}>
        <AddIcon />
        <span>Add Member</span>
      </button>
      <button className="text-red-500 border border-red-500 p-2 rounded-lg flex items-center" onClick={openConfirmDeleteHandler}>
        <DeleteIcon />
        <span>Delete Group</span>
      </button>
    </div>
  );

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 bg-slate-400 h-dvh overflow-y-auto">
        <GroupList MyGroups={sampleData} chatId={chatId} />
      </div>
      <div className="col-span-8 flex flex-col items-center h-dvh">
        {IconBtns}
        {groupName && (
          <>
            {GroupName}
            <h1 className="text-xl py-16">Members</h1>
            <div className="w-full h-1/2 p-2 m-4 max-w-3xl  overflow-y-auto">
              {sampleData.map(user => (
                <UserItem
                  key={user._id}
                  user={user}
                  isAdded
                  styling={{
                    boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.2)',
                    borderRadius: '0.5rem',
                    padding: '1rem 2rem',
                  }}
                  handler={removeMemberHandler}
                />
              ))}
            </div>

            {ButtonGroup}
          </>
        )}
      </div>
      {isAddMember && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog />
        </Suspense>
      )}
      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog open={confirmDeleteDialog} handleClose={closeConfirmDeleteHandler} deleteHandler={deleteHandler} />
        </Suspense>
      )}
    </div>
  );
};

const GroupList = ({ w = '100%', MyGroups = [], chatId }) => {
  return (
    <div>
      {MyGroups.length > 0 ? (
        MyGroups.map(group => <GroupListItem key={group._id} group={group} chatId={chatId} />)
      ) : (
        <h1 className="p-4 text-center">No Groups</h1>
      )}
    </div>
  );
};

const GroupListItem = memo(({ group, chatId }) => {
  const { name, avatar, _id } = group;
  return (
    <Link
      to={`?group=${_id}`}
      onClick={e => {
        if (chatId === _id) {
          e.preventDefault();
        }
      }}
    >
      <div className="flex items-center justify-center">
        <AvatarCard avatar={avatar} />
        <h1>{name}</h1>
      </div>
    </Link>
  );
});

export default Group;
