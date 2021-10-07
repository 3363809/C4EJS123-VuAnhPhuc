 //  Study
 
 // 1.1 What are var and const in JavaScript?
 // Sử dụng var để khai báo biến như string, number, boolean, vv..
 // Khai báo một hằng số dùng const

 // 1.2 What are the differences between let and var?
 // Khai báo var được định phạm vi toàn cục (global) hay hàm (function) trong khi let được định phạm vi là khối mã (block)
 // Các biến var được nâng lên trên cùng của phạm vi của nó và được khởi tạo với giá trị không xác định; biến let có thể được cập nhật nhưng không thể khai báo lại.
 // Khai báo của var, let đều được dịch chuyển lên đầu của phạm vi. Nhưng trong khi biến var được khởi gán giá trị với undefined, biến let không được khởi gán giá trị.
 // Trong khi var và let có thể được khai báo không khởi gán giá trị.
 
 // 1.3 What are the differences between let and const?
 // Các biến được khai báo với let có thể được gán lại, nhưng các biến được khai báo với const không thể được
 
 // 1.4 What to use in what cases?
 // Khai báo biến dữ liệu
 
 // 2.1
 // Loại boolean chỉ có hai giá trị: đúng và sai. 
 // Loại này thường được sử dụng để lưu trữ các giá trị có / không: đúng có nghĩa là "có, đúng", và sai có nghĩa là "không, không chính xác".
  
 // 2.2
 // Tạo đối tượng boolean mới
 // Hàm valueOf()
 // Hàm toSource()
 // Hàm toString()
 
 //  Review 
 // 3.a 7 numbers, starting from 0 (no user input)
 for (let x = 0; x < 7; x++) {
    console.log(x);
 }
 
 // b. n numbers, starting from 0, n entered by user
 let n = Number(prompt('Enter n'));
 for (let x = 0; x < n; x++) {
    console.log(x);
 }

 // c. A sequence of numbers, starting from 3, ending before n, n entered by user
 let n = Number(prompt('Enter n'));
 for (let x = 3; x < n; x++) {
    console.log(x);
 }

 // d. A sequence of numbers, starting from c, ending before n, c and n entered by user
 let c = Number(prompt('Enter c'));
 let n = Number(prompt('Enter n'));
 for (let x = c; x < n; x++) {
    console.log(Number(x));
 }

 // e. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user
 let c = Number(prompt('Enter c'));
 let n = Number(prompt ('Enter n'));
 for (let x = c; x < n; x += 3) {
    console.log(Number(x));
 }

 // f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user
 let s = Number(prompt("Enter s"));
 let c = Number(prompt("Enter c"));
 let n = Number(prompt("Enter n"));
 for (let x = c; x < n; x += s) {
    console.log(Number(x));
 }

 // 4. Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user
 let n = Number(prompt("Enter n"));
 let result = 1;
 for (let x = 1; x <= n; x++) {
    result *= x;
 }
 alert(`The factorial of ${n} is ${result}`);

 // 5. Write a program asking users their age, and then decide if they are old enough to view a 14+ content
 let age = Number(prompt('How old are you?'));
 if (age < 14) {
    console.log (`You are not old enough to view this content!`);
 } else {
    console.log(`Enjoy!`);
 }
 // 6. Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range
 let a = Number(prompt('Enter a number'));
 if (a < (9 / 2)) {
     alert(`Lower half of 9`);
 } else {
     alert(`Higher half of 9`);
 }

 // 7. Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n
 let n = Number(prompt('Enter n'));
 let x = Number(prompt('Enter x'));
 if (x < (n / 2)) {
     alert(`${x} is in lower half of ${n}`);
 } else {
     alert(`${x} is in higher half of ${n}`)
 }

 // 8. Write a script to check if a number is even (divisible by 2) or odd number
 let num = Number(prompt('x ='));
 if (num % 2 == 0) {
     alert(`${num} is an even number`);
 } else {
     alert(`${num} is an odd number`);
 }

 // 9. Write a program to print out 
 // a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
 let number = 6;
 for (var x = 0; x < (number / 2); x++) {
     console.log('L');
 }
 for (let n = 0; n < (number - x); n++) {
     console.log('H');
 }

 // b. n L’s and H’s in total, n entered by user
 let totalNumber = Number(prompt("Enter the total number of L's and H's"));
 for (var x = 0; x < (totalNumber / 2); x++) {
     console.log('L');
 }
 for (let n = 0; n < (totalNumber - x); n++) {
     console.log('H');
 }

 // c. 8 1’s and 0’s in total, consecutively
 let total = 8;
 for (let x = 0; x < total; x++) {
     if (x % 2 == 0) {
         console.log(0); 
     } else {
         console.log(1); 
     }
 }


 // d. n 1’s and 0’s in total, consecutively, n entered by user
 let total_number = Number(prompt("Enter the total number of 1's and 0's"));
 for (let x = 0; x < total_number; x++) {
     if (x % 2 == 0) {
         console.log(0);
     } else {
         console.log(1);
     }
 }

 // 10. Write a script to calculate the BMI (Body Mass Index) of a person.
 let weight = Number(prompt('Your weight in kg?'));
 let height = Number(prompt('Your height in cm?'));
 height = height / 100;
 let BMI = weight / (height * height);
 console.log(`Your BMI is`);
 if (BMI < 16) {
     console.log(`You are severely underweight`);
 } else if (BMI < 18.5) {
     console.log(`You are underweight`);
 } else if (BMI < 25) {
     console.log(`You are normal`);
 } else if (BMI < 30) {
     console.log(`You are overweight`);
 } else {
     console.log(`You are obese`);
 } 