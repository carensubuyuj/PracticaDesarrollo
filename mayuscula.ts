const convertirAMinuscula = (producto: string): string => {
    return producto.toLowerCase();
  };
  

  const nombreProducto = "camiseta";
  const nombreEnMinuscula = convertirAMinuscula(nombreProducto);
  console.log(nombreEnMinuscula); 
  