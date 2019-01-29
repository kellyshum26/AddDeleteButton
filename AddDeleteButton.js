var intTextBox=0;
//FUNCTION TO ADD TEXT BOX ELEMENT
function addElement()
{ if (intTextBox>4) {
  alert("Only 5 textboxes allow");

} else {
  intTextBox = intTextBox + 1;
  var contentID = document.getElementById('content');
  var newTBDiv = document.createElement('div');
  newTBDiv.setAttribute('id','Hosp'+intTextBox);
  newTBDiv.innerHTML = "Counterparty "+intTextBox+": <input type='text' id='hospital_" + intTextBox + "'    name='" + intTextBox + "'/>  Role of Counterparty "+intTextBox+":<input type='text' id='patient_" + intTextBox + "'    name='" + intTextBox + "'/><a href='javascript:removeElement(\"" + intTextBox + "\")'>Remove</a>";
  contentID.appendChild(newTBDiv);
}
}
//FUNCTION TO REMOVE TEXT BOX ELEMENT
function removeElement(id)
{

    if(intTextBox != 1)
    {
        var contentID = document.getElementById('content');
        //alert(contentID);
        contentID.removeChild(document.getElementById('Hosp'+id));
        intTextBox = intTextBox-1;
    } else {
      alert("No more textbox to remove");
    }
}
