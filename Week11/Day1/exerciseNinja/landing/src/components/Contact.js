import './Contact.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
    return (
        <Container>
            <Row className="contactBlock">
                <h2>Contact us</h2>
                <Col>
                    <p>Contact us and we'll get back to you within 24 hours</p>
                    <div className='contactInfo'>
                        <p>Company name<br />
                        +97254736255<br />
                        company@gmail.com</p>
                    </div>
                </Col>
                <Col>
                    <div >
                        <form>
                            <label>Contact</label><br />
                            <input type="email" placeholder="email address" />
                            <textarea name="" id="" cols="30" rows="10">Comment</textarea>
                            <button>Submit</button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
};

export default Contact;