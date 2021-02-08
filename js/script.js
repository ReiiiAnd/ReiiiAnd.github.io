function O(i){
	return typeof i == 'object' ? i : document.getElementById(i)
}

function S(i){
	return O(i).style
}

function C(i){
	return document.getElementByClassName(i)
}

function difMin(first, second){
	if(first > second)return second;
	return first;
}

function difMax(first, second){
	if(first < second)return second;
	return first;
}

//-- Canvas --//



//-- Animation --//
function loadPage(){
	var 
		pageStyle = S('myPage');
		spaceStyle = S('backgroundSpace');
		spaceImageStyle = S('imageSpace');
		imageDimen = difMax(window.innerHeight,window.innerWidth) / 9;
		planetSystemStyle = S('planetSystem');

	pageStyle.width = window.innerWidth+'px';
	pageStyle.height = difMax(window.innerHeight,540)+'px';
	spaceStyle.width = window.innerWidth+'px';
	spaceStyle.height = window.innerHeight+'px';
	spaceImageStyle.width = imageDimen*16 + 'px'
	spaceImageStyle.height = imageDimen*9 + 'px'
	planetSystemStyle.height = difMax(window.innerHeight*0.8,540) + 'px';
}



loadPage();

var 
	ACTIVE_BUTTON = 0,
	ACTIVE_LINKS = 0,
	dim = 0,
	deg = 0,
	stop = 0;

var start_button = O('clckForOpen');
var eye_button = O('clckForLook');

start_button.addEventListener("click", function(){

	if(ACTIVE_BUTTON == 2){
		ACTIVE_BUTTON = 1;
		prepareFinishModification();
		finishModification();
		return;
	}
	if(ACTIVE_BUTTON == 0){
		ACTIVE_BUTTON = 1;
		alternativeFirstModification();
		return;
	}
})

		//var deg = 0;

function opacityLinks(i){
	var opacity = 1 - i/100;
	var linkZone = S('linksPlace');
	if(ACTIVE_LINKS == 0){

		if(opacity > 0.1){
			linkZone.opacity = opacity
		}
		else{
			linkZone.opacity = 0
			linkZone.display = 'none'
		}
	}
	else{
		opacity = i/100

		if(opacity < 0.9){
			linkZone.opacity = opacity
		}
		else{
			linkZone.opacity = 1
		}
	}
}

		function go(id){
			var linkZone = S('linksPlace');
  			var id = setInterval(rotate, 20);
  			if(ACTIVE_LINKS == 0){
	  				dim = 0;
	  				ACTIVE_LINKS = 2;
	  				stop = 1
	  				linkZone.opacity = 0
	  				linkZone.display = 'block'
	  		}
	  		else{
	  				dim = 180;
	  				ACTIVE_LINKS = 0;
	  				stop = 1
	  		}

	  		function rotate(){
	    		O('eyeButton').style.WebkitTransform = "rotate("+ Number(dim + deg)+"deg)";
	    		linkZone.opacity = deg/300;
	    		deg = deg + 3;
	    		opacityLinks(deg)

	    		if(deg == 180){
	    			clearInterval(id);
	    			deg = 0;
	    			if(ACTIVE_LINKS == 0){
	  					O('eyeButton').style.WebkitTransform = "rotate(0deg)";
	  					linkZone.display = 'none'
	  				}
	  				else{
	  					O('eyeButton').style.WebkitTransform = "rotate(180deg)";
	  					linkZone.opacity = 1
	  				}
	    
	    			stop = 0;
	    		}
	  		};
	  	};

eye_button.onclick = function(){
	if(stop == 0) go();
}

function digObj(i, trigger, max){
	if(i >= trigger){
		return (i-trigger)*max/(200-trigger)
	}
}

