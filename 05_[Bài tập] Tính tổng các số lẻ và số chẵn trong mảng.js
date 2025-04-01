let randomA = [];
let sumChan = 0;
let sumLe = 0;
let randomChan=[];
let randomLe=[];
for(let i = 0; i<10;i++){
    randomA.push(Math.floor(Math.random()*100));
    if(randomA[i]%2===0){
        sumChan += randomA[i];
        randomChan.push(randomA[i]);
    }
    else{
        sumLe += randomA[i];
        randomLe.push(randomA[i]);
    }
}
alert(`Với dãy ${randomA}:
    Ta có các phần tử chẵn là ${randomChan} có tổng là ${sumChan}
    Ta có các phần tử lẻ là ${randomLe} có tổng là ${sumLe} `);