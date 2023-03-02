//Grabbing button elemetn inside .step-btn class
const nextBtn = document.querySelectorAll(".step-btn>button");
const backBtn = document.querySelectorAll(".step-btn>a");

//Grabbing all the step elements
const step_1 = document.querySelector(".ind-step-1");
const step_2 = document.querySelector(".ind-step-2");
const step_3 = document.querySelector(".ind-step-3");
const step_4 = document.querySelector(".ind-step-4");
const step_5 = document.querySelector(".ind-step-5");

//Getting step number form the sidebar
const steps_number = document.querySelectorAll(".step-number");
const steps_number_a = document.querySelectorAll(".step-number>a");


//Go through each next button
nextBtn.forEach(nextStep);

function nextStep(item, index){
     if(index === 0){
        backBtn[0].style.display = "none";

        //Adding steps number to active class .step-number-active and linkto .step-number-active-a
        steps_number[0].classList.add("step-number-active");
        steps_number_a[0].classList.add("step-number-active-a");

        // add event listener to the button 1
        item.addEventListener("click", function(){
            step_1.style.display = "none";
            step_2.style.display = "flex";
            backBtn[1].style.display = "inline-block";
            steps_number[0].classList.remove("step-number-active");
            steps_number_a[0].classList.remove("step-number-active-a");
            steps_number[1].classList.add("step-number-active");
            steps_number_a[1].classList.add("step-number-active-a");
            
        });
     }else if(index === 1){
        backBtn[1].style.display = "none";
        // add event listener to the button 2
        item.addEventListener("click", function(){
            step_2.style.display = "none";
            step_3.style.display = "flex";
            backBtn[2].style.display = "inline-block";
            //setting nextBtn[3] button type to submit
            nextBtn[3].type = "submit";

            steps_number[1].classList.remove("step-number-active");
            steps_number_a[1].classList.remove("step-number-active-a");
            steps_number[2].classList.add("step-number-active");
            steps_number_a[2].classList.add("step-number-active-a");
        });
     }else if(index === 2){
        backBtn[2].style.display = "none";
        //add event to the button 3
        item.addEventListener("click", ()=>{
            step_3.style.display = "none";
            step_4.style.display = "flex";
            backBtn[3].style.display = "inline-block";

            steps_number[2].classList.remove("step-number-active");
            steps_number_a[2].classList.remove("step-number-active-a");
            steps_number[3].classList.add("step-number-active");
            steps_number_a[3].classList.add("step-number-active-a");
        });
     }else if(index === 3){
        backBtn[3].style.display = "none";
        //add event to the button 4
        item.addEventListener("click", ()=>{
            step_4.style.display = "none";
            step_5.style.display = "block";
            backBtn[4].style.display = "none";
            nextBtn[4].style.display = "none";
        });
     }
}


//Loping through backBTN
backBtn.forEach(backStep);
function backStep(item, index){
    if(index === 1){
        item.addEventListener('click', ()=>{
            step_1.style.display = "flex";
            step_2.style.display = "none";
            
            steps_number[1].classList.remove("step-number-active");
            steps_number_a[1].classList.remove("step-number-active-a");
            steps_number[0].classList.add("step-number-active");
            steps_number_a[0].classList.add("step-number-active-a");
        });
    }else if(index === 2){
        item.addEventListener('click', ()=>{
            step_2.style.display = "flex";
            step_3.style.display = "none";
            
            steps_number[2].classList.remove("step-number-active");
            steps_number_a[2].classList.remove("step-number-active-a");
            steps_number[1].classList.add("step-number-active");
            steps_number_a[1].classList.add("step-number-active-a");
        });
        
    }else if(index === 3){
        item.addEventListener('click', ()=>{
            step_3.style.display = "flex";
            step_4.style.display = "none";
            
            steps_number[3].classList.remove("step-number-active");
            steps_number_a[3].classList.remove("step-number-active-a");
            steps_number[2].classList.add("step-number-active");
            steps_number_a[2].classList.add("step-number-active-a");
        });
    }
}


//Preventing page reload on form submit
const form = document.querySelector(".details");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
});