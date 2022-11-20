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
import Avatar from "@mui/material/Avatar";
import newDawnVeteran from "../../assets/newDawnVeteran.jpeg";

const VetCards = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Card
      style={{
        width: 345,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        padding: 9,
        marginRight: 25,
      }}
    >
      <Avatar
        style={{
          width: 256,
          height: 256,
        }}
        src={newDawnVeteran}
      />
      {/* <CardMedia
        sx={{ borderRadius: "100px", width: "70%" }}
        component="img"
        image="https://bit.ly/3AvqTEd"
        alt="Veteran Profile"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Veteran: First Last M.
        </Typography>
        <Typography variant="body1" color="text.primary">
          Sponsor: First Last M.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Military Branch:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dates of Service:
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
              <Button onClick={handleClose}>Save</Button>
            </DialogActions>
          </Dialog>
        </div>
      </CardActions>
    </Card>
  );
};

export default VetCards;
