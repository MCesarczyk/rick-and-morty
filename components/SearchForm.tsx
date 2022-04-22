import React from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

type innerFormProps = {
  field: object,
  form: {
    errors: {
      name: boolean
    },
    touched: {
      name: boolean
    }
  }
}

const SearchForm = () => (
  <Formik
    initialValues={{ name: "" }}
    onSubmit={(values, actions) => {
      setTimeout(() => {
        console.log(values.name);
        actions.setSubmitting(false);
      }, 200);
    }}
  >
    {(props) => (
      <Form>
        <Field name="name">
          {({ field, form }: innerFormProps) => (
            <FormControl
              m={4}
              display="flex"
              alignItems="baseline"
              isInvalid={form.errors.name && form.touched.name}
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
                Submit
              </Button>
            </FormControl>
          )}
        </Field>
      </Form>
    )}
  </Formik>
);

export default SearchForm;
