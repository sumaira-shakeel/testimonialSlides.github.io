const testimonials = [
    {
        name:" Lisa Johnson",
        photoUrl:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I am incredibly impressed with Apple's mobile products. The sleek design and user-friendly interface make it a must-have for anyone on the go. The quality and performance are unmatched, truly setting Apple apart in the tech industry."

    },
    {
        name:" Caroline Thompson",
        photoUrl:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I am blown away by the exceptional quality and innovation of Apple's mobile devices. The sleek design and seamless functionality make it a game-changer in the tech industry. I highly recommend Apple to anyone looking for top-of-the-line products."
        

    },
    {
        name:" Emma Thompson",
        photoUrl:"https://images.unsplash.com/photo-1722446374491-e9e13487557e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I am extremely impressed with Apple's mobile devices. The sleek design and top-notch performance exceeded all my expectations. Apple truly delivers innovation and quality in every product they create."
        

    },
    {
        name:"Sophia Johnson",
        photoUrl:"https://plus.unsplash.com/premium_photo-1661764189164-d4e65c47e7b9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"I have been a loyal customer of Apple for years. Their mobile products are top-notch in terms of quality and design. I can't imagine using any other brand. Apple truly understands what customers need and delivers exceptional products every time."
   
        }
];
const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".user_name")
let idx = 0 ;
updateTestimonial()
function updateTestimonial(){
    const {name,photoUrl,text} = testimonials[idx];
    imgEl.src = photoUrl;
    textEl.innerText = text
    ;
    usernameEl.innerText = name;
    idx++
    if(idx === testimonials.length){
        idx = 0;
    }
    setTimeout(()=>{
        updateTestimonial()
        
    } ,4000)


}
