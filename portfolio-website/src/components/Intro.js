import { Container, Col, Row, Button } from 'react-bootstrap';
import icon from '../assets/icon.png';

const Intro = () => {
    return (
        <div className='intro'>
            <Container className='text-black text-center d-flex justify-content-center align-items-center'>
                <Row>
                    <Col>
                        <div className="image m-7 ">
                            <img src={icon} alt="icon" />
                        </div>
                    </Col>
                    <Col>
                        <div className='motto mt-5'>Hello everyone, I'm <br />Afiq Danish</div>
                        <div className='description mt-2'>  Computer Science Student & <span style={{ fontWeight: 'bold' }}>Tech Enthusiast</span>
                        </div>
                        <div className='quotes mt-4'>per aspera, ad astra</div>
                        <div className='introButton mt-4'>
                            <Button className='m-3'>My Project</Button>
                            <Button className='m-3'>Contact Me</Button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro