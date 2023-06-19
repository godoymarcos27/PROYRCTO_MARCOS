
import './App.css';
import BarraNAv from './componentes/Nav';

import { Mascotas } from './mascotas/mascotas';

import { Tarjetas } from './mascotas/Tarjetas';

import { Routes, Route } from 'react-router-dom';

import { Productos } from './productos/productos';

import { Clientes } from './clientes/clientes';

const datos_mascotas = [
 
  {
     img: "https://mohrs.org/wp-content/uploads/2015/11/bunnyinhand-600x600.jpg",
  especie: "Conejo",
  raza: "Bunny Sitting",
  nombre: "Rabito",
  sexo: "Masculino",
  precio: "$.100"
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0587/0429/8168/products/african-grey-parrot-amazing-amazon-2.jpg?v=1676512377",
 especie: "Loro",
 nombre: "Paco",
raza: "African Parrot",
sexo: "Masculino",
precio: "$.100"
 },
 {
  img: "https://www.elmueble.com/medio/2022/06/07/gato-erik-jan-leusink-ibpxglgjimi-unsplash_5de6d30d_600x600.jpg",
especie: "Gato",
nombre: "Bigotes",
raza: "Gato Bengalí",
sexo: "Masculino",
precio: "$.100"

},
{
  img: "https://t2.ea.ltmcdn.com/es/posts/9/7/1/la_serpiente_piton_como_mascota_20179_600_square.jpg",
especie: "Sepiente",
nombre: "Lola",
raza: "Piton Real",
sexo: "Femenino",
precio: "$.100"

}
]



function App() {

  const card= datos_mascotas.map(datos => <Tarjetas
  img={datos.img}
  especie={datos.especie}
  raza={datos.raza}
  nombre={datos.nombre}
  sexo={datos.sexo}
  precio={datos.precio}

  ></Tarjetas> )
  return<>
   

 
    <BarraNAv>
    
    </BarraNAv>
    
   
  <Routes>
  
  <Route exact path='/' component={<BarraNAv/>}>
    <Route path='Mascotas' element={<Mascotas></Mascotas>}></Route>
    <Route path='Clientes' element={<Clientes></Clientes>}></Route>
    
    <Route path='productos' element={<Productos></Productos>}></Route>
  </Route>
  </Routes>

   

</> 

}

export default App;
