"use strict";
class Automovil {
    Encendido: boolean;
    velocidad: number;
    constructor() {
        this.Encendido = false;
        this.velocidad = 0;
    }
    arrancar() {
        if (!this.Encendido) {
            this.Encendido = true;
            console.log("El carro a arrancado.");
        }
        else {
            console.log("El carro está encendido.");
        }
    }
    acelerar(velocidadIncremento) {
        if (this.Encendido) {
            this.velocidad += velocidadIncremento;
            console.log(`El carro esta acelerado y la velocidad es ${this.velocidad} km/h.`);
        }
        else {
            console.log("encender el carro para acelerar.");
        }
    }
    frenar() {
        if (this.Encendido && this.velocidad > 0) {
            this.velocidad = 0;
            console.log("El carro se ha detenido.");
        }
        else if (!this.Encendido) {
            console.log("El carro está apagado, no se puede frenar.");
        }
        else {
            console.log("El carro ya está detenido, no se puede frenar más.");
        }
    }
    apagar() {
        if (this.Encendido) {
            this.Encendido = false;
            console.log("El carro ha sido apagado.");
        }
        else {
            console.log("El carro ya está apagado.");
        }
    }
}

const carro = new Automovil();
carro.arrancar(); 
carro.acelerar(50); 
carro.acelerar(30); 
carro.frenar(); 
carro.apagar(); 
