function sorting(arrNumber) {
    // code di sini
    var sorted = false;
    for (var i=0; i<arrNumber.length; i++) {
        var temp = [];
        if (arrNumber[i]>arrNumber[i+1]) {
            temp.push(arrNumber[i+1]);
            temp.push(arrNumber[i]);
            arrNumber[i]=temp[0];
            arrNumber[i+1]=temp[1];
            sorted = true;
        }
        // console.log(arrNumber[i],arrNumber[i+1]);
    }
    if (sorted) {
        return sorting(arrNumber)
    }
    else {
        return arrNumber;
    }
  }

//   console.log(sorting([2, 8, 4, 6, 8, 5, 8, 4]));
  
  function getTotal(arrNumber) {
    // code di sini
    if (arrNumber.length === 0) {
        return "''";
    }
    else {
        var highNumber = arrNumber[arrNumber.length-1];
        var highCount = 1;
        for (var i=0; i<arrNumber.length-1; i++) {
            if (arrNumber[i] === highNumber) {
                highCount++;
            }
        }
    }
    return "angka terbesar = " + highNumber + " muncul = " + highCount;
  }
  
//   console.log(getTotal([2,4,4,5,6,8,8,8]))

  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''