import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const SponsorForm = () => {
  const [sponsorData, setSponsorData] = React.useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    profilePicture: "",
    sponored: "",
    caseCompleted: "",
  });

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="First Name"
          id="standard-size-normal"
          defaultValue=""
          variant="standard"
        />
        <TextField
          label="Last Name"
          id="standard-size-normal"
          defaultValue=""
          variant="standard"
        />
      </div>
      <div>
        <TextField
          label="Email"
          id="standard-size-normal"
          defaultValue=""
          variant="standard"
        />
        <TextField
          label="Profile Picture"
          id="standard-size-normal"
          defaultValue=""
          variant="standard"
        />
      </div>
      <div>
        <TextField
          label="Sponsors"
          id="standard-size-normal"
          defaultValue=""
          variant="standard"
        />
        <TextField
          label="Case Completed"
          id="standard-size-normal"
          defaultValue=""
          variant="standard"
        />
      </div>
    </Box>
  );
};
export default SponsorForm;
