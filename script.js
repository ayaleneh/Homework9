function bublesort(arr) {
 
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j <= n - i - 1; j++) {
            //Swap the numbers
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

describe("Sorting Number Using Bubble Sort: ", () => {
    it("the program will sort Array of number using Bubble sort: ", () => {
        assert.equal(JSON.stringify(bublesort([3, 1, 2, 0, 9, 8])),
            JSON.stringify([0,1,2,3,8,9]));
    });

});

//console.log("Sorted number: "+bublesort([3, 1, 2, 0, 9, 8]));
function banned(sentence, bannedWords) {
    return sentence.split(" ").filter(word => !bannedWords.includes(word)).join(" ");
}

describe("removing all the banned words from string object: ", () => {
    it("the program will string object and return string object after removing banned word: ", () => {
        assert.equal(JSON.stringify(banned("This is a bad sentence.", ["bad"])),
            JSON.stringify("This is a sentence."));
    });

});


//console.log(banned("This is a bad sentence.", ["bad"]));

/*class Person {
    constructor(name) {
        this.name = name;
    }
}
class Teacher extends Person {
    teach(subject) {
        return `${this.name} is now teaching ${subject}`;
    }
}
const teacher = new Teacher("Ayalneh");
console.log(teacher.teach("Javascript"));*/




function Person(name, age) {
    this.name = name;
    this.age = age;
}

var Person = function () { };

Person.prototype.describe = function () {
    return this.name + ", " + this.age + " years old.";
}

Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}


var Teacher = function () { };
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
}

var me = new Teacher();

me.initialize("John", 25);
me.teach("Inheritance");
console.log(me.describe())