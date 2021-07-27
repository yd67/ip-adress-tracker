
    var api_key = "at_dlv39jwxAzh76yn3ZT2Ii8CcfCzdn";

    ip = $("#recherche").val() 

  if(ip != '' && ip != null){
    $("#btn").on('click', function (){
        // recuper l'ip dans l'input 
         alert('requette en cours ...!')
        $(function () {
            $.ajax({
                url: "https://geo.ipify.org/api/v1",
                data: {apiKey: api_key,ipAddress: ip},
                success: function(data) {
        
                    lat = data.location.lat ;
                    lng = data.location.lng ;  
        
                    //**************** */ gestion de  la map ***********
                    var mymap = L.map('mapid').setView([ lat, lng], 15);
        
                    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                        maxZoom: 18,
                        id: 'mapbox/streets-v11',
                        tileSize: 512,
                        zoomOffset: -1,
                        accessToken: 'pk.eyJ1IjoieXZlbnM2NyIsImEiOiJja3F1dmJjYW8wNW16MzFxaGZuNGMwd3JwIn0.AATQ81B4oihf9oFB6ARGWA'
                    }).addTo(mymap);
        
                    var marker = L.marker([lat, lng]).addTo(mymap);
                    //  **************** fin de gestion de la map ********************* 
        
                        $("#ip-adress").append("<span>"+ data.ip +"</span>");
                        $("#location").append("<span>"+ data.location.city +"</span>");
                        $("#timezone").append("<span>"+ data.location.timezone +"</span>");
                        $("#isp").append("<span>"+ data.isp+"</span>");
                },
                error: (error) => {

                    alert('ereur'+error)
                }
            });
         });       
    });

  } else {

    $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: api_key},
            success: function(data) {
    
                lat = data.location.lat ;
                lng = data.location.lng ;  
    
                //**************** */ gestion de  la map ***********
                var mymap = L.map('mapid').setView([ lat, lng], 15);
    
                L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                    maxZoom: 18,
                    id: 'mapbox/streets-v11',
                    tileSize: 512,
                    zoomOffset: -1,
                    accessToken: 'pk.eyJ1IjoieXZlbnM2NyIsImEiOiJja3F1dmJjYW8wNW16MzFxaGZuNGMwd3JwIn0.AATQ81B4oihf9oFB6ARGWA'
                }).addTo(mymap);
    
                var marker = L.marker([lat, lng]).addTo(mymap);
                //  **************** fin de gestion de la map ********************* 
    
                    $("#ip-adress").append("<span>"+ data.ip +"</span>");
                    $("#location").append("<span>"+ data.location.city +"</span>");
                    $("#timezone").append("<span>"+ data.location.timezone +"</span>");
                    $("#isp").append("<span>"+ data.isp+"</span>");
            },
                error: (error) => {

                    alert('ereur'+error)
                }
        });
     });
    
  }

