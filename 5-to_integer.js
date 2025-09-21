let arg = process.agrv[2];
if(arg === undefined || isNaN(Number(arg))){
    console.log("Not a number");
}
else{
    console.log(`My number: ${arg}`);
}