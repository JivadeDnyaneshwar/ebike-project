var beastD=[{
      sub_title:"OUR  FLEET  OF",
      maintitle:"HIGH PERFORMANCE E-BIKES",
      bikecard1:"https://www.joyebike.com/home/assets/img/bike/highperformance-hurricane.webp",
      bikedis:"Hurricane",
      bikecard:"https://www.joyebike.com/home/assets/img/bike/highperformance-beast.webp",
      Beast:"Beast",

    },
     {
      our:"OUR FLEET OF",
      maina:"LOW SPEED ELECtRIC BIKES",
      WolIMG:"https://joyebike.com/home/assets/img/bike/lowspeed_wolf.webp",
      woldis:"Wolf",
      wolp:" Showroom Price : ₹ 91350 /-",
      wolspan:"Offer Price : ₹ 54999* /-",
      WolDisBook:"Book Now",
    },
    {
    image: "https://joyebike.com/home/assets/img/bike/lowspeed_nanu.webp",
    name: "Joy Gen-Next Nanu",
    showroomPrice: " showroomPrice : ₹ 77400 /-",
    offerPrice: "  offerPrice : ₹ 53999* /-",
    BookNow1: "Book Now"
  },
  {
    image: "https://joyebike.com/home/assets/img/bike/lowspeed_glow.webp",
    name: "Glob",
    showroomPrice: "showroomPrice : ₹ 77400 /-",
    offerPrice: "offerPrice : ₹ 70000* /-",
    GlobBook: "Book Now"
  }

]

var ecoBikes =[ {
  title: "OUR FLEET OF",
  heading: "ECO MODEL E-BIKES"
}
    ,{
      image: "https://www.joyebike.com/home/assets/img/bike/Wold%20Eco%20with%20Stand.webp",
      name: "Wolf Eco",
      showroomPrice: "ShowroomPrice : ₹ 91350 /-",
      offerPrice: " OfferPrice : ₹ 65099* /-",
      Book: "Book Now"
    },
    {
      image: "https://www.joyebike.com/home/assets/img/bike/Nanu%20Eco.webp",
      name: "Gen-Next Nanu Eco",
      showroomPrice: "ShowroomPrice : ₹ 88200 /-",
      offerPrice: " OfferPrice : ₹ 64099* /-",
      BookNow: "Book Now"
    }
  ]

   var title=document.querySelector('.title');
   title.innerText=ecoBikes[0].title;
   var heading=document.querySelector('#heading');
   heading.innerText=ecoBikes[0].heading;
   var image=document.querySelector('.image1');
   image.src=ecoBikes[1].image;
   var name1=document.querySelector('.name1');
   name1.innerText=ecoBikes[1].name;
   var aprice=document.querySelector('.aprice');
   aprice.innerText=ecoBikes[1].showroomPrice
   var bprice=document.querySelector('.bprice');
   bprice.innerText=ecoBikes[1].offerPrice;
   var Book=document.querySelector('.Book');
   Book.innerText=ecoBikes[1].Book;
   var image2=document.querySelector('.image2');
   image2.src=ecoBikes[2].image;
   var name2=document.querySelector('.name2');
   name2.innerText=ecoBikes[2].name;
   var afterprice=document.querySelector('.afterprice');
   afterprice.innerText=ecoBikes[2].showroomPrice;
   var beforprice=document.querySelector('.beforprice');
   beforprice.innerText=ecoBikes[2].offerPrice;
   var BookNow=document.querySelector('.BookNow');
   BookNow.innerText=ecoBikes[2].BookNow;  
   
   
   var image=document.querySelector('.image');
   image.src=beastD[3].image;

   var nameh=document.querySelector('.nameh');
   nameh.innerText=beastD[3].name;

   var showroomPrice=document.querySelector('.showroomP');
   showroomPrice.innerText=beastD[3].showroomPrice;
   
   var Price=document.querySelector('.Price');
   Price.innerText=beastD[3].offerPrice;

   var GlobBook=document.querySelector('.GlobBook');
   GlobBook.innerText=beastD[3].GlobBook;













    var Genimg=document.querySelector('.Genimg');
    Genimg.src=beastD[2].image;

    var joy=document.querySelector('.joy');
    joy.innerText=beastD[2].name;

    var showroomPrice=document.querySelector('.showroomPrice');
    showroomPrice.innerText=beastD[2].showroomPrice;
   
     var offerPrice=document.querySelector('.offerPrice');
     offerPrice.innerText=beastD[2].offerPrice;
   
     var BookNow1=document.querySelector('.BookNow1');
     BookNow1.innerText=beastD[2].BookNow1;






    var our=document.querySelector('.our');
    our.innerText=beastD[1].our;

    var maina=document.querySelector('.maina');
    maina.innerText=beastD[1].maina;

    var WolIMG=document.querySelector('.WolIMG');
    WolIMG.src=beastD[1].WolIMG;
    
    var woldis=document.querySelector('.woldis');
    woldis.innerText=beastD[1].woldis;
   
    var wolp=document.querySelector('.wolp');
    wolp.innerText=beastD[1].wolp;
   

    var wolspan=document.querySelector('.wolspan');
    wolspan.innerText=beastD[1].wolspan;

    var  WolDisBook=document.querySelector('.WolDisBook');
    WolDisBook.innerText=beastD[1]. WolDisBook;
   


















