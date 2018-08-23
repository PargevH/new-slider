var src = ["img/a1.jpeg", "img/a2.jpeg", "img/a3.jpg", "img/a4.jpeg", "img/a5.jpg", "img/bmw1.jpg", "img/bmw2.jpg", "img/bmw3.jpg", "img/bmw4.jpg", "img/bmw5.jpg"];
var index = 0;
document.getElementById("img").src = src[0];

var miniSlider = "";
var i;
for (i = 0; i < src.length; i++){
	miniSlider += "<div class='div_img'><img src='" + src[i] + "' class='img_1' onclick='change_img("+i+")'></div>";
};
document.getElementById("mini_slider").innerHTML = miniSlider;

function next(){
	if(index == src.length-1){
//	document.getElementById("next").style.opacity = "0.5";	
		return
	}
	index++;
	document.getElementById("img").src = src[index];
}

function prev(){
	if (index == 0) {
//	document.getElementById("prev").style.opacity = "0.5";
		return
	}
	index--;
	document.getElementById("img").src = src[index];

}

function change_img(img_index){
	document.getElementById("img").src = src[img_index];
//	var x = document.getElementById("mini_slider_big");
//  x.getElementsByClassName("img_1")[img_index].style.opacity = "1";
	index = img_index;
};

function next_mini(){
	if(index == src.length-1){

//	document.getElementById("next_1").style.opacity = "0.5";	
		return
	}
	index++;
	document.getElementById("img").src = src[index];
//	document.getElementById("mini_slider").style.left = "-100px";
}

function prev_mini(){
	if (index == 0) {
//	document.getElementById("prev_1").style.opacity = "0.5";	
		return
	}
	index--;
	document.getElementById("img").src = src[index];
}