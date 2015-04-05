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
	    	var start = response.search('<ul class="users">') + 18;
	    	var end = response.search('</ul>') - 1;

	    	document.getElementByClass("users").innerHtml = response.substring(start, end);
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
	    	var start = response.search('<ul class="users">') + 18;
	    	var end = response.search('</ul>') - 1;

	    	document.getElementByClass("users").innerHtml = response.substring(start, end);
	    }
  	}

	request.open("GET","/posts/" + post + "/leave",true);
	request.send();
}