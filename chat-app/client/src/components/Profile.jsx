import { Avatar } from '@mui/material';
import moment from 'moment';

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center m-4">
      <Avatar
        style={{
          width: '200px',
          height: '200px',
          marginBottom: '1rem',
          objectFit: 'contain',
          border: '5px solid white',
        }}
      />
      <div className="my-6">
        <p>Lorem ipsum dolor sit amet</p>
        <p className="text-center opacity-50">Bio</p>
      </div>
      <div className="mb-6">
        <p>MohitLenka</p>
        <p className="text-center opacity-50">name</p>
      </div>
      <div className="mb-6">
        <p>@mohitlenka</p>
        <p className="text-center opacity-50">username</p>
      </div>
      <div>
        <p>{moment().subtract(3, 'months').fromNow()}</p>
        <p className="text-center opacity-50">Joined</p>
      </div>
    </div>
  );
};

export default Profile;