var subtitle=document.querySelector('.subtitle');
subtitle.innerText=beastD[0].sub_title;
 
var maintitle=document.querySelector('#maintitle');
maintitle.innerText=beastD[0].maintitle;

var bikecard1=document.querySelector('#bikecard1');
bikecard1.src=beastD[0].bikecard1;


var bikedis=document.querySelector('.bikedis');
bikedis.innerText=beastD[0].bikedis;


var bikecard=document.querySelector('.bikecard');
bikecard.src=beastD[0].bikecard;

  var Beast=document.querySelector('.Beast');
  Beast.innerText=beastD[0].Beast;


  gsap.registerPlugin(ScrollTrigger);
  gsap.from(".bike-card img ",{
    x:700,
    // x:-800,
    duration:0.5,
    scrollTrigger:{
      trigger:".bike-card ",
      scroller:"body",
    //   markers:true,
      start:"top 100%",
      end:"top 0%",
      scrub:5,
    //   pin:true
      
    
    }});



    
   gsap.from(".bike-card1 img ",{
    x:-700,
    // x:-800,
    duration:0.5,
    scrollTrigger:{
      trigger:".bike-card1 ",
      scroller:"body",
    //   markers:true,
      start:"top 100%",
      end:"top 0%",
      scrub:5,
      
    //   pin:true
      
    
    }});
   gsap.from(".main-title ",{
    y:-120,
    // x:-800,
    duration:1,
     opacity:0,
    scrollTrigger:{
      trigger:".lowspeed ",
      scroller:"body",
    //   markers:true,
      start:"top -40%",
      end:"top 50%",
      scrub:5,
     
    //   pin:true
      
    
    }});
   
   gsap.from(".WolfDis img ",{
    x:-700,
    // x:-800,
    duration:0.5,
    scrollTrigger:{
      trigger:".Ecohome",
      scroller:"body",
      // markers:true,
      start:"top -65%",
      end:"top 10%",
      scrub:5,
      
    //   pin:true
      
    
 }});

  gsap.from(".Globdis img ",{
    x:700,
    // x:-800,
    duration:0.5,
    scrollTrigger:{
      trigger:".EcoHome",
      scroller:"body",
    //   markers:true,
      start:"top -65%",
      end:"top 0%",
      scrub:5,
      
    //   pin:true
      
    
 }});

  gsap.from(".Gen-Next img",{
    y:200,
    // x:-800,
    opacity:0,
    duration:4,
     scale: 0,

    scrollTrigger:{
      trigger:".EcoHome",
      scroller:"body",
    //   markers:true,
      start:"top -55%",
      end:"top 0%",
      scrub:5,
     
    //   pin:true
      
    
 }});

 gsap.from(".maina ",{
    y:-120,
    // x:-800,
    duration:0.5,
     opacity:0,
    scrollTrigger:{
      trigger:".EcoHome ",
      scroller:"body",
    //   markers:true,
      start:"top -40%",
      end:"top 50%",
      scrub:5,
     
    //   pin:true
      
    
    }});

 

   gsap.from(".main-title ",{
    y:-120,
    // x:-800,
    duration:1,
     opacity:0,
    scrollTrigger:{
      trigger:".lowspeed ",
      scroller:"body",
    //   markers:true,
      start:"top -40%",
      end:"top 50%",
      scrub:5,
     
    //   pin:true
      
    
    }});
