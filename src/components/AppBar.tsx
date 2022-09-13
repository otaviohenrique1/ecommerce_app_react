import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { BiUserCircle } from "react-icons/bi";
import { AiTwotoneShopping } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import styled from 'styled-components';

const LogoAppbar = styled(Navbar.Brand)`
  cursor: pointer;
`;

export default function Appbar() {
  const navigate = useNavigate();
  const SwalModal = withReactContent(Swal);

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <LogoAppbar
          onClick={() => navigate("/homepage")}
          className="d-flex align-items-center"
        >
          <AiTwotoneShopping
            size={22}
          />
          <span className="ms-1">E-commerce App React</span>
        </LogoAppbar>
        <Navbar.Toggle aria-controls="navbar-nav-app" />
        <Navbar.Collapse id="navbar-nav-app">
          <Nav className="me-auto">
            <Nav.Link>
              Homepage
            </Nav.Link>
            <Nav.Link className="d-flex align-items-center">
              <span className="me-1">Carrinho</span>
              <FaShoppingCart size={20} />
            </Nav.Link>
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
