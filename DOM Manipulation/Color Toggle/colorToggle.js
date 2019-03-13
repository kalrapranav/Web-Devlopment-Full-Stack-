var b = document.querySelector("button");
var isPurple = false;


b.addEventListener("click",function(){
	document.body.classList.toggle("purple");
});

// b.addEventListener("click", function(){
// 	if (isPurple) {
// 		document.body.style.background = "white";
// 	}else{
// 		  document.body.style.background = "purple";

// 	}
// 	isPurple = !isPurple;
// });