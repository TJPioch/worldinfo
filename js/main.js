$(document).ready(function() {
  var baseUrl = "https://restcountries.eu/rest/v1/";
  var urlAll = 'https://restcountries.eu/rest/v1/all';

  // Eksperymentalny kod rozwojowo-testowy o charakterze edukacyjno-poznawczym


  // Collect value from search form, GET country and display
  $('.btn').click(function() {
    var country = $('form :input').val();
    var countryUrl = 'name/' + country;
    var url = baseUrl + countryUrl;
    //alert(url);
    $.getJSON(url, function(json) {
      var html = "";
      var name = json[0].name;
      var capital = json[0].capital;
      var region = json[0].region;
      var subregion = json[0].subregion;
      var population = json[0].population;
      var area = json[0].area;
      //alert(capital);
      html += '<h1>' + name + '</br><small>' + subregion + '</small></h1><hr>';
      html += '<h3>Capital: <small>' + capital + '</small></h3>';
      html += '<h3>Population: <small>' + population + '</small></h3>';

      $('.result').html(html);
    });

  });

  //Collect value from clicked subregion, GET countries and display
  $('.subregion a').click(function() {

    var subregionUrl = 'subregion/' + $(this).text();
    var url = baseUrl + subregionUrl;

    $.getJSON(url, function(json) {
      var html = "";

      var length = json.length;
      html ='<h1>kliknięcie na państwo jeszcze nie wyw. danych, jak search. Do zrobienia. Więcej info w koment. w main.js</h1>'
      html += '<h4>Countries: ' + length + '</h4>';
      $.each(json, function(index, element) {
        var countries = element.name;
        html += '<p><a href="#">' + countries + '</a></p>';

      });


      $('.result').html(html);
      //        Poniższa funkcja ma robić dokładnie to, co pierwsza.
      //				Różnią się jedynie żródłem countryUrl, no i ta jest wywołana
      //        po wyświetleniu listy państw, tamta działa z search inputu.
      // 				Za cholerę nie wiem, jak nie pisać kolejnej, identycznej funkcji,
      // 				Wewnątrz takiej samej funkcji.
      
      $('.result a').click(function (){
  			var countryUrl = 'name/' + $(this).text();
  			var url = baseUrl + countryUrl
  			alert(url); 
  		});
  		
    });
    
    

  });

});
