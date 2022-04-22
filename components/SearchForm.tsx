import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";

const SearchForm = () => (
  <FormControl
    m={4}
    display="flex"
    alignItems="baseline"
  >
    <FormLabel htmlFor="name" mx={4}>Search&nbsp;by&nbsp;name:</FormLabel>
    <Input id="name" placeholder="name" />
    <Button
      mx={4}
      px={8}
      colorScheme="teal"
      type="submit"
    >
      Submit
    </Button>
  </FormControl>
);

export default SearchForm;
