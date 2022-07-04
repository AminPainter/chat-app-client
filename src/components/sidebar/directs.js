import { useState } from 'react';
import { Typography, Button } from '@material-tailwind/react';

import Chat from 'components/chat';
import AddNewDirectForm from 'components/new/direct';

import testAvatarImg from 'images/avatar.png';

const Directs = () => {
  const [isAddNewDirectOpen, setAddNewDirectOpen] = useState(false);

  return (
    <div className='mt-5 space-y-1'>
      <div className='flex justify-between items-center mb-4 px-2'>
        <Typography variant='small' className='text-grey-600 uppercase'>
          direct
        </Typography>

        <Button
          size='sm'
          className='!p-2 h-8 w-8'
          onClick={() => setAddNewDirectOpen(true)}>
          +
        </Button>
      </div>

      {directs.map(direct => (
        <Chat key={direct.id} {...direct} />
      ))}

      <AddNewDirectForm
        open={isAddNewDirectOpen}
        setOpen={setAddNewDirectOpen}
      />
    </div>
  );
};

export default Directs;

const directs = [
  {
    id: 1,
    title: 'kaley',
    avatar: testAvatarImg,
    unread: 0
  },
  {
    id: 2,
    title: 'jannat',
    avatar: testAvatarImg,
    unread: 3
  },
  {
    id: 3,
    title: 'kiara',
    avatar: testAvatarImg,
    unread: 0
  },
  {
    id: 4,
    title: 'eva',
    avatar: testAvatarImg,
    unread: 10
  },
  {
    id: 5,
    title: 'wilson',
    avatar: testAvatarImg,
    unread: 0
  },
  {
    id: 6,
    title: 'asgar',
    avatar: testAvatarImg,
    unread: 0
  }
];
