function join_workspace(post)
{
	var request;
	if(window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function()
  	{
	  	if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
	    {
	    	var response = xmlhttp.responseText;
	    	var start = response.search('<ul class="users">') + 18;
	    	var end = response.search('</ul>') - 1;

	    	document.getElementByClass("users").innerHtml = response.substring(start, end);
	    }
  	}

	xmlhttp.open("GET","/posts/" + post + "/join",true);
	xmlhttp.send();
}

function leave_workspace(post)
{
	var request;
	if(window.XMLHttpRequest)
	{
		xmlhttp = new XMLHttpRequest();
	}
	else
	{
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	xmlhttp.onreadystatechange = function()
  	{
	  	if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
	    {
	    	var response = xmlhttp.responseText;
	    	var start = response.search('<ul class="users">') + 18;
	    	var end = response.search('</ul>') - 1;

	    	document.getElementByClass("users").innerHtml = response.substring(start, end);
	    }
  	}

	xmlhttp.open("GET","/posts/" + post + "/leave",true);
	xmlhttp.send();
}