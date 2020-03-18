export function total(quantity, term) {
   
   let totalQuantity;

   if(quantity <= 1000){
      totalQuantity = quantity * .25;
   }else if(quantity > 1000 && quantity <= 5000){
      totalQuantity = quantity * .20;
   }else if(quantity > 5000 && quantity <= 10000){
      totalQuantity = quantity * .15;
   }else if(quantity > 10000){
      totalQuantity = quantity * .10;
   }

   let totalTerm;
   
   switch (term) {
      case 3:
         totalTerm = quantity * .05;
         break;
      case 6:
         totalTerm = quantity * .10;
         break;
      case 12:
            totalTerm = quantity * .15;
            break;
      case 24:
         totalTerm = quantity * .20;
         break;
      default:
         break;
   }

   return totalTerm + totalQuantity + quantity;
}