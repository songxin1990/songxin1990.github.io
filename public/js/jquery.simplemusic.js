(function($){
	/*; 
		simpler music player
	*/
	var _playstatus = false;
	var _palyInterval;
	var n=0;
	var urls = [
				"http://7xnlfe.com1.z0.glb.clouddn.com/Lost.mp3",
				"http://7xnlfe.com1.z0.glb.clouddn.com/ElDorado.mp3",
				"http://7xnlfe.com1.z0.glb.clouddn.com/PerfectCircle.mp3",
				"http://7xnlfe.com1.z0.glb.clouddn.com/Sunrise.mp3",
				"http://7xnlfe.com1.z0.glb.clouddn.com/ViolinConcerto.mp3"
		];

	$.fn.simplemusic=function(settings){
		$(this).css({"z-index":"999","width":"44px","height":"44px","position":"fixed","bottom":"10px","right":"10px","cursor":"pointer","background":"url(http://7xnlfe.com1.z0.glb.clouddn.com/o_music_note_big.png)"}).bind("click",function(){
			
			if(_playstatus){
				pause(this);
			}else{
				play(this);
			}
		});
		var audio = document.createElement("audio");
		$(audio).attr("id","audioPlayer").css("display","none").prependTo(this);
		
		if(settings.loop && settings.loop==true){ $(audio).attr("loop","loop");}
		
		if(urls && urls instanceof Array){
			//var musLen = urls.length - 1;
			//var musId = parseInt(Math.random()*musLen);
			//var source = document.createElement("source");
			//$(source).attr("src",urls[musId]).appendTo($(audio));
			
			
		}
		//当一首歌结束时，
		$("#audio").attr("onended","javascript:
				++musId;
				$(source).attr("src",urls[i]).appendTo($(audio));");

		if(settings.autoplay&&settings.autoplay == true){$(this).click();}
	};

	function play(e){
		_palyInterval = setInterval(function(){
			startRotate(e);
		},10);
		$("#audioPlayer")[0].play();
		_playstatus=true;
	}

	function pause(e){
		$("#audioPlayer")[0].pause();
		clearInterval(_palyInterval);
		_playstatus=false;	
	}

	function startRotate(e){
		n=n+1;
		e.style.transform="rotate(" + n + "deg)";
		e.style.webkitTransform="rotate(" + n + "deg)";
		e.style.OTransform="rotate(" + n + "deg)";
		e.style.MozTransform="rotate(" + n + "deg)";
		e.style.opacity = Math.abs(n/360-0.5)+0.5+"";
		if (n==360){n=0}
	}

})(jQuery);