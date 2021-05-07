var yousay = new Array(10000)
var isay = new Array(10000)
var count=1
var chik=false
var i
var num=0

	for(i=1; i==10000; i++){
		yousay[i]=0
		isay[i]=0
	}

	function go(){hear()}

	function onHearEnd(inn){

	//sp('user:'+inn)

		if(chik==false){
			for(i=1; i<10000; i++){
				if(yousay[i]==inn){num=i}
			}

			if(num==0){
				//sp('bot:Что мне нужно ответить?');
				tell('Что мне нужно ответить?')
				chik=true
				yousay[count]=inn
				hear()
			}else{
				//sp('bot:'+isay[num])
				tell(isay[num])
				hear()
				num=0
			}
		}

		else

		{
			isay[count]=inn
			//sp('bot:Запомнила')
			tell('Запомнила')
			hear()
			chik=false
			count++
		}
	}

	function sp(inp){
		var span = document.createElement('span');
	    span.appendChild(document.createTextNode(inp));

	    var br = document.createElement('br');

	    document.getElementById('answers').appendChild(br);
	    var list = document.getElementById("answers");
    	list.insertBefore(br, list.childNodes[0]);

	    document.getElementById('answers').appendChild(span);
	    var list = document.getElementById("answers");
    	list.insertBefore(span, list.childNodes[0]);
	}