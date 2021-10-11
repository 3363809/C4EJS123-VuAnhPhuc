// Bai1

let str_input = prompt('Hãy nhập vào một chuỗi bất kỳ');
    let str_output = '';
    for (let i = str_input.length - 1; i >= 0; i--) {
        str_output += str_input[i];
    }
    alert(`Chuỗi đảo ngược là: ${str_output}`);

// Bai2

function titleCase(string) {
    let sentence = string.toLowerCase().split(" ");
    for(var i = 0; i < sentence.length; i++){
        sentence[i] = sentence [i][0].toUpperCase() + sentence[i].slice(1);

    }
    return sentence.join(" ");
}
console.log(titleCase("this is test"))

// Bai3

var array = [1,2,3,3,4,5,4,4,4,5,5];
var arrReduce = array.reduce(
    function (accumulator, currentItem) {
        if (accumulator.includes(currentItem)) {
            return accumulator;
        }

        return [...accumulator, currentItem];
    },
    []
);
console.log(arrReduce);

// Bai4 

let employee = [{
    Name: 'Vu Anh Phuc',
    Age: 19,
    Salary: 10,
    Position: 'Direction',
},
{
    Name: 'Le Thi Thu',
    Age: 40,
    Salary: 20,
    Position: 'Product Manager',
},
{
    Name: 'Vu Anh Duc',
    Age: 50,
    Salary: 30,
    Position: 'Generalinchief',
}
]

for (let i = 0; i < employee.length; i++) {
console.log(`Name: ${employee[i].Name}`);
console.log(`Age: ${employee[i].Age}`);
console.log(`Salary: ${employee[i].Salary}`);
console.log(`Position: ${employee[i].Position}`);
}

while (true) {
let updateEmp = prompt('Hi there, this is our employee');
if (employee.hasOwnProperty(updateEmp)) {
    alert(employee[updateEmp]);
    break;
} else {
    let details = prompt(`Enter new employee to update`);
    employee[updateEmp] = details;
}

}

let user = prompt('Do you wanna delete item? Enter "Y" is yes, "N" if no');

if (user == "Y") {
let item = prompt('Enter employee you want to delete')
for (let i = 0; i < employee.length; i++)
    if (employee[i] === item) {

    }
}