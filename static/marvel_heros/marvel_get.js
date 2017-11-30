$(function (){
    var marvel_dict={}
    var private_key = '43f959fa13099d1567ca9341655a4993b1242513';
    var public_key = '33b674252b864996dfa38ef6c1fca82a';
    var ts = 1;
    var hash = $.md5(ts+private_key+public_key);
    var req = 'https://gateway.marvel.com:443/v1/public/characters/1009610?ts='+ts+'&apikey='+public_key+'&hash='+hash; 
    console.log(req)
    var marvel_hero = {}

    marvel_hero = $.ajax({
        url: 'https://gateway.marvel.com:443/v1/public/characters/1009610?ts='+ts+'&apikey='+public_key+'&hash='+hash,
        datatype:'json',
        success: function(marvel_hero){
            console.log(marvel_hero);
            
            
                marvel_dict['name'] = marvel_hero['data']['results'][0]['name'];
                marvel_dict['img_link'] = marvel_hero['data']['results'][0]['thumbnail']['path']+'.'+marvel_hero['data']['results'][0]['thumbnail']['extension']
                console.log(marvel_dict);

                var img  = $("<img/>").attr({'src': marvel_dict['img_link'],'width':'170px','height':'170px'})
                    
                        $(".content").append(img);  
                        $(".content").append(marvel_dict['name']);      
                   
                
                
         }

    });

    query_hero = $.ajax({
        url: 'http://127.0.0.1:8000/api/hero/',
        datatype:'json',
        success:function(query_hero){
            console.log(query_hero);
        }    
    });


});




