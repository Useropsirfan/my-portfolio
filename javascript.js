const menubtn= document.getElementById("menu-button");
const moblieview=document.getElementById("mobliemenu");
const idpic=document.getElementById("idbtn")
menubtn.addEventListener("click",()=>{    
    moblieview.classList.toggle("hidden")
    moblieview.classList.add('flex','flex-col',"justify-between","mr-60")
    menubtn.classList.add('absolute', 'top-4' )
    idpic.classList.toggle('hidden')
           
});

window.addEventListener('scroll',()=>{
    moblieview.classList.remove('flex','flex-col','justify-between')})
    idpic.classList.remove('hidden')

moblieview.querySelectorAll('a').forEach((link)=>{
    link.addEventListener('click',()=>{
        moblieview.classList.add('hidden')
        moblieview.classList.remove( 'flex','flex-col')
        moblieview.classList.remove('flex','flex-col','justify-between')
        menubtn.classList.remove('absolute', 'top-4' )
          idpic.classList.remove('hidden')
        
    })
})

// hero i am here 
const words=["Irfan Bhati |","Web Developer |", "Backend Developer |"]
let index = 0
let charindex = 0
let deleting = false
function typewrite(){
    const current = words[index]
    const typetext = document.getElementById('type');
    if(deleting){
        typetext.textContent=current.substring(0,charindex-1);
        charindex--
    }
    else{
        typetext.textContent = current.substring(0,charindex+1);
        charindex++
    }
    if(!deleting && charindex === current.length){
        setTimeout(()=> deleting = true,1500)    
    }
    if(deleting && charindex === 0){
        deleting = false 
        index = (index + 1)% words.length;
    }
        setTimeout(typewrite,deleting ? 80:120)
}
typewrite()

// project btn 
const code1= document.getElementById('code1');
code1.addEventListener('click',()=>{
    window.open("https://github.com/Useropsirfan/clone")
});
const code= document.getElementById('code2');
code.addEventListener('click',()=>{
    window.open("https://github.com/Useropsirfan/youtube-manger")
});
const code3= document.getElementById('code3');
code3.addEventListener('click',()=>{
    window.open("https://github.com/Useropsirfan/my-portfolio")
});

// hire btn 
const hire = document.getElementById('hire');
hire.addEventListener('click',()=>{
    document.getElementById('contact').scrollIntoView({
    behavior:"smooth"
    });
});

const resume = document.getElementById('download');
resume.addEventListener('click',()=>{
      const link = document.createElement("a")
      link.href ="../icon/my_resume.pdf"
      link.download="irfan_bhati_resume.pdf"
      link.click()
  });

// contacts 
const contacts = document.getElementById('submmit');
contacts.addEventListener('click',()=>{

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
    localStorage.setItem("phone",phone)
    localStorage.setItem("message",message)
    alert("thank you")
})
const sr= ScrollReveal({
    distance:"35px",
    duration:1200,
    reset:true
});
// hero section
sr.reveal("#logo",{origin:"left"})
sr.reveal("#navicon",{origin:"top"})
sr.reveal("#logoname",{origin:"right"})
sr.reveal("#idbtn",{origin:"right"})
sr.reveal("#hi",{origin:"left"})
sr.reveal("#icon",{origin:"top"})
sr.reveal("#icon1",{origin:"right"})
sr.reveal("#icon2",{origin:"bottom"})
sr.reveal("#icon3",{origin:"left"})
sr.reveal("#p",{origin:"bottom"})

const sr1 = ScrollReveal({
     distance:"50px",
     duration:1800,
     reset:true
})

// skill card
sr1.reveal("#py",{origin:"top"})
sr1.reveal("#js",{origin:"right"})
sr1.reveal("#css",{origin:"left"})
sr1.reveal("#html",{origin:"bottom"})

// project card animation 
sr1.reveal("#p1",{origin:"left"})
sr1.reveal("#p2",{origin:"bottom"})
sr1.reveal("#p3",{origin:"right"})

// contacts 
const sr2 = ScrollReveal({
     distance:"50px",
     duration:1000,
     reset:true
})
// form 
sr2.reveal("#image",{origin:"top"})
sr2.reveal("#form",{origin:"right"})

// about 
sr2.reveal("#aboutimg",{origin:"left"})
sr2.reveal("#abp",{origin:"right"})
