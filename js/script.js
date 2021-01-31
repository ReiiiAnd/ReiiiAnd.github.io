var 
	ACTIVE_BUTTON = 0;


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
			if(ACTIVE_BUTTON == 2){
				ACTIVE_BUTTON = 1;
				finishModification();
				setTimeout(function(){
					ACTIVE_BUTTON = 0;
				}, 2000)
				return;
			}
			if(ACTIVE_BUTTON == 0){
				ACTIVE_BUTTON = 1;
				firstModification();
				setTimeout(function(){
					secondModification();
					ACTIVE_BUTTON = 2;
				}, 1000)
				return;
			}


		})

		function digObj(i, trigger, max){
			if(i >= trigger){
				return (i-trigger)*max/(200-trigger)
			}
		}

		function difMin(first, second){
			if(first>second)return second;
			return first;
		}

		function firstModification(){
			var i = 0;
			S('imageCircle').width = 0 + 'px';
				S('imageCircle').height = 0 + 'px';
				for(var temp = 1; temp < 8; ++temp){
					var id_obj = 'object' + temp
					S('object' + temp).width = 0 + 'px'//digObj(i, 20*(7-temp+1), dimentionSystem) + 'px';
					S('object' + temp).height = 0 + 'px'//digObj(i, 20*(7-temp+1), dimentionSystem) + 'px';
				}
			S('imageCircle').display = 'block';
			var dimentionSystem = difMin(window.innerHeight, window.innerWidth);
			var a = setInterval(function(){
				i+=2;
				S('imageCircle').width = digObj(i, 0, dimentionSystem) + 'px';
				S('imageCircle').height = digObj(i, 0, dimentionSystem) + 'px';
				for(var temp = 1; temp < 8; ++temp){
					var id_obj = 'object' + temp
					S('object' + temp).width = digObj(i, 0, dimentionSystem) + 'px'//digObj(i, 20*(7-temp+1), dimentionSystem) + 'px';
					S('object' + temp).height = digObj(i, 0, dimentionSystem) + 'px'//digObj(i, 20*(7-temp+1), dimentionSystem) + 'px';
				}
				S('body').background = 'rgb(' + Number(255-i) +','+ Number(255-i) + ',' + Number(255-i) + ')';
				if(i<40){
					S('volume').background = 'rgb(' + Number(15 + i*6) +','+ Number(15 + i*6) + ',' + Number(15 + i*6) + ')';
					S('volume').border = 'none'
					S('volume').boxShadow =  '0px 0px '+ i/4 +'px rgb(' + Number(i*6) +','+ Number(i*6) + ',' + Number(i*6) + ')';
				}
			}, 10);

			setTimeout(function(){
				clearInterval(a)
				object1.classList.add('animate');
				object2.classList.add('animate');
				object3.classList.add('animate');
				object4.classList.add('animate');
				object5.classList.add('animate');
				object6.classList.add('animate');
				object7.classList.add('animate');
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
			var parentWidth = S('imageCircle').width;
		
			var b = setInterval(function(){
				i+=2;
				if(i<=200){
					S('body').background = 'rgb(' + Number(55+i) +','+ Number(55+i) + ',' + Number(55+i) + ')';
				}
				if(i<40){
					S('volume').background = 'rgb(' + Number(255 - i*6) +','+ Number(255 - i*6) + ',' + Number(255 - i*6) + ')';
					S('volume').border = 'none'
					S('volume').boxShadow =  'none';
				}

				parentWidth = parentWidth.replace(/px/gi, '');
				console.log(parentWidth);
				var dimen = Number(parentWidth) - i*2;
				S('imageCircle').width = dimen + 'px';
				S('imageCircle').height = dimen + 'px';
				for(var temp = 1; temp < 8; ++temp){
					S('object' + temp).width = dimen + 'px'//digObj(i, 20*(7-temp+1), dimentionSystem) + 'px';
					S('object' + temp).height = dimen + 'px'//digObj(i, 20*(7-temp+1), dimentionSystem) + 'px';
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