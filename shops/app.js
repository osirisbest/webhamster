Ext.application({
    requires: ['Ext.container.Viewport'],
    name: 'Shops',
    appFolder: 'app',
    controllers: ['Shops'],
     
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'shoplist'
         //       html: 'sample'
            }
        });
    }
});