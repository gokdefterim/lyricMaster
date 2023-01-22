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

    var words = yalnizDegilsin.split(' ');
    var uniqueWords = [];

    words.forEach(element => {
        if(uniqueWords.indexOf(element) === -1){
            uniqueWords.push(element)
        }
    });

    console.log(`There are ${uniqueWords.length} unique words.`);

})();