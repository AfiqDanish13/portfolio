import { Container, Col, Row, Button } from 'react-bootstrap';
import luffy from '../assets/luffy.jpg';

const Intro = () => {
    return (
        <div className='intro'>
            <Container className='text-black text-center d-flex justify-content-center align-items-center'>
                <Row>
                    <Col><div className="image m-4">
    <img src={luffy} alt="Luffy" />
  </div></Col>
                    <Col><div className='motto mt-5'>Vision, Moving Forward</div>
                        <div className='description mt-4'>I'm Afiq Danish, a software engineer passionate about creating efficient and user-friendly solutions. Currently pursuing my final year, refining my skills in web development and AI.</div>
                        <div className='introButton mt-4'>
                            <Button variant="dark" className='m-3'>My Project</Button>
                            <Button variant="dark">Contact Me</Button>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Intro