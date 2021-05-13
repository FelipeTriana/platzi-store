const myName = 'Felipe';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};

/*La ventaja del tipado es que al llamar esta funcion SOLO se recibiran parametros del tipo previamente definido evitando asi errores en produccion */
suma(12, 23); 

class Persona {
  constructor(private age: number, private name: string) {} 
                                                           
/*A diferencia de java los campos de la clase se pueden declarar directamente 
en el constructor, tambien se esta haciendo automaticamente la asignacion
con this(this.age = age;)
*/

  getSummary() {
    return `my name is ${this.name}, ${this.age}`;    //Los atributos de una clase se acceden en sus metodos con la referencia 'this'
  }
}

const felipe = new Persona(15, 'Felipe');  //Nuevo objeto tipo persona
felipe.getSummary();