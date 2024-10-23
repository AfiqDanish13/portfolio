import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar>
                <Container>
                    <div className="my-brand">
                        <Navbar.Brand className="nav-link">
                            AfiqDanish' Portfolio
                        </Navbar.Brand>
                    </div>

                    <Nav variant="pills" defaultActiveKey="/" className="my-nav">
                        <Nav.Item>
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1" href="#project">Project</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-2" href="#about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3" href="#contact">Contact</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>

            </Navbar>
        </div>
    )
}

export default NavigationBar