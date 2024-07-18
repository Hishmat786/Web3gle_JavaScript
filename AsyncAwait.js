async function waitForNumber(num) {
    return new Promise((resolve, reject) => {
      if (num === 5) {
        setTimeout(() => {
          resolve(`Number is ${num}. Timeout completed.`);
        }, 2000); // Timeout of 2 seconds
      } else {
        reject(new Error(`Number ${num} is not five.`));
      }
    });
}
  
async function main() {
   try {
      const result = await waitForNumber(3);
      console.log(result);
    } catch (error) {
      console.error(error.message);
    }
}
  
main();
  