import React from 'react';
import './Contenido.css';


function Contenido() {
   return(
      <>
      <section class="container">
 <section class="one">
  <div class="logo">
    <img src="https://image.flaticon.com/icons/svg/143/143361.svg"></img>
  </div>
  <h2 class="heading">
   suscribete para obtener mas promociones
  </h2>
  <p> introduce tu email
  </p>
  <form>
    <input type='text' placeholder="introduce tu email"></input><br/>
    <button class="btn" role="button">
      subscribete
    </button>
  </form>
  </section>
  <section class="two">
    <h3>
      gracias por suscribirse  !
    </h3>
    <div class="close"> 
    </div>
  </section>
</section>


      </>
   );
}
export default Contenido;