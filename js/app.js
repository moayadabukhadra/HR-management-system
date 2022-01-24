'use strict';



function Employee(employeeId,fullName,department,level,imageurl,salary) {

    
    this.employeeId=employeeId;
    this.fullName=fullName;
   this.department=department;
    this.level=level;
    this.imageurl=imageurl;
    this.salary=salary;
    
    
    
   
}


var fullName=["Ghazi Samer","Lana Ali","Tamara Ayoub","Safi Walid","Omar Zaid","Rana Saleh","Hadi Ahmad"];
var employeeId=["1000","1001","1002","1003","1004","1005","1006"]
var department=["Administration","Finance","Marketing","Administration","Development","Development","Finance"]
var level =["Senior","Senior","Senior","Mid-senior","Senior","Junior","Mid-senior"]
var imageurl=["","","","","","",""]
var minimum = [1500,1500,1500,1000,1500,500,1000]
var maximum =[2000,2000,2000,1500,2000,1000,1500]
var i=0



for(i=0 ; i<=6 ; i++){

    

function getRandomInt(min, max) {
    min = Math.ceil(minimum[i]);
max = Math.floor(maximum[i]);
return Math.floor(Math.random()* (maximum[i] - minimum[i]) + minimum[i]);


}


let Tax = getRandomInt()*(7.5/100);

let netSalary =getRandomInt() - Tax;




    const employeeInfo =new Employee(employeeId[i],fullName[i],department[i],level[i],imageurl[i],netSalary)

        Employee.prototype.render = function(){

            document.write(`<p> employee name:${this.fullName}  </p>`)
        }
        employeeInfo.render();
        
        Employee.prototype.render = function(){
            document.write(`<p>salary: ${this.salary} </p>`)
        
        }
        employeeInfo.render();
    }







    

