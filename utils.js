import { booleanSwitch } from "./config.js";

let cadenaTexto1= "El fracaso es simplemente la oportunidad de comenzar de nuevo";
let cadenaTexto2 = "esta vez de forma más inteligente";


export function procesadorTexto(boolean,texto1,texto2) {
  if (boolean === true) {
    let textoconcatenado = texto1+', '+texto2;
    return textoconcatenado;
  } else if(boolean === false){
    let textoconcatenado = texto1+', '+texto2
    return `La cantidad de caracteres del texto concatenado es de ${textoconcatenado.length}`;
  }else{
    console.error('ERROR: Valor  de booleano no es true o false');
  };
};

console.log(procesadorTexto(booleanSwitch,cadenaTexto1,cadenaTexto2));
