import React from 'react'
import { Container, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap'
import * as yup from "yup";
import { FormikHelpers, useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { estadosDoBrasil } from '../utils/listas';

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

  const formulario_campos = [
    {
      className: "mb-3",
      controlId: "nome",
      onChange: formik.handleChange,
      defaultValue: formik.values.nome,
      value: formik.values.nome,
      label: "Nome",
      type: "text",
      placeholder: "Digite o nome",
      name: "nome",
      errors: formik.errors.nome,
      touched: formik.touched.nome
    },
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
    {
      className: "mb-3",
      controlId: "confirmarSenha",
      onChange: formik.handleChange,
      defaultValue: formik.values.confirmarSenha,
      value: formik.values.confirmarSenha,
      label: "Confirme a senha",
      type: "password",
      placeholder: "Digite a senha novamente",
      name: "confirmarSenha",
      errors: formik.errors.confirmarSenha,
      touched: formik.touched.confirmarSenha
    },
    {
      className: "mb-3",
      controlId: "cpf",
      onChange: formik.handleChange,
      defaultValue: formik.values.cpf,
      value: formik.values.cpf,
      label: "CPF",
      type: "text",
      placeholder: "Digite o numero do CPF",
      name: "cpf",
      errors: formik.errors.cpf,
      touched: formik.touched.cpf
    },
    {
      className: "mb-3",
      controlId: "telefone",
      onChange: formik.handleChange,
      defaultValue: formik.values.telefone,
      value: formik.values.telefone,
      label: "Telefone",
      type: "number",
      placeholder: "Digite o numero do telefone",
      name: "telefone",
      errors: formik.errors.telefone,
      touched: formik.touched.telefone
    },
    {
      className: "mb-3",
      controlId: "rua",
      onChange: formik.handleChange,
      defaultValue: formik.values.rua,
      value: formik.values.rua,
      label: "Rua",
      type: "text",
      placeholder: "Digite o nome da rua",
      name: "rua",
      errors: formik.errors.rua,
      touched: formik.touched.rua
    },
    {
      className: "mb-3",
      controlId: "numero",
      onChange: formik.handleChange,
      defaultValue: formik.values.numero,
      value: formik.values.numero,
      label: "Numero",
      type: "password",
      placeholder: "Digite o numero do endereço",
      name: "numero",
      errors: formik.errors.numero,
      touched: formik.touched.numero
    },
    {
      className: "mb-3",
      controlId: "complemento",
      onChange: formik.handleChange,
      defaultValue: formik.values.complemento,
      value: formik.values.complemento,
      label: "Complemento",
      type: "text",
      placeholder: "Digite o complemento do endereço",
      name: "complemento",
      errors: formik.errors.complemento,
      touched: formik.touched.complemento
    },
    {
      className: "mb-3",
      controlId: "bairro",
      onChange: formik.handleChange,
      defaultValue: formik.values.bairro,
      value: formik.values.bairro,
      label: "Bairro",
      type: "text",
      placeholder: "Digite o nome do bairro",
      name: "bairro",
      errors: formik.errors.bairro,
      touched: formik.touched.bairro
    },
    {
      className: "mb-3",
      controlId: "cep",
      onChange: formik.handleChange,
      defaultValue: formik.values.cep,
      value: formik.values.cep,
      label: "CEP",
      type: "number",
      placeholder: "Digite o numero do cep",
      name: "cep",
      errors: formik.errors.cep,
      touched: formik.touched.cep
    },
    {
      className: "mb-3",
      controlId: "cidade",
      onChange: formik.handleChange,
      defaultValue: formik.values.cidade,
      value: formik.values.cidade,
      label: "Cidade",
      type: "text",
      placeholder: "Digite o nome da cidade",
      name: "cidade",
      errors: formik.errors.cidade,
      touched: formik.touched.cidade
    },
  ];

  return (
    <Container
      className="d-flex justify-content-center pt-5 pb-5"
      fluid
    >
      <Row>
        <Col xs={12}>
          <h1 className="text-center mb-5">Novo Usuario</h1>
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
            <Form.Group
              className="mb-3"
              controlId="estado"
              onChange={formik.handleChange}
              defaultValue={formik.values.estado}
            >
              <Form.Label>Estado</Form.Label>
              <Form.Select
                aria-label="Estado select"
                name="estado"
                value={formik.values.estado}
              >
                <option value="">Selecione</option>
                {estadosDoBrasil.map((item, index) => (
                  <option
                    key={index}
                    value={item.value}
                  >{item.label}</option>
                ))}
              </Form.Select>
              {formik.errors.estado && formik.touched.estado ? (
                <Form.Text className="text-danger">
                  {formik.errors.estado}
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
                onClick={() => {
                  formik.setFieldValue("estado", "");
                  formik.resetForm();
                }}
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
