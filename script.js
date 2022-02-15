//get reuired class/id from html tags

//1.. add icon - to show the form

const displayAddCardForm = document.querySelector('.display-form')

//2. form class to display the form when add icon clicked

const addCardForm = document.querySelector(".popup-form")

//3. to close the form on cancel button

const closeAddCardForm = document.querySelector('.exit')

//4.form id to access card form details and manipulate data on form submit

const form = document.querySelector('#form-id')



addCardForm.style.display="none"

 //add
 //sample data
let sampledata=['Sample question','sample answer 1','sample ans 2','sample ans 3','sample ans 4','correct ans']
localStorage.setItem(1,JSON.stringify(sampledata))



displayAddCardForm.addEventListener('click',()=>{
    addCardForm.style.display="block"

})

closeAddCardForm.addEventListener('click',()=>{
    addCardForm.style.display="none"
})

getAllQns();

form.addEventListener("submit",(event)=>{
    event.preventDefault()

let cardQns         = document.querySelector('#card-qns').value
let cardChoice1     = document.querySelector('#card-choice1').value
let cardChoice2     = document.querySelector('#card-choice2').value
let cardChoice3     = document.querySelector('#card-choice3').value
let cardChoice4     = document.querySelector('#card-choice4').value
let cardCorrectAns  = document.querySelector('#card-correct-ans').value

let uniqueId        = new Date().getTime()
var qnsArray        = [cardQns,cardChoice1,cardChoice2,cardChoice3,cardChoice4,cardCorrectAns]
localStorage.setItem(uniqueId,JSON.stringify(qnsArray))

getQns(uniqueId)
addCardForm.style.display   =   "none"

})


function getAllQns()
{
    for(var i=0; i<localStorage.length;i++)
    {
      let id    = localStorage.key(i)
      let arr   = JSON.parse(localStorage.getItem(id) )
      arr.push(id)
      displayQns.apply(null,arr);
     
    }
}

function getQns(uniqueId)
{
    let arr     = JSON.parse(localStorage.getItem(uniqueId))
    arr.push(uniqueId)
    displayQns.apply(null,arr);
   
}

function deleteQns(uniqueId)
{
   
        // console.log(uniqueId)
        let text="Do you want to delete ?"
        if (confirm(text)==true){
        localStorage.removeItem(uniqueId)
        var deleteDiv   = document.getElementById(uniqueId)
        deleteDiv.remove()
        }


}


// function editQns(uniqueId){
//     // console.log(uniqueId)
//     addCardForm.style.display="block"

// }

  function displayQns(question,choice1,choice2,choice3,choice4,correctAns,uniqueId){
    console.log(uniqueId)
    let quizTemp    = document.querySelector(".card-wrap")
    let htmlCode    = `
    
        <div class="card-item" id="${uniqueId}" >
            <h5 class="card-title">${question}</h5>
            <p class="card-text">a: ${choice1}</p>
            <p class="card-text">b: ${choice2}</p>
            <p class="card-text">c: ${choice3}</p>
            <p class="card-text">d: ${choice4}</p>
            <p class="card-text"> correct ans is : ${correctAns}</p>
                        
            <div class="card-button">
               
                <button class="card-delete-button">Delete</button>
            </div>
        </div>
    
    `
    quizTemp.insertAdjacentHTML("afterbegin",htmlCode)

    let deleteButton=document.querySelector(".card-delete-button")
    deleteButton.addEventListener("click",()=>
    {
        deleteQns(uniqueId);
    })

    // let editButton=document.querySelector(".card-edit-button")
    // editButton.addEventListener("click",()=>{
    //     console.log("hi")
      
    // })



    
  
  }
