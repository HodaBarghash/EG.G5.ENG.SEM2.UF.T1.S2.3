function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6gBk8aJ3ghy":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwM23NtTVXimxgHmt5F1azGsZeMG-pXTv51FF3R8BUX_xvDRrfXUILIa7k6mSFHzvIFZw/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

