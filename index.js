function AddNewWEField(){
   let a=document.createElement('textarea');
   a.classList.add('form-control');
   a.classList.add('weField');
   a.classList.add('mt-2');
   a.setAttribute('rows',3);
   a.setAttribute('placeholder','enter here');

   let c=document.getElementById('ad');
   let b=document.getElementById('weAddButton');

   c.insertBefore(a,b);
}
function AddNewAQField(){
    let a=document.createElement('textarea');
    a.classList.add('form-control');
    a.classList.add('eqField');
    a.classList.add('mt-2');
    a.setAttribute('rows',3);
    a.setAttribute('placeholder','enter here');
 
    let c=document.getElementById('ad1');
    let b=document.getElementById('aqAddButton');
 
    c.insertBefore(a,b);
 }

 function GenerateCV(){
    
  let nameField=document.getElementById('nameField').value;

  let nameT1=document.getElementById('nameT1')
   nameT1.innerHTML=nameField;
   document.getElementById('nameT2').innerHTML=nameField;

   document.getElementById('contactT').innerHTML=document.getElementById('contactField').value;

   document.getElementById('addressT').innerHTML=document.getElementById('addressField').value;

   document.getElementById('gmT').innerHTML=document.getElementById('mailField').value;

   document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;

   document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;

   document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

   let we=document.getElementsByClassName('weField')
   let str=''
   for(let e of we){
      str=str+`<li>${e.value}</li>`
   }
   document.getElementById('WeT').innerHTML=str;

   let aq=document.getElementsByClassName('eqField')

   let str1=''

   for(let e of aq){
      str1+=`<li>${e.value}</li>`
   }
   document.getElementById('AqT').innerHTML=str1;


   document.getElementById('cv-form').style.display='none';
   document.getElementById('cv-template').style.display='block';
 }
 function PrintCV(){
   window.print();
 }