function alternativeFirstModification(){
	var 
		counter = 0
		interval = 20
		parentStyle = S('imageCircle')

		bodyStyle = S('body')
		volumeStyle = S('volume')
		titleStyle = S('title')
		orbitStyle = Array()
		dimentionSystem = difMin(difMin(window.innerHeight, window.innerWidth), 540)

	parentStyle.width = 0 + 'px';
	parentStyle.height = 0 + 'px';
	for(var temp = 1; temp < 8; ++temp){
		orbitStyle[temp] = S('object' + temp)
		orbitStyle[temp].width = 0 + 'px';
		orbitStyle[temp].height = 0 + 'px';
	}

	parentStyle.display = 'block';


	volumeStyle.border = 'none';
	var
		orbitalsArt = false
		gradientArt = false
		buttonArt = false
		titleArt = false
		triangleArt = false

	cinema = setInterval(function(){
		counter+=4;

		//intoducing planets System
		var
			dimenParent = digObj(counter, 0, dimentionSystem)/1.42;
		if(dimenParent>=dimentionSystem/1.42 && orbitalsArt == false){
			parentStyle.width = dimentionSystem/1.42 + 'px';
			parentStyle.height = dimentionSystem/1.42 + 'px';

			for(var temp = 1; temp < 8; ++temp){
				orbitStyle[temp].width =  dimentionSystem/1.42 + 'px';
				orbitStyle[temp].height =  dimentionSystem/1.42 + 'px';
			}
			orbitalsArt = true;
		}
		
		if(orbitalsArt == false){
			parentStyle.width = dimenParent + 'px';
			parentStyle.height = dimenParent + 'px';

			for(var temp = 1; temp < 8; ++temp){
				orbitStyle[temp].width =  dimenParent + 'px';
				orbitStyle[temp].height =  dimenParent + 'px';
			}
		}

		//altering background color
		var
			backgroundColor = 255 - counter;
		if(backgroundColor <= 40 && gradientArt == false){
			bodyStyle.background = 'rgb(40,40,40)'
			gradientArt = true;
		}
		if(gradientArt == false){
			bodyStyle.background = 'rgb(' + backgroundColor +','+ backgroundColor + ',' + backgroundColor + ')';
		}

		//correcting button style
		var
			buttonColor = 15 + counter*6
			shadowColor = counter*6
			shadowDimen = counter/4
		if(counter >= 40 && buttonArt == false){
			volumeStyle.background = 'rgb(255,255,255)'
			volumeStyle.boxShadow = '0px 0px 10px rgb(240,240,240)'
			buttonArt = true;
		}
		if(buttonArt == false){
			volumeStyle.background = 'rgb(' + buttonColor +','+ buttonColor + ',' + buttonColor + ')';
			volumeStyle.boxShadow = '0px 0px '+ shadowDimen +'px rgb(' + shadowColor +','+ shadowColor + ',' + shadowColor + ')';
		}

		//skip title
		var 
			opacity = (100 - counter/2)/100
		if(opacity <= 0.1 && titleArt == false){
			titleStyle.opacity = 0.0
			titleStyle.display = 'none'
			titleArt = true;
		}

		if(titleArt == false){
			titleStyle.opacity = opacity
		}

		var pct = counter/200
		if(pct < 0.9)
			spaceStyle.opacity = pct; 
		else
			spaceStyle.opacity = 1;

		if(orbitalsArt && gradientArt && buttonArt){
			console.log(1);
			clearInterval(cinema);
			counter = 0;
			orbitalsArt = false
			gradientArt = false
			buttonArt = false

			secondModification();
			ACTIVE_BUTTON = 2;
		}


	}, interval)
}

function secondModification(){
		var 
			counter = 0,
			volumeObj = O('volume'),
			triangleParentStyle = S('middleTB'),
			triangleStyle = S('eyeButton');

		triangleParentStyle.opacity = 0;
		S('triangleButtonShell').display = 'block'

		var introOfButton = setInterval(function(){
			counter+=2
			var
				md_opacity = counter/100,
				md_dimention = 60 + counter,
				md_const_dimen = 240;

			if(md_dimention == 120 && triangleArt == false){
				triangleParentStyle.opacity = 1;
				triangleArt = true;
			}

			if(triangleArt == false){
				if(md_opacity < 100)
					triangleParentStyle.opacity = md_opacity;
			}

			if(triangleArt == true){
				clearInterval(introOfButton);
			}

		}, 10)

		volumeObj.classList.add('animate-button-shadow');

}

