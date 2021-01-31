var 
	ACTIVE_BUTTON = false;


		function O(i){
			return typeof i == 'object' ? i : document.getElementById(i)
		}

		function S(i){
			return O(i).style
		}

		function C(i){
			return document.getElementByClassName(i)
		}

//-- Canvas --//

//-- Animation --//

		var start_button = O('clckForOpen');

		start_button.addEventListener("click", function(){
			if(ACTIVE_BUTTON == true){
				finishModification();
				ACTIVE_BUTTON = false;
				return;
			}
			if(ACTIVE_BUTTON == false){
				firstModification();
				setTimeout(function(){
					secondModification();
				}, 1000)
				ACTIVE_BUTTON = true;
				return;
			}


		})

		function digObj(i, trigger, max){
			if(i >= trigger){
				return (i-trigger)*max/(200-trigger)
			}
		}

		function firstModification(){
			var i = 0;
			S('imageCircle').display = 'block';
			var dimentionSystem = 400;
			var a = setInterval(function(){
				i+=2;
				//for(var temp = 1; temp < 8; ++temp){
					//var id_obj = 'object' + temp
					//S('object' + temp).width = digObj(i, 20*(7-temp+1), dimentionSystem) + 'px';
					//S('object' + temp).height = digObj(i, 20*(7-temp+1), dimentionSystem) + 'px';
				//}
				S('body').background = 'rgb(' + Number(255-i) +','+ Number(255-i) + ',' + Number(255-i) + ')';
				//S('Identification').boxShadow = '0px 0px 10px rgba(' + Number(55 + i) + ',' + Number(55 + i) + ',' + Number(55 - i/4) +','+0.9+')'
				if(i<40){
					S('volume').background = 'rgb(' + Number(15 + i*6) +','+ Number(15 + i*6) + ',' + Number(15 + i*6) + ')';
					S('volume').border = 'none'
					S('volume').boxShadow =  '0px 0px '+ i/4 +'px rgb(' + Number(i*6) +','+ Number(i*6) + ',' + Number(i*6) + ')';
				}
			}, 10);

			setTimeout(function(){
				clearInterval(a)
			}, 1000)
		}

		var animationButton;

		function secondModification(){
				var arcsin = 0;
					animationButton = setInterval(function(){
					arcsin++;
					if(arcsin == 18){
						arcsin = 0;
					}

					var num = arcsin - 9;
					S('volume').boxShadow = '0px 0px ' + Number(5 + num*num/10) + 'px rgb(240,240,240)';
				}, 100);
			
		}

		function finishModification(){
			var i = 0;
			var b = setInterval(function(){
				i+=2;
				if(i<=200){
					S('body').background = 'rgb(' + Number(55+i) +','+ Number(55+i) + ',' + Number(55+i) + ')';
				}
				//S('Identification').boxShadow = '0px 0px 10px rgba(' + Number(55 + i) + ',' + Number(55 + i) + ',' + Number(55 - i/4) +','+0.9+')'
				if(i<40){
					S('volume').background = 'rgb(' + Number(255 - i*6) +','+ Number(255 - i*6) + ',' + Number(255 - i*6) + ')';
					S('volume').border = 'none'
					S('volume').boxShadow =  'none';
				}
			}, 10);

			setTimeout(function(){
				clearInterval(animationButton)
				clearInterval(b)
				S('imageCircle').display = 'none';
				S('volume').background = 'rgb(5,5,5)';
			}, 1000)
		}




//-- ARCHIVE --//

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
		}