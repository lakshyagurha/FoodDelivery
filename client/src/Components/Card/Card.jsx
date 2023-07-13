import React, { useEffect, useRef, useState } from "react";
import {useDispatchCart, useCart} from '../ContextReducers'
export const Card = (props) => {
  let options = props.options;
  let priceOptions = Object.keys(options)
  let foodItem = props.fooditems
  let data = useCart()
  const priceRef = useRef();

  let  dispatch = useDispatchCart();

  const [qty, setQty] = useState(1)
  const [size, setSize] = useState("")


  const cartHandler = async ()=>{
    let food = [];
    for(const item of data){
      if(item.id === foodItem._id){
        food = item;
        break;
      }
    }
    if(food !== []){
      if(food.size === size){
        await dispatch ({type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty})
        return 
        
      }
      else if(food.size !== size){

        await dispatch({type: "ADD", id: foodItem._id, name:foodItem.name, price:finalPrice, qty: qty, size: size })
        return
      }
      return
      

    }
  

    await dispatch({type: "ADD", id: foodItem._id, name:foodItem.name, price:finalPrice, qty: qty, size: size })


    

  }
  let finalPrice = qty * parseInt(options[size]);
  useEffect(()=>{
    setSize(priceRef.current.value)
  },[])
  return (
    <>   
      <div className="card mt-3 " style={{ width: "18rem", maxHeight: "440px", margin: "18px" }}>
        <img src={foodItem.img} className="card-img-top" alt="..."  style={{height: "220px", objectFit: "fill"}}/>
        <div className="card-body">
          <h5 className="card-title">{foodItem.name}</h5>
          <p className="card-text">Some quick examples content.</p>
          <div className="container w-100">
            <select className="m-2 h-100  bg-success rounded"  onChange={(e)=> setQty(e.target.value)}>
              {Array.from(Array(6), (e, i) => {
                return <option key={i + 1}> {i + 1} </option>;
              })}
            </select>

            <select className="m-2 h-100 bg-success rounded" ref={priceRef} onChange={(e)=>{setSize(e.target.value)}}>

              {priceOptions.map((data)=>{
                return <option key={data} value={data} >{data}</option>
              })}
            
              </select>

            <div className="d-inline h-100 fs-5">
              Rs {finalPrice} -
            </div>
          </div>
          <hr>
          </hr>
          <button className="btn btn-success justify-center ms-2" onClick={cartHandler}>Add to cart</button>

        </div>
      </div>
    </>
  );
};
