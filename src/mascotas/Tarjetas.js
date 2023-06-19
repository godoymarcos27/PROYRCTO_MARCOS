import { useState } from "react"



export function Tarjetas({raza,  nombre, sexo, edad, precio, img, id }){

     
// const[cargando, setcargando]= useState(true)
// if(cargando){
//     return <Mensaj setCargando={setcargando}></Mensaj>
// }
   return<>
    <div  className="row row-cols-1 row-cols-md-4 g-4 mt-4 p-2 "  style={{color:"green", display: "flex",justifyContent:"center"}} >
 
   <div className="card p-2">
   <img src={img} className="card-img-top " alt="..."/>
   <div className="card-body"  >
     <h5 className="card-title" ><b>Raza:</b> {raza}</h5>
     <h5 className="card-title" ><b>ID:</b> {id}</h5>
     <p className="card-text"><b>Nombre:</b> {nombre}</p>
     <p className="card-text"><b>Sexo:</b> {sexo}</p>
     <p className="card-text"><b>Edad:</b> {edad}</p>
     <p className="card-text"  style={{color:"green", display: "flex",justifyContent:"end"}}> {precio}</p>
   </div>
   
 </div>

</div> 
</>
}

// export function Boton_borrar(){
// <a href="#">
// <i class='bx bx-trash'></i><i class='bx bx-trash'></i>
// </a>
     
//   // const[cargando, setcargando]= useState(true)
//   // if(cargando){
//   //     return <Mensaj setCargando={setcargando}></Mensaj>
//   // }
//      return<>
    
//   </>
//   }