function finishModification(){
	var parentWidth = S('imageCircle').width;
	var titleStyle = S('title')
	var 
		it = 0,
		bodyStyle = S('body'),			
		spaceStyle = S('backgroundSpace'),
	    circleStyle = S('imageCircle')

	O('volume').classList.remove('animate-button-shadow')
	titleStyle.display = 'block'

	var
		opacityArt = false,
		backgroundArt = false,
		dimentionArt = false;

	var c = setInterval(function(){
		it+=4;
		cN = 55 + it
		csN = 255 - it*6

		if(it<=200){
			bodyStyle.background = 'rgb(' + cN +','+ cN + ',' + cN + ')';
		}
		else{
			backgroundArt = true;
		}
		if(it<40){
			volumeStyle.background = 'rgb(' + csN +','+ csN + ',' + csN + ')';
		}

		var opacity = it/100;
		var pct = 1 - opacity;

		if(opacity > 0.9){
			opacityArt = true;
		}
		else{
			titleStyle.opacity = opacity;
			spaceStyle.opacity = pct; 
		}


		parentWidth = parentWidth.replace(/px/gi, '');
		var dimen = Number(parentWidth) - it*2;
		if(dimen < 40){
			dimentionArt = true;
		}

		if(dimentionArt == false){
			circleStyle.width = dimen + 'px';
			circleStyle.height = dimen + 'px';
			for(var temp = 1; temp < 8; ++temp){
				S('object' + temp).width = dimen + 'px'//digObj(i, 20*(7-temp+1), dimentionSystem) + 'px';
				S('object' + temp).height = dimen + 'px'//digObj(i, 20*(7-temp+1), dimentionSystem) + 'px';
			}
		}

		if(opacityArt && dimentionArt && backgroundArt){
			clearInterval(c);
			ACTIVE_BUTTON = 0;
			titleStyle.opacity = 1;
			spaceStyle.opacity = 0; 
			bodyStyle.background = 'rgb(255,255,255)'
			volumeStyle.boxShadow = 'none'
			volumeStyle.background = 'rgb(5,5,5)';
			titleStyle.opacity = 1;
			circleStyle.display = 'none';
		}

	}, 20);
}

function prepareFinishModification(){
	var i = 0;
	var triangleStyle = S('middleTB')
	
	if(ACTIVE_LINKS == 2){
		ACTIVE_LINKS = 0;
	}

	var
		opacityArt = false;

	var b = setInterval(function(){
		i+=4;

		var opacity = 1 - i/100;


		if(opacity <= 0.1){
			opacityArt = true;
		}

		else{
			triangleStyle.opacity = opacity;
		}

		if(ACTIVE_LINKS == 0){
			opacityLinks(i);
		}

		if(opacityArt){
			clearInterval(b)
			triangleStyle.opacity = 0;
			S('triangleButtonShell').display = 'none'
			O('eyeButton').style.WebkitTransform = "rotate(0deg)";
			return;
		}
	}, 20);
}




//-- ARCHIVE --//
/*
		function recovery(){
			var i

		}

		function getRandomInt(min, max) {
  			return Math.floor(Math.random() * (max - min)) + min;
		}

		function CreateEyeButton(){

			var EyeButton = document.createElement('img')
			EyeButton.id = 'eye_button'
			EyeButton.className = 'TwoButton'
			document.getElementById('personalPage').appendChild(EyeButton)

			S(EyeButton).position = 'absolute'
			S(EyeButton).width = '2px'
			S(EyeButton).height = '1px'
			S(EyeButton).display = 'none'

			return EyeButton	
		}


		function CreateStar(count, top, left){

			var newStar = document.createElement('div')
			newStar.id = 'star' + count
			newStar.className = 'Star'
			document.getElementById('personalPage').appendChild(newStar)

			S(newStar).position = 'absolute'
			S(newStar).top = top + 'px'
			S(newStar).left = left + 'px'


			return newStar
		}



		var array_x = new Array();
		var array_y = new Array();

		function GenerateUniverse(){
			

			for(var i=0;i<16;++i){
				const pageWidth = document.documentElement.scrollWidth
				const pageHeight = document.documentElement.scrollHeight
				var top = getRandomInt(100, pageHeight);
				var left = getRandomInt(0, pageWidth);

				array_x[i] = left;
				array_y[i] = top;

				CreateStar(i, top, left)
			}
		}

		function decripts(word, key){
			var fri = new String("");
			var Mask= new String(key);
			var i=0;
			var j=0;
			for(i=0;i<word.length;i++)
					{
					var c=word.charAt(i);

					var com = c.charCodeAt(0)^Mask.charCodeAt(j);
					c = String.fromCharCode(com);
					//if(c=='\\') fri+='\\';
					fri += c;
					if(j==Mask.length-1)j=0; else j++;
					}
			return fri;
		}

		function reDimenObj(style_obj, start_len, final_len){
			var i = 0;
			var znak = 1;
			if(start_len > final_len)
				znak = -1;
			var interval = setInterval(function(){
				if(i != (final_len - start_len)*znak){
					if(start_len > final_len){
						i--;
					}
					else{
						i++;
					}
				}
				style_obj.width = start_len + i + 'px';
				style_obj.height = start_len + i + 'px';
				console.log(style_obj.width);
			}, 5)

			setTimeout(function(){
				style_obj.width = final_len + 'px';
				style_obj.height = final_len + 'px';
				console.log('ok');
				clearInterval(interval)
			},400)
		}*/