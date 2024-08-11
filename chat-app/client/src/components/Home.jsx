import AppLayout from './AppLayout';

const Home = () => {
  return (
    <div className="h-full bg-gray-400">
      <div className="flex justify-center py-6 text-xl font-medium">Select a Friend to Chat</div>
    </div>
  );
};

export default AppLayout(Home);
