Ext.define('Classes.Car',{
    x:10
});

Ext.define('Classes.Opel',{
alias:'opel',    
mixins: {
    car:'Classes.Car'
}}
);
var v=Ext.create('opel');
alert(v.x);