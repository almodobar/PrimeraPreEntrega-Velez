class Personaje {
    constructor(entrada) {
        this.alias = entrada.alias;
        this.clase = entrada.clase;
        this.damage = entrada.damage;
        this.elemento = entrada.elemento;
        this.arma = entrada.arma;
        this.edad = parseInt(entrada.edad);
    };

    mayorDeEdad() {
        return personaje.edad < 14;
    };
};