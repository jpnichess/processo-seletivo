import card_1 from "../assets/Cards/card_1.png";
import card_2 from "../assets/Cards/card_2.png";
import card_3 from "../assets/Cards/card_3.png";


export function getCards() {
     return new Promise((res) => {
          res([
               {
                    title: 'NOVO LOGO, MESMA ESSÊNCIA.',
                    description: "Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!",
                    image: card_1,
                    id: 1,
               },
               {
                    title: 'É AMANHÃ',
                    description: "SIMPLE and TRUE: lançamento da nova coleção Outono Inverno 2024 da Bebecê ❤️",
                    image: card_2,
                    id: 2,
               },
               {
                    title: 'descubra o glamour em cada passo.',
                    description: "Quer brilhar ainda mais neste inverno sem abrir mão do conforto? Esta mule é perfeita para você. ✨",
                    image: card_3,
                    id: 3,
               },
          ]);
     });
}
export default getCards;