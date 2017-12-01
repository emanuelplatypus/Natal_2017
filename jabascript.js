window.onload = function()
{
	drawList();
};

var give = ['Sophia',
'Nicolly',
'Isabella',
'Gabriella',
'Estefanie',
'Dener',
'Clara',
'Brian',
'Arthur',
'Andrew'];

var receive = give.concat();
var peopleWrap = document.getElementById('peopleWrap');
var people = document.getElementById('people');
var choose = document.getElementById('choose');
var result = document.getElementById('result');
var close = document.getElementById('close');

function drawList()
{
	people.innerHTML = '<option value="">Quem é você?</option>';
	for (var i = give.length - 1; i >= 0; i--) {
		var option = document.createElement('option');
		option.value = i;
		option.innerHTML = give[i];
		people.appendChild(option);
	}
}

function selectPerson(person) 
{
	var name = give[person];
	var nameIndex = receive.indexOf(name);
	
	if(nameIndex >= 0) 
	{
		receive.splice(nameIndex, 1);
	}
	var recipient = Math.floor((Math.random() * receive.length));
	var recipientName = receive[recipient];
	
	receive.splice(recipient, 1);
	give.splice(person, 1);

	if(nameIndex >= 0)
	{
		receive.push(name);
	}
	result.innerHTML = "<h2>" + name + ", você tirou " + recipientName + "!</h2>";
	close.innerHTML = "<br><br><br><br><br><br>Okay. Clique aqui para apagar o nome da pessoa que você tirou.";
	if(give.length > 0)
	{
		drawList();
	}
}

choose.onclick = function()
{
	if(people.value)
	{
		selectPerson(people.value);
	}
};

close.onclick = function()
{
	result.innerHTML = "";
	close.innerHTML = "";
  if(give.length == 0){
 peopleWrap.parentNode.removeChild(peopleWrap);
		choose.parentNode.removeChild(choose);
		result.innerHTML = "<h2>Fim do sorteio!!!</h2>";
		close.innerHTML = "";
	}
};
