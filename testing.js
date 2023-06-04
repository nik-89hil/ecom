const agjads = [
{item: 'pen', price: 10 },
{item: 'pencil', price: 5 },
{item: 'eraser', price: 5 },
{item: 'scale', price: 30 },
]

const removeIndex = agjads.findIndex( item => item.price === 30);
// remove object
agjads.splice( removeIndex, 1 );
console.log(agjads);












{
    cartItems.length === 0 ? (<Message>your cart is empty</Message>):
    (
        <ListGroup variant='flush'>
            {cartItems.map((item,index)=>{
                <ListGroupItem key={index}>
                    <Row>
                        <Col md={1}>
                            <Image src={item.image}/>
                        </Col>
                        <Col>
                        <Link to={`/book/${item.book}`}>{item.title}ffdsasfs</Link>
                        </Col>
                        <Col md={4}>
                            {item.qty} * ${item.price} = ${item.price}
                        </Col>
                        
                    </Row> 

                </ListGroupItem>
            })}

        </ListGroup>
    )
}