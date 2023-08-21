(function (){ 

function fCalculaIVA(nprecio,nIva,sObservacion){
    if(nIva==void 0){nIva = 12}

    return nprecio*nIva;
}
fCalculaIVA(100,12);

var nCalculo = function (nprecio,nIva, sObservacion)  {return nprecio*nIva};
    
    })();