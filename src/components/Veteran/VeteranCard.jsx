import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAuthenticator } from "@aws-amplify/ui-react";

const VetCards = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ borderRadius: "50%" }}
        component="img"
        image="https://bit.ly/3AvqTEd"
        alt="Veteran Profile"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          First Last M.
        </Typography>
        <Typography variant="body1" color="text.primary">
          Sponsor M. LastName
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Military Branch
        </Typography>
        <Typography variant="body2" color="text.secondary">
          1775-2010
        </Typography>
      </CardContent>
      <CardActions>
        <div>
          <Button variant="outlined" onClick={handleClickOpen}>
            Edit Profile
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To edit Profile and saves changes to their information. The form
                will pop out as a Modal for them to make any changes
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Form will be imported here"
                type="email"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
          </Dialog>
        </div>
      </CardActions>
    </Card>
  );
};

export default VetCards;
