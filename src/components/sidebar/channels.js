import { useState } from 'react';
import { Typography, Button } from '@material-tailwind/react';

import Chat from 'components/chat';
import AddNewChannelForm from 'components/new/channel';

const Channels = () => {
  const [isAddNewChannelOpen, setAddNewChannelOpen] = useState(false);

  return (
    <div className='mt-14 space-y-1'>
      <div className='flex justify-between items-center mb-4 px-2'>
        <Typography variant='small' className='text-grey-600 uppercase'>
          channels
        </Typography>

        <Button
          size='sm'
          className='!p-2 h-8 w-8'
          onClick={() => setAddNewChannelOpen(true)}>
          +
        </Button>
      </div>

      {channels.map(channel => (
        <Chat key={channel.id} variant='channel' {...channel} />
      ))}

      <AddNewChannelForm
        open={isAddNewChannelOpen}
        setOpen={setAddNewChannelOpen}
      />
    </div>
  );
};

export default Channels;

const channels = [
  {
    id: 1,
    emoji: '🎹',
    title: 'music',
    unread: 5
  },
  {
    id: 2,
    emoji: '📚',
    title: 'college',
    unread: 3
  },
  {
    id: 3,
    emoji: '⚽',
    title: 'football',
    unread: 0
  },
  {
    id: 4,
    emoji: '💻',
    title: 'coding',
    unread: 10
  }
];
