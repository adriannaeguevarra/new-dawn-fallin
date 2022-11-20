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
// import DatePicker from "@mui/material/date";

const VetForm = () => {
  //   const [formData, setFormData] = React.useState({
  //     id: "",
  //     firstName: "",
  //     lastName: "",
  //     age: "",
  //     email: "",
  //     militaryBranch: "",
  //     Dos: "",
  //     Eos: "",
  //     location: "",
  //     profilePicture: "",
  //     Dob: "",
  //     dateOfPlace: "",
  //     rank: "",
  //     isCasedClosed: "",
  //     caseCompleted: "",
  //     notes: "",
  //     url: "",
  //   });

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
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
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
          required
          id="outlined-required"
          label="Required"
          defaultValue="FirstName"
        />
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="LastName"
        />

        <TextField
          id="outlined-number"
          label="Age"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Military Branch"
        />
        {/* <DesktopDatePicker
          autoOk
          label="For desktop"
          minDate={new Date("2017-01-01")}
          value={selectedDate}
          onChange={(date) => handleDateChange(date)}
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
        <TextField
          id="filled-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={10}
          value={value}
          onChange={handleChange}
          variant="filled"
        />
      </div>
      <Link href="#">URL</Link>
      <Link href="#" color="inherit">
        {'color="inherit"'}
      </Link>
    </Box>
  );
};

export default VetForm;
