import React from "react";
import { useCart, useDispatchCart } from "../../Components/ContextReducers";
import axios from "axios";
export const Cart = () => {
  let data = useCart();
  let dispatch = useDispatchCart();
  if(data.length === 0){
    return(
      <div>
        <div className="m-5 w-100 text-center fs-3">The Cart Is Empty!</div>
      </div>
    )
  }
  let totalPrice = data.reduce((total, food)=> total + food.price, 0)

  const userCheckOut  =  async()=>{
    console.log('user Checkout button called')
    const userEmail = localStorage.getItem("yourEmail")
    const cartData = await axios.post('http://localhost:4000/orderData', {Email: userEmail, order_data: data, order_date: new Date().toDateString()} ).then((res)=>{

    
    if(res.data.key === true){
      console.log(res.data.value)
      dispatch({type: "DROP"})
    }
    else if(res.data.key === false){
      console.log("this is the false statment" + res.data.value)
      dispatch({type: "DROP"})
    }


    }).catch((err)=>{
      console.log(err)
    })                         
    


  }
  return (

    <>
      <div>
        <div className="container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md">
          <table className="table table-hover">
            <thead className="text-success fs-4">
              <tr>

                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Quantity</th>
                <th scope="col">Option</th>
                <th scope="col">Amount</th>
                <th scope="col">#</th>
                



              </tr>
            </thead>
            <tbody>
              {data.map((food, index)=> (
                <tr>
                  <th scope="row"> {index + 1}</th>
                  <td>{food.name}</td>
                  <td>{food.qty}</td>

                  <td>{food.size}</td>

                  <td>{food.price}</td>
                  <td><button className="btn p-0" type="button" onClick={()=>{dispatch({type: "REMOVE", index: index})}}>Trash</button></td>

                </tr>
              ))}
            </tbody>f
          </table>
          <div>
            <h1 className="fs-2">Total Price : {totalPrice}/-</h1>
            <div>
              <button className="btn bg-success mt-5" onClick={userCheckOut}> Check out </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
