sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller){

'use strict';

return Controller.extend("inkit.hsn.fiori.controller.BaseController",{

        x: "Malik",
        pi: 3.14,

        someReuseFunction: function(){
            alert("I am the function of  Baseeeee C");
            
        }

});

});