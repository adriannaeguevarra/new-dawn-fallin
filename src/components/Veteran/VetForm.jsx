import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";

const VetForm = () => {
    const [formData, setFormData] = React.useState({
      id: "",
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      militaryBranch: "",
      Dos: "",
      Eos: "",
      location: "",
      profilePicture: "",
      Dob: "",
      dateOfPlace: "",
      rank: "",
      isCasedClosed: "",
      caseCompleted: "",
      notes: "",
        url: "",
        isClosed: false,
      isCompeleted: false,
    });

  //   React.useEffect(() => {
  //     if (state?.type === "FORM_EDIT") {
  //       const editForm = state.payload.vetform.id;
  //       setFormData(() => {
  //         const inputData = { ...formData, ...state.payload };
  //         inputData.vetform.id = editForm;
  //         return inputData;
  //       });
  //     }
  //   });
  

    const handleChange = (e) => {
        
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    // setValue(event.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        //send formData to database wih GraphQL

    }

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
                    defaultValue="email@email.com"
                       name="email"
                    onChange={handleChange}
                    helperText='We will never share your email.'
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="FirstName"
                    name="firstName"
                    onChange={handleChange}
                    
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="LastName"
                    name="lastName"
                    onChange={handleChange}
                    
                />

                <TextField
                    id="outlined-number"
                    label="Age"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    name="age"
                    onChange={handleChange}
                />
                
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Military Branch"
                    name="militaryBranch"
                    onChange={handleChange}
                />
                {/* <MobileDatePicker
          autoOk
          label="For desktop"
          minDate={new Date("2017-01-01")}
          value={selectedDate}
          onChange={handleChange}
          renderInput={(props) => <TextField {...props} />}
        /> */}

                {/* <DesktopDatePicker
          autoOk
          label="For desktop"
          minDate={new Date("2017-01-01")}
          value={selectedDate}
          onChange={(date) => handleDateChange(date)}
          renderInput={(props) => <TextField {...props} />}
        /> */}
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Rank"
                    name="rank"
                    onChange={handleChange}
                />

                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Case Closed"
                        
                    />
                    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                </FormGroup>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="Case Completed"
                    />
                    <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
                </FormGroup>
            </div>
            <div>
                <Button
                    onClick={handleSubmit}
                >Done
                </Button>
                {/* <TextField
                    id="filled-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={10}
                    onChange={handleChange}
                    variant="filled"
                    name="notes"
                /> */}
            </div>
            {/* <Link href="#">URL</Link>
            <Link href="#" color="inherit">
                {'color="inherit"'}
            </Link> */}
        </Box>
    )
};

export default VetForm;
