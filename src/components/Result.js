import React from 'react';

const Result = ({totalPrice, term, quantity}) => {
   return ( 
      <div className = "u-full-width resultado">
         <h2>Resúmen</h2>
         <p>
            La cantidad solicitada es: ${quantity} <br/>
            Plazo a pagar: {term} meses <br/>
            Pago mensual: ${(totalPrice / term).toFixed(2)} <br/>
            Total a pagar: ${(totalPrice).toFixed(2)}
         </p>
      </div>
   );
}
 
export default Result;