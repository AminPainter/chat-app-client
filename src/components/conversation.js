import { Avatar } from '@material-tailwind/react';
import classNames from 'classnames';

import Message from 'components/message';

import testParticipant from 'images/avatar.png';

const Conversation = () => (
  <div className='bg-brand-dark text-grey-100'>
    <div className='bg-brand-dark shadow-2xl py-4 px-8 flex items-center gap-5'>
      <div>🎹</div>
      <div>
        <span className='block'>#music</span>
        <span className='text-xs text-grey-100 text-opacity-50'>
          This group is made for music lovers!
        </span>
      </div>

      <div className='ml-auto grid grid-cols-4 gap-3'>
        <Avatar src={testParticipant} />
        <Avatar src={testParticipant} />
        <Avatar src={testParticipant} />
        <div className='bg-brand-light rounded-lg flex items-center justify-center'>
          +10
        </div>
      </div>
    </div>

    <div className='px-16 py-8 flex flex-col gap-3'>
      {ourChats.map((message, i) => (
        <Message
          key={message.id}
          {...message}
          className={classNames({
            'mt-10':
              ourChats[i - 1] && ourChats[i - 1].variant !== message.variant
          })}
        />
      ))}
    </div>
  </div>
);

const ourChats = [
  {
    id: 42,
    variant: 'sender',
    text: 'Hey, this is Amin'
  },
  {
    id: 41,
    variant: 'sender',
    text: 'I was hoping if we could hangout tonight'
  },
  {
    id: 14,
    variant: 'sender',
    text: 'If at all you are free'
  },
  {
    id: 4,
    variant: 'receiver',
    text: 'Sure! Where to?'
  },
  {
    id: 1,
    variant: 'receiver',
    text: 'I really have mood for chinese today'
  }
];

export default Conversation;
