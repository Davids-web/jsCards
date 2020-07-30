function getdata(file,callback){
var request=new XMLHttpRequest();
request.overrideMimeType('json');
request.open("GET",file,true);
request.onreadystatechange=function(){
	if (this.readyState==4 && this.status==200) {
		callback(request.responseText);
		
	}
};
request.send();
}
getdata('data.json', function(text)
	{
	var data=JSON.parse(text);
	console.log(data)
	aprofile(data.profilea);
	bprofile(data.profileb);}
	);

function aprofile(card)
{
 var pdata=document.querySelector('.card-left');
 var heading=document.createElement('h2');
 heading.textContent="Sharon Profile";
 pdata.append(heading)
 pdata.classList.add('card','bg-lite','col-4','text-center')
 var pic=document.createElement('img')
 pic.src="sharon.jpg"
 pic.classList.add('img-thumbnail')
 pdata.appendChild(pic)
 var name=document.createElement('h3')
 name.textContent=card.name;
 pdata.appendChild(name)
 var prof=document.createElement('h3')
 prof.textContent=card.prof;
 pdata.appendChild(prof)
 var mail=document.createElement('h3')
 mail.textContent=card.email;
 pdata.appendChild(mail)
 //mail.classList.add('text-justify')
 var add=document.createElement('h3')
 add.textContent=card.add;
 pdata.appendChild(add)
 
   
}
function bprofile(bcard){
	var pdata2=document.querySelector('.card-right');
	var heading2=document.createElement('h2');
	heading2.textContent='Samantha Profile';
	pdata2.appendChild(heading2)
	pdata2.classList.add('card','bg-lite','text-center','col-4')
	var pic=document.createElement('img');
	pic.src='samantha.jpg'
	pic.classList.add('img-thumbnail')
	pdata2.appendChild(pic)
	for (var i in bcard){
		var dlop=document.createElement('h3');
		dlop.textContent=bcard[i];
		pdata2.appendChild(dlop)
	}

}