Ext.define('Shops.view.Shoplist',
{
    extend: 'Ext.grid.Panel',
    alias: 'widget.shoplist',
    title: 'shoplist',
    initComponent: function() {
        this.columns = [
            {header: 'Название',  dataIndex: 'name',  flex: 1},
            {header: 'Автор',  dataIndex: 'author',  flex: 1},
            {header: 'Год', dataIndex: 'year', flex: 1}
        ];
         
        this.callParent(arguments);
    }
}
);