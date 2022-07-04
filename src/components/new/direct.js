import { Dialog, Typography, Input, Button } from '@material-tailwind/react';

const Form = ({ open, setOpen }) => (
  <Dialog
    className='px-10 py-6 space-y-4 bg-brand-dark'
    open={open}
    handler={() => setOpen(!open)}>
    <Typography className='mb-6 uppercase text-grey-300'>
      Add new contact
    </Typography>

    <Input label='User Name' className='bg-brand' />
    <Input label='User Public Code' className='bg-brand' />

    <div className='!mt-8 space-x-4'>
      <Button>Add user</Button>
      <Button variant='outlined' onClick={() => setOpen(false)}>
        Cancel
      </Button>
    </div>
  </Dialog>
);

export default Form;
