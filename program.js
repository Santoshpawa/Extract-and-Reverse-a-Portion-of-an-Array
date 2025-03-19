arr=[15, 30, 45, 60, 75, 90];
function extractandreverse(arr){

    arr=arr.slice(3,5);
    arr.sort((a,b)=> b-a)

    return arr
}

console.log(extractandreverse(arr))