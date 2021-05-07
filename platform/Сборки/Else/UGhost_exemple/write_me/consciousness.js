var yousay = new Array(10000)
var isay = new Array(10000)
var count=1
var chik=false
var i
var num=0
var an=false

	language("ru");

	for(i=1; i==10000; i++){
		yousay[i]=0
		isay[i]=0
	}

	function go(){
		listen()
		anim()
	}

	function gow(){
		listen()
		anim()
		sp('Что мне нужно ответить?')
	}

	function goz(){
		listen()
		anim()
		sp('Запомнила')
	}

	function gos(){
		listen()
		anim()
		sp(isay[num])
		num=0
	}

	function startuem(){
		setTimeout(function(){
			go()
			document.getElementById('start').style.display='none'
		},100)
	}

	function onListenEnd(inn){

		sp('user: '+inn)

		if(chik==false){
			for(i=1; i<10000; i++){
				if(yousay[i]==inn){num=i}
			}

			if(num==0){
				//sp('bot:Что мне нужно ответить?');
				say('Что мне нужно ответить?', "Russian Female", anim,gow,1.1,1.1,1)
				chik=true
				yousay[count]=inn
			}else{
				//sp('bot:'+isay[num])
				say(isay[num], "Russian Female", anim,gos,1.1,1.1,1)
			}
		}

		else

		{
			isay[count]=inn
			//sp('bot:Запомнила')
			say('Запомнила', "Russian Female", anim,goz,1.1,1.1,1)
			chik=false
			count++
		}
	}

	function sp(inp){
		var span = document.createElement('span');
		span.className="span"
	    span.appendChild(document.createTextNode(inp));

	    var br = document.createElement('br');

	    document.getElementById('answers').appendChild(br);
	    var list = document.getElementById("answers");
    	list.insertBefore(br, list.childNodes[0]);

	    var br2 = document.createElement('br');

	    document.getElementById('answers').appendChild(br2);
	    var list = document.getElementById("answers");
    	list.insertBefore(br2, list.childNodes[0]);

	    var br3 = document.createElement('br');

	    document.getElementById('answers').appendChild(br3);
	    var list = document.getElementById("answers");
    	list.insertBefore(br3, list.childNodes[0]);

	    document.getElementById('answers').appendChild(span);
	    var list = document.getElementById("answers");
    	list.insertBefore(span, list.childNodes[0]);
	}

	function anim(){
		if(an==false){
			document.getElementById('video').style.display='block';
			document.getElementById('zag').style.display='none';
			an=true
		}else{
			document.getElementById('video').style.display='none';
			document.getElementById('zag').style.display='block';
			an=false
		}
	}