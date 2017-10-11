var postContent = document.getElementById("content");

function receiveData( data ) {

	Object.keys( data ).forEach( function( key ) {

		var ourHTMLString = '';
	  for (i = 0; i < data.length; i++) {
	    ourHTMLString += "<h1 class='post-title id-" + data[i].id + "'>" + data[i].title.rendered + "</h1>";
	    ourHTMLString += data[i].content.rendered;
	  }

	  postContent.innerHTML = ourHTMLString;

	});

}
