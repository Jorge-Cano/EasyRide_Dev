  $(function(){
    function setHandlers(){
    pages = ['landing', 'signupform', 'profilesaved', 'myaccount', 'almostready', 'getaliveride', 'getaride', 'getascheduledride', 'myscheduledrides', 'rideisscheduled'];
    for(var i = 0, x=pages.length; i< x; i++){
      console.log(pages[i]);
      page = pages[i];
      console.log(page);
      $('#filler').on('click', '#' + page, function(e){
         e.preventDefault();
            console.log('page', page);
            console.log('event handler target: ', event.target.id);
            getPage(event.target.id);
      });
    }
  };

    function getPage(page){
      console.log('getPage page: ', page);
      url = '/components/' + page + '.html';
      console.log('THE URL: ', url)
    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(response){
      console.log("im the response, motha fucka!", response)
      $('#filler').empty();
      $('#filler').append(response);
    }).fail(function(error){
      console.error(error);
    });
  }

  function main(){
     setHandlers();
   };

   main();
});
