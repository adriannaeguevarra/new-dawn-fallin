import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import * as queries from "./graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "./graphql/mutations";
const VetProfile = () => {
  const [pageData, setPageData] = React.useState({
    arrayOfProfile: [],
    veteranComponents: [],
    pageIndex: 0,
    pageSize: 4,
  });

  // const allTodos = await API.graphql({ query: queries.listTodos });
  // console.log(allTodos);

  // const oneTodo = await API.graphql({
  //   query: queries.getTodo,
  //   variables: { id: 'some id' }
  // });

  //  const allTodos = await API.graphql({ query: queries.listTodos });
  //  console.log(allTodos); // result: { "data": { "listTodos": { "items": [/* ..... */] } } }

  //  // Query using a parameter
  //  const oneTodo = await API.graphql({
  //    query: queries.getTodo,
  //    variables: { id: 'ID' }
  //  });

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
