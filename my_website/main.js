function purchase_product(){
  var checks = []
  for (i=1; i<13; i++){
    

    if(document.getElementById("product_" + i).checked){
      temp = document.getElementById("product_"+i).value;
      checks.push(temp)
    }
  }
  console.log(checks)

  for(i=0; i<checks.length; i++){
    localStorage.setItem("product_"+i,checks[i])
  }


  //localStorage.setItem()
  window.location = "billing.html";

  const screenshotTarget = document.body;

  html2canvas(screenshotTarget).then((canvas) => {
    const base64image = canvas.toDataURL("image/png");
    window.location.href = base64image;
});
}

function uploadBill() {
  let input = document.createElement('input');
  input.type = 'file';
  input.onchange = _ => {
    // you can use this method to get file and perform respective operations
            let files =   Array.from(input.files);
            console.log(files);
        };
  input.click();
  
}


function purchase_cycle(){

  var cycle = []
  for (i=1; i<13; i++){

    if(document.getElementById("cycle_" + i).checked){
      temp = document.getElementById("cycle_"+i).value;
      cycle.push(temp)
    }

    
  }
  console.log(cycle)

  for(i=0; i<cycle.length; i++){
    localStorage.setItem("cycle_"+i,cycle[i])
  }
  window.location = "billing.html";
}


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


