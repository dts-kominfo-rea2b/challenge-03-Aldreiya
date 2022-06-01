// ! JANGAN DIMOFIDIKASI
const dataBelanjaan = [
  {
    id: "D-10001",
    nama: "Minyak Goreng Delima",
    harga: 25000,
    kuantitas: 2,
  },
  {
    id: "D-10020",
    nama: "Beras Mamos",
    harga: 48000,
    kuantitas: 1,
  },
  {
    id: "F-00010",
    nama: "Larutan Cap Kaki Empat",
    harga: 7500,
    kuantitas: 8,
  },
];

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const listBelanjaan = (list) => {
  let daftar = [];
  for (let i = 0; i < list.length; i++){
   daftar[i] = `- ${list[i].nama} x ${list[i].kuantitas}`;
  }
  return daftar;
};

// boleh dimodifikasi bila ingin menggunakan deklarasi fungsi yang normal
const totalBelanjaan = (total) => {
  let hasil = 0;
  for (let i = 0; i < total.length; i++){
    hasil+=(total[i].harga*total[i].kuantitas);
  }
  return hasil;
};;

// ! JANGAN DIMODIFIKASI
const main = () => {
  console.log("Selamat datang customer");

  console.log("Belanjaan Anda adalah:");
  console.log(listBelanjaan?.(dataBelanjaan)?.join("\n"));
  console.log(
    "\nTotal Belanjaan Anda adalah Rp. " + totalBelanjaan?.(dataBelanjaan)
  );
};

main();

module.exports = {
  dataBelanjaan,
  listBelanjaan,
  totalBelanjaan,
};
