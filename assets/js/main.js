function receiveData( data ) {

	// Do something with the data here.
	// For demonstration purposes, we'll simply log it.
	console.log( data );

	console.log( "Site Title = " + data.name );
	console.log( "Site Description = " + data.description );
	console.log( "Site URL = " + data.url );
	console.log( "Site HOME = " + data.home );
	
}
