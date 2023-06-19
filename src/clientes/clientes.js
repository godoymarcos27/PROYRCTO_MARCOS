import axios from "axios";
import { useEffect, useState } from "react";
import { Tarjetaclientes } from "./tarjetacliente";

;
export function Clientes(){
const [datos, setdatos_clientes]=useState([])
const [id_cliente, setid_cliente]= useState()
const [DNI, setDNI_cliente] = useState("");
  const [nombre, setnombre_cliente] = useState("");
  const [apellido, setapellido_cliente] = useState("");
  const [email, setemail_cliente] = useState("");


// useEffect(function, Array de dependencias)
useEffect(()=>{

    
    var requestOptions = {
        method: 'GET',
        Accept: 'application/json'
        
      
      };
      if(id_cliente){
        fetch(`http://localhost:4000/api/clientes/${id_cliente}`, requestOptions)
        .then(response => response.json())
        .then(result => setdatos_clientes(result))
        .catch(error => console.log('error', error));
       
      }else{
        fetch("http://localhost:4000/api/clientes", requestOptions)
        .then(response => response.json())
        .then(result => setdatos_clientes(result))
        .catch(error => console.log('error', error));
      }
      
      
}
, [id_cliente])

const post_cliente = () => {
    axios.post("http://localhost:4000/api/clientes", {
        DNI: DNI,
        nombre: nombre,
        apellido: apellido,
        email: email,
      })
      .then((response) => {
        setDNI_cliente("");
        setnombre_cliente("");
        setapellido_cliente("");
        setemail_cliente("");
        console.log(response);
        alert("POST EXITOSO");
      })

      .catch((error) => console.log("error", error));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    post_cliente();
  };


if (datos.length  < 1) {
   return<>
          <input className=" form mt-5" value={id_cliente} onChange={(e)=> setid_cliente(e.target.value)} style={{marginLeft:"550px" , width: "350px"}}></input>


   
   
   <h3>No se encontraron datos</h3>
   </> 
}

const list_clientes =datos.map(clientes=> <Tarjetaclientes
    key={clientes.DNI}
        nombre={clientes.nombre}
        apellido={clientes.apellido}
    DNI={clientes.DNI}
    email={clientes.email}
    img={"https://img.freepik.com/free-icon/user_318-804790.jpg"}
   
/>)



    return <>
          <input className=" form mt-5" value={id_cliente} onChange={(e)=> setid_cliente(e.target.value)} style={{marginLeft:"550px" , width: "350px"}}></input>
  
   






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
      <h3>Ingresar una Nuevo</h3>
    </div>
    <div className="card-body" >
     <form onSubmit={handlesubmit}>
                <div className=" mb-3">
                  <label className="form-label">DNI</label>

                  <input
                    value={DNI}  onChange={(e) => setDNI_cliente(e.target.value)}
                    type="text"
                    className="form-control"
                    id="DNI"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Nomnbre</label>

                  <input
                    value={nombre}
                    onChange={(e) => setnombre_cliente(e.target.value)}
                    type="text"
                    className="form-control"
                    id="Nombre"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Apellido</label>

                  <input
                    value={apellido}
                    onChange={(e) => setapellido_cliente(e.target.value)}
                    type="text"
                    className="form-control"
                    id="Apellido"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">E-mail</label>

                  <input
                    value={email}
                    onChange={(e) => setemail_cliente(e.target.value)}
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

    


       {/* <FormulariopostCliente></FormulariopostCliente>
       <FormularioputCliente></FormularioputCliente>
        */}
        <div className="container">
            {list_clientes} 
        </div>





     
  
    </>

  
}