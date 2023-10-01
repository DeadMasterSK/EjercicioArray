// Primero creo la funcion designada con el nombre dado
function ordenarNombresYContar(nombres, ascendente = true) {

    let nombresOrdenados;
    // ordenar los nombres alfaveticamente
    if (ascendente) {
      nombresOrdenados = [...nombres].sort((a, b) => a.localeCompare(b));//en acendente 
    } else {
      nombresOrdenados = [...nombres].reverse((a, b) => b.localeCompare(a));// en decentente
    }
  
    // contar cuantos nombres se repiten en el arreglo
    const repeticiones = nombres.reduce((contador, nombre) => {
      contador[nombre] = (contador[nombre] || 0) + 1;// ocupo la variable contador para guardar cuantas veces se encontro el nombre
      // en la linea 14 miro si el nombre ya esta en nombre si lo esta que sume uno si no que lo deje en 0
      return contador;
    }, {});
  
    // filtrar y contar cuantos nombres comienzan con A o E
    const nombresConAyconE = nombres.filter(nombre => nombre.startsWith('A') || nombre.startsWith('E')).length;
    // Utilizo startsWith() para ver si la cadena comienza con el caracter A o con el E

    return {
      nombresOrdenados,
      repeticiones,
      nombresConAyconE,
    };
  }
  
  const nombres = ["Juan", "Ana", "Pedro", "Maria", "Luis", "Elena", "Ana", "Esteban"];
  const resultado = ordenarNombresYContar(nombres);
  console.log("Nombres ordenados:", resultado.nombresOrdenados, '\n');
  console.log("Nombres repetidos:", resultado.repeticiones, '\n');
  console.log("Nombres que comienzan con 'A' o 'E':", resultado.nombresConAyconE);
  