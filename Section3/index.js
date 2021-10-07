// STUDY

 // 1. Variable swap
 // Swapping variable is to exchange the values of two variable so that at the end, one variable contains the value of the other.
 
 // One
 let a = 5;
 let b = 6;
 [a, b] = [b, a];
 console.log(a, b);
 
 // Two
 let c = 6;
 let d = 7;
 let e = c;
 c = d;
 d = e;
 console.log(c, d);

 // 2. Split String into Array
 // Using type conversion from String to Array
 const str = 'Hello beauty there';
 const arr = str.split(" ");
 console.log(arr);

 // 3. In JavaScript, the spread operator (three dots): … can be useful in several tasks. Of these tasks is to log (print out) an array without using loops, try it:
 const a = [4, 5, 7, -8];
 console.log(a);
 
 
 // REVIEW
 // 4. Write a script to simulate a clothes shop, asking and performing certain tasks from users
 let giatri = ['C', 'R' ,'U' ,'D'];
 let items = ['Jean', 'T-Shirt', 'Socks'];
 let giatri2 = prompt('nhap vao C,R,U,D');
 while(giatri2 != giatri[0] && giatri2 != giatri[1]&& giatri2 != giatri[2]&& giatri2 != giatri[3])
 {
     alert('nhap sai hay nhap lai');
     giatri2 = prompt('nhap lai C,R,U,D');
 }
 while(giatri2 == giatri[0] )
 {
     giatrimoi= prompt('them vao gia tri moi');
     items.push(giatrimoi);
     alert('da dc them vao');
     giatri2 = prompt('nhap lai C,R,U,D');
 }
 if(giatri2 == giatri[2])
    alert('items list');
     for (let i=0; i< items.length ; i++)
     {
         alert(`${i+1}. ${items[i]}`);
         giatri2 = prompt('nhap lai C,R,U,D');
     }
 if (giatri2 == giatri[3]){
     giatrimoi= prompt('them vao gia tri moi');
     giatrithaydoi = prompt('chon gi tri muon thay doi')
     items[giatrithaydoi]= giatrimoi;
     alert('da dc thay doi')
     giatri2 = prompt('nhap lai C,R,U,D');
 }
 if (giatri2 == giatri[4])
 {
     giatrithaydoi = prompt('chon gia tri muon xoa');
     items.splice(giatrithaydoi,1);
     alert('da dc cap nhap');
     giatri2 = prompt ('nhap lai C,R,U,D');
 }
 // Cau 5: Write a script to ask users enter a sequence of numbers, the Numbers are separated by commas, calculate the sum of the numbers and show it to users
  let n = prompt('Enter a sequence of number, separated by commas(,)');
  let arr = n.split(',');
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
      sum = sum + Number(arr[i]);
 }
 alert(`The sum of them is ${sum}`);




 // Cau 6: Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users
 let n = prompt('Enter a sequence of number, separated by ","');
 let arr = n.split(',');
 let min = Math.min(...arr);
 alert(`The smallest number is ${min} `)



 // Cau 7: 
 const arr = [3, 4, 7, 13, -6, -23];
 let num = Number(prompt('Enter a number'));
 for(let i = 0; i < arr.length; i++){
     if(num == arr[i]){
         alert(`${num} is FOUND in my array at index ${i}`)
     }else{
         alert(`${num} is NOT found in my array`)

     }
 }

 // 8.1: Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:
 let size = [4, 6, 12, 87, 8, 234];
 console.log('Hi, my name is QAN  and here is my sheep sizes:')
 console.log(...size)

 // 8.2: At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:
 let max = Math.max(...size)
 console.log(`Now my biggest sheep has size ${max}, let's shave it`)


 // 8.3: When your biggest sheer, its size will return to the default size, which is 8.
 indexM = size.indexOf(max);
 size[indexM] = 8;
 console.log('After shearing, here is my flock:');
 console.log(...size)


 //8.4: In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out
 for(let i = 0; i < size.length; i++){
     size[i] += 50;
 }
 console.log('MONTH 1 \nOne month has, passed, my sheeps have grown, here are their sizes:')
 console.log(...size);

 // 8.5: Let’s do this for 4 months (or as long as you want)
 let month = 4;
 for(let a = 0; a <= month; a++){
     for(let i = 0; i < size.length; i++){
         size[i] += 50;
     }
     console.log(`MONTH ${a} \nOne month has, passed, my sheeps have grown, here are their sizes:`);
     console.log(...size);

     let max2 = Math.max(...size);
     console.log(`Now my biggest sheep has size ${max}, let's shave it`);

     indexM2 = size.indexOf(max2);
     size[indexM2] = 8;
     console.log('After shearing, here is my flock:');
     console.log(...size);

 }

 // 8.6: After day by day shearing sheep, you became bored. You want to sell your flock to travel the world. In order to have fair trade, you must now calculate the total size of your sheep and then the expected money you can get from selling your flock, before going to the market. Write a program to calculate the total size of your sheep as well as the money you would have. Expected console output:
 let sum = 0;
 for(let i = 0; i < size.length; i++){
     sum += size[i];
 } 
 console.log(`My flock has size in total: ${sum}`);
 console.log(`I would get ${sum}*2$ = ${sum*2}`);

