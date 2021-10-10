Bai1
let product = {
    name: 'Xiaomi rice cooker',
    price: 1700,
    brand: 'Xiaomi',
    color: 'white'
};
for(let x in product)
{
console.log(x + " : " + product[x]);
}

Bai2
let task = {
    subject: 'Implement login feature',
    createdBy: 'Hoang Ngoc Duc',
    assignTo: 'Nguyen Phuong Nam',
    dueDate: '2019-10-08T18:00:24+0000',
    expectedHours: 0.5,
};
let {subject : sub, dueDate ,assignTo : ass} = task;
console.log(sub);
console.log(dueDate);
console.log(ass); 

Bai3
//3.1 . Object
//3.2 .Array

Bai4

let dicTionary = {
    debug : 'The process of figuring out why your program has a certain error and how to fix it',
    done : 'When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed',
    defect : "The formal word for 'error'",
    pm : 'The short version  of Project Manager, the person in charge of the final result of a project',
    ui : 'UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels',
}
console.log("Hi there ,this is dev dictionary");
let choose = prompt("Enter a keyword ");
let explanation;
while(true){

    if(choose == 'debug' ){
        console.log('debug \n'+ dicTionary.debug);
        choose = prompt("Enter a keyword next ");
    }
    else if(choose == 'done'){
        console.log(choose +'\n' + dicTionary.done);
        choose = prompt("Enter a keyword next ");
    }
    else if(choose == 'defect'){
        console.log(choose + '\n' + dicTionary.defect);
        choose = prompt("Enter a keyword next ");
    }
    else if(choose == 'pm'){
        console.log(choose + '\n' + dicTionary.pm);
        choose = prompt("Enter a keyword next ");
    }
    else if(choose == 'ui'){
        console.log(choose + '\n' + dicTionary.ui);
        choose = prompt("Enter a keyword next ");

    }
    else{
        console.log("We could not find your word: " + choose );
        explanation = prompt('Leave your explanation');
        dicTionary[choose] = explanation;
        choose = prompt("Enter a keyword ");
    }
}