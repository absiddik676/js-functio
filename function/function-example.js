// // function summery

// function functionName (paramiter){
//     function body
//     return
// }
// var returnValue =  functionCall (paramiter value)

function getTotal(assinment1, assinment2, assinment3) {
    var total = assinment1 + assinment2 + assinment3;
    var avarage = total/3;
    return avarage;
}
var assinment1Marks = 60;
var assinment2Marks = 58;
var assinment3Marks = 59;

var myAvarage = getTotal(assinment1Marks,assinment2Marks,assinment3Marks);
console.log(myAvarage)