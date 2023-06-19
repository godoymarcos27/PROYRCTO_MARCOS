import { Cardproductos } from "./tarjetasproductos";
// import { FormulariopostCliente, FormularioputCliente } from './Formulario';
import { useEffect, useState } from "react"
import axios from "axios";
// import { Cliente } from "./cliente";
// import { Tarjetas } from "./Tarjetas";
// import { Borrar } from './cliente';
 export function Productos(){

const [datos, setdatos_productos]=useState([])
const [id_productos, setid_productos]= useState()
const [codigo, setcodigo]= useState()
const [nombre, setnombre]= useState()
const [descripcion, setdescripcion]= useState()
const [precio, setprecio]= useState()
const [estado, setstado]= useState()
const [ tbl_mascota_id, settbl_mascota_id]= useState()


// useEffect(function, Array de dependencias)
useEffect(()=>{

    
    var requestOptions = {
        method: 'GET',
        Accept: 'application/json'
        
      
      };
      if(id_productos){
        fetch(`http://localhost:4000/api/productos/${id_productos}`, requestOptions)
        .then(response => response.json())
        .then(result => setdatos_productos(result))
        .catch(error => console.log('error', error));
       
      }else{
        fetch("http://localhost:4000/api/productos", requestOptions)
        .then(response => response.json())
        .then(result => setdatos_productos(result))
        .catch(error => console.log('error', error));
      }
    
       }, [id_productos])

      if (datos.length  < 1) {
        return<>
          <input className=" form mt-5"  value={id_productos} onChange={(e)=> setid_productos(e.target.value)} style={{marginLeft:"550px" , width: "350px"}}></input>
     
        
        
        <h3>No se encontraron datos</h3>
        </> 
     }
const list_productos =datos.map(productos=> <Cardproductos
    // key={id_mascota.id}
    img={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKEtTKKLWhLuAFQ-vF6tXdyxQrcyqnJXXSHQ&usqp=CAU"}
     codigo={productos.codigo}
    nombre={productos.nombre}
    descripcion={productos.descripcion}
    precio={productos.precio}
    estado={productos.estado}
   
   
/>)


const post_producto = () => {
  axios.post("http://localhost:4000/api/productos", {
   codigo :codigo,
   nombre:nombre,
   descripcion:descripcion,
   precio:estado,
   estado: estado,
 tbl_mascota_id: tbl_mascota_id,
   precio:precio
    })
    .then((response) => {
      setcodigo("");
      setnombre("");
      setdescripcion("");
      setprecio("");
      setstado("");
      settbl_mascota_id("");
   
      alert("POST EXITOSO");
    })

    .catch((error) => console.log("error", error));
};

const handlesubmit = (e) => {
  e.preventDefault();
  post_producto();
};
 function Borrar(id){
    
    
  if(window.confirm ("Estas seguro de querer borrar?")){
      fetch("http://localhost:4000/api/productos/"+ codigo, {
          method: "DELETE",
          Headers:{ "content-type":"aplication/json"},
          body: JSON.stringify(datos)
      })
    
      .then((result) =>{

      })
      .catch(error => console.log('error', error))
  }
  
  
  
}
return<>
          <input className=" form mt-5"  value={id_productos} onChange={(e)=> setid_productos(e.target.value)} style={{marginLeft:"550px" , width: "350px"}}></input>

<div className="container">

  
<div style={ {marginLeft:"1100px"}} >         <a type="button"  className="btn btn-success " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
add 
</a>
         </div>
        
     
  

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content" style={{width: "400px",  marginLeft:"100px" }}>
      <div className="">
      </div>
      <div className="">
        {/* form */}


<div className="">
<div
className="containerform mt-5  " 
id="ong"
style={{ marginLeft: "390px"}}
>
<div className="row justify-content-md-center" >
<div className="col-xl-5 col-md-12" >
  <div className=" c"style={{ width: "20rem", height: "40rem", marginLeft:"-350px"}} >
    <div className="card-header">
      <h3>Ingresar una Nuevo Producto</h3>
    </div>
    <div className="card-body" >
     <form onSubmit={handlesubmit}>
                <div className=" mb-3">
                  <label className="form-label">Codigo Producto</label>

                  <input
                    value={codigo}  onChange={(e) => setcodigo(e.target.value)}
                    type="text"
                    className="form-control"
                    id="DNI"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Nomnbre</label>

                  <input
                    value={nombre}
                    onChange={(e) => setnombre(e.target.value)}
                    type="text"
                    className="form-control"
                    id="Nombre"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Descripcion</label>

                  <input
                    value={descripcion}
                    onChange={(e) => setdescripcion(e.target.value)}
                    type="text"
                    className="form-control"
                    id="Apellido"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Precio</label>

                  <input
                    value={precio}
                    onChange={(e) => setprecio(e.target.value)}
                    type="text"
                    className="form-control"
                    id="E-mail"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Estado</label>

                  <input
                    value={estado}
                    onChange={(e) => setstado(e.target.value)}
                    type="text"
                    className="form-control"
                    id="E-mail"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label"> tbl_mascota_id</label>

                  <input
                    value={ tbl_mascota_id}
                    onChange={(e) =>  settbl_mascota_id(e.target.value)}
                    type="text"
                    className="form-control"
                    id="E-mail"
                  />
                </div>

                <button type="submit" className="btn btn-success">
                  Agregar
                </button>

                <div className="mb-3"></div>
              </form>
    </div>
  </div>
</div>
</div>
</div> 
</div> 




         {/* form */}
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

    
        </div>
<div className="container" >
   {list_productos} 
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
