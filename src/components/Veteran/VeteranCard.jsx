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
import newDawnSponsor from "../../assets/newDawnSponsor.jpeg";
import FileUpload from "../fileUpload";
import VetForm from "./VetForm";

const VetCards = () => {
  const [open, setOpen] = React.useState(false);
    const [isUploading, setIsUploading] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);
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
        height: 500,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        padding: 9,
        marginRight: 25,
        boxShadow: "0px 0px 10px rgba(0,0,0,0.18)",
      }}
    >
      <Avatar
        style={{
          width: 256,
          height: 256,
        }}
        src={newDawnSponsor}
      />
      {/* <CardMedia
        sx={{ borderRadius: "100px", width: "70%" }}
        component="img"
        image="https://bit.ly/3AvqTEd"
        alt="Veteran Profile"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sponsor: F.Name L.Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          test123@gmail.com
        </Typography>

        <Typography variant="body2" color="text.primary" nspacing={2}>
          Sponsoring #
        </Typography>
        <Typography align="left" variant="body2" style={{ color: "black" }}>
          Cases Completed
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
                      <DialogContent>
                        {isUploading && <FileUpload userType='sponsors'></FileUpload>}
                        {isEdit && <VetForm></VetForm>}
                      </DialogContent>
            <DialogActions>
                          <Button onClick={() => { setIsUploading(prevState => !prevState) }}>Upload Files</Button>
                          <Button onClick={() => { setIsEdit(prevState => !prevState)}}>Edit</Button>
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
