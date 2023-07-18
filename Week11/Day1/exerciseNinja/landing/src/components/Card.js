import './Card.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Card = () => {

    const cards = [
        {
            id: 1,
            title: 'About the Company',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam dolorum et exercitationem blanditiis tempore dolore at illum optio fugiat cupiditate ducimus, iure obcaecati hic vel sequi, repellat quis vero atque.',
            image: 'https://www.iconpacks.net/icons/2/free-home-icon-2502-thumb.png' 
        },
        {
            id: 2,
            title: 'Our Values',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam dolorum et exercitationem blanditiis tempore dolore at illum optio fugiat cupiditate ducimus, iure obcaecati hic vel sequi, repellat quis vero atque.',
            image: 'https://cdn.icon-icons.com/icons2/3005/PNG/512/globe_americas_earth_icon_188225.png' 
        },
        {
            id: 3,
            title: 'Our Mission',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam dolorum et exercitationem blanditiis tempore dolore at illum optio fugiat cupiditate ducimus, iure obcaecati hic vel sequi, repellat quis vero atque.',
            image: 'https://static.thenounproject.com/png/15214-200.png' 
        },
    ]

    return (
        <Container>
            {
                cards.map(item => {
                    return <Row className="myCard">
                        <Col xs={3}><img src={item.image} width='100px'/></Col>
                        <Col >
                            <h3>{item.title}</h3>
                            <div>{item.description}</div>
                        </Col>
                    </Row>
                })
            }
            
        </Container>
    )
};

export default Card;