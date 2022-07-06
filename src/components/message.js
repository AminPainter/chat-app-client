import { Typography } from '@material-tailwind/react';
import classNames from 'classnames';

const Message = ({ text, className, variant = 'receiver' }) => {
  return (
    <div
      style={{
        [variant === 'receiver'
          ? 'borderTopLeftRadius'
          : 'borderTopRightRadius']: '3px'
      }}
      className={classNames(
        'py-1 px-3 rounded-xl text-sm bg-brand-light w-1/2',
        { 'self-end': variant === 'sender' },
        className
      )}>
      <Typography>{text}</Typography>
    </div>
  );
};

export default Message;
