var quizContainer = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var resultsContainer = document.getElementById('results');

getRandomElement = function (arr) {
    var randomIndex = Math.floor(Math.random() * arr.length);
    var element = arr[randomIndex];
    arr.splice(randomIndex, 1);
    return element;
}

const compareArrays = (array1, array2) => {
    return (
      array1.length === array2.length && 
      array1.every((el) => array2.includes(el))
    );
  };


var questions = [
    {
        type: 'radio',
        question: 'Який код дозволяє малювати різні фігури та лінії в canvas?',
        answersList: ["var c = document.getElementById('myCanvas'); var ctx = c.getContext('2d');",
                    "var c = document.getElementById('myCanvas');",
                    "draw();",
                    "function canvasDraw();"
                    ],
        answers: {
            a: null,
            b: null,
            c: null,
            d: null
        },
        correctAnswer: "var c = document.getElementById('myCanvas'); var ctx = c.getContext('2d');"
    },
    {
        type: 'radio',
        question: 'Виберіть правильний синтаксис для використання файлу javascript',
        answersList: ["< script src='xxx.js'>",
                    "< script href='xxx.js'>",
                    "< script path='xxx.js'>",
                    "< script from='xxx.js'>"],
        answers: {
            a: null,
            b: null,
            c: null,
            d: null
        },
        correctAnswer: "< script src='xxx.js'>"
    },
    {
        type: 'checkbox',
        question: 'Як можна оголосити змінну?',
        answersList: [
            "a = 10",
            "var a = 10",
            "int a = 10",
            "let a = 10"
        ],
        answers: {
            a: null,
            b: null,
            c: null,
            d: null
        },
        correctAnswer: ["a = 10", "var a = 10", "let a = 10"]
    },
    {
        type: 'checkbox',
        question: 'За допомогою JavaScript можна',
        answersList: [
            "Змінити розмір вікна браузера",
            "Змінити стилі HTML елемента",
            "Додати новий елемент до сторінки",
            "Отримати та відобразити дані з іншого сервера"
        ],
        answers: {
            a: null,
            b: null,
            c: null,
            d: null
        },
        correctAnswer: ["Змінити стилі HTML елемента", "Додати новий елемент до сторінки", "Отримати та відобразити дані з іншого сервера"]
    },
    {
        type: 'text',
        question: "Напишіть команду, яка дозволяє змінити колір контуру або лінії на зелений, якщо\
        const canvas = document.getElementById('canvas');\
        const ctx = canvas.getContext('2d');",
        answers: {
            a: ''
        },
        correctAnswer: ["ctx.strokeStyle = 'green';", 'ctx.strokeStyle = "green";']
    },
    {
        type: 'text',
        question: "Напишіть команду, яка визиває вспливаюче вікно з текстом 'Hello World'",
        answers: {
            a: ''
        },
        correctAnswer: ["alert('Hello World');", "alert('Hello World');"]
    },
    {
        type: 'select',
        question: "Заповніть пропуски для отримання числа в елементі p з id='demo'<br>\
        <pre>\
        < p id='demo'>< /p><br>\
        <<strong>(a)</strong>><br>\
        document.getElementBy<strong>(b)</strong>('demo').<strong>(c)</strong>HTML = Math.floor(Math.random() * 10);<br>\
        < /script>\
        </pre>",
        answersList: [
            ["object", "script", "javascript"],
            ["identifier", "name", "id"],
            ["innerHTML", "outerHTML", "this"]
        ],
        answers: {
            a: null,
            b: null,
            c: null
        },
        correctAnswer: ["script", "id", "innerHTML"]
    },
    {
        type: 'select',
        question: "Заповніть пропуски для того, щоб нарисувати круг за допомогою canvas<br>\
        <pre>\
        var cv = document.getElementById('canvas');<br>\
        var ct = cv.getContext('<strong>a</strong>'');<br>\
        var w = cv.width;<br>\
        var h = cv.height;<br>\
        ct.<strong>b</strong> = 'rgba(127, 127, 255, 1.0)';<br>\
        ct.fillStyle = 'rgba(0, 0, 255, 1.0)'';<br>\
        ct.lineWidth = 5;<br>\
        ct.<strong>c</strong>();<br>\
        ct.arc(w/2, h/2, w/2, h/2, 0, 2*Math.PI, 0);<br>\
        ct.closePath();<br>\
        ct.<strong>d</strong>();<br>\
        </pre>",
        answersList: [
            ["2d", '3d', '4d', '1d'],
            ["styleStroke", "strokeStyle", "lineStyle", "colorStyle"],
            ["beginPath", "startPath", "PathStart", "drawLine"],
            ["draw", "fill", "paint", "fillStyle"]
        ],
        answers: {
            a: null,
            b: null,
            c: null,
            d: null
        },
        correctAnswer: ["2d", "strokeStyle", "beginPath", "fill"]
    },
    {
        type: 'draganddrop',
        question: 'Встановіть відповідності між методами та їх описом<br>',
        questions: {
            1: "Метод, який використовується для відображення повідомлення в вікні браузера <br>",
            2: "Метод, який використовується для відображення повідомлення в вікні браузера з можливістю вводу тексту <br>",
            3: "Метод, який використовується для відображення повідомлення в вікні браузера з можливістю вибору одного з варіантів <br>",
        },
        answersList: [
            "alert()", "prompt()", "confirm()"
        ],
        answers: {
            a: null,
            b: null,
            c: null
        },
        correctAnswer: ["alert()", "prompt()", "confirm()"]
    },
    {
        type: 'draganddrop',
        question: 'Встановіть відповідності між змінними та результатом команди typeof(i)<br>',
        questions: {
            1: "var i = 10; <br>",
            2: "var i = 'true' + false; <br>",
            3: "var i; <br>",
            4: "var i = 5 === '5'; <br>",
        },
        answersList: [
            "boolean", "undefined", "number", "string"
        ],
        answers: {
            a: null,
            b: null,
            c: null,
            d: null
        },
        correctAnswer: ["number", "string", "undefined", "boolean"]
    }
]
// Random questions order in array
questions.sort(() => Math.random() - 0.5);

