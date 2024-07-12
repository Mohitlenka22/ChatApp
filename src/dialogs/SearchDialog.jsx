import { Dialog, DialogTitle } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useState } from 'react';
import UserItem from '../components/UserItem';
import { users } from '../utils/constants';

const SearchDialog = () => {
  const [search, setSearch] = useState('');

  const changeHandler = e => {
    setSearch(e.target.value);
  };

  let isLoadingSendFriendRequest = false;

  const addFriendHandler = id => {
    console.log(id);
  };
  return (
    <Dialog open>
      <div className="p-8 w-96 text-center">
        <DialogTitle textAlign={'center'}>Find People</DialogTitle>
        <input
          className="border border-black outline-none p-2 m-2 w-80"
          type="text"
          name="search"
          value={search}
          onChange={changeHandler}
          placeholder={'Search'}
        />

        <div>
          {users.map(user => (
            <UserItem user={user} key={user._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest} />
          ))}
        </div>
      </div>
    </Dialog>
  );
};

export default SearchDialog;
