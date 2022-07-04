import { Dialog, Typography, Input, Button } from '@material-tailwind/react';

const Form = ({ open, setOpen }) => (
  <Dialog
    className='px-10 py-6 space-y-4 bg-brand-dark'
    open={open}
    handler={() => setOpen(!open)}>
    <Typography className='mb-6 uppercase'>Add new channel</Typography>

    <Input label='Channel Name' className='bg-brand' />
    <Input label='Channel Passcode' className='bg-brand' />

    <div className='!mt-8 space-x-4'>
      <Button>Add channel</Button>
      <Button variant='outlined' onClick={() => setOpen(false)}>
        Cancel
      </Button>
    </div>
  </Dialog>
);

export default Form;
