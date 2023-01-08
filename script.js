let plusElement=document.getElementsByClassName("li-1")
let pliElement=document.getElementsByClassName("Pli-1")
let icons=document.getElementsByTagName("i")
// plusElement[0].addEventListener("click", ()=> {
//     if(pliElement[0].style.display==="block") {
//         pliElement[0].style.display="none"
//     } else if(pliElement[0].style.display==="none"){
//         pliElement[0].style.display="block"
//     }
// })

// plusElement[0].addEventListener("click", ()=> {
//     if(pliElement[0].style.display==="block") {
//         pliElement[0].style.display="none"
//     } else if(pliElement[0].style.display==="none"){
//         pliElement[0].style.display="block"
//     }
// })

// plusElement[0].addEventListener("click", ()=> {
//     if(pliElement[0].style.display==="block") {
//         pliElement[0].style.display="none"
//     } else if(pliElement[0].style.display==="none"){
//         pliElement[0].style.display="block"
//     }
// })

// plusElement[0].addEventListener("click", ()=> {
//     if(pliElement[0].style.display==="block") {
//         pliElement[0].style.display="none"
//     } else if(pliElement[0].style.display==="none"){
//         pliElement[0].style.display="block"
//     }
// })

// plusElement[0].addEventListener("click", ()=> {
//     if(pliElement[0].style.display==="block") {
//         pliElement[0].style.display="none"
//     } else if(pliElement[0].style.display==="none"){
//         pliElement[0].style.display="block"
//     }
// })

// plusElement[0].addEventListener("click", ()=> {
//     if(pliElement[0].style.display==="block") {
//         pliElement[0].style.display="none"
//     } else if(pliElement[0].style.display==="none"){
//         pliElement[0].style.display="block"
//     }
// })


let count=0
for(let i=0; i<plusElement.length; i++) {
    
    plusElement[i].addEventListener("click", ()=> {
        
        if(pliElement[i].style.display==="block") {
            pliElement[i].style.display="none"
        } else if(pliElement[i].style.display==="none"){
            count++
            for(let i=0; i<plusElement.length; i++) {
                if(count>1) {
                    pliElement[i].style.display="none"
                }
                }
            // console.log(count);

            pliElement[i].style.display="block"
            
            
        }

        // for(let i=0; i<plusElement.length; i++) {
        // if(count>1) {
        //     pliElement[i].style.display="none"
        // }
        // }
        
    })
}