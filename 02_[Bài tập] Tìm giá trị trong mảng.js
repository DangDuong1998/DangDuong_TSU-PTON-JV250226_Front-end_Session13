let number = [1,2,3,4,5,6,7,8,9,10];
let guess ;
let check = false;
while(true){
    guess = +prompt('Đoán 1 số từ 1 đến 15:');
    for (let index of number){
        if (guess===index){
            check=true;
            break;
        }
    }
    if(check === true){
        alert('Bingo');
        break;
    }
    else{
        alert('Chúc bạn may mắn lần sau!!!');
    }
    
}
