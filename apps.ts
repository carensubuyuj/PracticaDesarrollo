(function (){

    //el signo de interrogacion hace que un parametro sea opcional
    function fCalculaIVA(nprecio: number, nIva: number=12 , sObservacion?:string){

        return nprecio*nIva;
    }

    fCalculaIVA(100,12);

    const nCalculo = (nprecio:number,nIva: number, sObservacion?:string) => nprecio*nIva;

})();