class HewanAbstrak {
    constructor() {
        // Memastikan kelas ini tidak dapat diinstansiasi secara langsung
        if (new.target === HewanAbstrak) {
            throw new Error("Kelas abstrak tidak dapat diinstansiasi langsung");
        }
    }

    // Metode abstrak - harus diimplementasikan oleh kelas turunan
    bergerak() {
        throw new Error("Metode abstrak bergerak() harus diimplementasikan");
    }

    istirahat() {
        throw new Error("Metode abstrak istirahat() harus diimplementasikan");
    }

    // Metode konkrit yang dapat digunakan oleh semua kelas turunan
    suara() {
        console.log("Suara hewan!");
    }
}

// Kelas turunan yang mengimplementasikan metode abstrak
class Kucing extends HewanAbstrak {
    constructor(nama) {
        super();
        this.nama = nama;
    }

    bergerak() {
        console.log(`Kucing ${this.nama} berjalan dengan empat kaki`);
    }

    istirahat() {
        console.log(`Kucing ${this.nama} tidur di sofa`);
    }
}

class Burung extends HewanAbstrak {
    constructor(jenis) {
        super();
        this.jenis = jenis;
    }

    bergerak() {
        console.log(`Burung ${this.jenis} terbang di udara`);
    }

    istirahat() {
        console.log(`Burung ${this.jenis} bertengger di dahan`);
    }
}

// Penggunaan
try {
    // Ini akan error karena kelas abstrak tidak dapat diinstansiasi
    const hewan = new HewanAbstrak();
} catch (error) {
    console.log("Error:", error.message);
}

const kucingSaya = new Kucing("Milo");
kucingSaya.bergerak(); 
kucingSaya.istirahat(); 
kucingSaya.suara();  

const burungSaya = new Burung("Kenari");
burungSaya.bergerak(); 
burungSaya.istirahat(); 
burungSaya.suara();  