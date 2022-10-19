const questions = [
    {
        'que' : 'The full form of CSS is:' ,
        'a' : 'cascading spreed sheets' ,
        'b' : 'Cascading Style Sheets',
        'c' : 'Cascoding Style Sheets',
        'd' : 'colorfull Style Sheets',
        'correct' : 'b'
    },
    {
        'que' : 'How can we change the background color of an element?' ,
        'a' : 'font-color' ,
        'b' : 'color',
        'c' : 'background-color',
        'd' : 'None of the above',
        'correct' : 'c'
    },
    {
        'que' : 'How can we change the text color of an element?' ,
        'a' : 'font-size' ,
        'b' : 'background-color',
        'c' : 'color',
        'd' : 'None of the above',
        'correct' : 'c'
    },


    {
        'que' : 'In how many ways can CSS be written in?' ,
        'a' : '1' ,
        'b' : '2',
        'c' : '3',
        'd' : '4',
        'correct' : 'c'
    },

    {
        'que' : 'What type of CSS is generally recommended for designing large web pages?' ,
        'a' : 'internal' ,
        'b' : 'inline',
        'c' : 'external',
        'd' : 'Both A and B',
        'correct' : 'c'
    },

    {
        'que' : 'Which HTML tag is used to declare internal CSS?' ,
        'a' : '<link>' ,
        'b' : '<style>',
        'c' : '<head>',
        'd' : '<script>',
        'correct' : 'b'
    },
    {
        'que' : 'How can we select an element with a specific ID in CSS?' ,
        'a' : '#' ,
        'b' : '$',
        'c' : '*',
        'd' : '@',
        'correct' : 'a'
    },

    {
        'que' : 'How can we select an element with a specific Class in CSS?' ,
        'a' : '#' ,
        'b' : '.',
        'c' : '?',
        'd' : '*',
        'correct' : 'b'
    },
    {
        'que' : 'How can we write comments in CSS?' ,
        'a' : '//' ,
        'b' : '^ ^',
        'c' : '?/  /?',
        'd' : '/* */',
        'correct' : 'd'
    },
    {
        'que' : 'Can negative values be allowed in padding property?' ,
        'a' : 'depends on property ' ,
        'b' : 'yes',
        'c' : 'no',
        'd' : 'a and c',
        'correct' : 'c'
    },
   
   
]
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.answer')
const Question = () =>{
    if(index===total){
        return endQuiz()
    }
    reset();
    const data = questions[index]
    // console.log(data);
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
    // console.log()
}
const submitQuiz = () =>{
    if(index==8){
        Next.style.display = "none";
    }
    const data = questions[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }  previous.style.display = "block";
        index++;
        Question();
       return;
      
      
}
const getAnswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            
            }
        }
        
    )
         return answer;
}
const reset = () =>{
    optionInputs.forEach(
        (input) => {
            input.checked =false
        }
    )

}
const endQuiz = () =>{
    document.getElementById("box").innerHTML = ` <h3> Thanks For Playing The Quiz.
                                                 <h2>Your Score
                                                 <h2> ${right} / ${total} `
}

function previousQuestion(){
    if(index==1){
        previous.style.display = "none";
    }
    Next.style.display = "block";
    const data = questions[index-1];
    quesBox.innerText = `${index}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;  
    optionInputs[3].nextElementSibling.innerText = data.d;
    reset();
    index=index-1;
    
    }
    
    function NextQuestion(){
        if(index==8){
            Next.style.display = "none";
        }
    previous.style.display = "block";
    const data = questions[index+1];
    quesBox.innerText = `${index+2}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;  
    optionInputs[3].nextElementSibling.innerText = data.d;
    reset();
    index=index+1;

    }
   
    Question();
