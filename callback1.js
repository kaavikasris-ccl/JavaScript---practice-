setTimeout(function (){
    console.log("timer");

},10000);

function x(y) {
    console.log("y");
    y();
}

x(function y() {
    console.log("y");
});
