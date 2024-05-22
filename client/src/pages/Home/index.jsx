import React from 'react';
import './index.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; // Added import for Card component

const Index = () => {
  return (
    <div>
      <section id='first'>
        <div className='fir'>
          <p>SPRING / SUMMER COLLECTION 2017</p>
          <h1>Get up to 30% Off New Arrivals</h1>
          <button>Shop Now</button>
        </div>
      </section>
      <section id='second'>
        <div className='img'>
          <button> WOMEN'S </button>
        </div>
        <div className='img1'>
          <div></div>
          <button>ACCESSORIES'S</button>
        </div>
        <div className='img2'>
          <button>MEN'S</button>
        </div>
      </section>
      <section id='third'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://preview.colorlib.com/theme/coloshop/images/product_1.png" />
          <Card.Body>
            <Card.Title>Fujifilm X100T 16 MP Digital Camera (Silver)</Card.Title>
            <div className='price'>
               <Card.Text>
              $520.00 
               <del>$520.00</del>
            </Card.Text> 
            </div>
            
           
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://preview.colorlib.com/theme/coloshop/images/product_2.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <div className='price'>
               <Card.Text>
              $610.00 
            </Card.Text> 
            </div>
           
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://preview.colorlib.com/theme/coloshop/images/product_3.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <div className='price'>
               <Card.Text>
              $120.00 
            </Card.Text> 
            </div>
           
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://preview.colorlib.com/theme/coloshop/images/product_4.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <div className='price'>
               <Card.Text>
              $410.00 

            </Card.Text> 
            </div>
           
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://preview.colorlib.com/theme/coloshop/images/product_5.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <div className='price'>
               <Card.Text>
              $180.00 
            </Card.Text> 
            </div>
           
          </Card.Body>
        </Card>
        
      </section>
      <section id='fourth'>
      <h1>Latest Blogs</h1>
      <div className='th'>
         <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg.webp" alt="Blog 1" />
        <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg.webp" alt="Blog 2" />
        <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg.webp" alt="Blog 3" />
      </div>
       
      </section>
    </div>
  );
};

export default Index;
