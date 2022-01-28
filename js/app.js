'use strict';



function Employee(employeeId,fullName,department,level,imageurl) {

    
    this.employeeId=employeeId;
    this.fullName=fullName;
   this.department=department;
    this.level=level;
    this.imageurl=imageurl;
 
    this.salary=this.salary()*0.925;

Employee.allEmployees.push(this);

}
Employee.allEmployees=[];

Employee.prototype.salary = function(){
if (this.level=="Senior"){
return Math.floor(Math.random()*(2000-1500))+1500;

}
else if (this.level=="Mid-senior"){

    return Math.floor(Math.random()*(1500-1000))+1000;

  }
  else if (this.level=="Junior"){
  return Math.floor(Math.random()*(1000-500))+500;

}

}

  Employee.prototype.render = function(){

    let formEl = document.getElementById('form');
    let divEl=document.createElement('div');
    formEl.appendChild(divEl);

    let imgEl = document.createElement('img');
    divEl.appendChild(imgEl);
    imgEl.setAttribute('src', this.imageurl)

  imgEl.setAttribute('alt',this.fullName);
  imgEl.style.height="20VH"

  let nameEl= document.createElement('p')
  divEl.appendChild(nameEl);
  let debEl = document.createElement('p');
  divEl.appendChild(debEl);

let salEl=document.createElement('p');
divEl.appendChild(salEl);


  nameEl.textContent= `Name:${this.fullName}         ID:${this.employeeId}`
debEl.textContent=`Department:${this.department}     level:${this.level}`
salEl.textContent=`salary:${this.salary}`
divEl.style.backgroundColor="green";
imgEl.style.borderRadius="400px";
divEl.style.width="35vh"

    

   
    
  }
  
  const ghazi =new Employee ("1000","Ghazi Samer","Administration","Senior","images/Ghazi.jpg");
  const lana =new Employee ("1001","Lana Ali","Finance","Senior","images/Lana.jpg");
  const tamara =new Employee ("1002","Tamara Ayoub","Marketing","Senior","images/Tamara.jpg");
  const safi =new Employee ("1003","Safi Walid","Administration","Mid-senior","images/Safi.jpg");
  const omar =new Employee ("1004","Omar Zaid","Development","Senior","images/Omar.jpg");
  const rana =new Employee ("1005","Rana Saleh","Development","Junior","images/Rana.jpg");
  const hadi =new Employee ("1006","Hadi Ahmad","Finance","Mid-senior","images/Hadi.jpg");
  let allEmployee=[ghazi,lana,tamara,safi,omar,rana,hadi]
  for (let i =0 ;i<allEmployee.length ; i++){

    allEmployee[i].render();

  
  }
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (9999 - 1000 )+1 ) + 1000;
  }
  console.log(getRndInteger());




  let infoForm = document.getElementById('infoForm').addEventListener('submit', addyourinfo);

 function addyourinfo(event) {
    
    event.preventDefault();
    let fullName = event.target.name.value;
    let department = event.target.deb.value;
    let level = event.target.level.value;
    let imageurl = event.target.imagEurl.value;
let salary =this.salary
    const newEmployee = new Employee(getRndInteger(),fullName,department,level,imageurl,salary);
    newEmployee.render();
    settingitem();
 }
 
 function settingitem(){

    let data=JSON.stringify(Employee.allEmployees);
    localStorage.setItem('employees',data)
 }
 
 function gettingitem(){
     let gotData=localStorage.getItem('employees');
     
     let parseData = JSON.parse(gotData);
     if (parseData !==null){
         Employee.allEmployees=parseData;
        
     }
   
     
 }
 
 gettingitem();
