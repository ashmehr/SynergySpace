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

function like_post()
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
	    }
  	}

	request.open("GET", location.pathname, true);
	request.send();
}

function dislike_post()
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
	    }
  	}

	request.open("GET", location.pathname, true);
	request.send();
}

function dislike_user()
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
	    }
  	}

	request.open("GET", location.pathname, true);
	request.send();
}

function like_user()
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
	    }
  	}

	request.open("GET", location.pathname, true);
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
