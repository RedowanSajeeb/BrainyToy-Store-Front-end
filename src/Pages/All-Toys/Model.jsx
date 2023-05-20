import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  
  IconButton,
  Typography,
  
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Example() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <React.Fragment>
      <Button onClick={handleOpen}>Connect Walletu</Button>
      <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <Typography variant="h5" color="blue-gray">
            Connect a Walletfd
          </Typography>
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={handleOpen}
          >
            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
          </IconButton>
        </DialogHeader>
        <DialogBody className="overflow-y-scroll pr-2">
          <div className="mb-6">
            <Typography
              variant="small"
              color="gray"
              className="font-semibold opacity-70"
            >
              Popular
            </Typography>
           
          </div>        
                 
        </DialogBody>
    
      </Dialog>
    </React.Fragment>
  );
}
