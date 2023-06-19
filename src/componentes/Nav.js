// import { Modal } from "./Modal"

import { Link, Outlet } from 'react-router-dom';


{
  
}

function BarraNAv(){
  
  return<>  

   <div>
  
  
  <script src="../src/componentes/main.js"/>
  

   </div>
  <nav className="sidebar locked">
  <div className="logo_item flex">
    <span className="nav_image">
      <img
        src="https://www.zarla.com/images/zarla-paraso-peludo-1x1-2400x2400-20210825-4wvhv9v6h6jqj4phdt3v.png?crop=1:1,smart&width=250&dpr=2"
        alt=""
      />
    </span>
    <span className="logo_name" id="shopname">PET SHOP</span>
    <i className="block_bx bx bx-lock-alt" id="lock-icon" title="Unlock Sidebar"></i>
    <i className="bx bx-x" id="sidebar-close"></i>
  </div>


  <div className="menu_container">
    <div className="menu_items">

      <ul className="menu_item">
        <div className="menu_title flex">
          <span className="title" id="span">Menu</span>
          <span className="line"></span>
        </div>

        <li className="item ">
            <a href="" className="link flex">
            <i class='bx bxs-home' ></i>
            <li>
                <Link to="/" id="span" className="link flex">home</Link>
            </li>
            </a>
     
        </li>
        <li className="item ">
            <a href="" className="link flex">
            <i class='bx bxs-user' ></i>
            <Link to="/clientes" className="link flex">clientes</Link></a>
     
        </li>
     

        <li className="item ">
            <a href="" className="link flex">
            <i class='bx bxs-cat'></i>
            <Link to="/mascotas" id="span" className="link flex">Macotas</Link>
            </a>
     
        </li>
        <li className="item ">
            <a href="" className="link flex">
            <i class='bx bxs-shopping-bag-alt'></i>
            <Link id="span" to="/Productos " className="link flex">Productos</Link>
          </a>
        </li>
    
      
    
 </ul>
 </div>
 </div>
     <Outlet></Outlet>
</nav>

  
</>

  //   return  <div className="container-fluid">
  //  <a class="navbar-brand" href="#">
  //      <img src="https://www.pngitem.com/pimgs/m/6-61492_perro-gato-animales-mascotas-lindo-silueta-cat-and.png" alt="Bootstrap" width="60" height="50"/>
  //    </a>
  //    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
  //      <span className="navbar-toggler-icon"></span>
  //    </button>
  //    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  //      <div className="navbar-nav" id='nav'>
  //        <a className="nav-link active" aria-current="page" href="#">Mascotas</a>
  //       <Modal ></Modal>
         
  //      </div>
  //    </div>
  //  </div>

   
}
export default BarraNAv