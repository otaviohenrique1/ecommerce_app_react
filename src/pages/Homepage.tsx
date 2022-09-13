import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Table, ButtonGroup } from 'react-bootstrap';
import ContainerApp from '../components/ContainerApp';
import { listaProdutos, ListaProdutoTypes } from '../utils/lista_produtos';

export default function Homepage() {
  const [data, setData] = useState<ListaProdutoTypes[]>([]);

  useEffect(() => {
    setData(listaProdutos);
  }, []);

  return (
    <ContainerApp>
      <Container
        className="d-flex justify-content-center pt-5 pb-3"
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
                      <ButtonGroup>
                        <Button
                          variant="success"
                        >Exibir</Button>
                        <Button
                          variant="primary"
                        >Comprar</Button>
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </ContainerApp>
  )
}
