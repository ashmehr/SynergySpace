function join_workspace(post)
{
	var request;
	if(window.XMLHttpRequest)
	{
		request = new XMLHttpRequest();
	}
	else
	{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}

	request.onreadystatechange = function()
  	{
	  	if(request.readyState == 4 && request.status == 200)
	    {
	    	var response = request.responseText;

	    	var parser=new DOMParser();
			var htmlDoc=parser.parseFromString(response, "text/html");

	    	document.body.innerHTML = htmlDoc.body.innerHTML;
	    }
  	}

	request.open("GET","/posts/" + post + "/join",true);
	request.send();
}

function like_post(post)
{
	var request;
	if(window.XMLHttpRequest)
	{
		request = new XMLHttpRequest();
	}
	else
	{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}

	request.onreadystatechange = function()
  	{
	  	if(request.readyState == 4 && request.status == 200)
	    {
	    	var response = request.responseText;

	    	var parser=new DOMParser();
			var htmlDoc=parser.parseFromString(response, "text/html");

	    	document.body.innerHTML = htmlDoc.body.innerHTML;
	    }
  	}

	request.open("GET", "/posts/" + post + "/like", true);
	request.send();
}

function dislike_post(post)
{
	var request;
	if(window.XMLHttpRequest)
	{
		request = new XMLHttpRequest();
	}
	else
	{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}

	request.onreadystatechange = function()
  	{
	  	if(request.readyState == 4 && request.status == 200)
	    {
	    	var response = request.responseText;

	    	var parser=new DOMParser();
			var htmlDoc=parser.parseFromString(response, "text/html");

	    	document.body.innerHTML = htmlDoc.body.innerHTML;
	    }
  	}

	request.open("GET", "/posts/" + post + "/dislike", true);
	request.send();
}

function dislike_user(user)
{
	var request;
	if(window.XMLHttpRequest)
	{
		request = new XMLHttpRequest();
	}
	else
	{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}

	request.onreadystatechange = function()
  	{
	  	if(request.readyState == 4 && request.status == 200)
	    {
	    	var response = request.responseText;

	    	var parser=new DOMParser();
			var htmlDoc=parser.parseFromString(response, "text/html");

	    	document.body.innerHTML = htmlDoc.body.innerHTML;
	    }
  	}

	request.open("GET", "/users/" + user + "/dislike", true);
	request.send();
}

function like_user(user)
{
	var request;
	if(window.XMLHttpRequest)
	{
		request = new XMLHttpRequest();
	}
	else
	{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}

	request.onreadystatechange = function()
  	{
	  	if(request.readyState == 4 && request.status == 200)
	    {
	    	var response = request.responseText;

	    	var parser=new DOMParser();
			var htmlDoc=parser.parseFromString(response, "text/html");

	    	document.body.innerHTML = htmlDoc.body.innerHTML;
	    }
  	}

	request.open("GET", "/users/" + user + "/like", true);
	request.send();
}

function leave_workspace(post)
{
	var request;
	if(window.XMLHttpRequest)
	{
		request = new XMLHttpRequest();
	}
	else
	{
		request = new ActiveXObject("Microsoft.XMLHTTP");
	}

	request.onreadystatechange = function()
  	{
	  	if(request.readyState == 4 && request.status == 200)
	    {
	    	var response = request.responseText;

	    	var parser=new DOMParser();
			var htmlDoc=parser.parseFromString(response, "text/html");

	    	document.body.innerHTML = htmlDoc.body.innerHTML;
	    }
  	}

	request.open("GET","/posts/" + post + "/leave",true);
	request.send();
}
