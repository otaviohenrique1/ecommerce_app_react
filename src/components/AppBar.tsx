import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { BiUserCircle } from "react-icons/bi";

export default function Appbar() {
  const navigate = useNavigate();
  const SwalModal = withReactContent(Swal);

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>E-commerce App React</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav-app" />
        <Navbar.Collapse id="navbar-nav-app">
          <Nav className="me-auto">
            <Nav.Link>Homepage</Nav.Link>
            <Nav.Link>Carrinho</Nav.Link>
            <Nav.Link>Busca</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <NavDropdown
              title={<BiUserCircle size={40} />}
              id="usuario-dropdown"
            >
              <NavDropdown.Item>
                Perfil
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => {
                SwalModal.fire({
                  title: "Logout",
                  text: "Deseja deslogar?",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Sim',
                  cancelButtonText: 'Não',
                }).then((result) => {
                  if (result.isConfirmed) {
                    navigate("/");
                  }
                })
              }}>
                Sair
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
