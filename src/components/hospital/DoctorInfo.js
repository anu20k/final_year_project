import React from "react";
import { Formik, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),

  speciality: Yup.array()
    .of(Yup.string())
    .min(1, "At least one speciality is required"),
});

function MyForm() {
  return (
    <Formik
      initialValues={{
        name: "",

        speciality: [],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ values, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Name:</Form.Label>
            <Field name="name" as={Form.Control} />
            <ErrorMessage name="name" />
          </Form.Group>

          <Form.Group controlId="speciality">
            <Form.Label>Speciality:</Form.Label>
            <FieldArray name="speciality">
              {({ push, remove }) => (
                <div>
                  {values.speciality.map((speciality, index) => (
                    <div key={index}>
                      <Field name={`speciality.${index}`} as={Form.Control} />
                      <button type="button" onClick={() => remove(index)}>
                        Remove
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={() => push("")}>
                    Add Speciality
                  </button>
                </div>
              )}
            </FieldArray>
            <ErrorMessage name="speciality" />
          </Form.Group>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default MyForm;
