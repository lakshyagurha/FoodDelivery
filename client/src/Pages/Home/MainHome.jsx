import React, { useEffect, useState } from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { Card } from "../../Components/Card/Card";
import { message } from 'antd'
import axios from "axios";

export const MainHome = () => {
  const [getCategory, setcategroy] = useState([]);
  const [getFoodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async ()=>{


    const post = await axios.post('http://localhost:4000/', {}, {headers: {Authorization: "Bearer " + localStorage.getItem('token')}})
        .then((res)=>{
          if(res.data.key === true)
          {

            message.success(res.data.successMessage)

          }
          else{
            message.error("Sorry! Something went wrong")
          }

        
          
        }).catch((error)=>{
          console.log(error)

        })


      

  }

  const getApiData = async()=>{
    const getData = await axios.get('http://localhost:4000/getData').then((res)=>{
      if(res.data.key === 'success'){
        console.log("inside getApiData")
        setcategroy(res.data.foodCategory)
        setFoodItems(res.data.foodItems)
      }
      else{
        message.error(res.data.errorMessage)
      }
    }).catch((error)=>{
      console.log(error)
    })
  }




  const getdata = ()=>{
    console.log("this is inside the get data")
    if(getCategory !== undefined || getFoodItems !== undefined)
    {
      console.log(getCategory)
      console.log(getFoodItems)
    }
    else{
      console.log("Loading please wait")
    }
  }


  useEffect(()=>{
    getData();
    getApiData();
    getdata();
  },[])
  return (
    <>
      <Navbar />
      <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
  <div className="carousel-caption d-none d-md-block" style={{zIndex:"10"}}>
  <div className="d-flex justify-content-center">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
      {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
    </div>
    
      </div>

    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/900x300/?fruits" style={{filter:"brightness(30%)"}} className="d-block w-100" alt="..."/>
  
    </div> 
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x300/?vegitables" style={{filter:"brightness(30%)"}} className="d-block w-100" alt="..."/>
   
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/900x300/?juices" style={{filter:"brightness(30%)"}} className="d-block w-100" alt="..."/>
     
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      
      </div>
      <div>
        <div className="container">
          {
            getCategory !==[] ? getCategory.map((data)=>{
              return(
                <div className="row mb-3">
                  <div key={data._id} className="fs-3 m-3">{data.CategoryName}</div>
                  <hr />
                  {
                    getFoodItems !==[]? 
                          getFoodItems.filter((item)=>
                           ( item.CategoryName === data.CategoryName ) && (item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                          ).map(filterItems =>{
                            return(
                              <>
                              <div key={filterItems._id} className="col-12 col-md-6 col-lg-4">
                                <Card fooditems = {filterItems} options={filterItems.options[0]} />

                              </div>
                              </>
                            )
                          })   :  <div>No Such data found</div>
                  }
                </div>
              )
            }):  <div>***************************************</div>
          }
        </div>
      </div>
      <Footer />
    </>
  );
};
