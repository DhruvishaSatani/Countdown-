const endDate ="07 DECEMBER 2024 12:00 AM"
let inputs = document.querySelectorAll("input");
let h3 = document.querySelector("h3");

const cloCk =()=>{
    let end = new Date (endDate);
    let now = new Date ();
    // console.log(end);
    // console.log(now);
  
    let diff = (end-now)/1000;
    inputs[0].value=(Math.floor(diff/3600/24));
    inputs[1].value=(Math.floor(diff/3600)%24);
    inputs[2].value=(Math.floor(diff/60)%60);
    inputs[3].value=(Math.floor(diff)%60);
      if(diff<0)return;
}
// cloCk();

setInterval( 
    ()=>{
      cloCk();
},1000)