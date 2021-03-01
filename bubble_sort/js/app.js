const randomNumbers = [27, 64, 47, 78, 48, 11, 76, 25, 11, 83];


function bubbleSort(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length-1-i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let a = numbers[j + 1];
                numbers[j + 1] = numbers[j];
                numbers[j] = a;
            }

        }

    }
}

bubbleSort(randomNumbers);
console.log(randomNumbers);