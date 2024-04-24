let head = document.querySelector('#head-2')
let image = document.querySelector('img')

function Head (){
    let random =  Math.ceil (Math.random() *2)
   
    if(random === 1){
     
        console.log(random);
       image.src = `head.png`
       head.innerHTML= 'You have won the toss'
    }else{
        console.log(random);
        image.src = `tail.png`
        head.innerHTML = 'You lost the toss'
        
    }



}


function tail (){
    let random =  Math.ceil (Math.random() *2)
   
    if(random === 2){
     
        console.log(random);
       image.src = `tail.png`
       head.innerHTML= 'You have won the toss'
    }else{
        console.log(random);
        image.src = `head.png`
        head.innerHTML = 'You lost the toss'
        
    }   
}
