document.addEventListener('DOMContentLoaded', () => {

    const firstNum = document.getElementById('num1')
    const secondNum = document.getElementById('num2')
    const userInput = document.getElementById('answer')
    const answerCheck = document.getElementById('check')
    const checkAnswerBtn = document.getElementById('checkAnswer')
    const nextQuestionBtn = document.getElementById('nextQ')
    const rangeInputTop = document.getElementById('topRangeInput')
    const rangeInputBottom = document.getElementById('bottomRangeInput')
    const rangeBtn = document.getElementById('rangeBtn')
    let rangeValueTop = parseInt(topRangeInput.value)
    let rangeValueBottom = parseInt(bottomRangeInput.value)
    let firstValue = Math.floor(Math.random() * 100) + 1
    let secondValue = Math.floor(Math.random() * 100) + 1
    let problem = firstValue / secondValue
    let playerAnswer = (parseInt(userInput.value))
    
    //det range
    function setRange(){
        rangeValueTop = parseInt(rangeInputTop.value)
        rangeValueBottom = parseInt(rangeInputBottom.value)
    }
    rangeBtn.addEventListener('click', function(){
        setRange()
    })
    
    //Game Setup
    function gameSetUp(){
        firstValue = Math.floor(Math.random() * parseInt(rangeValueTop)) + 10
        secondValue = Math.floor(Math.random() * parseInt(rangeValueBottom)) + 1
        problem = firstValue / secondValue
        firstNum.innerHTML = firstValue   
        secondNum.innerHTML = secondValue
        answerCheck.innerHTML = problem
        answerCheck.classList.add('hidden')
        
    } 
    
    nextQuestionBtn.addEventListener('click', function(){
        gameSetUp()
    })
    //Check Answer
    function check(){
        let problem = parseFloat(firstValue / secondValue).toFixed(2)
        let playerAnswer = parseFloat(userInput.value).toFixed(2)
        answerCheck.classList.remove('hidden')
        if(playerAnswer === problem){
            answerCheck.innerHTML = "✓well done"
            answerCheck.classList.remove('wrongAnswer')
            answerCheck.classList.add('correctAnswer')
        } else{
            answerCheck.innerHTML = "X try again"
            answerCheck.classList.remove('correctAnswer')
            answerCheck.classList.add('wrongAnswer')
        }
        
        console.log(problem)
        console.log(playerAnswer)
    }
    
    checkAnswerBtn.addEventListener('click', function(){
        check()
    })
    


})


