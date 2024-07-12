import { Dialog, DialogTitle } from '@mui/material';
import { users } from '../utils/constants';
import UserItem from '../components/UserItem';
import { useState } from 'react';

const NewGroups = () => {
  const [groupName, setGroupName] = useState('');
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  const changeHandler = e => {
    setGroupName(e.target.value);
  };

  const selectMemberHandler = id => {
    setMembers(prev => prev.map(user => (user._id == id ? { ...user, isAdded: !user.isAdded } : user)));

    const index = selectedMembers.indexOf(id);
    if (index === -1) {
      setSelectedMembers(prev => [...prev, id]);
    } else {
      setSelectedMembers(prev => prev.filter(member => member !== id));
    }
  };

  const closeHandler = e => {};

  const submitHandler = e => {};

  return (
    <Dialog open onClick={closeHandler}>
      <div className="w-96 p-6 m-2 text-center">
        <DialogTitle>New Group</DialogTitle>
        <input
          className="border border-black outline-none p-2 m-2 w-80"
          placeholder="Group Name"
          type="text"
          value={groupName}
          onChange={changeHandler}
        />

        <h1 className="text-center text-xl">Members</h1>
        <div className="m-2">
          {users.map(user => (
            <UserItem user={user} key={user._id} handler={selectMemberHandler} isAdded={selectedMembers.includes(user._id)} />
          ))}
        </div>

        <div className="flex items-center justify-evenly m-2">
          <button className="text-red-600">CANCEL</button>
          <button onClick={submitHandler} className="bg-blue-600 text-white p-2">
            CREATE
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default NewGroups;
