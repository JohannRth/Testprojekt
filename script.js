let questions = [
    {
        "question": "Wann wurde Lexus gegründet?",
        "answer_1": "2010",
        "answer_2": "1995",
        "answer_3": "2000",
        "answer_4": "1989",
        "right_answer": 4
    },
    {
        "question": "Was war das erste Modell von Lexus?",
        "answer_1": "CT 200h",
        "answer_2": "RX 300",
        "answer_3": "LS 400",
        "answer_4": "NX 200t",
        "right_answer": 3
    },
    {
        "question": "Welches Unternehmen ist der Mutterkonzern von Lexus?",
        "answer_1": "Nissan",
        "answer_2": "Toyota",
        "answer_3": "Honda",
        "answer_4": "Subaru",
        "right_answer": 2
    },
    {
        "question": "In welchem Land hat Lexus seinen Ursprung?",
        "answer_1": "Deutschland",
        "answer_2": "Japan",
        "answer_3": "USA",
        "answer_4": "Frankreich",
        "right_answer": 2
    },
    {
        "question": "Wie lautet der Slogan von Lexus",
        "answer_1": "Zoom - Zoom",
        "answer_2": "Innovation that Excites",
        "answer_3": "The Ultimate Driving Machine",
        "answer_4": "The Pursuit of Perfection",
        "right_answer": 4
    },
    {
        "question": "Welches Modell ist das meistverkaufte SUV von Lexus?",
        "answer_1": "UX",
        "answer_2": "LX",
        "answer_3": "GX",
        "answer_4": "RX",
        "right_answer": 4
    },
    {
        "question": "Was bedeutet der Name „Lexus“?",
        "answer_1": "Luxus und Eleganz",
        "answer_2": "Schneller als ein Blitz",
        "answer_3": "Innovativ und robust",
        "answer_4": "Treue und Zuverlässigkeit",
        "right_answer": 1
    },
    {
        "question": "Welches Modell von Lexus ist ein Hybridfahrzeug?",
        "answer_1": "CT 200h",
        "answer_2": "LC 500",
        "answer_3": "IS F",
        "answer_4": "Alle der oben genannten",
        "right_answer": 1
    },
    {
        "question": "Welcher Lexus wurde im Film „Minority Report“ von Tom Cruise gefahren?",
        "answer_1": "Lexus Future LS",
        "answer_2": "Lexus 3000",
        "answer_3": "Lexus NX 3030",
        "answer_4": "Lexus 2054",
        "right_answer": 4
    },
    {
        "question": "In welchem Jahr führte Lexus das erste Modell der F-Serie ein, das für hohe Leistung steht?",
        "answer_1": "2010",
        "answer_2": "2003",
        "answer_3": "2007",
        "answer_4": "2015",
        "right_answer": 3
    },
    {
        "question": "Welches dieser Modelle von Lexus hat einen V8-Motor?",
        "answer_1": "IS 250",
        "answer_2": "LC 500",
        "answer_3": "UX 250h",
        "answer_4": "RX 350",
        "right_answer": 2
    },
    {
        "question": "Was zeichnet die Mark Levinson-Option in einem Lexus-Fahrzeug aus?",
        "answer_1": "Verbesserte Sicherheitsfunktionen",
        "answer_2": "Hochwertiges Audiosystem",
        "answer_3": "Leistungssteigerung",
        "answer_4": "Erweiterte Navigationsfunktionen",
        "right_answer": 2
    },
    {
        "question": "Wie heißt das Luxus-SUV von Lexus, das auch als Geländewagen beliebt ist?",
        "answer_1": "LX",
        "answer_2": "NX",
        "answer_3": "ES",
        "answer_4": "IS",
        "right_answer": 1
    },
];

let currentQuestion = 0;
let rightQuestions = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() { 
    if (currentQuestion >= questions.length) {//Show End Screen
        document.getElementById('end-screen').style = '';
        document.getElementById('question-body').style = 'display: none';
        
        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = './img/tropyfull.png';
    } else { //Show question
        let percent = (currentQuestion + 1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').style = `width: ${percent}%`;

        let question = questions[currentQuestion];

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) { // Richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++; //z.B. von 0 auf 1 
    showQuestion();

    document.getElementById('next-button').disabled = true; //nächste Frage button deaktivieren
    resetAnswerButtons();//entfernen der vorher angewählten Antworten
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}