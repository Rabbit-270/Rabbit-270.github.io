document.querySelector("select").addEventListener("click", function(event){
    if (document.querySelector("select").selectedIndex !== 0 )
    {
      var selected_country_code = document.querySelector("select").value.split(" ")[0];
      var id_number_length = document.querySelector("select").value.split(" ")[1];
      var id_number_placeholder = document.querySelector("select").value.split(" ")[2];
      //update the image of the flag
      var flag_uri = `https://flagsapi.com/${selected_country_code}/flat/64.png`;

      document.querySelector("#country-flag").setAttribute("src", flag_uri);
      document.querySelector("#id-number").setAttribute("placeholder", id_number_placeholder);
      return;
    }

});