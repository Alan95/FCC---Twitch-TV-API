$(document).ready(function() {


    //globals 
    var channel = ["ESL_SC2", "playhearthstone", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "comster404", "brunofin"];
    var saver;
    var clicked = true;

    //creating <li> lists of channels to the <ul>

    function listCreator(variable, number) {
            var urlis = "https://twitch.tv/" + channel[number];
            var url = "https://cdn1.iconfinder.com/data/icons/simple-icons/2048/twitch-2048-black.png";


            if (variable.status === 404) {
                $(".reddy").append('<li><a target="_blank" href="' + urlis + '"</a> <img src="' + url + '"</img> <h4> ' + channel[number] + ' </h4> does not exist anymore.</li>');
            } else {
                var api = "https://wind-bow.gomix.me/twitch-api/streams/" + variable.display_name + "?callback=?";

                $.ajax({
                    url: api,
                    type: 'GET',
                    dataType: 'jsonp',

                }).done(function(data) {

                    if (data.stream === null) {


                        $(".reddy").append('<li><a target="_blank" href="' + urlis + '"</a> <img src="' + url + '"</img> <h4> ' + channel[number] + ' </h4> is currently offline </li>');


                    } else {

                        var urli = "https://twitch.tv/" + data.stream.channel.name;

                        $(".onny").append('<li id="oni"> <a target="_blank" href="' + urli + '"</a><img src="' + data.stream.channel.logo + '"</img> <h3>' + data.stream.channel.name + '</h3> <h4>' + data.stream.game + '</h4>' + data.stream.viewers + ' Viewers</li>');




                    }


                });



            }

        }
        //AJAX request


    function ajaxe(key, number) {




        var api = "https://wind-bow.gomix.me/twitch-api/channels/" + key + "?callback=?";

        $.ajax({
            url: api,
            type: 'GET',
            dataType: 'jsonp',

        }).done(function(data) {



            listCreator(data, number);

        });


    }



    for (var i = 0; i < channel.length; i++) {

        ajaxe(channel[i], i);

    }




    $("#submit").click(function() {

        clicked = false;
        check();
    });


    //buttonactivitis 

    $(".btn-danger").click(function(e) {


        e.preventDefault();
        $(".onny li").hide();

        if (".reddy li:hidden") {
            $(".reddy li").show();
        }
    });


    $(".btn-success").click(function(e) {

        e.preventDefault();
        $(".reddy li").hide();
        if (".onny li:hidden") {
            $(".onny li").show();

        }
    });


    $(".btn-primary").click(function() {

        if (".reddy li:hidden") {
            $(".reddy li").show();
        }

        if (".reddy li:hidden") {
            $(".onny li").show();
        }


    });



});