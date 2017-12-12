Ext.onReady(function(){
var store = Ext.create('Ext.data.TreeStore', {
    root: {
        text: 'Страны СНГ',
        expanded: true,
        children:
        [{
            text: "Россия",
            children: [{
                text: "Москва",
                leaf: true
            }, {
                text: "Санкт-Петербург",
                leaf: true
            }, {
                text: "Волгоград",
                leaf: true
            }],
            leaf: false,
            "expanded": true
        },
        {
            text: "Украина",
            leaf: false
        },
        {
            text: "Белоруссия"
        }]
    }
});
Ext.create('Ext.Button', {
    margin:'10 0 0 30',
    text: 'Сортировать',
    renderTo: Ext.getBody(),
    handler: function(){
        store.sort('text', 'ASC');
    }
});
 
Ext.create('Ext.tree.Panel', {
    title: 'Страны СНГ',
    width: 200,
    height: 200,
    viewConfig: {
        plugins: {
            ptype: 'treeviewdragdrop'
        }
    },
    store: store,
    rootVisible: true,
    renderTo: Ext.getBody()
});
})