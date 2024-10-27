import { Navbar, Container, Nav } from "react-bootstrap"
import { toggleMenu } from '../components/script'

const NavigationBar = () => {
    return (
        <div>
            <Navbar class="navbar bg-transparent position-absolute top-0 start-0 w-100 d-flex align-items-center z-index-10">
                <Container>
                    <Navbar.Brand>
                        AfiqDanish' Portfolio
                    </Navbar.Brand>

                    <Nav variant="pills" defaultActiveKey="/" className="desktop-nav">
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
                    {/* <Nav className="hamburger-nav">
                        <div className="hamburger-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className="menu-links">
                            <Nav.Link href="#project" onClick={toggleMenu}>Project</Nav.Link>
                            <Nav.Link href="#about" onClick={toggleMenu}>About</Nav.Link>
                            <Nav.Link href="#contact" onClick={toggleMenu}>Contact</Nav.Link>
                        </div>
                    </Nav> */}
                </Container>
            </Navbar>

        </div>
    )
}

export default NavigationBar