function getRandomNumber(){
    return Math.floor (Math.random() * 9) + 1;
}

function sum(arr){
    return arr[0] + arr[1] + arr[2] === 15;
}



export default sum;
export{ getRandomNumber }