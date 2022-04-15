let NaModal = document.getElementById("NaModal");
let SaModal = document.getElementById("SaModal");
let AsianModal = document.getElementById("AsianModal");
let OceModal = document.getElementById("OceModal");
let EuModal = document.getElementById("EuModal");
let VikModal = document.getElementById("VikModal");
let AfModal = document.getElementById("AfModal");

let span = document.getElementsByClassName("close")[0];


//NORTH AMERICA
document.querySelectorAll(".United, .Canada, #MX, #GT ,#BZ ,#HN, #SV, #NI ,#CR ,#CU, #JM, #HT, #DO, .Puerto ").forEach(item => {
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
document.querySelectorAll("#PA, #CO, #EC, #VE, #GY ,#SR, #GF, #BR, #PE, #BO ,.Chile, #PY, .Argentina, #UY ,.Falkland").forEach(item => {
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
document.querySelectorAll("#IN ,#TM, #UZ ,#KZ, #KG ,#TJ, #PK ,#IN, .China, #NP, #BT ,#LK, #BD ,#MM ,#TH ,.Malaysia, .Indonesia, .Philippines, #VN ,#TW, .Japan, #MN, .Azerbaijan").forEach(item => {
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
document.querySelectorAll(".New, .Australia ,.Papua").forEach(item => {
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
document.querySelectorAll("#PT, #ES ,.France, #BE ,#NL ,#DE, .Denmark ,#CH, .Italy,#SI, #AT ,#CZ ,#PL,#LT, #LV ,#EE, #BY, #UA, #MD, #RO, #HU, #AT").forEach(item => {
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
document.querySelectorAll("#GL, #IS , .Norway , #SE , #IE , .Kingdom , #FI ").forEach(item => {
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
document.querySelectorAll("#MA, #EH, #MR ,#SN, #GN ,#SL, #LR #CI, #ML ,#BF, #GH, #TG, #BJ, #DZ, #TN, #LY ,#NE, #NG ,#EG ,#JO, #SY, #IQ, #IR, #AF ,#PK ").forEach(item => {
    item.addEventListener('click',function(){
        AfModal.style.display = "block";
    });   
      window.addEventListener("click", function(event) {
        if (event.target == AfModal) {
            AfModal.style.display = "none";
      }
    });    
});
