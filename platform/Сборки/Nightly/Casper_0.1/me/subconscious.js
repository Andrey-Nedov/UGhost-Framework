	var identificated

	var recognition = new webkitSpeechRecognition();
	recognition.interimResults = true;
	recognition.continuous = false;
	recognition.onresult = function(event) { 

	   for (var i = event.resultIndex; i < event.results.length; ++i) { 
	       identificated = event.results[i][0].transcript;
	       if (event.results[i].isFinal) {
	             console.log("Final sentence is : " + identificated ); 
	             setTimeout(function(){
					recognition.stop();
					onHearEnd(identificated);
				},1500)
	       }else{}
	}
	}

	function hear(){recognition.start()}

	function stop(){
		setTimeout(function(){
			recognition.stop();
		 	//alert(identificated);
		},1500)
	return identificated;
	}

    function tell(inp){
      /*var text = document.getElementById('in')
      var vys = document.getElementById('vys')
      var sk = document.getElementById('sk')
      var vol = document.getElementById('vol')*/
        responsiveVoice.speak(inp, "Russian Female");
    }