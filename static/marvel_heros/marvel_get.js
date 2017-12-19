$(function (){
        

    $("#hero_send").click(function(marvel_name){
    var marvel_dict={}
    var private_key = '43f959fa13099d1567ca9341655a4993b1242513';
    var public_key = '33b674252b864996dfa38ef6c1fca82a';
    var ts = 1;
    var hash = $.md5(ts+private_key+public_key);
    var marvel_hero = {}

    var marvel_name = $("#hero_name").val();
    console.log(marvel_name);
    var req = 'https://gateway.marvel.com:443/v1/public/characters?name='+marvel_name+'&ts='+ts+'&apikey='+public_key+'&hash='+hash; 
    console.log(req)


    marvel_hero = $.ajax({
        async:false,
        url: 'https://gateway.marvel.com:443/v1/public/characters?name='+marvel_name+'&ts='+ts+'&apikey='+public_key+'&hash='+hash,
        datatype:'json'}).done(function(marvel_hero){
                console.log(marvel_hero);
                marvel_dict['name'] = marvel_hero['data']['results'][0]['name']
                marvel_dict['img_link'] = marvel_hero['data']['results'][0]['thumbnail']['path']+'.'+marvel_hero['data']['results'][0]['thumbnail']['extension']
                marvel_dict['description'] = marvel_hero['data']['results'][0]['description']
                console.log(marvel_dict)
                });

                insert_hero  = $.ajax({
                    url: 'api/hero/',
                    datatype:'json',
                    method: 'POST',
                    data: marvel_dict,
                    async:false,
                }).done(function(insert_hero){
                        console.log(insert_hero);
                             
                });                
                console.log(insert_hero);        
    });   
        query_hero = $.ajax({
        method:'GET',
        url: 'api/hero/',
        datatype:'json',
        success:function(query_hero){
            console.log(query_hero);
            for (var item = 0; item<query_hero.length; item++)
            { 
                var row_div = $('<div class="marvel_hero_row_'+item+'"></div>').appendTo('.content');    
                var img  = $("<img/>").attr({'src': query_hero[item]['img_link'],'width':'170px','height':'170px'});                
                
                $(row_div).append(img);  
                $(row_div).append('<div class="hero_name"><h3> Name:  '+query_hero[item]['name']+'<h3></div>');
                $(row_div).append('<div class="description"><h3> Description:  '+query_hero[item]['description']+'</h3></div>');
            }    
        }    
    });
});