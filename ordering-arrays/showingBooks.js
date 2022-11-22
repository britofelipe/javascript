const bookPrices = [100][2];

// Declaring array
for(i = 0; i < 100; i++){
    bookPrices[i][0] = "Livro" + i;
    bookPrices[i][1] = (Math.random() * 100).toFixed(2);
    
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


