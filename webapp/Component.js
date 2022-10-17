sap.ui.define(
    [
        "sap/ui/core/UIComponent"
    ],
    function(UIComponent){

    'use strict';

    return UIComponent.extend("inkit.hsn.fiori.Component", {

        // there are four main property in component.js

        // 1. used to link our manifest.json file 
        // beacuse all manifest.json contain all information about appConfiguraton
        // manifest.json-> applicationConfiguration
        //  1- part
        metadata:{
            manifest: "json"
        },

        // Like Intilization of our compononnet
        init: function(){
            // prototype inheritance search on google -> prototype inheritance
            // call the base class contructor or parent class contructor
            UIComponent.prototype.init.apply(this);

            var oRouter = this.getRouter();

            oRouter.initialize();

        },
        //we will initilize Views and return back
        // createContent: function(){

            // var oAppView = new sap.ui.view({
            //             viewName:"inkit.hsn.fiori.view.App",
            //             id:"idApp",
            //             type:"XML"
            // });

            // var oView1 = new sap.ui.view({
            //     viewName:"inkit.hsn.fiori.view.View1",
            //     id:"idV1",
            //     type:"XML"
            // });

            // var oView2 = new sap.ui.view({
            //     viewName:"inkit.hsn.fiori.view.View2",
            //     id:"idV2",
            //     type:"XML"
            // });


            // var oAppConControl = oAppView.byId("idAppCon");
            // // we are add pages and it add in chaning order too
            // // type-1
            // // oAppConControl.addPage(oView1);
            // // oAppConControl.addPage(oView1);
            // // type-2

            // // to add pages in worklist application
            // // oAppConControl.addPage(oView1).addPage(oView2);

            // // add master and details pages to master details application
            // oAppConControl.addMasterPage(oView1).addDetailPage(oView2);
            

            // return oAppView;
        
        destroy:{
            // you can write here cleanup code
        }


    });
    
});