generateQuiz(questions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){

	var output = [];
	var answers;
    
    let selectIterator = 0;
    let dragIterator = 0;
	// Iterating over questions
	for(var i = 0; i < questions.length; i++){
        // Used for randomizing options order in select
        let selectIterator2 = 0;
		
		answers = [];

		// Iterating over all answers in current question
		for(letter in questions[i].answers){
            // Set random answers to letters
            if (questions[i].type == 'radio' || questions[i].type == 'checkbox' || questions[i].type == 'draganddrop') {
                questions[i].answers[letter] = getRandomElement(questions[i].answersList);
            }
            // Set random answers to letters in select
            else if (questions[i].type == 'select') {
                let arr = questions[i].answersList[selectIterator2];
                questions[i].answers[letter] = new Array();
                while (arr.length != 0) {
                    questions[i].answers[letter].push(getRandomElement(arr));
                }
                selectIterator2++;
            }


            if (questions[i].type == 'radio') {
                answers.push(
                    `<p><label><input type="radio" name="question${i}" value="${questions[i].answers[letter]}">${letter}: ${questions[i].answers[letter]}</label></p>`
                );
            }


            else if (questions[i].type == 'checkbox') {
                answers.push(
                    '<p><label id="'+letter+i+'">'
                        + '<input type="checkbox" name="question'+i+'" value="'+questions[i].answers[letter]+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label></p>'
                );
            }


            else if (questions[i].type == 'text') {
                answers.push(
                    '<p><label>'
                        + '<input type="text" name="question'+i+'" id="question'+i+'">'
                    + '</label></p>'
                );
            }
            
            
            else if (questions[i].type == 'select') {
                var string = '<label>'+letter+': '
                + '<select name="question'+i+'" id="question'+i+selectIterator+'"">';

                let opt = 0;
                let size = questions[i].answers[letter].length;
                while (opt < size) {
                    string += '<option value="'+questions[i].answers[letter][opt]+'">'+questions[i].answers[letter][opt]+'</option>';
                    opt++;
                    size = questions[i].answers[letter].length;
                }
                string += '</select></label>';
                
                answers.push(string);
                selectIterator++;
            }
            else {
                answers.push(
                    '<div class="dragtext-container dropbox"><p draggable="true" class="dragtext" id="selanswer'+i+dragIterator+'">'+questions[i].answers[letter]+'</p></div>'
                );
                dragIterator++;
            }
		}   

		// add this question and its answers to the output

        // For the draganddrop type
        if (questions[i].type == 'draganddrop') {
            var string = '<div class="question">' + questions[i].question + '</div>';
            for (let j = 1; j <= Object.keys(questions[i].questions).length; j++) { 
                string += '<div class="questions-container">'
                        + '<div class="questions">'+j+'. '+questions[i].questions[j]+'</div>'+'<div class="dropbox" id="dropbox'+i+j+'"></div>'
                        + '</div>'
            }
            
            string += '<div class="answers">' + answers.join('') + '</div>';
            output.push(string);
        }

        // For every other type
        else {
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
	}

	// Combine output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
	}

	function showResults(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;

        let selectIterator = 0;
        let dragIterator = 0;
        
        // Iterate over questions
        for(let i = 0; i < questions.length; i++){

            if (questions[i].type == 'radio') {
                userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

                // Correct answer
                if(userAnswer===questions[i].correctAnswer){
                    numCorrect++;
                    answerContainers[i].style.color = 'lightgreen';
                }
                // Wrong answer
                else {
                    answerContainers[i].style.color = 'red';
                }
            }


            else if (questions[i].type == 'checkbox') {
                userAnswers = [];
                nodeList = (answerContainers[i].querySelectorAll('input[name=question'+i+']:checked')||{});
                for (let j = 0; j < nodeList.length; j++) {
                    userAnswers.push(nodeList[j].value);
                }

                // If none of checkboxes are checked than color all of them red
                if (userAnswers.length == 0) {
                    var letters = Object.keys(questions[i].answers);
                    for (let j = 0; j < letters.length; j++) {
                        document.getElementById(letters[j]+i).style.color = 'red';
                    }
                }

                var letters = Object.keys(questions[i].answers);
                // If answers are correct
                if (compareArrays(userAnswers, questions[i].correctAnswer)) {
                    numCorrect++;
                    for (let k in questions[i].answers) {
                        if (userAnswers.includes(questions[i].answers[k])) {
                            document.getElementById(k+i).style.color = 'lightgreen';
                        }
                    }

                }
                // If answers are wrong
                else {
                    for (let k in questions[i].answers) {
                        // Color only checked answers
                        if (questions[i].correctAnswer.includes(questions[i].answers[k]) && userAnswers.includes(questions[i].answers[k])) {
                            document.getElementById(k+i).style.color = 'lightgreen';
                        }
                        else if (!questions[i].correctAnswer.includes(questions[i].answers[k]) && userAnswers.includes(questions[i].answers[k])) {
                            document.getElementById(k+i).style.color = 'red';
                        }
                    }
                }

            }


            else if (questions[i].type == 'text') {
                userAnswer = document.getElementById('question'+i).value;
                if (questions[i].correctAnswer.includes(userAnswer)) {
                    numCorrect++;
                    document.getElementById('question'+i).style.color = 'lightgreen';
                }
                else {
                    document.getElementById('question'+i).style.color = 'red';
                }
            }


            else if (questions[i].type == 'select') {
                userAnswers = [];
                nodeList = (answerContainers[i].querySelectorAll('select[name=question'+i+']'));
                for (let j = 0; j < nodeList.length; j++) {
                    userAnswers.push(nodeList[j].value);
                }
                let score = 0;
                for (ans in userAnswers) {
                    if (questions[i].correctAnswer.includes(userAnswers[ans])) {
                        score++;
                        document.getElementById('question'+i+selectIterator).style.color = 'lightgreen';
                    }
                    else {
                        document.getElementById('question'+i+selectIterator).style.color = 'red';
                    }
                    selectIterator++;
                }
                // Add 1 to numCorrect if all answers are correct
                if (score == questions[i].correctAnswer.length) {
                    numCorrect++;
                }
            }

            else if (questions[i].type == 'draganddrop') {
                let score = 0;
                for (let j = 1; j <= Object.keys(questions[i].answers).length; j++) {
                    if (document.getElementById('dropbox'+i+j).dataset.value == questions[i].correctAnswer[j-1]) {
                        console.log(document.getElementById('selanswer'+i+dragIterator));
                        document.getElementById('selanswer'+i+dragIterator).style.color = 'lightgreen';
                        score++;
                    }
                    else {
                        document.getElementById('selanswer'+i+dragIterator).style.color = 'red';
                    }
                    dragIterator++;
                }
                if (score == Object.keys(questions[i].answers).length) {
                    numCorrect++;
                }
            }
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

    /*
    *   Drag and drop functionality
    */
    var dragItems = document.querySelectorAll('p[draggable="true"]');
    dragItems.forEach(function addListeners() {
        addEventListener('dragstart', dragStart);
    })

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.id);
    }

    var dropBoxes = document.querySelectorAll('.dropbox');
    dropBoxes.forEach(box => {
        box.addEventListener('dragenter', dragEnter);
        box.addEventListener('dragover', dragOver);
        box.addEventListener('dragleave', dragLeave);
        box.addEventListener('drop', drop);
    });

    function dragEnter(e) {
        e.preventDefault();
        e.target.classList.add('dropbox-active');
    }
    
    function dragOver(e) {
        e.preventDefault();
        e.target.classList.add('dropbox-active');
    }
    
    function dragLeave(e) {
        e.target.classList.remove('dropbox-active');
    }
    
    function drop(e) {
        e.target.classList.remove('dropbox-active');

        const id = e.dataTransfer.getData('text/plain');
        const draggable = document.getElementById(id);
        draggable.dataset.value = draggable.innerHTML;
        
        if (!e.target.hasChildNodes()) {
            draggable.parentNode.dataset.value = null;
            e.target.appendChild(draggable);
            e.target.dataset.value = draggable.dataset.value;
        }

        draggable.classList.remove('hide');
    }
    
}

