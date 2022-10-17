sap.ui.define(
    [
        "inkit/hsn/fiori/controller/BaseController",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator"
    ],
    function(BaseController, Filter, FilterOperator){

    'use strict';

    return BaseController.extend("inkit.hsn.fiori.controller.View1",{

   
    onInit: function(){
        
        // we access the properties and function of BaseController.js
        // we access BaseController properties and funtions using ->  this keyword
        // we can also modify the values of BaseControler property

        //    this.someReuseFunction();
        //    this.x = "New Name is Givin inside child Controller";

        // we get the router object from Component.js 
        // getOwnerComponent()-> is the build in funciton
        // getOwnerComponent()-> please give me component.js object
        this.oRouter = this.getOwnerComponent().getRouter();
    },

    onDelete: function(oEvent){ 

        var itemDeleted = oEvent.getParameter("listItem");

        // var oList = this.getView().byId("idList");

        var oList = oEvent.getSource();

        oList.removeItem(itemDeleted);

    },

    goto: function(sIndexValue){
  
        this.oRouter.navTo("hell",{
            idfruit: sIndexValue
        });

    // now we are trying get Parent object with getParent()
   
    // var oAppCon = this.getView().getParent();
    // console.log(oAppCon);
    // // step2 navigate 
    // oAppCon.to("idV2");

   
    },

    onSelect: function(oEvent){
    
    // step-1 get the item which was Selected by useer

    var oItem = oEvent.getParameter("listItem");
    
        // step-2 Path of the element(Memory) of the Selected item
    var sPath = oItem.getBindingContextPath();
    // step-3 get the object of view 2

//     var oView2 = this.getView().getParent().getParent()
// // step-4  bind the element of select item to view 2- element binding
//     oView2.bindElement(sPath);

    
// we are just split the sPath with '/' then we fetch the last value of the array -1
        var indexVal = sPath.split('/')[sPath.split('/').length -1 ];


        this.goto(indexVal);
        // alert("you Click on item of list");
    },

    // onSearch: function(oEvent){
    // // Search for Name of item in List
    //     // step-1 Get to know what was Search by User
    //     var sText = oEvent.getParameter("query");
    //     // step-2 Construct a filter Object
    //     // here "name" is the property of json model for search filed
    //     var oFilter = new Filter("name", FilterOperator.Contains, sText);
    //     // var oFilter1 = new Filter("type", FilterOperator.Contains, sText);


    //     // step-3 Get the list object
    //     var OList = this.getView().byId("idList");
    //     // step-4 Inject the filter inside the binding of items
    //     OList.getBinding("items").filter( oFilter);

    // }

    // type-1 for used multiple filter
    // onSearch: function (oEvent) {
    //     // add filter for search
    //     // var aFilters = [];
    //     var sQuery = oEvent.getSource().getValue();
       
    //     var filter = new Filter("name", FilterOperator.Contains, sQuery);
    //     var filter1 = new Filter("type", FilterOperator.Contains, sQuery);

    //     var aFilters = [filter, filter1]; 

    //     var oFil = new Filter({
    //         filters: aFilters,
    //         and:false
    //     })

    //     // update list binding
    //     var oList = this.byId("idList");
    //     var oBinding = oList.getBinding("items");
    //     oBinding.filter(oFil);
    // }


    // way of multiple filter - type-2
    onSearch: function(oEvent){

        var searchText = oEvent.getParameter("query");

        var oFilter1 = new Filter("name", FilterOperator.Contains, searchText);
        var oFilter2 = new Filter("type", FilterOperator.Contains, searchText);

        var obj = [oFilter1, oFilter2];

        var filObj = new Filter({
            filters: obj,
            and: false
        });

        var oList = this.getView().byId("idList");
        // this is will not work here ok
        // var oList = oEvent.getSource();
        var oBinding = oList.getBinding("items");

        oBinding.filter(filObj);

    }


});

});