var dateField;
Ext.onReady(function(){
    dateField =Ext.create('Ext.form.field.Date', {
        fieldLabel: 'Выбрать дату',
        format: 'd/m/Y',
      //  maxValue: new Date(2012, 11, 21),
      //  minValue: new Date(2011, 11, 21),
      //  disabledDates: ['25/11/2012', '22/11/2012'],
        renderTo: Ext.getBody()
    });
    Ext.create('Ext.panel.Panel')
}

  

);function f(){
    alert(dateField.getValue());
}  