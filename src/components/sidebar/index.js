import { Input } from '@material-tailwind/react';

import Avatar from './avatar';
import Channels from './channels';
import Directs from './directs';

const Sidebar = () => (
  <nav className='bg-brand px-4 py-6 text-gray-100 h-screen overflow-auto'>
    <Input
      variant='outlined'
      label='Search'
      className='!text-white bg-brand-light'
    />

    <Avatar />

    <Channels />

    <Directs />
  </nav>
);

export default Sidebar;
