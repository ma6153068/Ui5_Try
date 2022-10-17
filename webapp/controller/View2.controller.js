sap.ui.define(
    [
        "inkit/hsn/fiori/controller/BaseController",
        "sap/m/MessageBox",
        "sap/m/MessageToast",
        "sap/ui/core/Fragment",
        "sap/m/DisplayListItem"

    ],
    function(BaseController, MessageBox, MessageToast, Fragment, DisplayListItem){

'use strict';

return BaseController.extend("inkit.hsn.fiori.controller.View2",{

onInit: function(){
// get the router object from component.js
this.oRouter = this.getOwnerComponent().getRouter();

// register a router matched function
this.oRouter.getRoute("hell").attachMatched(this.herculis, this);
    
},

herculis: function(oEvent){
    
    var fruitid = oEvent.getParameter("arguments").idfruit;
    var sPath = "/fruits/" + fruitid;
  

    var oView = this.getView();
    oView.bindElement(sPath);
},

onItemPress: function(oEvent){

    debugger;
    // get selected item object
    var oSelectItem = oEvent.getParameter("listItem");
    // get the path of selected item (address or memory)
    var sPath = oSelectItem.getBindingContextPath();
    // extract the index from sPath
    var oIndex = sPath.split('/')[sPath.split('/').length - 1];
    // index send to the next supplier view
    this.oRouter.navTo("well",{
        supplierId: oIndex
    });
},

back: function(){

    this.oRouter.navTo("spiderman");
   
    // get the parent view object
//     var oParent = this.getView().getParent();
//     // step2 for navigation
//     oParent.to("idV1");

        // using chaning rule 
        // var oParent = this.getView().getParent().to("idV1");



},
onSave: function(){

    // MessageBox.confirm("Approve purchase order ?");
     // MessageBox.information("Your Canceled your order!");
     var oResource = this.getView().getModel('i18n');
     var oResourceBundle = oResource.getResourceBundle();

     MessageBox.confirm(
		"This message should appear in the message box.", {
			icon: MessageBox.Icon.INFORMATION,
			title: "Order Details",
			actions: [MessageBox.Action.YES, MessageBox.Action.NO],
			emphasizedAction: MessageBox.Action.YES,
			onClose: function (oAction) { 
                if(oAction == "YES"){
                    var oMsg = oResourceBundle.getText("XMSG_SUCCESS");
                    // MessageToast.show("you are successfully order...");
                    MessageToast.show(oMsg);

                }
                if(oAction == "NO"){
                    var oMsg = oResourceBundle.getText("XMSG_CANCELED", ["11111"]);
                    MessageToast.show(oMsg);

                }
            }
		}
	);
},




oSuppilerPopup: null,
// create filter for supplier with popup
onFilterSupplier: function(){
    var that = this;
    if (!this.oSuppilerPopup)
    {
    // MessageBox.confirm("This functionallty is under construction1!");
    Fragment.load({
            fragmentName:"inkit.hsn.fiori.fragments.popup",
            type:"XML",
            id:"supplier",
            controller: this
    }).then(function(oFragment){
        
        that.oSuppilerPopup = oFragment;
        that.oSuppilerPopup.setTitle("Supplier Filter");

        // Allowing the access of model to all resources which in this View
        // we are add dependent to the view
        that.getView().addDependent(that.oSuppilerPopup);

        that.oSuppilerPopup.bindAggregation("items", {
            path: '/suppliers',
            template: new DisplayListItem({
                label: '{name}',
                value: '{city}'
            })
        
        });
        oFragment.open();
    });
    }else{
        this.oSuppilerPopup.open();
    }

},

oInputHelp: null,

onF4Help: function(){

    // MessageBox.confirm("This functionallty is under construction1!");
    var that = this;
    if (!this.oInputHelp)
    {
    // MessageBox.confirm("This functionallty is under construction1!");
    Fragment.load({
            fragmentName:"inkit.hsn.fiori.fragments.popup",
            type:"XML",
            id:"inSuppr",
            controller: this
    }).then(function(oFragment){

      
        that.oInputHelp = oFragment;
        that.oInputHelp.setTitle("City Help");


        // Allowing the access of model to all resources which in this View
        // we are add dependent to the view
        that.getView().addDependent(that.oInputHelp);

        that.oInputHelp.bindAggregation("items", {
            path: '/suppliers',
            template: new DisplayListItem({
                label: '{name}',
                value: '{city}'
            })
        });
        oFragment.open();

    });
    }else{
        this.oInputHelp.open();
    }
   
   
},

notHit: function(){

    alert("i am fragment");
}

    
});

});