import React, {useState, Fragment} from 'react';
import {total} from '../helpers.js'

const Form = (props) => {

   const {quantity, saveQuantity, term, saveTerm, saveTotalPrice, saveLoading} = props;

   const [error, saveError] = useState(false);

   const prestamo = e =>{
      e.preventDefault();

      if(quantity === 0 || term === 0 || term === "" ||isNaN(quantity) || isNaN(term)){
         saveError(true);
      }else{
         saveError(false);
         
         saveLoading(true);

         setTimeout(() => {
            saveLoading(false);
            const totalPrice = total(quantity, term);
            saveTotalPrice(totalPrice);
         }, 3000);
      
      }
   }

   const readQuantity = (e) =>{
      saveQuantity(parseInt(e.target.value));
   }

   const readTerm = (e) =>{
      saveTerm(parseInt(e.target.value));
   }

   return ( 
      <Fragment>
         <form onSubmit = {prestamo}>
            <div className="row">
               <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                     className="u-full-width" 
                     type="number" 
                     placeholder="Ejemplo: 3000" 
                     onChange = {readQuantity}
                  />
               </div>
               <div>
                  <label>Plazo para Pagar</label>
                  <select className="u-full-width" onChange = {readTerm}>
                     <option value="">Seleccionar</option>
                     <option value="3">3 meses</option>
                     <option value="6">6 meses</option>
                     <option value="12">12 meses</option>
                     <option value="24">24 meses</option>
                  </select>
               </div>
               <div>
                  <input 
                     type="submit" 
                     value="Calcular" 
                     className="button-primary u-full-width" 
                  />
               </div>
            </div>
         </form>
         
         {error ? <p className="error">Por favor, seleccione un valor en ambos campos</p> : null}
      </Fragment>
   );
}
 
export default Form;