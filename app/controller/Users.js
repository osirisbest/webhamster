Ext.define('AM.controller.Users', {
  extend: 'Ext.app.Controller',
  views: ['List',
    'Edit'],
  stores:['Users'],
  models:['User'],  
  init: function () {
    this.control({
      'userlist': {itemdblclick: this.editUser },
      'useredit button[action=save]':{click: this.updateUser}
    });
  },

  updateUser:function(button){
    var win=button.up('window')
    form=win.down('form')
    record=form.getRecord();
    values=form.getValues();
    record.set(values);
    win.close();
  },
  editUser: function(grid, record) {
    // Создается экземпляр представления для редактирования пользователя
    var view = Ext.widget('useredit');
 
    // В экземпляр представления подгружаются данные пользователя
    view.down('form').loadRecord(record);
  },

  onPanelRendered: function () {
    // Сообщение появляется при отрисовке панели
    console.log('The panel was rendered');
  }
});