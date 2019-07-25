function totalDigitRekursif(angka) {
    // you can only write your code here!
    var angkaString = String(angka);
    // console.log(angkaString[0]);
    // console.log(angkaNumber);
    if (angkaString.length > 1) {
        var angkaNumber = Number(angkaString[0]);
        // console.log (Number(angkaString.slice(1)));
        return angkaNumber + totalDigitRekursif(Number(angkaString.slice(1)));
    }
    else if (angkaString.length === 1) {
        return angka;
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5