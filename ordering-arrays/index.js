const bookPrices = [100];

// Declaring array
for(i = 0; i < 100; i++){
    bookPrices[i] = (Math.random() * 100).toFixed(2);
}

console.log(bookPrices);
bubbleSort(bookPrices);
console.log(bookPrices);

function bubbleSort(array){
    let swapped = true;
    while(swapped){
        swapped = false;
        for(i = 0; i < array.length - 1; i++){
            if(array[i] > array[i + 1]){
                let aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
                swapped = true;
            }
        }
    }
}


let nome = "André";
let poema = `E agora, ${nome}?   
A festa acabou,   
a luz apagou,   
o povo sumiu,   
a noite esfriou,   
e agora, ${nome}?   
e agora, você?   
você que é sem nome,   
que zomba dos outros,   
você que faz versos,   
que ama, protesta?   
e agora, ${nome}?`

console.log(poema)