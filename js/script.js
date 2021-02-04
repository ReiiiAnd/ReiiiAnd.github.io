var 
	ACTIVE_BUTTON = 0;
	ACTIVE_LINKS = 0;
	dim = 0;
	deg = 0;
	stop = 0;


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
		var pageStyle = S('myPage');
		pageStyle.width = window.innerWidth+'px';
		pageStyle.height = window.innerHeight+'px';

		var start_button = O('clckForOpen');
		var eye_button = O('clckForLook');

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
				alternativeFirstModification();
				setTimeout(function(){
					secondModification();
					ACTIVE_BUTTON = 2;
				}, 2000)
				return;
			}


		})


		function rotateButton(deg){
			var i;
			var k = setInterval(function(){
				i+=1;
				if(i<deg*2){
					S('eyeButton').transform = 'rotate('+ i/2 +'deg)';
				}


			}, 10)
			setTimeout(function(){
				clearInterval(k)
			}, 1000)
		}

		//var deg = 0;

		function go(id){
			console.log('1');
  			var id = setInterval(rotate, 20);
  			if(ACTIVE_LINKS == 0){
	  				dim = 0;
	  				ACTIVE_LINKS = 2;
	  				stop = 1
	  				S('linksPlace').opacity = 0
	  				S('linksPlace').display = 'block'
	  		}
	  		else{
	  				dim = 180;
	  				ACTIVE_LINKS = 0;
	  				stop = 1
	  		}

	  		function opacityLinks(i){
	  			var opacity
	  			if(ACTIVE_LINKS == 0){
	  				opacity = 1 - i/100
	  				if(opacity > 0.1){
	  					S('linksPlace').opacity = opacity
	  				}
	  				else{
	  					S('linksPlace').opacity = 0
	  				}
	  			}
	  			else{
	  				opacity = i/100

	  				if(opacity < 0.9){
	  					S('linksPlace').opacity = opacity
	  				}
	  				else{
	  					S('linksPlace').opacity = 1
	  				}
	  			}
	  		}

	  		function rotate(){
	    		O('eyeButton').style.WebkitTransform = "rotate("+ Number(dim + deg)+"deg)";
	    		S('linksPlace').opacity = deg/300;
	    		deg = deg + 3;
	    		opacityLinks(deg)

	    		if(deg == 180){
	    			clearInterval(id);
	    			deg = 0;
	    			if(ACTIVE_LINKS == 0){
	  					O('eyeButton').style.WebkitTransform = "rotate(0deg)";
	  					S('linksPlace').display = 'none'
	  				}
	  				else{
	  					O('eyeButton').style.WebkitTransform = "rotate(180deg)";
	  					S('linksPlace').opacity = 1
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

		function difMin(first, second){
			if(first>second)return second;
			return first;
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

			var	cinema = setInterval(function(){
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




				}, interval)

			if(orbitalsArt && gradientArt && buttonArt){
				clearInterval(cinema);
				counter = 0;
				orbitalsArt = false
				gradientArt = false
				buttonArt = false
			}

			setTimeout(function() {
				clearInterval(cinema);
			}, 2000)
		}

		function tempSecondModification(){
			var
				counter = 0;
				liner
		}

		var animationButton;
		function secondModification(){
				var 
					arcsin = 0
					counter = 0
					volumeStyle = S('volume')
					triangleParentStyle = S('middleTB')
					triangleStyle = S('eyeButton')
					cloudsStyle = S('clouds')

				/*triangleParentStyle.width = '60px';
				triangleParentStyle.height = '60px';
				triangleStyle.width = '60px'
				triangleStyle.height = '60px'
				cloudsStyle.width = '60px'
				cloudsStyle.height = '30px'*/

				triangleParentStyle.opacity = 0;
				S('triangleButtonShell').display = 'block'

				var introOfButton = setInterval(function(){
					counter+=2
					var
						md_opacity = counter/100
						md_dimention = 60 + counter
						md_const_dimen = 240

					if(md_dimention == 120 && triangleArt == false){
						//triangleParentStyle.width = md_const_dimen + 'px'
						//triangleParentStyle.height = md_const_dimen + 'px'
						triangleParentStyle.opacity = 1

						//triangleStyle.width = md_const_dimen + 'px'
						//triangleStyle.height = md_const_dimen + 'px'

						//cloudsStyle.width = md_const_dimen + 'px'
						//cloudsStyle.height = md_const_dimen/2 + 'px'

						triangleArt = true;
					}

					if(triangleArt == false){
						//triangleParentStyle.width = md_dimention +'px'
						//triangleParentStyle.height = md_dimention +'px'
						if(md_opacity < 100)
							triangleParentStyle.opacity = md_opacity

						//triangleStyle.width = md_dimention + 'px'
						//triangleStyle.height = md_dimention + 'px'

						//cloudsStyle.width = md_dimention + 'px'
						//cloudsStyle.height = md_dimention/2 + 'px'


					}
				}, 10)
				animationButton = setInterval(function(){
					arcsin++;
					if(arcsin == 18){
						arcsin = 0;
					}

					var num = arcsin - 9;
					volumeStyle.boxShadow = '0px 0px ' + Number(5 + num*num/10) + 'px rgb(240,240,240)';
				}, 100);

		}

		function finishModification(){
			var i = 0;
			var parentWidth = S('imageCircle').width;
			var titleStyle = S('title')
			var triangleStyle = S('middleTB')
			titleStyle.display = 'block'
		
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

				var opacity = i/100;
				if(opacity >= 0.9){
					titleStyle.opacity = 1;
				}

				else{
					titleStyle.opacity = opacity;
				}


				if(1-opacity <= 0.1){
					triangleStyle.opacity = 0;
				}

				else{
					triangleStyle.opacity = 1 - opacity;
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
				S('title').opacity = 1;
				S('body').background = 'rgb(255, 255, 255)';
				S('imageCircle').display = 'none';
				S('volume').background = 'rgb(5,5,5)';
				S('volume').boxShadow = 'none';
				S('triangleButtonShell').display = 'none'
				O('eyeButton').style.WebkitTransform = "rotate(0deg)";
	  			S('linksPlace').display = 'none'
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