import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Product = ()=> {
  const url = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState([]);

  const getDataProducts = async ()=> {
    const response = await fetch (url);
    const dataProduct = await response.json();
    setProducts(dataProduct);
  }

  useEffect( ()=> {
    getDataProducts();
  })

  return(
    <div className='container'>
      <div className='row'>
        <h1>Contoh Product Ficky</h1>
        { products.map( (produk)=> {
          return(
            <div className="col-3"><CardProduct
            key={produk.id} 
            title={produk.title} 
            price={produk.price} 
            decription={produk.decription}
            image={produk.image}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}


function CardProduct(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='flex-gap' variant="top" src={props.image} style={{width:"100%"}}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.decription}
        </Card.Text>
        <p>$ {props.price}</p>
        <Button variant="primary">Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;