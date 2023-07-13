import React from 'react'

export const Carousel = () => {
  return (
    <>
   <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
  <div class="carousel-caption d-none d-md-block" style={{zIndex:"10"}}>
  <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
    
      </div>

    <div class="carousel-item active">
      <img src="https://source.unsplash.com/random/900x300/?fruits" style={{filter:"brightness(30%)"}} class="d-block w-100" alt="..."/>
  
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/random/900x300/?vegitables" style={{filter:"brightness(30%)"}} class="d-block w-100" alt="..."/>
   
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/random/900x300/?juices" style={{filter:"brightness(30%)"}} class="d-block w-100" alt="..."/>
     
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    </>
  )
}
