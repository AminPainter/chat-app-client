import Sidebar from 'components/sidebar';
import Conversation from 'components/conversation';

const App = () => {
  return (
    <div className='min-h-screen grid grid-cols-[20rem,1fr]'>
      <Sidebar />

      <Conversation />
    </div>
  );
};

export default App;
