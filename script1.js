function createlabel(tagname,attributename,attributevalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attributename,attributevalue);
    ele.innerHTML=content;
    return ele;

}
function inputele(tagname,attributename,attributevalue,attributename1,attributevalue1){
    var inputele=document.createElement(tagname);
    inputele.setAttribute(attributename,attributevalue,);
    inputele.setAttribute(attributename1,attributevalue1,);
    return inputele;

}
function br(tagname){
    var res=document.createElement(tagname);
    return res;

}
var firstname=createlabel("label","for","firstname","firstname");
var br1=br("br");
var input=inputele("input","type","firstname","id","firstname");
var br2=br("br");
document.body.append(firstname,br1,input,br2);
var middlename=createlabel("label","for","middlename","middlenam");
var br1=br("br");
var input=inputele("input","type","middlename","id","middlename");
var br2=br("br");
document.body.append(middlename,br1,input,br2);
var lastname=createlabel("label","for","lastname","lastname");
var br1=br("br");
var input=inputele("input","type","lastname","id","lastname");
var br2=br("br");
document.body.append(lastname,br1,input,br2);
var email=createlabel("label","for","email","email");
var br1=br("br");
var input=inputele("input","type","email","id","email");
var br2=br("br");
document.body.append(email,br1,input,br2);
var pincode=createlabel("label","for","pincode","pincode");
var br1=br("br");
var input=inputele("input","type","pincode","id","pincode");
var br2=br("br");
document.body.append(pincode,br1,input,br2);