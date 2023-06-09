import React from 'react'
import {Nav, Navbar}  from "react-bootstrap"
import { LinkContainer } from 'react-router-bootstrap'
import "../header/header.css"

const CheckoutStep = ({step1,step2,step3,step4}) => {
  return (
    <div>
        <Nav className='justify-content-center mb-4'>
            <Nav.Item>
                {step1?(
                    <LinkContainer to="/home">
                        <Nav.Link className='breadCrumbs'><i style={{color:"green"}} class="fa-solid fa-house"></i> Home</Nav.Link>
                    </LinkContainer>
                ):(<Nav.Link disabled>Home</Nav.Link>)}
            </Nav.Item>
            
            <Nav.Item>
                {step2?(
                    <LinkContainer to="/shipping">
                        <Nav.Link className='breadCrumbs'><i style={{color:"green"}} class="fa-solid fa-location-dot"></i> Shipping</Nav.Link>
                    </LinkContainer>
                ):(<Nav.Link disabled>Shipping</Nav.Link>)}
            </Nav.Item>
            <Nav.Item>
                {step3?(
                    <LinkContainer to="/payment">
                        <Nav.Link className='breadCrumbs'><i style={{color:"green"}} class="fa-regular fa-credit-card"></i> Payment</Nav.Link>
                    </LinkContainer>
                ):(<Nav.Link disabled>Payment</Nav.Link>)}
            </Nav.Item>
            <Nav.Item>
                {step4?(
                    <LinkContainer to="/placeorder">
                        <Nav.Link className='breadCrumbs'><i style={{color:"green"}} class="fa-solid fa-bag-shopping"></i> Place Order</Nav.Link>
                    </LinkContainer>
                ):(<Nav.Link disabled>Place Order</Nav.Link>)}
            </Nav.Item>

        </Nav>
    </div>
  )
}

export default CheckoutStep