/*
*   Objects and classes task
*/

function UserObject(surname, name) {
    this.surname = surname;
    this.name = name;
}

function StudentObject(specialty, group) {

    this.specialty = specialty;
    this.group = group;

    this.setSpecialty = function(value) {
        this.specialty = value;
    };

    this.setGroup = function(value) {
        this.group = value;
    };

    this.clearName = function() {
        this.name = '';
    }

    this.clearSurname = function() {
        this.surname = '';
    }

    this.clearSpecialty = function() {
        this.specialty = '';
    }

    this.clearGroup = function() {
        this.group = '';
    }

    // showData() {
    //     return 'Name: ' + this.getName + "\nSurname: " + this.getSurname + '\nSpecialty: ' + this.specialty + '\nGroup: ' + this.group;
    // }

}

// function StudentObject(name, surname, specialty, group) {
//     this.name = name;
//     this.surname = surname;
//     this.specialty = specialty;
//     this.group = group;
// }


// StudentObject.setName = "Артур";
// StudentObject.setSurname = "Бебрознавченко";
// StudentObject.setSpecialty = "122";
// StudentObject.setGroup = "ТР-16";

// StudentObject.showData();

// StudentObject2.showData();


class Student {
    constructor(specialty, group) {
        this.specialty = specialty;
        this.group = group;
    }

