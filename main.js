let NaModal = document.getElementById("NaModal");
let SaModal = document.getElementById("SaModal");
let AsianModal = document.getElementById("AsianModal");
let OceModal = document.getElementById("OceModal");
let EuModal = document.getElementById("EuModal");
let VikModal = document.getElementById("VikModal");
let AfModal = document.getElementById("AfModal");

let span = document.getElementsByClassName("close")[0];


//NORTH AMERICA
document.querySelectorAll(".Canada,.United").forEach(item => {
    item.addEventListener('click',function(){
        NaModal.style.display = "block";
    });
    window.addEventListener("click", function(event) {
        if (event.target == NaModal) {
            NaModal.style.display = "none";
      }
    });
});

//SOUTH AMERICA
document.querySelectorAll("#BR").forEach(item => {
    item.addEventListener('click',function(){
        SaModal.style.display = "block";
    });
    window.addEventListener("click", function(event) {
        if (event.target == SaModal) {
            SaModal.style.display = "none";
      }
    });
});
//ASIA
document.querySelectorAll(".China").forEach(item => {
    item.addEventListener('click',function(){
        AsianModal.style.display = "block";
    });
    window.addEventListener("click", function(event) {
        if (event.target == AsianModal) {
            AsianModal.style.display = "none";
      }
    });
});
//OCEANIA
document.querySelectorAll(".Australia").forEach(item => {
    item.addEventListener('click',function(){
        OceModal.style.display = "block";
    });
    window.addEventListener("click", function(event) {
        if (event.target == OceModal) {
            OceModal.style.display = "none";
      }
    });
});

//EUROPE
document.querySelectorAll("#UA,.France,#ES,#PT, #DE, #PL ,#AT, .Italy ,#CZ, #RO, .Greece,.Norway, #SE, #FI,.Turkey").forEach(item => {
    item.addEventListener('click',function(){
        EuModal.style.display = "block";
    });
      window.addEventListener("click", function(event) {
        if (event.target == EuModal) {
            EuModal.style.display = "none";
      }
    });
});

//VIKINGS
document.querySelectorAll("#GL").forEach(item => {
    item.addEventListener('click',function(){
        VikModal.style.display = "block";
    });   
      window.addEventListener("click", function(event) {
        if (event.target == VikModal) {
            VikModal.style.display = "none";
      }
    });    
});

//AFRICA
document.querySelectorAll("#DZ, #LY, #EG ,#SD ,#TD ,#NE, #CD, .Angola ,#NA ,#TZ ,#ET ,#KE,#SA, #IR, #PK, #AF, #CF ,#SS ,#ZM ,#ZA ,#BW, #MZ,#SY ,#IQ").forEach(item => {
    item.addEventListener('click',function(){
        AfModal.style.display = "block";
    });   
      window.addEventListener("click", function(event) {
        if (event.target == AfModal) {
            AfModal.style.display = "none";
      }
    });    
});
