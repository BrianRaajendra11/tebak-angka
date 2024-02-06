alert(" GAME TEBAK ANGKA \n PILIH ANGKA 1-10 \n KAMU PUNYA 3 KESEMPATAN ");

const angkaBenar = Math.floor(Math.random() * 10) + 1;

for (let nyawa = 3; nyawa >= 1; nyawa--) {
    const tebakanuser = prompt("Masukkan Tebakkan Angka");

if (tebakanuser == angkaBenar) {
    alert(`Tebakkan Anda Benar! \n Angka yang benar adalah ${angkaBenar}`);
    break;
}else if (tebakanuser > angkaBenar) {
    alert(`Tebakan Anda terlalu TINGGI \n Anda masih punya ${nyawa - 1} kesempatan`);
}else if (tebakanuser < angkaBenar) {
    alert(`Tebakan Anda terlalu RENDAH \n Anda masih punya ${nyawa - 1} kesempatan`);
    }

    if (nyawa == 1) {
        alert(`Anda Gagal! \n Angka yang benar adalah ${angkaBenar}`);
    }
}