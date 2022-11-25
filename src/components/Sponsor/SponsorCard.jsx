import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import FileUpload from "../fileUpload";
import SponsorForm from "./SponsorForm";

import newDawnVeteran from "../../assets/newDawnVeteran.jpeg";
const SponsorCard = () => {
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
        src={newDawnVeteran}
      />
      {/* <CardMedia
        sx={{ borderRadius: "50%" }}
        component="img"
        image="https://bit.ly/3UPkw6Q"
        alt="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Veteran: F.Name L.Name
        </Typography>
        <Typography variant="body2" color="text.primary">
          Sponsor: F.Name L.Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Military Branch:
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Dates of Service:
        </Typography>
      </CardContent>
      <div>
        <Button variant="outlined" onClick={handleClickOpen}>
          Information
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Background"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Providing necessities for homeless and disabled and at-risk
              veterans. Comfort Kits are distributed primarily through Veteran
              Stand Downs nationally. Comfort Kits can include items such as
              blankets, toiletries and clothing.
            </DialogContentText>
                  </DialogContent>
                  <DialogContent>
                        {isUploading && <FileUpload userType='veterans'></FileUpload>}
                          {isEdit && <SponsorForm></SponsorForm>}
                      </DialogContent>
                  <DialogActions>
                      <Button onClick={() => { setIsUploading(prevState => !prevState) }}>Upload Files</Button>
                       <Button onClick={() => { setIsEdit(prevState => !prevState)}}>Edit</Button>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Card>
  );
};
export default SponsorCard;
