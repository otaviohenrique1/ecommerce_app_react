import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button, Table } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import Appbar from '../components/AppBar';
import { listaProdutos, ListaProdutoTypes } from '../utils/lista_produtos';

export default function Homepage() {
  const navigate = useNavigate();

  const [data, setData] = useState<ListaProdutoTypes[]>([]);

  useEffect(() => {
    setData(listaProdutos);
  }, [])


  return (
    <>
      <Appbar />
      <Container
        className="d-flex justify-content-center pt-5"
        fluid
      >
        <Row>
          <Col xs={12}>
            <h1 className="text-center">Homepage</h1>
          </Col>
          <Col xs={12} className="d-flex justify-content-center mt-5">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th className="text-end">#</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index}>
                    <td>{item.nome}</td>
                    <td>{`R$ ${(item.preco).toFixed(2).replace(".", ",")}`}</td>
                    <td align="right">
                      <Button
                        variant="primary"
                      >Comprar</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col xs={12} className="d-flex justify-content-center mt-2">
            <Button
              variant="primary"
              onClick={() => navigate("/")}
            >Sair</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
