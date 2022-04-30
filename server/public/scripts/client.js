$(document).ready(onReady);

function onReady() {
  console.log('Suis la');
}

function getPets(){
  // get pets from server
  // use AJAX
    $.ajax({ // hey JQ, do some AJAX
      method: "GET",
      url:"/pets"
    }).then( function( response ){
        // loop thru response
        console.log( response );
        // display each on DOM
        // target and empty output element
        const el = $( '#petsOut' );
        el.empty();
        for( let i=0; i< response.length; it+ ) {
          // append each pet to output el
          el.append( `<li>${responseli].name}: ${response[i].type}`
        } // end for
    }); // end AJAX

  }