import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
const VetProfile = () => {
  //  const[pageData, setPageData] =  React.useState({
  // arrayOfProfile:[],
  // veteranComponents:[],
  // pageIndex:0,
  // pageSize:4,
  //  })

  //  React.useEffect(()=>{
  //   api

  //  })

  return (
    <Box>
      <Button variant="outlined">Add</Button>
      <Button variant="outlined">Edit</Button>
      <Button variant="outlined">Delete</Button>
      <Pagination count={10} variant="outlined" color="primary" />
    </Box>
  );
};
export default VetProfile;
