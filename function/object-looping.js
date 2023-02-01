var shoppingCard = {
    books : 3,
    sunGlass : 5,
    pen: 8,
    pant : 5,
    shows : 10,
}
 var keys  = Object.keys(shoppingCard)
// console.log(keys);
// var value= Object.values(shoppingCard)
// console.log(value);
for(i=0; i<keys.length ; i++){
    var element = keys[i]
    var elementValues= shoppingCard[element]
//     console.log(element,elementValues)
}
for(propartiName in shoppingCard){
    var valus = shoppingCard[propartiName]
    console.log(propartiName,valus)

}