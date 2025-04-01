let randomA = [];
let count = 0;
let k=+prompt('Nhập 1 số nguyên bất kỳ từ 1 đến 9: ');
for(let i = 0; i <20;i++){
    randomA.push(Math.floor(Math.random()*10));
    if (k===randomA[i]){
        count+=1;
    }
}
alert(`Với dãy ${randomA}
    Số ${k} có ${count} lần xuất hiện!!!`);