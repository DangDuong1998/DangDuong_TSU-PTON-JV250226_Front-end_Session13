let random=prompt('Nhập dãy số bất kỳ: ');
let randomA= random.split('');
let j = 0;
for(let i = 0; i< randomA.length;i++){
    if(randomA[i]> j){
        j = randomA[i];
    }
}
alert(`Phần tử có giá trị lớn nhất trong mảng là ${j}`);

