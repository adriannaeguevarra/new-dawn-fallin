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
import FileUpload from "../fileUpload";
import SponsorForm from "./SponsorForm";

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
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ borderRadius: "50%" }}
        component="img"
        image="https://bit.ly/3UPkw6Q"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          FName LName
        </Typography>
        <Typography variant="body2" color="text.secondary">
          test123@gmail.com
        </Typography>

        <Typography variant="body2" color="text.primary" container spacing={2}>
          Sponsoring #
        </Typography>
        <Typography
          align="right"
          variant="body3"
          sx={{ color: `secondary.main` }}
        >
          Cases Completed
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
                        {isUploading && <FileUpload userType='sponsors'></FileUpload>}
                          {isEdit && <SponsorForm></SponsorForm>}
                      </DialogContent>
                  <DialogActions>
                      <Button onClick={() => { setIsUploading(prevState => !prevState) }}>Upload Files</Button>
                       <Button onClick={() => { setIsEdit(prevState => !prevState)}}>Edit</Button>
            <Button onClick={handleClose}>Disagree</Button>
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
