import React from "react";
import ReactDom from "react-dom/client"
import './style.css'


import one from './assets/images/1.jpg'
import two from './assets/images/2.jpg'
import three from './assets/images/3.jpg'

//navbar//

function Navbar(){

  return(<div id="navbar">
  
    <h1>Perfumy</h1>
    <ul>
  
      <li>Home</li>
      <li>Products</li>
      <li>Contact</li>
    </ul>
  
  </div>
  )
  
  }

//searchbar//

function Searchbar(){


  return(
<div id="searchbar">

<input  placeholder="Search for products"></input>
</div>
  
  )
}

//Products//
function Products(){


  return(
  
  <div id="products">
  
  <div id="product1">
  
  <img src={one} alt="image1"></img>
  <p id="productpara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis impedit eaque ipsa qui pariatur, totam iure ducimus dolor obcaecati. Excepturi.</p>
  
  </div>
  
  <div id="product2">
  
  <img src={two} alt="image2"></img>
  <p id="productpara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis impedit eaque ipsa qui pariatur, totam iure ducimus dolor obcaecati. Excepturi.</p>
  
  </div>
  
  <div id="product3">
  <img src={three} alt="image3"></img>
  <p id="productpara">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis impedit eaque ipsa qui pariatur, totam iure ducimus dolor obcaecati. Excepturi.</p>
  
  </div>
  
  </div>
  )
  }

  //about us//
function Aboutus(){

  return(
<div id="aboutus">

<h1>About us</h1>

<p id="aboutuspara">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat maiores nemo eius perferendis voluptas minima tempora qui quis officia doloribus, magnam facere excepturi, inventore voluptatem optio officiis ex perspiciatis recusandae earum mollitia. Ab consequuntur non saepe pariatur corrupti error corporis iste! Non hic sint aliquid voluptas exercitationem deserunt quia atque. ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore consequatur soluta non, velit iusto culpa? Assumenda illum sunt repellendus modi asperiores quibusdam, necessitatibus vero fugit ducimus quidem officiis, incidunt cum qui veritatis odio esse similique est possimus ab, consequuntur iusto quod vitae. Minima accusamus sapiente praesentium voluptatibus! Maxime, vero.</p>

</div>
  )
}
//Contact us//

function Contact(){
  return(
    <div id="contactus">
  
  <h1>Contact us</h1>
  <p>Mobile : 1234567890</p>
  <p>Email  : Perfumy@gmail.com</p>
  
   </div>
  )
  }




const root=ReactDom.createRoot(document.getElementById("root"))

root.render(

<div>
    <Navbar> </Navbar>
    <Searchbar></Searchbar>
    <Products> </Products>
    <Aboutus></Aboutus>
    <Contact> </Contact>
    </div>

)


  

