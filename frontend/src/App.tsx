import {Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import { sampleProducts } from './data';


function App() {
  

  return (
    <div className='d-flex flex-column vh-100'>
      <header>
        <Navbar bg="dark" variant="dark" expand='lg' >
          <Container>
            <Navbar.Brand>Aquilas Store </Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">Cart</a>
            <a href="/signin" className="nav-link">Sign In</a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'> 
          <Row>
        {sampleProducts.map((product) => (
          <Col key={product.slug} sn={6} nd={4} lg={3}>
            <img src={product.image} alt={product.name} className='product-image' />
              <h2>{product.name}</h2>
              <p>₱{product.price}</p>
          </Col>
        ))}
        </Row>
        </Container>
        
      </main>
      <footer>
        <div className='text-center'>All right reserved</div>
        </footer>
    </div>
  );
}

export default App;
