
const buttons =document.querySelectorAll('.button')

// console.log(buttons);

const body=document.querySelector('body')

// console.log(body);

buttons.forEach((item)=>{
    console.log(item);
    item.addEventListener('click',(e)=>{
        // console.log(e);
        console.log(e.target);
        console.log(e.target.id);

        // switch (e.target.id) {
        //     case 'grey':
        //         body.style.backgroundColor=e.target.id
        //         break;
        //     case 'white':
                
        //         break;
        //     case 'blue':
                
        //         break;
        //     case 'yellow':
                
        //         break;
        
        //     default:
                
        // }
        
        body.style.backgroundColor=e.target.id
        
    })
})



































