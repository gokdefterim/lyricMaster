(function consonantChanger (){
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
    var newLyrics = '';

    for (x=0; x<yalnizDegilsin.length; x++){
        if(
            yalnizDegilsin.charAt(x) !== 'a' &&
            yalnizDegilsin.charAt(x) !== 'e' &&
            yalnizDegilsin.charAt(x) !== 'ı' &&
            yalnizDegilsin.charAt(x) !== 'i' &&
            yalnizDegilsin.charAt(x) !== 'o' &&
            yalnizDegilsin.charAt(x) !== 'ö' &&
            yalnizDegilsin.charAt(x) !== 'u' &&
            yalnizDegilsin.charAt(x) !== 'ü' &&
            yalnizDegilsin.charAt(x) !== ' '
        ){
            letters.push('-');
        }
        else
        {
            letters.push(yalnizDegilsin.charAt(x));
        }
    }
    letters.forEach(element => {
        newLyrics += element;
    });

    console.log(newLyrics)
})();