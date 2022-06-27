import { Container, Navbar, Nav, NavDropdown, Image } from "react-bootstrap";

function AppHeader() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container>
                <Navbar.Brand href="/">
                    <Image src="https://devfast.us/images/devfast-logo.png" className="logo-img"></Image>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                    </Nav>
                    <Nav>
                        <Nav.Link href="/">Trang chủ</Nav.Link>
                        <Nav.Link eventKey={2} href="/bac-si">
                            Bác sĩ
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/dich-vu">
                            Dịch vụ
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/login">
                            Đăng kí
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/register">
                            Đăng nhập
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default AppHeader;