    set setSpecialty(specialty) {
        this.specialty = specialty;
    }

    set setGroup(group) {
        this.group = group;
    }

    get getSpecialty() {
        return this.specialty;
    }

    get getGroup() {
        return this.group;
    }

    showData() {
        console.log('Specialty: ' + this.specialty + '\nGroup: ' + this.group);
    }
}

var user = new UserObject;

function task1() {
    var name = document.getElementById('userObjectName').value;
    var surname = document.getElementById('userObjectSurname').value;

    if (name == "" || surname == "") {
        alert('Введіть ім\'я та прізвище');
        return;
    }

    user.name = name;
    user.surname = surname;

    console.log(user);

    var output = document.getElementById('task1Result');
    output.innerHTML = `<p>Ім'я користувача: ${user.name}<\p>\
                        <p>Прізвище користувача: ${user.surname}<\p>`;
}

var student = new StudentObject;

function task2() {
    var specialty = document.getElementById('studentObjectSpecialty').value;
    var group = document.getElementById('studentObjectGroup').value;
    
    student.setSpecialty(specialty);
    student.setGroup(group);

    console.log(student);

    if (specialty == "" || group == "") {
        alert('Введіть спеціальність та групу');
        return;
    }
    

    var output = document.getElementById('task2Result');
    output.innerHTML = `<p>Спеціальність студента: ${student.specialty}<\p>\
                        <p>Група студента: ${student.group}<\p>`;

}

