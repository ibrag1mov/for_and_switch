"use strict";

// ======= swich() =======

// 1-m

// let kun=+prompt('qiymat kiriting');

// switch (kun)
// {
//   case 1:
//     console.log('Dushanba');
//     break;
//   case 2:
//   console.log('Seshanba');
//     break;
//   case 3:
//   console.log('Chorshanba');
//     break;
//   case 4:
//   console.log('Payshanba');
//     break;
//   case 5:
//   console.log('Juma');
//     break;
//   case 6:
//   console.log('Shanba');
//     break;
//   case 7:
//   console.log('Yakshanba');
//     break;
//     default: console.log('bunday kun yo\'q');
// }

// 2-m

// let son=+prompt('son kiriting');

//   switch (son){
//     case 1:
//       console.log(`${son}-yomon`);
//       break;
//     case 2:
//       console.log(`${son}-qoniqarsiz`);
//       break;
//     case 3:
//       console.log(`${son}-qoniqarli`);
//       break;
//     case 4:
//       console.log(`${son}-yaxshi`);
//       break;
//     case 5:
//       console.log(`${son}-a\'lo`);
//       break;
//       default: console.log('bunday baho yo\'q')
//   }

// // 3-m

// let oy=+prompt('son kiriting');

// switch (oy){
//   case 1:
//     console.log(`${oy}-qish`);
//     break;
//   case 2:
//     console.log(`${oy}-qish`);
//     break;
//   case 3:
//     console.log(`${oy}-bahor`);
//     break;
//   case 4:
//     console.log(`${oy}-bahor`);
//     break;
//   case 5:
//     console.log(`${oy}-bahor`);
//     break;
//   case 6:
//     console.log(`${oy}-yoz`);
//     break;
//   case 7:
//     console.log(`${oy}-yoz`);
//     break;
//   case 8:
//     console.log(`${oy}-yoz`);
//     break;
//   case 9:
//     console.log(`${oy}-kuz`);
//     break;
//   case 10:
//     console.log(`${oy}-kuz`);
//     break;
//   case 11:
//     console.log(`${oy}-kuz`);
//     break;
//   case 12:
//     console.log(`${oy}-qish`);
//     break;
//       default: console.log('bunday fasl yo\'q');
// }

// 4-m

// let oy=+prompt('qiymat kiriting');

// switch (oy){
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log(`${oy}-oyda 31 kun bor.`);
//     break;

//   case 2:
//     console.log(`${oy}-oyda 28 kun bor.`);
//     break;

//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log(`${oy}-oyda 30 kun bor.`);
//     break;
//     default: console.log('bunday oy mavjud emas');
// }

// 5-m

// let a=+prompt('a ning qiymatini kiriting'),
//     b=+prompt('b ning qiymatini kiriting'),
//     c=prompt('amalni kiriting');

//     switch (c){
//       case '+':
//         console.log(`${a}+${b}=${a+b}`);
//         break;
//       case '-':
//         console.log(`${a}-${b}=${a-b}`);
//         break;
//       case '*':
//         console.log(`${a}*${b}=${a*b}`);
//         break;
//       case '/':
//         console.log(`${a}/${b}=${a/b}`);
//         break;
//       default: console.log('amalni kiriting');
//     }

// 6-m

// let baho=+prompt('bahoni kiriting');

// switch (baho){
//   case 1:
//     console.log(`${baho}-yomon baho stipendiya berilmaydi`);
//     break;
//   case 2:
//     console.log(`${baho}-qoniqarsiz baho stipendiya berilmaydi`);
//     break;
//   case 3:
//     console.log(`${baho}-qoniqarli baho stipendiya 500 ming so'm`);
//     break;
//   case 4:
//     console.log(`${baho}-yaxshi baho stipendiya 550 ming so'm`);
//     break;
//   case 5:
//     console.log(`${baho}-a'lo baho stipendiya 600 ming so'm`);
//     break;
//     default:  console.log('bunday baho yo\'q');
// }

// ======= for() =======

// 1-m

// let k=+prompt('k ning qiymatini kiriting');
// let n=+prompt('n ning qiymatini kiriting');

// for(let i=0; i<n; i++){
//   console.log(k);
// }

// 2-m

// let a=+prompt('a ning qiymatini kiriting'),
//     b=+prompt('b ning qiymatini kiriting');

//     if(a>b){
//       for(let i=b; i<=a; i++){
//         console.log(Math.trunc(i));
//       }
//     }
//     else if(a===b){
//       console.log('a va b teng qayta qiymat kiriting');
//     }
//     else{
//       console.log('a b dan katta emas qayta qiymat kiriting');
//     }

// 3-m

// let a = Number(prompt("a ning qiymatini kiriting")),
//   b = Number(prompt("b ning qiymatini kiriting"));

