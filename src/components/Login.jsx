import { useState } from 'react';
import { Avatar } from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { validatePassword, validateUserName } from '../utils/validators';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [avatar, setAvatar] = useState();

  const toggleLogin = e => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  const handleAvatar = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });

  const changeHandler = e => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  console.log(validateUserName(userData.username));
  console.log(validatePassword(userData.password));
  console.log(userData.username);

  return (
    <div className="shadow-xl w-3/12 mx-auto my-36">
      <h1 className="text-center text-2xl">{isLogin ? 'Login' : 'SignUp'}</h1>
      <form className="flex flex-col items-center space-y-5 pt-12 pb-20">
        <div>{error}</div>
        {!isLogin && (
          <>
            <div>
              <Avatar src={avatar} style={{ width: '120px', height: '120px', objectFit: 'contain' }} />
              <label htmlFor="camera" className="relative left-20 bg-gray-600 p-2 rounded-full">
                <CameraAltIcon className="text-white" />
              </label>
              <input type="file" onChange={handleAvatar} id="camera" className="hidden" />
            </div>
            <div>
              <input type="text" className=" border-2 px-12 py-2 outline-none " placeholder="Bio*" />
            </div>
          </>
        )}
        <div>
          <input
            type="text"
            className=" border-2  px-12 py-2 outline-none "
            placeholder="username*"
            name="username"
            value={userData.username}
            onChange={changeHandler}
          />
        </div>
        <div>
          <input
            type="password"
            className="border-2 px-12 py-2 outline-none"
            placeholder="password*"
            name="password"
            value={userData.password}
            onChange={changeHandler}
            autoComplete="on"
          />
        </div>

        <button type="submit" className="text-center border-2 py-2 w-4/5  bg-blue-700 text-white">
          Submit
        </button>
        <h2>OR</h2>
        <button type="button" className="text-center border-2 border-black py-2 w-4/5 text-gray-500" onClick={toggleLogin}>
          {isLogin ? 'SIGNUP INSTEAD' : 'LOGIN INSTEAD'}
        </button>
      </form>
    </div>
  );
};

export default Login;
