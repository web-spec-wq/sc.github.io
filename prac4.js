function validation()
{
	var name=document.myform.name.value;
	var surname=document.myform.surname.value;
	var cardnumber=document.myform.cardnumber.value;
	var mmyy=document.myform.mmyy.value;
	var cvv=document.myform.cvv.value;
	var address=document.myform.address.value;
	var zipcode=document.myform.zipcode.value;
	var city=document.myform.city.value;
	var email=document.myform.email.value;

	if (name=="" || name==null)
	{
		alert("you have not entered the name");
		return false;
    }
    if(surname=="" || surname==null)
    {
		alert("you have not entered the surname");
		return false;
    }	
     if (cardnumber=="" || cardnumber==null || cardnumber.length!=16)
	{
		alert("you have not entered the  valid cardnumber");
		return false;
    }
    if (mmyy=="" || mmyy==null)
	{
		alert("you have not entered the month and year");
		return false;
    }
     if (cvv=="" || cvv==null || cvv.length!=3)
	{
		alert("you have not entered the  valid cvv");
		return false;
    }
     if (address=="" || address==null)
	{
		alert("you have not entered the address");
		return false;
    }
    else if (city=="" || city==null)
	{
		alert("you have not entered the city");
		return false;
    }
     if (zipcode=="" || zipcode==null || zipcode.length!=6)
	{
		alert("you have not entered the valid zipcode");
		return false;
    }
    if (email=="" || email==null)
	{
		alert("you have not entered the email");
		return false;
    }
    else 
    {
    	alert("successfull");
        return true;
    }
}