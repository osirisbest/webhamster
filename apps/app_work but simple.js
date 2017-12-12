Ext.onReady(
    function a(){ Ext.MessageBox.show({
        title:'Пример 2a',
        msg: 'Проверим как работают кнопочки',
        buttons: Ext.MessageBox.OK,        
        fn: function(btn) {
                 alert('Клик-клак!  Вы нажали кнопку «'+btn+'»');
             }

    })}
        
)