import React, { useReducer, useEffect } from "react";
// import { Router, Link } from "@reach/router"
import { Formik, Field, FastField, Form, getIn, FieldArray } from "formik";
import * as yup from "yup";

const LightInput = ({ field, form: { error }, ...props }) => {
  const errorMessage = getIn(error, field.name);
  return (
    <div>
      {console.log(JSON.stringify(props))}
      <input {...field} {...props} />
      <div>{errorMessage}</div>
    </div>
  );
};

const initialValues = {
  name: "",
  age: "",
  college: ""
};

const validationSchema = {
  name: yup
    .string()
    .max(40)
    .min(4)
    .required("It's only polite to introduce yourself first!"),
  age: yup
    .number()
    .max(120)
    .min(14)
    .positive()
    .integer()
    .required("the more we know the better we can help you."),
  college: yup
    .string()
    .max(80)
    .required(
      "We might already have a branch in your college! It'll be easier for both of us to find out"
    )
};

const RegForm = props => (
  <React.Fragment>
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        console.log("Form has values:", values);
        alert("form submitted:-", values);
        actions.setSubmitting(false);
      }}
      validationScheme={validationSchema}
    >
      {() => (
        <Form>
          <FieldArray name={props.dataName}>
            <Field
              type="text"
              name="name"
              placeholder="Enter your name here..."
              component={LightInput}
            />
          </FieldArray>
        </Form>
      )}
    </Formik>
  </React.Fragment>
);

const Registration = props => {
  return (
    <div>
      <h4>We Like our own forms. Thank you very much!</h4>
      <RegForm data={""} dataName={""} />
    </div>
  );
};

export default Registration;
