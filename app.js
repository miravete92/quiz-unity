var state = {items: []};

function handleAddItem(){
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
}
$(function(){
	handleAddItem();
	handleCheck();
	handleRemove();
});
	
