// Kelas induk (parent class)
class BangunDatar {
    constructor() {
        if (this.constructor === BangunDatar) {
            throw new Error("Kelas abstrak tidak bisa diinstansiasi langsung");
        }
    }

    // Metode yang akan di-override oleh kelas turunan
    hitungLuas() {
        throw new Error("Metode hitungLuas() harus diimplementasi");
    }

    tampilkanInfo() {
        return `Luas bangun ini adalah ${this.hitungLuas()} satuan persegi`;
    }
}

// Kelas turunan (child class)
class Persegi extends BangunDatar {
    constructor(sisi) {
        super();
        this.sisi = sisi;
    }

    // Override metode hitungLuas
    hitungLuas() {
        return this.sisi * this.sisi;
    }

    // Tambahan metode khusus untuk Persegi
    hitungKeliling() {
        return 4 * this.sisi;
    }
}

// Kelas turunan lainnya
class JajarGenjang extends BangunDatar {
    constructor(alas, tinggi) {
        super();
        this.alas = alas;
        this.tinggi = tinggi;
    }

    // Override metode hitungLuas
    hitungLuas() {
        return this.alas * this.tinggi;
    }
}

class LayangLayang extends BangunDatar {
    constructor(diagonal1, diagonal2) {
        super();
        this.diagonal1 = diagonal1;
        this.diagonal2 = diagonal2;
    }

    // Override metode hitungLuas
    hitungLuas() {
        return 0.5 * this.diagonal1 * this.diagonal2;
    }
}

// Fungsi yang mendemonstrasikan polimorfisme
function tampilkanLuasBangun(bangun) {
    if (bangun instanceof BangunDatar) {
        console.log(bangun.tampilkanInfo());
    } else {
        console.log("Parameter bukan instansi dari kelas BangunDatar");
    }
}

// Penggunaan
const persegi = new Persegi(5);
const jajarGenjang = new JajarGenjang(6, 8);
const layangLayang = new LayangLayang(7, 10);

tampilkanLuasBangun(persegi); // Memanggil metode hitungLuas() dari kelas Persegi
tampilkanLuasBangun(jajarGenjang); // Memanggil metode hitungLuas() dari kelas JajarGenjang
tampilkanLuasBangun(layangLayang); // Memanggil metode hitungLuas() dari kelas LayangLayang

console.log(`Keliling persegi: ${persegi.hitungKeliling()} satuan`);

// Contoh array dengan elemen berbagai bangun (polimorfisme dalam struktur data)
const arrBangun = [persegi, jajarGenjang, layangLayang];
console.log("\nMenampilkan luas semua bangun dalam array:");
arrBangun.forEach((bangun, index) => {
    console.log(`Bangun ke-${index + 1}: ${bangun.tampilkanInfo()}`);
});