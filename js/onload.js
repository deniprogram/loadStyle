 (function( $ ){


                $.fn.squarecarrying = function(){

                    return this.each(function() {
                         css("background","#000");
                    });

                }



            $.fn.loadLine = function(options,height) {

                var defaults = {
                    'cor' : 'red',
                    'height' :  '2px'
                };

                var settings = $.extend( {}, defaults, options );

                return this.each(function() {
                    //Criando Div e colocando em body
                    var div = $("<div style='width:0px;margin:0;padding:0;'></div>");
                    // Validando height
                    if(height == null){
                            div.css("height",defaults.height);
                       }else{
                            div.css("height",height);
                       }
                    //Validando cor
                    if(options == null){
                        div.css("background",defaults.cor);
                    }else{
                        div.css("background",options);
                    }

                    $("body").css("margin","0","padding","0");
                    $("body").prepend(div);

                    //Calculando carregamento da pagina
                    var from_time = new Date();
                    from_time = from_time.getTime();
                    var to_time = new Date();
                    to_time = to_time.getTime();
                    var secs = (to_time - from_time) /1000;
                    //Anomando div em tempo de carregamento

                    div.animate({width: '100%'}, secs+1000).fadeOut();

                });

            };




        })( jQuery );
