    // Vanilla JS
    // Event listener 
    // let btn = document.querySelector("#button");
    // btn.addEventListener('click', function(){
    //     console.log("Hello World")
    // })


    // function clickme(){
    //     alert("Hello World");
    // }


    // let fn = (function(){
    //     return {
    //         clickme: function(e){
    //             var title = document.querySelector('.title');
    //             title.innerHTML = e.dataset.text;
    //             //console.log(e.dataset.text)
    //         }
    //     }
    // })();

    // jQuery

        // let btn = $("#button");
        // btn.on('click', function(e){
        //     $(".title").html(btn.attr("data-text"));
           
        // });

        let fn = (function(){
            return {
                clickme: function(e){
                    // $(".title").html(e.dataset.text);
                    fn.ussd();
                },
                ussd: function(){
                    $.ajax({
                        type: 'POST',
                        url: 'https://consumerpromo.ng/api/testredeem/ussd',
                        data: JSON.stringify({
                            'phone':'+2347017723208',
                            'text':'2'
                        }),
                        proccessData: false,
                        contentType: false,
                        success: function(res){
                            $(".title").html(res);
                            console.log(res)
                        }
                    })
                }
            }
        })();


       
