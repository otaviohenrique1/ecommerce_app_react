import { Container, Row, Col, Table, Button, ButtonGroup, Form } from 'react-bootstrap';
import ContainerApp from '../components/ContainerApp';

export default function Carrinho() {
  return (
    <ContainerApp>
      <Container
        className="d-flex justify-content-center pt-5 pb-3"
        fluid
      >
        <Row>
          <Col xs={12}>
            <h1 className="text-center">Carrinho</h1>
          </Col>
          <Col xs={12} className="d-flex justify-content-center mt-5">
            <Table striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th className="text-end">#</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
                  <tr key={index}>
                    <td>1</td>
                    <td>GTX 1080</td>
                    <td>R$ 1500,00</td>
                    <td className="w-25">
                      <ButtonGroup
                        className="w-100"
                      >
                        <Button>+</Button>
                        <Form.Control
                          type="number"
                          value={1}
                          className="rounded-0 w-50 text-center"
                        />
                        <Button>-</Button>
                      </ButtonGroup>
                    </td>
                    <td align="right" className="w-25">
                      <Button variant="danger">Remover</Button>
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

interface ItemTabelaProps {
  // 
}

function ItemTabela(props: ItemTabelaProps) {
  return (
    <tr>
      <td>1</td>
      <td>GTX 1080</td>
      <td>R$ 1500,00</td>
      <td className="w-25">
        <ButtonGroup
          className="w-100"
        >
          <Button>+</Button>
          <Form.Control
            type="number"
            value={1}
            className="rounded-0 w-50 text-center"
          />
          <Button>-</Button>
        </ButtonGroup>
      </td>
      <td align="right" className="w-25">
        <Button variant="danger">Remover</Button>
      </td>
    </tr>
  );
}
