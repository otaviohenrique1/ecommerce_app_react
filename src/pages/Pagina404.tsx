import { Container } from "react-bootstrap";

export function Pagina404() {
  return (
    <Container fluid>
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <h1 className="fw-bold w-100 text-center">Erro 404</h1>
        <h2 className="fw-light w-100 text-center">Pagina não encontrada</h2>
      </div>
    </Container>
  );
}