import React from 'react'
import { Container, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap'
import * as yup from "yup";
import { FormikHelpers, useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { AiTwotoneShopping } from "react-icons/ai";
import styled from "styled-components";

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

  const formulario_campos = [
    {
      className: "mb-3",
      controlId: "email",
      onChange: formik.handleChange,
      defaultValue: formik.values.email,
      value: formik.values.email,
      label: "Email",
      type: "email",
      placeholder: "Digite o email",
      name: "email",
      errors: formik.errors.email,
      touched: formik.touched.email
    },
    {
      className: "mb-3",
      controlId: "senha",
      onChange: formik.handleChange,
      defaultValue: formik.values.senha,
      value: formik.values.senha,
      label: "Senha",
      type: "password",
      placeholder: "Digite a senha",
      name: "senha",
      errors: formik.errors.senha,
      touched: formik.touched.senha
    },
  ];

  return (
    <Container
      className="d-flex justify-content-center pt-5"
      fluid
    >
      <RowStyled>
        <Col xs={12} className="d-flex justify-content-center align-items-center mb-2">
          <AiTwotoneShopping size={50} />
          <LogoName className="text-center mb-0 ms-2">E-commerce App React</LogoName>
        </Col>
        <Col xs={12}>
          <h1 className="text-center mb-5">Login</h1>
        </Col>
        <Col xs={12}>
          <Form onSubmit={formik.handleSubmit}>
            {formulario_campos.map((item, index) => (
              <Form.Group
                key={index}
                className={item.className}
                controlId={item.controlId}
                onChange={item.onChange}
                defaultValue={item.defaultValue}
              >
                <Form.Label>{item.label}</Form.Label>
                <Form.Control
                  type={item.type}
                  placeholder={item.placeholder}
                  name={item.name}
                  value={item.value}
                />
                {item.errors && item.touched ? (
                  <Form.Text className="text-danger">
                    {item.errors}
                  </Form.Text>
                ) : null}
              </Form.Group>
            ))}
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
              to="/novo_usuario"
            >Novo usuario</Link>
          </Form>
        </Col>
      </RowStyled>
    </Container>
  )
}

const LogoName = styled.p`
  font-size: larger;
`;

const RowStyled = styled(Row)`
  max-width: 600px;
`;
