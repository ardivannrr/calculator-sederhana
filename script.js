function operasi(event) {
  event.preventDefault();

  // Ambil nilai dari form
  let angka1 = parseFloat(document.fform.angka1.value);
  if (isNaN(angka1)) angka1 = 0.0;
  let angka2 = parseFloat(document.fform.angka2.value);
  if (isNaN(angka2)) angka2 = 0.0;
  let operator = document.getElementById("operator").value;
  let hasil;

  // Lakukan operasi berdasarkan operator yang dipilih
  if (operator === "+") {
    hasil = angka1 + angka2;
  } else if (operator === "-") {
    hasil = angka1 - angka2;
  } else if (operator === "*") {
    hasil = angka1 * angka2;
  } else if (operator === "/") {
    hasil = angka1 / angka2;
  } else if (operator === "%") {
    hasil = angka1 % angka2;
  } else {
    alert("Operator yang anda masukan salah.");
    return;
  }

  // Tampilkan hasilnya
  alert("Hasilnya adalah " + hasil);

  // Reset form dan variabel
  document.fform.reset();
  angka1 = 0.0;
  angka2 = 0.0;
  hasil = null;
}
