var ages=[2,10,18,20,13,15,30];
checkAge=(age)=>age>-18;
function myFunction () {
    document.getElementById('displayAge').innerHTML=ages.some(checkAge);
}