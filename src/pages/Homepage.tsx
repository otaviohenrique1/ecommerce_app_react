import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link, useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <Container
      className="d-flex justify-content-center pt-5"
      fluid
    >
      <Row>
        <Col xs={12}>
          <h1 className="text-center">Homepage</h1>
        </Col>
        <Col xs={12} className="d-flex justify-content-center mt-5">
          <Link to="/" className="btn btn-primary">Voltar</Link>
        </Col>
        <Col xs={12} className="d-flex justify-content-center mt-2">
          <Button
            variant="primary"
            onClick={() => navigate("/")}
          >Voltar</Button>
        </Col>
      </Row>
    </Container>
  )
}
