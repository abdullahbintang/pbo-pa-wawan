// Kelas induk (parent class)
class Transportasi {
    constructor(brand, tahunProduksi) {
        this.brand = brand;
        this.tahunProduksi = tahunProduksi;
    }

    // Method pada kelas induk
    deskripsi() {
        return `Transportasi ${this.brand} tahun ${this.tahunProduksi}`;
    }

    bunyiKlakson() {
        return "Diiing!";
    }
}

// Kelas turunan (child class) - Sedan mewarisi sifat dari Transportasi
class Sedan extends Transportasi {
    constructor(brand, tahunProduksi, model) {
        super(brand, tahunProduksi);
        this.model = model;
    }

    // Method tambahan pada kelas turunan
    infoLengkap() {
        return `${this.deskripsi()}, model: ${this.model}`;
    }

    // Override method dari kelas induk
    bunyiKlakson() {
        return "Pooon!";
    }
}

// Kelas turunan lainnya
class Truk extends Transportasi {
    constructor(brand, tahunProduksi, kapasitas) {
        super(brand, tahunProduksi);
        this.kapasitas = kapasitas;
    }

    infoLengkap() {
        return `${this.deskripsi()}, kapasitas angkut: ${this.kapasitas} ton`;
    }

    bunyiKlakson() {
        return "Hoooonk!";
    }
}

// Contoh penggunaan
const sedanBaru = new Sedan("Honda Accord Turbo", 2022, "Sedan Premium");
console.log(sedanBaru.infoLengkap());
console.log(sedanBaru.bunyiKlakson());     

const trukBaru = new Truk("Mitsubishi Fuso", 2018, 12);
console.log(trukBaru.infoLengkap()); 
console.log(trukBaru.bunyiKlakson());