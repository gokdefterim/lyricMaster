(function letterCounter(){
    var yalnizDegilsin = 'Geldim işte dostum yüzün gülsün be ' +
    'Yaralarım ağır varsın olsun be ' +
    'Halimizi bir tek Allah bilsin be '+
    'Ben varım yanında yalnız değilsin ' +
    'Önümüzde dağlar düşmanlar eğilsin ' +
    'Ben varım yanında yalnız değilsin ' +
    'Önümüzde dağlar düşmanlar eğilsin ' +
    'Ben varım yanında yalnız değilsin ' +
    'Ne çıkar bu kavga bizi de yormuş ' +
    'Sırtımızda hançer yarası varmış ' +
    'Gözlerim kararmış saçım ağarmış ' +
    'Ben varım yanında yalnız değilsin ' +
    'Önümüzde dağlar düşmanlar eğilsin ' +
    'Ben varım yanında yalnız değilsin ' +
    'Önümüzde dağlar düşmanlar eğilsin ' +
    'Ben varım yanında yalnız değilsin ' +
    'Kurşunlar yağarken önündeyim söz ' +
    'Hapiste mezarda yanındayım söz ' +
    'Hem başında hem de sonundayım söz ' +
    'Ben varım yanında yalnız değilsin ' +
    'Önümüzde dağlar düşmanlar eğilsin ' +
    'Ben varım yanında yalnız değilsin ' +
    'Önümüzde dağlar düşmanlar eğilsin ' +
    'Ben varım yanında yalnız değilsin'

    var letters = [];
    var vowels = 0;
    var consonants = 0;

    for (x=0; x<yalnizDegilsin.length; x++){
        letters.push(yalnizDegilsin.charAt(x));
        if(
            yalnizDegilsin.charAt(x) === 'a' || yalnizDegilsin.charAt(x) === 'A' ||
            yalnizDegilsin.charAt(x) === 'e' || yalnizDegilsin.charAt(x) === 'E' ||
            yalnizDegilsin.charAt(x) === 'ı' || yalnizDegilsin.charAt(x) === 'I' ||
            yalnizDegilsin.charAt(x) === 'i' || yalnizDegilsin.charAt(x) === 'İ' ||
            yalnizDegilsin.charAt(x) === 'o' || yalnizDegilsin.charAt(x) === 'O' ||
            yalnizDegilsin.charAt(x) === 'ö' || yalnizDegilsin.charAt(x) === 'Ö' ||
            yalnizDegilsin.charAt(x) === 'u' || yalnizDegilsin.charAt(x) === 'U' ||
            yalnizDegilsin.charAt(x) === 'ü' || yalnizDegilsin.charAt(x) === 'Ü'
        ){
            vowels += 1;
        }
        else if(
            yalnizDegilsin.charAt(x) !== ' '
        ){
            consonants += 1
        }
    }

    console.log(`There are ${vowels} vowels.`);
    console.log(`There are ${consonants} consonants.`);
})();