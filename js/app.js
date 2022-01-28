'use strict';



function Employee(employeeId,fullName,department,level,imageurl) {

    
    this.employeeId=employeeId;
    this.fullName=fullName;
   this.department=department;
    this.level=level;
    this.imageurl=imageurl;
 
    this.salary=this.salary()*0.925;


}

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
   
    document.write(`<div style="background-color: rgb(2, 70, 2); width: 200px; flex: content;"> <img src="${this.imageurl}" alt="${this.fullName}" style="height: 20vh; background-color: green; border-radius: 500px;"> <p>Name:${this.fullName}</p> <p> ID:${this.employeeId} <br> Department:${this.department} Level:${this.level} <br> salary:${this.salary}  </p> </div>  `)
   
    
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
    return Math.floor(Math.random() * (9999 - 1000 ) ) + 1000;
  }
  console.log(getRndInteger());

  




 














 let infoForm = document.getElementById('infoForm').addEventListener('submit', addyourinfo);

 function addyourinfo(event) {
    event.preventDefault();
    let fullName = event.target.namE.value;
    let deb = event.target.deb.value;
    let lEvel = event.target.lEvel.value;
    let imageurl = event.target.imagEurl.value;
   
 }
 