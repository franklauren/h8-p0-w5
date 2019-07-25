function kaliTerusRekursif(angka) {
    // you can only write your code here!
    // console.log(angka.toString());
    var angkaString = angka.toString();
    if (angkaString.length>1) {
        var hasil = 1;
        for (var i=0; i<angkaString.length; i++) {
            hasil = hasil * Number(angkaString[i]);
        }
        return kaliTerusRekursif(hasil);
    }
    else {
        return angka;
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6