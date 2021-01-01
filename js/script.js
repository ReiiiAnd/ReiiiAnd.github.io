function O(i){
			return typeof i == 'object' ? i : document.getElementById(i)
		}

		function S(i){
			return O(i).style
		}

		function C(i){
			return document.getElementByClassName(i)
		}


		var button = O('clck_for_open');

		button.addEventListener("click", function(){
			var i = 0;
			var a = setInterval(function(){
				i+=2;
				var it = 255-i;
				S('body').background = 'rgb(' + it.toString() +','+ it.toString() + ',' + it.toString() + ')';
			}, 1);

			setTimeout(function(){
				clearInterval(a)
			}, 1000)

			S('body').background = 'black'
			S('body').backgroundImage = 'url(img/Background.png)'
			S('Identification').boxShadow = '0px 5px 10px #FF0'
			S('PersonalPage').boxShadow = 'none'
			S('LinkList').visibility = 'visible'
			button.style.display = 'none'

		})

		function GenerateUniverse(){

		}

		var LinkIconVk = O('vk_link')
		var IconVk = S('vk')

		var LinkIconTg = O('tg_link')
		var IconTg = S('tg')

		var LinkIconIn = O('in_link')
		var IconIn = S('in')

		LinkIconVk.addEventListener("click", function(){

			if(IconVk.width === '60px'){
				reDimenObj(IconVk, 60, 20)

				O('LinkTitle').style.display = 'none' 

				LinkIconVk.href = O('LinkTitle').innerHTML ;

				O('LinkTitle').innerHTML = '';

				return
			}

			if(IconIn.width === '60px'){
				reDimenObj(IconIn, 60, 20)
			}

			if(IconTg.width === '60px'){
				reDimenObj(IconTg, 60, 20)
			}
			
			reDimenObj(IconVk, 20, 60)

			O('LinkTitle').style.display = 'block' 

			O('LinkTitle').innerHTML = O('myvk').href

		})

		LinkIconTg.addEventListener("click", function(){

			if(IconTg.width === '60px'){
				reDimenObj(IconTg, 60, 20)
				IconTg.content = 'none'

				
				O('LinkTitle').style.display = 'none' 

				LinkIconTg.href = O('LinkTitle').innerHTML ;

				O('LinkTitle').innerHTML = '';

				return
			}

			if(IconVk.width === '60px'){
				reDimenObj(IconVk, 60, 20)
			}

			if(IconIn.width === '60px'){
				reDimenObj(IconIn, 60, 20)
			}
			
			reDimenObj(IconTg, 20, 60)

			O('LinkTitle').style.display = 'block';

			O('LinkTitle').innerHTML = O('mytg').href
		})

		LinkIconIn.addEventListener("click", function(){

			if(IconIn.width === '60px'){
				reDimenObj(IconIn, 60, 20)
				IconIn.content = 'none'

				O('LinkTitle').style.display = 'none' 

				LinkIconIn.href = O('LinkTitle').innerHTML;

				O('LinkTitle').innerHTML = '';

				return
			}

			if(IconVk.width === '60px'){
				reDimenObj(IconVk, 60, 20)
			}

			if(IconTg.width === '60px'){
				reDimenObj(IconTg, 60, 20)
			}

			reDimenObj(IconIn, 20, 60)

			O('LinkTitle').style.display = 'block' 

			O('LinkTitle').innerHTML = O('myin').href
		})

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

		var buttonT = document.getElementById('check');
		var passwrd = document.getElementById('inwrd');

		buttonT.addEventListener("click", function() {
    		if(passwrd != ''){
    			O('KeyBox').style.boxShadow = '0px 0px 15px #9F5'
    			buttonT.style.display = 'none'
    			passwrd.style.width = '100%'
    			passwrd.disabled = 'true'
    			var linkVk = O('myvk');
    			var nameVk = linkVk.href;
    			linkVk.href = nameVk + decripts(linkVk.innerHTML, passwrd.value);

    			var linkTm = O('mytg');
    			var nameTg = linkTm.href;
    			linkTm.href = nameTg + decripts(linkTm.innerHTML, passwrd.value) + 'ko';

    			var linkIn = O('myin');
    			var nameIn = linkIn.href;
    			linkIn.href = nameIn + decripts(linkIn.innerHTML, passwrd.value);
    		}

  		});
		}

		var LinkIconVk = O('vk_link')
		var IconVk = S('vk')

		var LinkIconTg = O('tg_link')
		var IconTg = S('tg')

		var LinkIconIn = O('in_link')
		var IconIn = S('in')

		LinkIconVk.addEventListener("click", function(){

			if(IconVk.width === '60px'){
				IconVk.width = '20px'
				IconVk.height = '20px'

				O('LinkTitle').style.display = 'none' 

				LinkIconVk.href = O('LinkTitle').innerHTML ;

				O('LinkTitle').innerHTML = '';

				return
			}

			IconVk.width = '60px'
			IconVk.height = '60px'

			IconTg.width = '20px'
			IconTg.height = '20px'

			IconIn.width = '20px'
			IconIn.height = '20px'

			O('LinkTitle').style.display = 'block' 

			O('LinkTitle').innerHTML = O('myvk').href

		})

		LinkIconTg.addEventListener("click", function(){

			if(IconTg.width === '60px'){
				IconTg.width = '20px'
				IconTg.height = '20px'
				IconTg.content = 'none'

				
				O('LinkTitle').style.display = 'none' 

				LinkIconTg.href = O('LinkTitle').innerHTML ;

				O('LinkTitle').innerHTML = '';

				return
			}

			IconVk.width = '20px'
			IconVk.height = '20px'

			IconTg.width = '60px'
			IconTg.height = '60px'

			IconIn.width = '20px'
			IconIn.height = '20px'

			O('LinkTitle').style.display = 'block';

			O('LinkTitle').innerHTML = O('mytg').href
		})

		LinkIconIn.addEventListener("click", function(){

			if(IconIn.width === '60px'){
				IconIn.width = '20px'
				IconIn.height = '20px'
				IconIn.content = 'none'

				O('LinkTitle').style.display = 'none' 

				LinkIconIn.href = O('LinkTitle').innerHTML;

				O('LinkTitle').innerHTML = '';

				return
			}

			IconVk.width = '20px'
			IconVk.height = '20px'

			IconTg.width = '20px'
			IconTg.height = '20px'

			IconIn.width = '60px'
			IconIn.height = '60px'

			O('LinkTitle').style.display = 'block' 

			O('LinkTitle').innerHTML = O('myin').href
		})

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

		var buttonT = document.getElementById('check');
		var passwrd = document.getElementById('inwrd');

		buttonT.addEventListener("click", function() {
    		if(passwrd){
    			O('KeyBox').style.boxShadow = '0px 0px 15px #9F5'
    			buttonT.style.display = 'none'
    			passwrd.style.width = '100%'
    			passwrd.disabled = 'true'
    			var linkVk = O('myvk');
    			var nameVk = linkVk.href;
    			linkVk.href = nameVk + decripts(linkVk.innerHTML, passwrd.value);

    			var linkTm = O('mytg');
    			var nameTg = linkTm.href;
    			linkTm.href = nameTg + decripts(linkTm.innerHTML, passwrd.value) + 'ko';

    			var linkIn = O('myin');
    			var nameIn = linkIn.href;
    			linkIn.href = nameIn + decripts(linkIn.innerHTML, passwrd.value);
    		}

  		});
