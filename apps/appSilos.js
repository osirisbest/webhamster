Ext.onReady(function(){
    Ext.create('Ext.panel.Panel', {
        renderTo: Ext.getBody(),
        width: 300,
        height: 330,
        padding:10,
        title: 'Основной контейнер',
        layout:'card', 
        /*{
            type: 'hbox',
            align: 'stretch'
        }*/
        items: [
            {
                xtype: 'panel',
                title: 'Внутренняя панель 1',
                html: 'some info ',
               // align: 'stretch'
                //   height: 100,
                width: 100
            },
            {
                xtype: 'panel',
                title: 'Внутренняя панель 2',
                html: 'erfrefer',
             //   align: 'stretch'
                //  height: 100,
                width: 100
            },
            {
                xtype: 'panel',
                title: 'Внутренняя панель 3',
                html: 'f4f34f3',
                //height: 100,
                width: 100
               // flex:1
               //align: 'stretch'
            }
        ]
    });
    });