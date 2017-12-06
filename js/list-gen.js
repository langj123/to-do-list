window.addEventListener("load", function(){
	var button = document.getElementById('To-Do-Generator');
	var append = document.getElementsByClassName('current-dos')[0];
	var list = new ListCreator(button, append);
});

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};

function ListCreator(button, append) {
    this.setControls(button, append);
}
ListCreator.method('setControls', function(button, append){
	this.button = button;
	this.append = append;
	this.createItem();
	return this;
});

ListCreator.method('cancelItem', function(){
	this.button.className = this.button.className.replace(' hide', '');
	this.button.addEventListener('click', this, false);
	this.append.removeChild(this.append.getElementsByClassName('to-do-gen-wrap')[0]);
});

ListCreator.method('addItem', function(){
	var wrap = document.createElement('div');
	var h2text = this.append.getElementsByClassName('to-do-gen')[0].getElementsByTagName('input')[0].value;
	var h2 = document.createElement('h2');
	var div = document.createElement('div');
	var form = document.createElement('form');
	var textarea = document.createElement('textarea');
	var col1 = document.createElement('div');
	var col2 = document.createElement('div');
	var check = document.createElement('input');
	var label = document.createElement('label');

	label.innerText = 'Item to add';
	textarea.setAttribute('placeholder', 'Add a to do...');
	textarea.setAttribute('rows', '1');
	textarea.setAttribute('class', 'to-do-name');
	check.setAttribute('type', 'checkbox');
	col1.setAttribute('class', 'col-1');
	col2.setAttribute('class', 'col-2');
	div.setAttribute('class', 'list-wrap')
	wrap.setAttribute('class', 'list-cont');
	wrap.appendChild(h2);
	wrap.appendChild(div);
	div.appendChild(form);
	form.appendChild(col1);
	form.appendChild(col2);
	col1.appendChild(check);
	col1.appendChild(label);
	col2.appendChild(textarea);
	h2.innerText = h2text;
	this.append.replaceChild(wrap, this.append.getElementsByClassName('to-do-gen-wrap')[0]);
	this.button.className = this.button.className.replace(' hide', '');
	this.button.addEventListener('click', this, false);
});

ListCreator.method('handleEvent', function(event){
	switch(event.type) {
		case 'click' :
			if (event.target.className.indexOf('add') !== -1) {
				this.appendItems();
			} else if (event.target.className.indexOf('cancel-item') !== -1) {
				this.cancelItem();
			} else if (event.target.className.indexOf('plus') !== -1) {
				this.addItem();
			}
			event.preventDefault();
			break;
	}
});

ListCreator.method('appendItems', function(){
	this.button.className += ' hide';
    var item = document.createElement("div");
    var form = document.createElement("form");
    var input = document.createElement("input");
    var h2 = document.createElement("h2");
    var p = document.createElement("p");
    var sub = document.createElement("input");
    var can = document.createElement("button");
    input.setAttribute("type", "text");
    sub.setAttribute("type", "submit");
    sub.setAttribute("value", "Save and start adding to-dos");
    sub.setAttribute("class", "button plus");
    item.setAttribute("class", "to-do-gen-wrap");
    h2.setAttribute("class", "to-do-gen");
    form.setAttribute("id", "ListGenerator");
    input.setAttribute("value", "Give the list a title");
    can.setAttribute("class", "cancel-item button");
    can.innerText = "Cancel";
    h2.appendChild(input);
    form.appendChild(h2);
    p.appendChild(sub);
    p.appendChild(can);
    form.appendChild(p);
    item.appendChild(form);
    this.append.insertBefore(item, this.append.firstChild);
 	this.button.removeEventListener('click', this);
 	can.addEventListener('click', this, false);
 	sub.addEventListener('click', this, false);
    return false;
});

ListCreator.method('createItem', function() {
	this.button.addEventListener('click', this, false);
});
