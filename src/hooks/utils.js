import product_1 from '../assets/Products/product_1.png';
import product_2 from '../assets/Products/product_2.png';
import product_3 from '../assets/Products/product_3.png';


export function getProducts() {
     return new Promise((res) => {
          res([
               {
                    name: 'Scarpin Sligback Bebecê Salto Médio Taça Detalhe Metalizado',
                    image: product_1,
                    price: { amount: 179.9, isDiscount: null },
                    id: 1,
               },
               {
                    name: 'Coturno Feminino Bebecê Tratorado Detalhe Tachas',
                    image: product_2,
                    price: { amount: 349.9, isDiscount: 315 },
                    id: 2,
               },
               {
                    name: 'Scarpin Bebecê Salto Alto Taça Com Fivela',
                    image: product_3,
                    price: { amount: 159.90, isDiscount: null },
                    id: 3,
               },
          ]);
     });
}

export default getProducts;
