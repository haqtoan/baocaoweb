import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function AppHeader() {
    const isLogin = () => {
        console.log(localStorage.getItem("accessToken"));
        if (!localStorage.getItem("accessToken")) {
            return (
                <>
                    <Nav.Link eventKey={2} href="/login">
                        Đăng nhập
                    </Nav.Link>
                    <Nav.Link eventKey={2} href="/register">
                        Đăng kí
                    </Nav.Link>
                </>
            )
        }
        else{
            return(
                <NavDropdown title="Xin chao, Toan">
                    <NavDropdown.Item href="/user/info">Thông tin cá nhân</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Lịch sử đặt khám</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Hồ sơ sức khỏe</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={logout}>Đăng xuất</NavDropdown.Item>
                </NavDropdown>
            )
        }
    }

    let navigate = useNavigate();

    let logout = () => {
        localStorage.removeItem("accessToken");
        navigate("/");
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Brand href="/">
                    <Image src="https://devfast.us/images/devfast-logo.png" className="logo-img"></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">Trang chủ</Nav.Link>
                        <Nav.Link eventKey={2} href="/bac-si">
                            Bác sĩ
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/dich-vu">
                            Dịch vụ
                        </Nav.Link>
                        {isLogin()}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default AppHeader;