class Ninja {
    constructor(nombre, salud) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;

    }

    sayName() {
        console.log("El nombre del ninja es: "+ this.nombre)
    }

    showStats() {
        console.log ("La fuerza del ninja es: " +this.fuerza+ ", La velocidad del ninja es:"+this.velocidad+ ", La salud del ninja es: "+ this.salud)
    }

    drinkSake() {
        console.log ("La salud del ninja luego de comer frutita es "+ (this.salud += 10))
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
