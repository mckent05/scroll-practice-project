let date= document.querySelector('.date')
date.innerHTML=new Date().getFullYear() 

let btn=document.querySelector('.nav-btn')

btn.addEventListener('click', function(){
    let contHeight=document.querySelector('.link-container')
    let linksContainer=document.querySelector('.links')
    let linksHeight=linksContainer.getBoundingClientRect().height
    if(contHeight.getBoundingClientRect().height==0){
        contHeight.style.height=`${linksHeight}px`
    }
    else{
        contHeight.style.height=0
    }

})
window.addEventListener('scroll', function(){
    let scrollHeight=pageYOffset
    let navHeight=document.querySelector('.main-nav')
    let top=document.querySelector('.top')
    if(scrollHeight >= navHeight.getBoundingClientRect().height){
        navHeight.classList.add('fixed-nav')
    }
    else{
        navHeight.classList.remove('fixed-nav')
    }
    if (scrollHeight > 500){
        top.classList.add('show-top')
    }
    else{
        top.classList.remove('show-top')
    }
})

let links=document.querySelectorAll('.nav-links')
links.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault()
        let contHeight=document.querySelector('.link-container')
        
        let navHeight=document.querySelector('.main-nav')
        let fixedNav=navHeight.classList.contains('fixed-nav')
        let attribute=e.currentTarget.getAttribute('href').slice(1)
        let id=document.getElementById(attribute)
        let position= id.offsetTop - navHeight.getBoundingClientRect().height
        if(!fixedNav){
            position=position - navHeight.getBoundingClientRect().height
        }
        if(navHeight.getBoundingClientRect().height > 70){
            position=position + contHeight.getBoundingClientRect().height
        }
        
        
        

        window.scrollTo({
            left:0,
            top:position
        })
        contHeight.style.height=0
        console.log(navHeight.getBoundingClientRect().height)
        
    })
    
    
})
