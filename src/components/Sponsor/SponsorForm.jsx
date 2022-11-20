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
    sponsored: '',
    caseCompleted: "",
  });
    const handleChange = (e) => {
        
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    // setValue(event.target.value);
    };

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
                  name="firstName"
                  onChange={handleChange}
        />
        <TextField
          label="Last Name"
          id="standard-size-normal"
          defaultValue=""
                  variant="standard"
                   name="lastName"
                  onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          label="Email"
          id="standard-size-normal"
          defaultValue=""
                  variant="standard"
                   name="email"
                  onChange={handleChange}
        />
        
      </div>
      <div>
        <TextField
          label="Sponsors"
          id="standard-size-normal"
          defaultValue=""
                  variant="standard"
                  name="sponsored"
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