if (window.matchMedia("(max-width: 768px)").matches) {
  gsap.killTweensOf(".bike-card img");
  gsap.killTweensOf(".bike-card1 img");
  gsap.killTweensOf(".main-title");
   gsap.killTweensOf(".maina");
  gsap.killTweensOf(".Gen-Next img");
  gsap.killTweensOf(".Globdis img ");
  gsap.killTweensOf(".WolfDis img ");
 
  // Aur dusre elements jo aapke GSAP animation mein hain
}



const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleTabletChange(e) {
  if (e.matches) {
    gsap.from(".bike-card img ",{
    x:1600,
    duration:0.5,
    scrollTrigger:{
      trigger:".bike-card1 ",
      scroller:"body",
    //   markers:true,
      start:"top 100%",
      end:"top -10%",
      scrub:5,
    //   pin:true
      
    
    }});

      
   gsap.from(".bike-card1 img ",{
    x:-2000,
    // x:-800,
    duration:0.5,
    scrollTrigger:{
      trigger:".Globdis ",
      scroller:"body",
      // markers:true,
      start:"top 30%",
      end:"top -10%",
      scrub:5,
      
    //   pin:true
      
    
    }});

 gsap.set(".Gen-Next img", {
    opacity: 1,
    y: 0,
    scale: 1,
  });

   gsap.from(".Gen-Next img",{
    y:300,
    // x:-800,
    opacity:0,
    duration:4,
     scale: 0,
      scrollTrigger:{
      trigger:".WolfDis",
      scroller:"body",
    //   markers:true,
      start:"top 35%",
      end:"top 0%",
      scrub:5,
     
    //   pin:true
      
    
 }});

   gsap.set(".main-title", {
    opacity: 1,
    y: 0,
  });

   gsap.from(".main-title ",{
    y:-220,
    // x:-800,
    duration:1,
     opacity:0,
    scrollTrigger:{
      trigger:".Globdis ",
      scroller:"body",
    //   markers:true,
      start:"top 20%",
      end:"top 20%",
      scrub:5,
     
    //   pin:true
      
    
    }});
     gsap.set(".maina", {
    opacity: 1,
    y: 0,
  });
   gsap.from(".maina ",{
    y:-120,
    // x:-800,
    duration:0.5,
     opacity:0,
    scrollTrigger:{
      trigger:".NanuImg ",
      scroller:"body",
      // markers:true,
     start:"top 20%",
      end:"top 20%",
      scrub:5,
     
    //   pin:true
      
    
    }});

     gsap.set(".Globdis img", {
    x: 0,
    opacity: 1,
  });
    gsap.from(".Globdis img ", {
    x:2000,
    duration: 0.5,
    scrollTrigger: {
      trigger: ".Gen-Next",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top 0%",
      scrub: 5,
    }
  });

 
     gsap.set(".WolfDis img", {
    x: 0,
    opacity: 1,
     });
    gsap.from(".WolfDis img ",{
    x:-700,
    // x:-800,
    duration:0.5,
    scrollTrigger:{
      trigger:".Ecohome",
      scroller:"body",
      // markers:true,
      start:"top -65%",
      end:"top 0%",
      scrub:5,
      
    //   pin:true
      
    
 }});
// 

    console.log('Screen is 768px or less');
  } else {
    console.log('Screen is wider than 768px');
  }
}

// Register event listener
mediaQuery.addListener(handleTabletChange);

// Initial check
handleTabletChange(mediaQuery);
