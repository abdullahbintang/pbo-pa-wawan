class ElektronikInterface {
    constructor() {
        if (this.constructor === ElektronikInterface) {
            throw new Error("Class abstrak tidak bisa diinstansiasi langsung");
        }
    }
    
    nyalakan() {
        throw new Error("Method 'nyalakan()' harus diimplementasi");
    }
    
    matikan() {
        throw new Error("Method 'matikan()' harus diimplementasi");
    }
    
    isiDaya() {
        throw new Error("Method 'isiDaya()' harus diimplementasi");
    }
}

// Implementasi interface
class Laptop extends ElektronikInterface {
    constructor(brand, tahun) {
        super();
        this.brand = brand;
        this.tahun = tahun;
    }
    
    nyalakan() {
        return `Laptop ${this.brand} dinyalakan`;
    }
    
    matikan() {
        return `Laptop ${this.brand} dimatikan`;
    }
    
    isiDaya() {
        return `Mengisi baterai untuk laptop ${this.brand}`;
    }
}

// Contoh penggunaan
const laptopSaya = new Laptop("Lenovo", 2023);
console.log(laptopSaya.nyalakan());
console.log(laptopSaya.matikan());
console.log(laptopSaya.isiDaya());

// Mencoba instansiasi interface (akan error)
try {
    const interfaceObj = new ElektronikInterface();
} catch (error) {
    console.log("Error:", error.message);
}