function task2clearspecialty() {
    var specialtyInput = document.getElementById('studentObjectSpecialty');
    specialtyInput.value = '';
    student.clearSpecialty();
    var output = document.getElementById('task2Result');
    output.innerHTML = `<p>Спеціальність студента: ${student.specialty}<\p>\
                        <p>Група студента: ${student.group}<\p>`;
}

function task2cleargroup() {
    var groupInput = document.getElementById('studentObjectGroup');
    groupInput.value = '';
    student.clearGroup();
    var output = document.getElementById('task2Result');
    output.innerHTML = `<p>Спеціальність студента: ${student.specialty}<\p>\
                        <p>Група студента: ${student.group}<\p>`;
}



function task3user() {
    var user2 = Object.create(user);

    var output = document.getElementById('task3Result1');
    output.innerHTML = `<p>Ім'я користувача: ${user2.name}<\p>\
                        <p>Прізвище користувача: ${user2.surname}<\p>`;
}

function task3student() {
    let student2 = Object.create(student);

    var output = document.getElementById('task3Result2');
    output.innerHTML = `<p>Спеціальність студента: ${student2.specialty}<\p>\
                        <p>Група студента: ${student2.group}<\p>`;
}

function task4() {
    StudentObject.prototype.showData = function() {
        var output = document.getElementById('task4Result');

        output.innerHTML = `<p>Спеціальність студента: ${this.specialty}<\p>\
                            <p>Група студента: ${this.group}<\p>`
    }
    let student2 = Object.create(student);
    student2.showData();
}

function Progress(test, attempt, grades) {
    StudentObject.call(this, test, attempt, grades);
    this.averageGrade = 0;

    this.calculateAverageGrade = function() {
        if (this.grades.length == 0) {
            alert('Оцінки відсутні');
        }
        else {
            let sum = 0;
            for (let i = 0; i < this.grades.length; i++) {
                sum += Number(this.grades[i]);
            }
            this.averageGrade = sum / this.grades.length;
        }
    }

    this.showData = function() {
        console.log('Test: ' + this.test + '\nAttempt: ' + this.attempt + '\nGrades: ' + this.grades + '\nAverage grade: ' + this.averageGrade);
    }
}

var progress = new Progress;

function task5GetGrades() {
    var test = document.getElementById('progressTest').value;
    var attempt = document.getElementById('progressAttempt').value;

    if (test == "" || attempt == "") {
        alert('Введіть тест та спробу');
        return;
    }
    else if (isNaN(attempt)) {
        alert('Спроба повинна бути числом');
        return;
    }

    //var progress = new Progress(test, attempt, []);

    progress.test = test;
    progress.attempt = attempt;
    progress.grades = [];

    var inputsContainer = document.getElementById('inputsContainer');
    let output = '';
    for (let i = 0; i < attempt; i++) {
        output += `<input type="text" id="progressGrade${i}" placeholder="Оцінка ${i + 1}">`;
    }
    inputsContainer.innerHTML = output;

    var button = document.getElementById('task5GetAverageGrade');
    button.classList.remove('hide');

}

function task5GetAverageGrade() {
    let attempts = document.getElementById('progressAttempt').value;
    for (let i = 0; i < attempts; i++) {
        let grade = document.getElementById(`progressGrade${i}`).value;
        if (grade == "") {
            alert('Введіть оцінку');
            return;
        }
        else if (isNaN(grade)) {
            alert('Оцінка повинна бути числом');
            return;
        }
        progress.grades.push(grade);
    }

    progress.calculateAverageGrade();
    
    var output = document.getElementById('task5Result');
    output.innerHTML = `<p>Середня оцінка: ${progress.averageGrade}<\p>`;
}