import { Typography, Avatar } from '@material-tailwind/react';

import avatarImg from 'images/avatar.png';

const DashboardAvatar = () => (
  <div className='flex gap-5 bg-brand-light p-3 mt-10 rounded-xl sticky top-0'>
    <Avatar src={avatarImg} />

    <div className='flex flex-col justify-center'>
      <Typography variant='h6' color='white'>
        Amin
      </Typography>

      <Typography
        variant='small'
        className='text-grey-400 flex gap-2 items-center'>
        <span className='h-2 w-2 bg-green-400 rounded-full'></span>
        <span>Active for chat</span>
      </Typography>
    </div>
  </div>
);

export default DashboardAvatar;
