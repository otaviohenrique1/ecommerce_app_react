import React, { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ContainerApp from '../components/ContainerApp';
import { listaProdutos, ListaProdutoTypes } from '../utils/lista_produtos';

const valoresIniciais = {
  codigo: 0,
  nome: "",
  preco: 0,
  quantidade: 0,
  tipo: "",
  marca: ""
};

export default function ProdutoDados() {
  const params = useParams();
  const [data, setData] = useState<ListaProdutoTypes>(valoresIniciais);

  useEffect(() => {
    const id = params.id;
    setData(listaProdutos[Number(id)]);
  }, [params.id]);

  return (
    <ContainerApp>
      <Container
        className="d-flex justify-content-center pt-2 pb-3"
        fluid
      >
        <Row>
          <Col xs={12} className="d-flex justify-content-center mt-5">
            <ListGroupStyled>
              <ListGroup.Item>
                <h5 className="fw-bold">Codigo:</h5>
                <h6 className="text-end">{data.codigo}</h6>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5 className="fw-bold">Nome:</h5>
                <h6 className="text-end">{data.nome}</h6>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5 className="fw-bold">Preço:</h5>
                <h6 className="text-end">{`R$ ${(data.preco).toFixed(2).replace(".", ",")}`}</h6>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5 className="fw-bold">Quantidade:</h5>
                <h6 className="text-end">{data.quantidade}</h6>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5 className="fw-bold">Marca:</h5>
                <h6 className="text-end">{data.marca}</h6>
              </ListGroup.Item>
              <ListGroup.Item>
                <h5 className="fw-bold">Tipo:</h5>
                <h6 className="text-end">{data.tipo}</h6>
              </ListGroup.Item>
            </ListGroupStyled>
          </Col>
        </Row>
      </Container>
    </ContainerApp>
  )
}

const ListGroupStyled = styled(ListGroup)`
  width: 400px;
`;
