// Kelas utama
class Transportasi {
    // Public property (dapat diakses dari mana saja)
    tipe;
    
    // Private property (hanya dapat diakses di dalam kelas)
    #kodeUnik;
    
    // Protected property (konvensi, sebenarnya masih public)
    _kecepatanMaks;
    
    constructor(tipe, kodeUnik, kecepatanMaks) {
        this.tipe = tipe;
        this.#kodeUnik = kodeUnik;
        this._kecepatanMaks = kecepatanMaks;
    }
    
    // Public method
    infoTransportasi() {
        return `Transportasi ${this.tipe}`;
    }
    
    // Private method
    #cekKodeUnik() {
        return this.#kodeUnik.length > 5;
    }
    
    // Method yang mengakses private property/method
    verifikasiAsli() {
        return this.#cekKodeUnik() ? 'Transportasi asli' : 'Transportasi tidak terverifikasi';
    }
    
    // Protected method (konvensi)
    _performa() {
        return this._kecepatanMaks * 0.8;
    }
}

// Kelas turunan
class MobilPribadi extends Transportasi {
    constructor(merek, kodeUnik, kecepatanMaks) {
        super('Mobil', kodeUnik, kecepatanMaks);
        this.merek = merek;
    }
    
    // Menggunakan protected method dari parent class
    infoPerforma() {
        const performa = this._performa();
        return `${this.merek} memiliki performa ${performa} km/jam`;
    }
    
    // Tidak bisa mengakses private property/method parent
    // Error jika uncomment: cekKodeUnik() {
    //   return this.#kodeUnik;
    // }
}

// Demo penggunaan
const motorBaru = new Transportasi('Motor', 'IK145456', 120);
console.log(motorBaru.infoTransportasi()); // Public method: dapat diakses
console.log(motorBaru.verifikasiAsli()); // Memanggil method yang mengakses private members
// console.log(motorBaru.#kodeUnik); // Error: private property tidak dapat diakses dari luar
console.log(motorBaru.tipe); // Public: dapat diakses

const mobilBaru = new MobilPribadi('Mobil', 'YO784623', 200);
console.log(mobilBaru.infoTransportasi()); // Method dari parent class
console.log(mobilBaru.infoPerforma()); // Menggunakan protected method parent