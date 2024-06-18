// function startSlide(value) {

//   document.getElementById('startValue').value = value;;
// }

// function startValue(value) {


//   document.getElementById("startrange").value = value;



// }

// function endSlide(value) {

// if(value>=100){
//   document.getElementById('endValue').value ="100+";

// }
// else{ document.getElementById('endValue').value = value;}


// }

// function endValue(value) {
//   document.getElementById("endrange").value = value;



// }


let minRangeValueGap = 6;
const range = document.getElementById("range_track");
const minval = document.querySelector(".minvalue");
const maxval = document.querySelector(".maxvalue");
const rangeInput = document.querySelectorAll(".r");
var x = window.matchMedia("(max-width: 850px)")
let minRange, maxRange, minPercentage, maxPercentage;


function inputvalm(val) {

  rangeInput[0].value = val;
  range.style.right = (rangeInput[0].value / rangeInput[0].max) * 100 + "%";
}


function inputvalM(val) {
  rangeInput[1].value = val;
  range.style.left =
    100 - (rangeInput[1].value / rangeInput[1].max) * 100 + "%";
}

const minRangeFill = () => {
  range.style.right = (rangeInput[0].value / rangeInput[0].max) * 100 + "%";
};
const maxRangeFill = () => {
  range.style.left =
    100 - (rangeInput[1].value / rangeInput[1].max) * 100 + "%";
}

const setMinValueOutput = () => {
  minRange = parseInt(rangeInput[0].value);
  minval.value = rangeInput[0].value;
};
const setMaxValueOutput = () => {
  maxRange = parseInt(rangeInput[1].value);

  if (rangeInput[1].value == 100) {
    maxval.value = "بالای 100";
  }
  else { maxval.value = rangeInput[1].value; }
};









setMinValueOutput();
setMaxValueOutput();
minRangeFill();
maxRangeFill();

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    setMinValueOutput();
    setMaxValueOutput();
    minRangeFill();
    maxRangeFill();


    if (maxRange - minRange < minRangeValueGap) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - minRangeValueGap;
        setMinValueOutput();
        minRangeFill();

        e.target.style.zIndex = "2";
      } else {
        rangeInput[1].value = minRange + minRangeValueGap;
        e.target.style.zIndex = "2";
        setMaxValueOutput();
        maxRangeFill();

      }
    }
  });
});





var cat = document.getElementsByClassName("sp");
var cat2 = document.getElementsByClassName("msp");



for (var i = 0; i < cat.length; i++) {
  if (x.matches) { // If media query matches

    cat[i].onclick = function () {
      var arrow = this.parentElement.querySelector("i");
      if (this.parentElement.style.height == 24 + "em") {
        this.parentElement.style.height = 2.5 + "em";
        arrow.style.transform = "rotate" + "(45deg)";
  
  
  
      }
  
      else {
        this.parentElement.style.height = 24 + "em";
  
        arrow.style.transform = "rotate" + "(135deg)";
      }
  
    }

  }
  else{
    cat[i].onclick = function () {
    var arrow = this.parentElement.querySelector("i");
    if (this.parentElement.style.height == 18 + "em") {
      this.parentElement.style.height = 2.5 + "em";
      arrow.style.transform = "rotate" + "(45deg)";



    }

    else {
      this.parentElement.style.height = 18 + "em";

      arrow.style.transform = "rotate" + "(135deg)";
    }

  }}
  
}
for (var a = 0; a < cat2.length; a++) {

 

  cat2[a].onclick = function () {
    var arrow = this.parentElement.querySelector("i");

    if (this.parentElement.style.height == "fit-content") {
      this.parentElement.style.height = 2.5 + "rem";
      arrow.style.transform = "rotate" + "(45deg)";


    }

    else {
      this.parentElement.style.height = "fit-content";
      arrow.style.transform = "rotate" + "(135deg)";
    }

  }

}





var mainprod = document.getElementById("mainprod");
var proarrow = document.querySelector(".p");
function mainprodjs() {
  var arrow = proarrow.querySelector("i");

  if (mainprod.style.height == "fit-content") {
    mainprod.style.height = 2.45 + "em";
    arrow.style.transform = "rotate" + "(45deg)";

  }
  else {
    mainprod.style.height = "fit-content";
    arrow.style.transform = "rotate" + "(135deg)";
  }
}






var filters = document.querySelector(".filter");
var hed = document.querySelector("header");
var ca = document.querySelector(".cards")
var filtericon = document.querySelector(".filter-icon");

function openfilter() {

  // filters.style.display="flex";
  if (filters.style.right == 0 + "px") {

    filters.style.right = -100 + "%";
    hed.style.filter = "none";
    ca.style.filter = "none";
    
    

  }

  else {
    filters.style.right = "0";
    hed.style.filter = "blur(5px)";
    ca.style.filter = "blur(5px)";
    
  }



}


function closefilter() {

  // filters.style.display="none";
  hed.style.filter = "none";
  ca.style.filter = "none";
  filters.style.right = -100 + "%";

}






function myFunction(x) {
  if (x.matches) { // If media query matches



    hed.onclick = function () { closefilter() }
    ca.onclick = function () { closefilter() }




  }
}

// Create a MediaQueryList object
var x = window.matchMedia("(max-width: 850px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction(x);
});