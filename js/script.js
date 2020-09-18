/* Promesas vs Observables: 
   - Tanto las promesas como los observables son asíncronos.
   - Promesa    -> Devuelve un valor/conjunto de valores.
     Observable -> Puede devolver más de un valor/conjunto  
       de valores que irá llegando a lo largo del tiempo.
   - Los observables, a diferencia de las promesas, se
     pueden cancelar (desuscribirse) para dejar de recibir valores.
     
     Para cancelar una promesa necesitamos una biblioteca de terceros.
*/
  
let promesa = new Promise((resolve, reject) => {
    /* - Llamamos a resolve(...) cuando lo que estabamos haciendo finaliza con éxito. 
     * - Llamamos a reject(...) cuando lo que estamos haciendo falla.
     */

    //resolve("¡Funcionó!");       // OK: Promesa cumplido
    reject("Algo ha fallado..");   // Error: Promesa no cumplida
  });
  
  promesa.then(
      (mensaje) => {
          // then se llama cuando la promesa se cumple 
        console.log(mensaje);
  }).catch(
      (err) => {
          // catch para capturar cuando la promesa no se cumple
          console.log(err);
      }   
  )