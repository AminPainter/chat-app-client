import { Avatar, Chip } from '@material-tailwind/react';
import classNames from 'classnames';

const Chat = ({ emoji, title, avatar, unread, variant = 'direct' }) => (
  <div className='flex justify-between items-center p-2 rounded-lg transition-colors hover:bg-brand-light'>
    <div className='flex items-center gap-2'>
      {variant === 'direct' ? (
        <Avatar src={avatar} className='h-8 w-8' />
      ) : (
        <span>{emoji}</span>
      )}

      <p
        className={classNames('text-grey-100 tracking-widest text-sm', {
          capitalize: variant === 'direct'
        })}>
        {variant === 'channel' && '#'}
        {title}
      </p>
    </div>

    {unread && +unread !== 0 ? (
      <Chip className='bg-brand-light text-white' value={unread} />
    ) : null}
  </div>
);

export default Chat;
