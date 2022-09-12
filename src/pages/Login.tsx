import React from 'react'
import { Container, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap'
import * as yup from "yup";
import { FormikHelpers, useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Email invalido')
    .required('Campo email vazio'),
  senha: yup
    .string()
    .min(8, 'Minimo de 8 caracteres')
    .required('Campo senha vazio'),
});

interface DataTypes {
  email: string;
  senha: string;
}

const initialValues: DataTypes = {
  email: "",
  senha: ""
};

export default function Login() {
  const navigate = useNavigate();

  const onSubmitForm = (values: DataTypes, formikHelpers: FormikHelpers<DataTypes>) => {
    navigate("/homepage");
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmitForm,
  });

  return (
    <Container
      className="d-flex justify-content-center pt-5"
      fluid
    >
      <Row>
        <Col xs={12}>
          <h1 className="text-center">Login</h1>
        </Col>
        <Col xs={12}>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group
              className="mb-3"
              controlId="email"
              onChange={formik.handleChange}
              defaultValue={formik.values.email}
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite o email"
                name="email"
              />
              {formik.errors.email && formik.touched.email ? (
                <Form.Text className="text-danger">
                  {formik.errors.email}
                </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="senha"
              onChange={formik.handleChange}
              defaultValue={formik.values.senha}
            >
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite a senha"
                name="senha"
              />
              {formik.errors.senha && formik.touched.senha ? (
                <Form.Text className="text-danger">
                  {formik.errors.senha}
                </Form.Text>
              ) : null}
            </Form.Group>
            <Button
              className="w-100"
              variant="success"
              type="button"
            >Novo usuario</Button>
            <ButtonGroup className="w-100 mt-1">
              <Button
                variant="primary"
                type="submit"
              >Entrar</Button>
              <Button
                variant="danger"
                type="button"
                onClick={() => formik.resetForm()}
              >Limpar</Button>
            </ButtonGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