// if (a > b) {
//   for(let i=a-1; i>=b+1; i--){
//     console.log(Math.trunc(i));
//   }
// }
// else if(a===b){
//         console.log('a va b teng qayta qiymat kiriting');
// }
//   else{
//         console.log('a b dan katta emas qayta qiymat kiriting');
//    }

// 4-m

// let kg=10, sum;

//   for(let i=1; i<=kg; i++){
//     sum=i*10000;
//     console.log(`${i} kg ==> ${sum} so'm`);
//   }

// 5-m

// let kg=1;

//   for(let i=1; i<=10; i++){

//     console.log(`${i/10} kg ==> ${(i/10)*10000} so'm`);
//   }

// 6-m

// let kg=2;

//   for(let i=12; i<=20; i+=2){

//     console.log(`${i/10} kg ==> ${(i/10)*10000} so'm`);
//   }

// 7-m

// let a=Number(prompt('a ning qiymatini kiriting')),
//     b=Number(prompt('b ning qiymatini kiriting'));
// let sum=0;

//     if(a>b){
//       for(let i=b; i<a; i++){
//         sum+=i;
//       }
//       console.log(sum);
//     }
//     else if(b>a){
//       for(let i=a; i<b; i++){
//         sum+=i;
//       }
//       console.log(sum);
//     }
//     else if(a===b){
//       sum=a;
//       console.log(sum);
//     }
//     else{
//       console.error('404 NOT FOUND');
//     }

// 8-m

// let a=Number(prompt('a ning qiymatini kiriting')),
//     b=Number(prompt('b ning qiymatini kiriting'));
// let sum=1;

//     if(a>b){
//       for(let i=b; i<a; i++){
//         sum*=i;
//       }
//       console.log(sum);
//     }
//     else if(b>a){
//       for(let i=a; i<b; i++){
//         sum*=i;
//       }
//       console.log(sum);
//     }
//     else if(a===b){

//       alert('qayta qiymat kiriting');
//     }
//     else{
//       console.error('404 NOT FOUND');
//     }

// 9-m

// let a=Number(prompt('a ning qiymatini kiriting')),
//     b=Number(prompt('b ning qiymatini kiriting'));
// let sum=0;

//     if(a>b){
//       for(let i=b; i<a; i++){
//         sum+=i**2;
//       }
//       console.log(sum);
//     }
//     else if(b>a){
//       for(let i=a; i<b; i++){
//         sum+=i**2;
//       }
//       console.log(sum);
//     }
//     else if(a===b){
//       alert("qayta qiymat kiriting");
//     }
//     else{
//       console.error('404 NOT FOUND');
//     }

// 10-m

// let n=+prompt('n = ?'),
//     s=0;

//     for(let i=1; i<=n; i++){
//       s+=(1/i);
//     }

//     console.log(s);

// 11-m

// let n = +prompt("n =");

// if (n > 0) {
//   for (let i = 1; i <= n; i++) {
//     if(i % 2 === 1){
//       console.log(i);
//     }
//   }
// }
// else{
//   console.error('404 NOT FOUND')
// }

// 12-m

// let n = +prompt("n =");

// if (n > 0) {
//   for (let i = 1; i <= n; i++) {
//     if(i % 2 === 0){
//       console.log(i);
//     }
//   }
// }
// else{
//   console.error('404 NOT FOUND')
// }

// 13-m

// (-------------------------)

// 14-m

// let n = +prompt("n =");

// if (n > 0) {
//   console.log('juft');
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//       console.log(i ** 2);
//     }
//   }
//   console.log('toq');
//   for (let j = 1; j <= n; j++) {
//     if (j % 2 === 1) {
//       console.log(j ** 2);
//     }
//   }
// }

// 15-m 

// let n=+prompt('n =')

// for(let i=n; i>0; i--){
//   console.log(i);
// }

// 16-m 

// let n=+prompt('n =')

// for(let i=0; i<n; i++){
//   if(i%5!==0){
//     console.log(i);
//   }
// }

// 17-m 

// let n=+prompt('n ='),
//     s=1;

// for(let i=1; i<=n; i++){
//   s*=i;
// }
// console.log(s);

// 18-m 

// let n=+prompt('n ='),
//     s=1, sum=0;

// for(let i=1; i<=n; i++){
//  sum+=(s*=i);
// }
// console.log(sum);

// 19-m 

// let n=+prompt('n = '),
//     x=+prompt('x = '),
//     sum=1, s=1;

//     if(n>0){
    
//       for(let i=1; i<=n; i++){
      
//         sum+=(x*i)/(s*=i);
        
//       }
//       console.log(sum);
//     }

// 20-m 

// let n=+prompt('n = '),
//     x=+prompt('x = ');

//     for(let i=0; i<n; i++){
//       if(i%x===0){
//         console.log(i);
//       }
//     }

// 21-m 

