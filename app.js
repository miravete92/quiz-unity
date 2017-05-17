var state = {
	questions: [
		{
			question:"What's the main component of a GameObject?'", 
			answers:[
				{answer:"Transform",right:true},
				{answer:"GameObject"},
				{answer:"BoxCollider"},
				{answer:"Translate"}
			]
		},
		{
			question:"What programmin language can we use in Unity 5?", 
			answers:[
				{answer:"javascript and C#",right:true},
				{answer:"javascript and java"},
				{answer:"java and C#"},
				{answer:"python and javascript"}
			]
		},
		{
			question:"We can use _____ key to move an object to a fixed distance in an axis.", 
			answers:[
				{answer:"space"},
				{answer:"control",right:true},
				{answer:"shift"},
				{answer:"tab"}
			]
		},
		{
			question:"To activate a trigger, we need an object with:", 
			answers:[
				{answer:"BoxCollider"},
				{answer:"Rigidbody",right:true},
				{answer:"MeshFilter"},
				{answer:"None of above"}
			]
		},
		{
			question:"What of this sentences is false?", 
			answers:[
				{answer:"Rigidbody adds physics to GameObjects"},
				{answer:"Colliders add physical shape to GameObjects"},
				{answer:"MeshFilter allows to specify a material for a GameObject",right:true},
				{answer:"Colliders allow to specify a physic material for a GameObject"}
			]
		},
		{
			question:"An incorrect way to select the transform component is:", 
			answers:[
				{answer:"this.transform"},
				{answer:"GetComponent<Transform>()"},
				{answer:"this.gameObject.transform"},
				{answer:"this.Translate(0,0,0).transform",right:true}
			]
		},
		{
			question:"Which of the following primitive GameObjects does not exist.", 
			answers:[
				{answer:"Cube"},
				{answer:"Sphere"},
				{answer:"Cone",right:true},
				{answer:"PointLight"}
			]
		},
		{
			question:"What component do we use to create a spherical trigger arround?", 
			answers:[
				{answer:"BoxCollider"},
				{answer:"BoxTrigger"},
				{answer:"SphereTrigger",right:true},
				{answer:"SphereCollider"}
			]
		},
		{
			question:"What type of joint do we use if we want to simulate a door?", 
			answers:[
				{answer:"Fixed Join"},
				{answer:"Door Joint"},
				{answer:"Hinge Joint",right:true},
				{answer:"Spring Joint"}
			]
		},
		{
			question:"What is a Quaternion?", 
			answers:[
				{answer:"Is a rotation unit bassed on a vector and an w component that represents rotation on its axis.",right:true},
				{answer:"Is a 4 dimmensional vector."},
				{answer:"Represents a matrix in the space and has an w component that stores time."},
				{answer:"That property does not exist."}
			]
		}
	],
	user:{
		answered: 0;
		correct : 0;
		current: 0;
	}
};

/*function handleAddItem(){
	$("#js-shopping-list-form").submit(function(event){
		event.preventDefault();
		var item = $(this).find("input[type='text']").val();
		$(this).find("input[type='text']").val("");
		state.items[item]=true;
		renderHtml(state,$(".shopping-list"));
	});
}
function handleCheck(){
	$(".shopping-list").on("click",".shopping-item-toggle",function(event){
		var item = $(this).closest("li").find(".shopping-item").text();
		state.items[item] = !state.items[item]
		renderHtml(state,$(".shopping-list"));
	});
}
function handleRemove(){
	$(".shopping-list").on("click",".shopping-item-delete",function(event){
		var item = $(this).closest("li").find(".shopping-item").text();
		delete state.items[item];
		renderHtml(state,$(".shopping-list"));
		
	});
}
function renderHtml(state,element){
	var itemsHTML = Object.keys(state.items).map(function(item) {
        return '<li>'+
        '<span class="shopping-item '+(state.items[item] || 'shopping-item__checked')+'">'+item+'</span>'+
        '<div class="shopping-item-controls">'+
          '<button class="shopping-item-toggle">'+
            '<span class="button-label">check</span>'+
          '</button>'+
          '<button class="shopping-item-delete">'+
            '<span class="button-label">delete</span>'+
          '</button>'+
        '</div>'+
      '</li>';
    });
	element.html(itemsHTML);
}*/
$(function(){
	//handleAddItem();
	//handleCheck();
	//handleRemove();
});
	
