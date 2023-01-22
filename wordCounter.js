(function wordCounter (){
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

    var spaces = 0;

    for (x=0; x<yalnizDegilsin.length; x++){
        if(
            yalnizDegilsin.charAt(x) === ' '
        ){
            spaces += 1;
        }
    }

    console.log(`There are ${spaces+1} words.`);

})();