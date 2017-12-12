Ext.onReady(function(){
    
       Ext.define('Person', {
           extend: 'Ext.data.Model',
           fields: [{
               name: 'Name',
               type: 'string'
           }, {
               name: 'Surname',
               type: 'string'
           }, {
               name: 'BirthDate',
               type: 'date',
               dateFormat: 'd-m-Y'
           }, {
               name: 'Salary',
               type: 'int'
           }, {
               name: 'Married',
               type: 'boolean'
           }]
       });
        
       var person = Ext.create('Person', {
           Name: 'Eugene',
           Surname: 'Popov',
           BirthDate: '22-05-1984',
           Salary: 300,
           Married: false
       });
        
       Ext.create('Ext.Panel', {
           title: 'Person: ' +person.get('Name')+ ' ' +person.get('Surname'),
           html: '<p>Имя: '+person.get('Name')+'</p>' +
           '<p>Фамилия: '+person.get('Surname')+'</p>' +
           '<p>Дата рождения: '+person.get('BirthDate')+'</p>' +
           '<p>Женат: '+(person.get('Married')==true?'да':'нет')+'</p>',
           width: 200,
           height: 200,
           renderTo: Ext.getBody(),
           style: 'margin-left: 30px;margin-top: 10px;'
       });
   });