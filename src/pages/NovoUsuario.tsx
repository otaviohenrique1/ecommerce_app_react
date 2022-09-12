import React from 'react'
import { Container, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap'
import * as yup from "yup";
import { FormikHelpers, useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  nome: yup
    .string()
    .required('Campo senha vazio'),
  email: yup
    .string()
    .required('Campo email vazio')
    .email('Email invalido'),
  senha: yup
    .string()
    .required('Campo senha vazio')
    .min(8, 'Minimo de 8 caracteres'),
  confirmarSenha: yup
    .string()
    .required("Campo confirmação de senha vazio")
    .min(8, 'Minimo de 8 caracteres')
    .when("senha", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: yup.string().oneOf(
        [yup.ref("senha")],
        "As senhas não são iguais!"
      )
    }),
  cpf: yup
    .string()
    .required('Campo cpf vazio'),
  rua: yup
    .string()
    .required('Campo rua vazio'),
  numero: yup
    .string()
    .required('Campo numero vazio'),
  complemento: yup
    .string()
    .required('Campo complemento vazio'),
  bairro: yup
    .string()
    .required('Campo bairro vazio'),
  cep: yup
    .string()
    .required('Campo cep vazio'),
  cidade: yup
    .string()
    .required('Campo cidade vazio'),
  estado: yup
    .string()
    .required('Campo estado vazio'),
});

interface DataTypes {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  cpf: string;
  telefone: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
}

const initialValues: DataTypes = {
  nome: "",
  email: "",
  senha: "",
  confirmarSenha: "",
  cpf: "",
  telefone: "",
  rua: "",
  numero: "",
  complemento: "",
  bairro: "",
  cep: "",
  cidade: "",
  estado: ""
};

export default function NovoUsuario() {
  const navigate = useNavigate();

  const onSubmitForm = (values: DataTypes, formikHelpers: FormikHelpers<DataTypes>) => {
    navigate("/");
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
            <ButtonGroup className="w-100 mb-1">
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
            <Link
              className="w-100 btn btn-success"
              to="/"
            >Voltar</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
