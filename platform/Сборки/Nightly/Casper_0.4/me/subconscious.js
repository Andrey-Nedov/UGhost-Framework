	var identificated
	var lang


	var recognition = new webkitSpeechRecognition();
	function language(inp){
    	webkitSpeechRecognition().lang = inp;
    }
	//recognition.lang = "ru";
	recognition.interimResults = true;
	recognition.continuous = false;
	recognition.onresult = function(event) { 

	   for (var i = event.resultIndex; i < event.results.length; ++i) { 
	       identificated = event.results[i][0].transcript;
	       if (event.results[i].isFinal) {
	             console.log("Final sentence is : " + identificated ); 
	             setTimeout(function(){
					recognition.stop();
					onListenEnd(identificated);
				},1500)
	       }else{}
	}
	}

	function listen(){recognition.start()}

	function stop(){
		setTimeout(function(){
			recognition.stop();
		 	//alert(identificated);
		},1500)
	return identificated;
	}

    function say(inp,lang,start,end,h,v,g){
        responsiveVoice.speak(inp, lang, {onstart:start, onend:end, pitch:h, rate:v, volume:g});
    }