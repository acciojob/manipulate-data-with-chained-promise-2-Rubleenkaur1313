function manipulateArray() {
    const initialArray = [1, 2, 3, 4];

    // Initial Promise that resolves after 3 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(initialArray);
        }, 3000);
    })
    .then((array) => {
        // First Transformation: Filter out odd numbers
        return new Promise((resolve) => {
            const evenNumbers = array.filter(num => num % 2 === 0);
            setTimeout(() => {
                document.getElementById('output').textContent = evenNumbers.join(',');
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        // Second Transformation: Multiply even numbers by 2
        return new Promise((resolve) => {
            const multipliedNumbers = evenNumbers.map(num => num * 2);
            setTimeout(() => {
                document.getElementById('output').textContent = multipliedNumbers.join(',');
                resolve(multipliedNumbers);
            }, 2000);
        });
    })
    .catch((error) => {
        document.getElementById('output').textContent = `Error: ${error.message}`;
    });
}

// Call the function to start the process
manipulateArray();
