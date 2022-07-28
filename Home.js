import React from 'react';

function Home(){
	
	return (

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
   <div class="container-fluid">
      <span class="text-light techno">Technology</span>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse new-navbar justify-content-end" id="collapsibleNavbar">
         <ul class="navbar-nav navbar">
            <li class="nav-item">
               <a class="nav-link" href="#">HOME</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="#">GALLERY</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="#">FEATURE</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="#">REVIEW</a>
            </li>
            <li class="nav-item">
               <a class="nav-link" href="#">SHOP</a>
            </li>
         </ul>
         <div class="BUY">
            <button class="bg-color">BUY NOW</button>  
         </div>
      </div>
   </div>
</nav>
);
}
export default Home;