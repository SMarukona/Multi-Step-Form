//Grabbing button elemetn inside .step-btn class
const nextBtn = document.querySelectorAll(".step-btn>button");
const backBtn = document.querySelectorAll(".step-btn>a");

//Grabbing all the step elements
const step_1 = document.querySelector(".ind-step-1");
const step_2 = document.querySelector(".ind-step-2");
const step_3 = document.querySelector(".ind-step-3");
const step_4 = document.querySelector(".ind-step-4");
const step_5 = document.querySelector(".ind-step-5");

//Go through each next button
nextBtn.forEach(nextStep);

function nextStep(item, index){
     if(index === 0){
        backBtn[0].style.display = "none";
        // add event listener to the button
        item.addEventListener("click", function(){
            step_1.style.display = "none";
            step_2.style.display = "block";
            backBtn[1].style.display = "inline-block";
        });
     }else if(index === 1){
        backBtn[1].style.display = "none";
        // add event listener to the button
        item.addEventListener("click", function(){
            step_2.style.display = "none";
            step_3.style.display = "block";
            backBtn[2].style.display = "inline-block";
        });
     }else if(index === 2){
        backBtn[2].style.display = "none";
        //add event to the button 3
        item.addEventListener("click", ()=>{
            step_3.style.display = "none";
            step_4.style.display = "block";
            backBtn[3].style.display = "inline-block";
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
            step_1.style.display = "block";
            step_2.style.display = "none";
            
        });
    }else if(index === 2){
        item.addEventListener('click', ()=>{
            step_2.style.display = "block";
            step_3.style.display = "none";
            
        });
        
    }else if(index === 3){
        item.addEventListener('click', ()=>{
            step_3.style.display = "block";
            step_4.style.display = "none";
            
        });
    }
}
