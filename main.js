function getdata(file,callback){
var request=new XMLHttpRequest();
request.overrideMimeType('json');
request.open("GET",file,true);
request.onreadystatechange=function(){
	if (this.readyState==4 && this.status=='200') {
		callback(request.responseText);
		
	}
};
request.send();
}
getdata('data.json', function(text)
	{
	var data=JSON.parse(text);
	console.log(data)
	profiledata(data.profile);}
	);

function profiledata(card)
{
	 var pdata=document.querySelector('.card2');
 var heading=document.createElement('h1');
 heading.textContent="DoMo Profile";
 pdata.append(heading)
 var pic=document.createElement('img')
 pic.src="andrea3.jpg"
 pic.classList.add('col-4')
 pdata.appendChild(pic)
 var name=document.createElement('h2')
 name.textContent=card.name;
 pdata.appendChild(name)
  var mail=document.createElement('h2')
    mail.textContent=card.email;
    pdata.appendChild(mail)
    var phone=document.createElement('h2')
    phone.textContent=card.address;
    pdata.appendChild(phone)
    var shop=document.createElement('h2')
    shop.textContent=card.company;
    pdata.appendChild(shop)

}