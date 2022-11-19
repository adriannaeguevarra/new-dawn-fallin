import React from "react";
import Button from "@mui/material/Button";


export default function FileUpload() {
  return (
    <Button variant="contained" component="label">
      Upload File
      <input type="file" hidden />
    </Button>
  );
}
