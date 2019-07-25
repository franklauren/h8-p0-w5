function changeVocals(str) {
    //code di sini
    for (var i=0; i<str.length; i++) {
        // console.log(str[i]);
        switch(str[i]) {
            case 'a': str[i] = 'b'; break;
            case 'i': str[i] = 'j'; break;
            case 'u': str[i] = 'v'; break;
            case 'e': str[i] = 'f'; break;
            case 'o': str[i] = 'p'; break;
            case 'A': str[i] = 'B'; break;
            case 'I': str[i] = 'J'; break;
            case 'U': str[i] = 'V'; break;
            case 'E': str[i] = 'F'; break;
            case 'O': str[i] = 'P'; break;
        }
    }
    console.log(str);
    if (str.length === 0) {
        return '';
    }
    // else {
    //     return str[0] + changeVocals(str.slice(1));
    // }
}
  

  console.log(changeVocals('Dimitri Wahyudiputra'));

  function reverseWord (str) {
    //code di sini
    if (str.length === 0) {
        return '';
    }
    else {
        var rest = str.slice(0,str.length-1);
        return str[str.length-1] + reverseWord(rest);
    }
  }
  
//   console.log(reverseWord("abcdefg"));

  function setLowerUpperCase (str) {
    //code di sini
    var lowup = [];
    for (var i=0; i<str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            lowup.push(str[i].toLowerCase());
        }
        else {
            lowup.push(str[i].toUpperCase());
        }
    }
    return lowup.join("");
  }

//   console.log(setLowerUpperCase("aBcD"));
  
  function removeSpaces (str) {
    //code di sini
    var splitJoin = str.split(" ").join("");
    return splitJoin;
  }
  
//   console.log(removeSpaces("abc abc abc"));

  function passwordGenerator (name) {
    //code di sini
    var getChangeVocals = changeVocals(name);
    var reverse = reverseWord(getChangeVocals);
    var getLowerUpper = setLowerUpperCase(reverse);
    var getRemoveSpaces = removeSpaces(getLowerUpper);
    return getRemoveSpaces;
  }
  
//   console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
//   console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
//   console.log(passwordGenerator('Alexei')); // 'JFXFLb'
//   console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'