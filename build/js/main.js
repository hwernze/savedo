;(function($) {
	"use strict";
    var payees = [];
    $(document).ready(function() {

        var $nav = $('.side-nav,.btn-nav');
        var $screens = $('.screens');
        var $createPayee =$('#createPayee');
        

        //var values = localStorage.getItem("payees");


        $nav.find('a').click(function(){
            // get target id from data-attribut
            var $target = $(this).attr('dataId');
            // hide all <article>
            $screens.each(function(){
                $(this).addClass('hide');
            });
            // show only target
            $(document.getElementById($target)).removeClass('hide');
        });

        $createPayee.click(function(){
            /*
            var payee={
                name:{
                  key: '',value:''
                },
                acc:{
                  key:'',value: ''
                },
                bank:{
                  key: '',value: ''
                }
            };
            */
            var payee={
                name: '',
                iban:'',
                bic: ''
            };
         
            //stopPropagation();
            payee['name']=document.getElementById('user_Name').value;
            payee['iban']=document.getElementById('iban').value;
            payee['bic']=document.getElementById('bic').value;

            

            payees.push(payee);
            console.log(payees);
            localStorage.setItem(payee.name, payee.name+payee.iban+payee.bic);
            var values = localStorage.getItem("payees");
            console.log('STORAGEITEMS!!!!');
            for (var i = 0; i >= values.lenght; i++) {
                console.log(values[i]);
            };
            
            //document.getElementById('transfer-screen').find('select').append
            
        });

    }); // document.ready

    
})(jQuery);