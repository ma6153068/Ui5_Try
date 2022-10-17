sap.ui.define(
    [
        "inkit/hsn/fiori/controller/BaseController",
        "sap/m/MessageBox",
        "sap/ui/core/routing/History"

    ],
    function(BaseController, MessageBox, History){

'use strict';

return BaseController.extend("inkit.hsn.fiori.controller.Try",{

onInit: function(){

this.oRouter = this.getOwnerComponent().getRouter();

this.oRouter.getRoute("well").attachMatched(this.sparta, this);


},

sparta: function(oEvent){

    var supplierId = oEvent.getParameter("arguments").supplierId;

    var sPath = "/suppliers/" + supplierId;

    var oView = this.getView();

    oView.bindElement(sPath);

},

onBack: function(){

    var oHistory = History.getInstance();
    var sPreviousHash = oHistory.getPreviousHash();

    if (sPreviousHash !== undefined) {
        window.history.go(-1);
    } else {
        var oRouter = this.getOwnerComponent().getRouter();
        oRouter.navTo("spiderman", {}, true);
    }
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


    
});

});