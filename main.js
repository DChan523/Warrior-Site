let NaModal = document.getElementById("NaModal");
let SaModal = document.getElementById("SaModal");
let AsianModal = document.getElementById("AsianModal");
let OceModal = document.getElementById("OceModal");
let EuModal = document.getElementById("EuModal");

let span = document.getElementsByClassName("close")[0];


//NORTH AMERICA
document.querySelectorAll(".Canada,.United").forEach(item => {
    item.addEventListener('click',function(){
        NaModal.style.display = "block";
    });
    span.onclick = function() {
        NaModal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == NaModal) {
          NaModal.style.display = "none";
    }
    }
});

//SOUTH AMERICA
document.querySelectorAll("#BR").forEach(item => {
    item.addEventListener('click',function(){
        console.log("brazil")
    });
});
//ASIA
document.querySelectorAll(".China").forEach(item => {
    item.addEventListener('click',function(){
        NaModal.style.display = "block";
    });
    span.onclick = function() {
        NaModal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == NaModal) {
          NaModal.style.display = "none";
    }
    }
});
//OCEANIA
document.querySelectorAll(".Australia").forEach(item => {
    item.addEventListener('click',function(){
        NaModal.style.display = "block";
    });
    span.onclick = function() {
        NaModal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == NaModal) {
          NaModal.style.display = "none";
    }
    }
});

//EUROPE
document.querySelectorAll("#UA,.France,#ES,#PT, #DE, #PL ,#AT, .Italy ,#CZ, #RO, .Greece,.Norway, #SE, #FI").forEach(item => {
    item.addEventListener('click',function(){
        NaModal.style.display = "block";
    });
    span.onclick = function() {
        NaModal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == NaModal) {
          NaModal.style.display = "none";
    }
    }
});

//VIKINGS
document.querySelectorAll("#GL").forEach(item => {
    item.addEventListener('click',function(){
        VikModal.style.display = "block";
    });
    span.onclick = function() {
        VikModal.style.display = "none";
      }
      window.onclick = function(event) {
        if (event.target == VikModal) {
          VikModal.style.display = "none";
    }
    }
});

