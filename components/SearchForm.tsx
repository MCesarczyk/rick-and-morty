import React from "react";
import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

type innerFormProps = {
  field: object
}

type searchProps = {
  query: string,
  setQuery: Function
}

const SearchForm = ({ query, setQuery }: searchProps) => (
  <Formik
    initialValues={{ name: query }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        setQuery(values.name);
        actions.setSubmitting(false);
      }, 200);
    }}
  >
    {(props) => (
      <Form data-testid="search">
        <Field name="name">
          {({ field }: innerFormProps) => (
            <FormControl
              m={4}
              display="flex"
              alignItems="baseline"
            >
              <FormLabel htmlFor="name" mx={4}>Search&nbsp;by&nbsp;name:</FormLabel>
              <Input {...field} id="name" placeholder="name" />
              <Button
                mx={4}
                px={8}
                colorScheme="teal"
                isLoading={props.isSubmitting}
                type="submit"
              >
                Filter
              </Button>
            </FormControl>
          )}
        </Field>
      </Form>
    )}
  </Formik>
);

export default SearchForm;
