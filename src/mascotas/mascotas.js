import axios from "axios";
// import { FormulariopostCliente, FormularioputCliente } from './Formulario';
import { useEffect, useState } from "react";
// import { Cliente } from "./cliente";
import { Tarjetas } from "./Tarjetas";
// import { Borrar } from './cliente';

 export function Mascotas(){

const [datos, setdatos_mascota]=useState([])
const [id_mascota, setid_mascota]= useState()
const [id, setid] = useState("");
const [raza, setraza_mascota] = useState("");
const [nombre, setnombre_mascota] = useState("");
const [precio, setprecio_mascota] = useState("");
const [sexo, setsexo] = useState("");
const [edad, setedad] = useState("");

// useEffect(function, Array de dependencias)
useEffect(()=>{

    
    var requestOptions = {
        method: 'GET',
        Accept: 'application/json'
        
      
      };
      if(id_mascota){
        fetch(`http://localhost:4000/api/mascotas/${id_mascota}`, requestOptions)
        .then(response => response.json())
        .then(result => setdatos_mascota(result))
        .catch(error => console.log('error', error));
       
      }else{
        fetch("http://localhost:4000/api/mascotas", requestOptions)
        .then(response => response.json())
        .then(result => setdatos_mascota(result))
        .catch(error => console.log('error', error));
      }
    
       }, [id_mascota])

       const post_Mascota = () => {
        axios.post("http://localhost:4000/api/mascotas", {
         raza :raza,
         id:id,
         nombre:nombre,
         edad:edad,
         sexo:sexo,
         precio:precio
          })
          .then((response) => {
            setid("");
            setraza_mascota("");
            setnombre_mascota("");
            setedad("");
            setsexo("");
            setprecio_mascota("");
            console.log(response);
            alert("POST EXITOSO");
          })
    
          .catch((error) => console.log("error", error));
      };
    
      const handlesubmit = (e) => {
        e.preventDefault();
        post_Mascota();
      };

      if (datos.length  < 1) {
        return<>
<input className=" form mt-5" value={id_mascota} onChange={(e)=> setid_mascota
  (e.target.value)} style={{marginLeft:"550px" , width: "350px"}}></input>     
        
        
        <h3>No se encontraron datos</h3>
        </> 
     }
const list_mascota =datos.map(mascotas=> <Tarjetas
    // key={id_mascota.id}
    img={"https://images-na.ssl-images-amazon.com/images/I/61v-JQtQnNL._AC_UL600_SR600,600_.jpg"}
     id={mascotas.id}
    raza={mascotas.raza}
    nombre={mascotas.nombre}
    sexo={mascotas.sexo}
    edad={mascotas.edad}
    precio={mascotas.precio}
   
/>)

return<>
{/* <input value={id_mascota} onChange={(e)=> setid_mascota(e.target.value)} style={{ marginLeft: "500px"}}></input> */}

<input className=" form mt-5" value={id_mascota} onChange={(e)=> setid_mascota
  (e.target.value)} style={{marginLeft:"550px" , width: "350px"}}></input>

  

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
  <div className=" c"style={{ width: "20rem", height: "46rem", marginLeft:"-350px"}} >
    <div className="card-header">
      <h3>Ingresar una Nueva Macota</h3>
    </div>
    <div className="card-body" >
      <form onSubmit={handlesubmit}>
        <div className=" mb-3">
          <label className="form-label">ID</label>

          <input
            value={id}  onChange={(e) => setid(e.target.value)}
            type="text"
            className="form-control"
            id="DNI"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Raza</label>

          <input
            value={raza}
            onChange={(e) => setraza_mascota(e.target.value)}
            type="text"
            className="form-control"
            id="Nombre"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Nombre</label>

          <input
            value={nombre}
            onChange={(e) => setnombre_mascota(e.target.value)}
            type="text"
            className="form-control"
            id="Apellido"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Sexo</label>

          <input
            value={sexo}
            onChange={(e) => setsexo(e.target.value)}
            type="text"
            className="form-control"
            id="E-mail"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Edad</label>

          <input
            value={edad}
            onChange={(e) => setedad(e.target.value)}
            type="text"
            className="form-control"
            id="E-mail"
          />
        </div>

 <div className="mb-3">
          <label className="form-label">Precio</label>

          <input
            value={precio}
            onChange={(e) => setprecio_mascota(e.target.value)}
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


<div className="container">
  {list_mascota}
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
