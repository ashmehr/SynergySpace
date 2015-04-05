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

	    	var newElement = document.createElement('div');
	    	newElement.innerHTML = response;

	    	document.getElementByClass("users").innerHTML = newElement.getElementByClass("users").innerHTML;
	    }
  	}

	request.open("GET","/posts/" + post + "/join",true);
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

	    	var newElement = document.createElement('div');
	    	newElement.innerHTML = response;

	    	document.getElementsByClassName("users").innerHTML = newElement.getElementsByClassName("users").innerHTML;
	    }
  	}

	request.open("GET","/posts/" + post + "/leave",true);
	request.send();
}