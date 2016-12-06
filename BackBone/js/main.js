/*(function(){
	
	var object = {};
	
	_.extend(object, Backbone.Events);
	
	object.on("alert",function(msg){
		alert("Triggered" + msg);
	});
	
	object.on("alert",function(msg){
		console.log("Triggered" + msg);
});

object.trigger("alert", "an event");  

$('#btn').live('click',function(){
	object.trigger("alert","clicked");
});

});*/
//создаем объект
var app = app ||{};
(function () {
	
	app.MyObject = Backbone.Model.extend({
		defaults:{
			name: "name",
			description: "-",
			size: 100
		},
		initialize: function() {
			 console.log('obj created');
			 this.on('change',function(){
				 var json = app.this.toJSON();
				 console.log(json);
			 });
		 },
		 validate: function (attrs) {
			 if ( attrs.size>100) {
				 console.log('Incorrect size');
				 return 'Incorrect size';
			 }
			 
		 },
		 increaseSize:function () {
			  app.this.set({
				  size: this.get('size')+100
				  
			  },{validate:true});
		 }
	});
	app.this= new app.MyObject({
		name: "rocket",
		description: "super"
	});
	app.this.set({
		size:250,
		type: 'active'
	});
	$('#myButton').live('click',function() { 
	app.this.increaseSize();
	});
	
	
	//console.log("size: "+app.this.get('size'));
	//var json = app.this.toJSON();
	//console.log(json);
});
