
const form =document.querySelector('form')
// console.log(form);

form.addEventListener('submit',(e)=>{
    e.preventDefault() // * preventing the submit action

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)

    const results=document.querySelector('#results')
    console.log(height);
    console.log(weight);
    if (height ==='' || height < 0 || isNaN(height)){

        results.innerHTML ='Please give a valid height'
    }else if(weight ==='' || weight < 0 || isNaN(weight)){
        
        results.innerHTML ='Please give a valid weight'
    }else{
        const heightInMeters = height / 100;
        const bmi=(weight / (heightInMeters ** 2)).toFixed(2)
        // results.innerHTML = `${bmi}`;
        
        if (bmi < 18.6) {
          // results.innerHTML.
            results.innerHTML = `<span>${bmi}</span> <br> <span>UnderWeight</span> `;
        } else if (bmi < 25.0) {
            results.innerHTML = `<span>${bmi}</span> <br> <span>Normal Range</span> `;
        } else {
            results.innerHTML = `<span>${bmi}</span> <br> <span>OverWeight</span> `;
        }
    }
    

})











