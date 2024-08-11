import { Button, Dialog, DialogTitle, Stack } from '@mui/material';
import { sampleData } from '../utils/constants';
import UserItem from '../components/UserItem';
import { useState } from 'react';

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {
  const [members, setMembers] = useState(sampleData);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const addFriendHandler = friendId => {
    addMember({ chatId, friendId });
  };

  const selectMemberHandler = id => {
    setSelectedMembers(prev => (prev.includes(id) ? prev.filter(member => member !== id) : [...prev, id]));
  };

  const closeHandler = () => {
    console.log('Close Handler');
    setSelectedMembers([]);
    setMembers([]);
  };

  const addMemberSubmitHandler = () => {
    closeHandler();
  };
  return (
    <Dialog open onClose={closeHandler}>
      <Stack p={'2rem'} width={'20rem'} spacing={'2rem'}>
        <DialogTitle textAlign={'center'}>Add Member</DialogTitle>
        <Stack spacing={'1rem'}>
          {members.length > 0 ? (
            members.map(data => (
              <UserItem key={data._id} user={data} handler={selectMemberHandler} isAdded={selectedMembers.includes(data._id)} />
            ))
          ) : (
            <h1 className="text-lg text-center">No Friends</h1>
          )}
        </Stack>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-evenly'}>
          <Button color="error" onClick={closeHandler}>
            Cancel
          </Button>
          <Button onClick={addMemberSubmitHandler} disabled={isLoadingAddMember} variant="contained">
            Submit Changes
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
