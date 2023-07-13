import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge'
import Modal from '../Model/Model'
import { Cart } from '../../Pages/cart/Cart'
import { useCart } from '../ContextReducers'

export const Navbar = () => {
  const navigate = useNavigate();

  let data = useCart();
  const [cartview, setcartview] = useState(false)

  const loginHandler = ()=>{
    localStorage.removeItem('token')
    navigate('/login')

  }
  const GoToCart = ()=>{
    navigate('/MyCart')
  }
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand fs-1 fst-italic" to="/">GoodEats</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        {(localStorage.getItem('token')) ? 
                <li className='nav-item'>
                  <Link className='nav-link active fs-5' aria-current="page" to='/myOrder'>My Orders</Link>
                </li>
        
        : ""  }
      </ul>

      {(!localStorage.getItem('token')) ? 
      <div className="d-flex">
          <Link className="btn bg-white text-success mx-1"  to='/login'>Login</Link>
        </div>

:      
<div className="d-flex">
<button className="btn bg-white text-success mx-2" onClick={()=>{setcartview(true)}}>My Cart <Badge pill bg='danger'>{data.length}</Badge>

</button>
{cartview ? <Modal onClose={()=>{setcartview(false)}} > <Cart/> </Modal> : null}



<button className="btn bg-white text-danger mx-2" onClick={loginHandler}>Logout</button>
</div>  

}

    </div>
  </div>
</nav>
    </>
  )
}
