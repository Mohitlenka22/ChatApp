import { Suspense, lazy, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Backdrop, IconButton, Tooltip } from '@mui/material';
import {
  Logout as LogoutIcon,
  Add as AddIcon,
  Group as GroupIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Chat as ChatIcon,
} from '@mui/icons-material';

const SearchDialog = lazy(() => import('../dialogs/SearchDialog'));
const NewGroupDialog = lazy(() => import('../dialogs/NewGroups'));
const NotificationDialog = lazy(() => import('../dialogs/Notifications'));

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const navigate = useNavigate();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const openSearch = () => {
    setIsSearch(!isSearch);
  };

  const openNewGroup = () => {
    setIsNewGroup(!isNewGroup);
  };

  const openNotification = () => {
    setIsNotification(!isNotification);
  };

  const navigateToGroup = () => navigate('/groups');

  const logoutHandler = () => {
    console.log('Logout');
  };

  return (
    <>
      <div className=" bg-[#2C3E50] shadow-lg">
        <header className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex w-full mx-4 border-b-2 lg:border-b-0 justify-between items-center p-4 lg:p-0">
            <h1 className="flex items-center space-x-1 text-xl lg:text-2xl text-[#ECF0F1] lg:ml-8">
              <ChatIcon />
              <span>Chat</span>
            </h1>
            <ul className="lg:hidden flex flex-col justify-center items-stretch space-y-1" onClick={toggleNavbar}>
              <li className="bg-[#ECF0F1] h-1 w-8 rounded-xl"></li>
              <li className="bg-[#ECF0F1] h-1 w-8 rounded-xl"></li>
              <li className="bg-[#ECF0F1] h-1 w-8 rounded-xl"></li>
            </ul>
          </div>

          <nav className={isOpen ? 'visible' : 'hidden lg:block'}>
            <ul className="flex flex-col p-4 space-y-4 lg:space-y-0 items-center lg:flex-row lg:space-x-4 lg:p-5 lg:mr-8 ">
              <IconBtn title={'Search'} Icon={SearchIcon} onClick={openSearch} />
              <IconBtn title={'New Group'} Icon={AddIcon} onClick={openNewGroup} />
              <IconBtn title={'Manage Groups'} Icon={GroupIcon} onClick={navigateToGroup} />
              <IconBtn title={'Notifications'} Icon={NotificationsIcon} onClick={openNotification} />
              <IconBtn title={'Logout'} Icon={LogoutIcon} onClick={logoutHandler} />
            </ul>
          </nav>
        </header>
      </div>
      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <SearchDialog />
        </Suspense>
      )}
      {isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
          <NewGroupDialog />
        </Suspense>
      )}
      {isNotification && (
        <Suspense fallback={<Backdrop open />}>
          <NotificationDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, Icon, onClick }) => (
  <Tooltip title={title}>
    <IconButton onClick={onClick}>
      <Icon className="text-white" />
    </IconButton>
  </Tooltip>
);

export default Header;
