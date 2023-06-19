import { Borrar } from "../botouborrar";
import { Productos } from "./productos";

export function Cardproductos({codigo,nombre, descripcion, precio, estado, img}){
    return  <> <div  className="row row-cols-1 row-cols-md-4 g-4 mt-4 p-2 "  style={{ display: "flex",justifyContent:"center"}} >
     
    <div className="card p-2">
    <img src={img} className="card-img-top p-3 " alt="..."/>
    <div className="card-body"  >
      <h5 className="card-title" ><b>Codigo:</b> {codigo}</h5>
      
      <p className="card-text"><b>Nombre:</b> {nombre}</p>
      <p className="card-text"><b>Descripcion:</b> {descripcion}</p>
      
        <p className="card-text"  style={{color:"green", display: "flex",justifyContent:"start"}}> {estado}</p> 
          <p className="card-text"  style={{color:"green", display: "flex",justifyContent:"end"}}>  {precio}</p>
    </div>
    <div className="card-footer text-body-secondary">
   

   
  </div>
  </div>
 
 </div> 
 </> 
        
          
    
      
}
