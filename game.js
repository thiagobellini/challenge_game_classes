class hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    attack() {
        let atk;

        if (this.type === "mage") {
            atk = "magic";
        } else if(this.type === "warrior") {
            atk = "sword";
        } else if(this.type === "monk") {
            atk = "martial arts";
        } else if(this.type === "ninja") {
            atk = "shuriken";
        }

        console.log(`${this.type} attacked using ${atk}`);
    }
}

let newHero = new hero("Yokopachacaburabura", 536, "mage");
newHero.attack();