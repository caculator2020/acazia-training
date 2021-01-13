// ============================ NAVBAR ==================================

document.onscroll = ()=>{
    var location = window.scrollY;
    if (location > 50) {
        document.querySelector('.Header-navbar').classList.add("fixed-nav");
    }else{
        document.querySelector('.Header-navbar').classList.remove("fixed-nav")
    }

    var home = document.querySelector(".home");
    var work = document.querySelector(".work");
    var services = document.querySelector(".services");
    var about = document.querySelector(".about");
    var blog = document.querySelector(".blog");
    var contact = document.querySelector(".contact");

    if(location >= 0 && location <= 800){
      home.style.color = `#32dbc6`;
    }else{
      home.style.color = `#343A40`;
    }
    if(location > 800 && location <= 3100){
      work.style.color = `#32dbc6`;
    }else{
      work.style.color = `#343A40`;
    }
    if(location > 3100 && location <= 3800){
      services.style.color = `#32dbc6`;
    }else{
      services.style.color = `#343A40`;
    }
    if(location > 3800 && location <= 5200){
      about.style.color = `#32dbc6`;
    }else{
      about.style.color = `#343A40`;
    }
    if(location > 5200 && location <= 6100){
      blog.style.color = `#32dbc6`;
    }else{
      blog.style.color = `#343A40`;
    }
    if(location > 6100 && location <= 7400){
      contact.style.color = `#32dbc6`;
    }else{
      contact.style.color = `#343A40`;
    }
}

// ======================== TYPING EFFECT ==============================

var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
 
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #ffffff }";
    document.body.appendChild(css);
  };


// ============================ SLIDE ================================== 

// document.addEventListener("DOMContentLoaded", function() {});
function slide(n){
  var slideList = document.querySelector(".Body-slide-content");
  var dot = document.querySelectorAll(".dot");
  for(var i = 0; i < dot.length; i++){
    dot[i].classList.remove('active');
  }
  var sizeScreen = document.documentElement.clientWidth;
  var index = n;
  slideList.style.transform = `translateX(${-index * sizeScreen}px)`;
  dot[n].classList.add('active');
  slideList.style.transition = `all .5s ease`;
}
var n = 0;
function total(){
  n += 1;
  if(n > 3){n = 0;}
  slide(n);
}
setInterval(total,6000);

// ========================= CLICK-NAVBAR ==================================

function Click(){
  document.querySelector(".Header-navbar-list").classList.toggle('Header-navbar-list-click');
}

// ========================= VALIDATE-FORM ==================================

// function Check(){
//   var firstname = document.querySelector("#firstname").value;
//   var lastname = document.querySelector("#lastname").value;
//   var email = document.querySelector("#email").value;
//   var subject = document.querySelector("#subject").value;
//   var message = document.querySelector("#message").value;

//   if(firstname == ""){
//     alert("Bạn chưa nhập Firstname !!");
//   }
//   if(lastname == ""){
//     alert("Bạn chưa nhập Lastname !!");
//   }
//   if(email == ""){
//     alert("Bạn chưa nhập Email !!");
//   }
//   var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
//   if (filter.test(email) === false){
//     alert("Email không hợp lệ, vui lòng nhập lại.");
//   }
//   if(subject == ""){
//     alert("Bạn chưa nhập Subject !!");
//   }
//   if(message == ""){
//     alert("Bạn chưa nhập Message !!");
//   }

//   if(firstname !== "" && lastname !== "" && email !== "" && subject !== "" && message !== "" && filter.test(email) === true){
//     alert("Gửi thành công !! \nCảm ơn bạn ❤.");
//   }
// }
  

var firstname = document.querySelector("#firstname");
var lastname = document.querySelector("#lastname");
var email = document.querySelector("#email");
var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
var subscribe = document.querySelector("#subscribe");

var falseFirstname = document.querySelector("#false-firstname");
var falseLastname = document.querySelector("#false-lastname");
var falseEmail = document.querySelector("#false-email");
var falseSubscribe = document.querySelector("#false-subscribe");

var testFirstname = false;
var testLastname = false;
var testEmail = false;
var testSubscribe = false;


const checkFirstname =()=>{
  if(firstname.value !== ""){
    falseFirstname.style.display = "none";
    testFirstname = true;
  }else{
    falseFirstname.style.display = "block";
    falseFirstname.innerHTML = "* Bạn chưa nhập FirstName";
    testFirstname = false;
  }
}

const checkLastname =()=>{
  if(lastname.value !== ""){
    falseLastname.style.display = "none";
    testLastname = true;
  }else{
    falseLastname.style.display = "block";
    falseLastname.innerHTML = "* Bạn chưa nhập LastName";
    testLastname = false;
  }
}

const checkEmail =()=>{
    if(email.value === ""){
      falseEmail.style.display = "block";
      falseEmail.innerHTML = "* Bạn chưa nhập Email";
      testEmail = false;
    }
    else if(filter.test(email.value.toLowerCase()) === false){
      falseEmail.style.display = "block";
      falseEmail.innerHTML = "* Email không hợp lệ";
      testEmail = false;
    }
    else{
      falseEmail.style.display = "none";
      testEmail = true;
    }
}

const checkSubscribe =()=>{
    if(subscribe.value === ""){
      falseSubscribe.style.display = "block";
      falseSubscribe.innerHTML = "* Bạn chưa nhập Email";
      testSubscribe = false;
    }
    else if(filter.test(subscribe.value.toLowerCase()) === false){
      falseSubscribe.style.display = "block";
      falseSubscribe.innerHTML = "* Email không hợp lệ";
      testSubscribe = false;
    }
    else{
      falseSubscribe.style.display = "none";
      testSubscribe = true;
    }
}

window.addEventListener("keyup", function(){
  if(testFirstname && testLastname && testEmail === true){
    document.querySelector("#submit").classList.add('status-active');
  }else{
    document.querySelector("#submit").classList.remove('status-active');
  }
  if(testSubscribe === true){
    document.querySelector("#send").classList.add('status-active');
  }else{
    document.querySelector("#send").classList.remove('status-active');
  }
})

