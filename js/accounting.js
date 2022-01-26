'use strict';


let deb =["Administration","Finance","Marketing","Development"];
let adm=[2,2,1,2];

let mini=[2500,2500,1500,2000];
let maxi=[3500,3500,2000,3000];
  let avgSalary=[];
  let totalSalary=[];
    for(let i=0 ; i<deb.length;i++){

        function getRandomInt(min, max) {
            min = Math.ceil(mini[i]);
        max = Math.floor(maxi[i]);
        return Math.floor(Math.random()* (maxi[i] - mini[i]) + mini[i]);
        }

     

if (deb[i]= "Administration" || "Finance") {

 

 
totalSalary[i]=getRandomInt()*2

  
    avgSalary[i]=((getRandomInt())/2);





    }
else if (deb[i] = "Marketing"){

    totalSalary[i]=getRandomInt()*1[i]

 avgSalary[i]=getRandomInt()[i];


}
else if (deb[i]="Development"){

  
    totalSalary[i]=getRandomInt()*2

     avgSalary[i]=(getRandomInt()[i]/2);
    
}

}  

console.log(avgSalary);
console.log(totalSalary);



let tableEL = document.createElement('table');
debTable.appendChild(tableEL);

let trEl = document.createElement('tr');
  tableEL.appendChild(trEl);

  let thEL = document.createElement('th');
  trEl.appendChild(thEL);
  thEL.textContent= "Department Name"

  let th1EL = document.createElement('th');
  trEl.appendChild(th1EL);
  th1EL.textContent= "Number of employees"

  let th2EL = document.createElement('th');
  trEl.appendChild(th2EL);
  th2EL.textContent= "Average salary"

  let th3EL = document.createElement('th');
  trEl.appendChild(th3EL);
  th3EL.textContent= "Total salary"

  

 for(let i=0; i<4 ;i++){

    let tr1El = document.createElement('tr');
    tableEL.appendChild(tr1El);

    let tdEL = document.createElement('td');
    tr1El.appendChild(tdEL);

    tdEL.textContent= deb[i];

    let td1EL = document.createElement('td');
    tr1El.appendChild(td1EL);
    td1EL.textContent= adm[i];

    let td2EL = document.createElement('td');
    tr1El.appendChild(td2EL);
    td2EL.textContent= avgSalary[i];

    let td3EL = document.createElement('td');
    tr1El.appendChild(td3EL);
    td3EL.textContent= totalSalary[i];
 }

    let sum=0;

    for (let index=0 ; index <adm.length ; index++ ){
   sum = sum + adm[index];
    
   
}

console.log(sum);

let sum1=0;

for (let index=0 ; index <avgSalary.length ; index++ ){
sum1 = sum1 + avgSalary[index];


}

console.log(sum1);



 
 let table1EL = document.createElement('table');
 newTable.appendChild(table1EL);


 let tr3El = document.createElement('tr');
 table1EL.appendChild(tr3El);

 let th4EL = document.createElement('th');
  tr3El.appendChild(th4EL);
  th4EL.textContent= "T #employees" 

  let th5EL = document.createElement('th');
  tr3El.appendChild(th5EL);
  th5EL.textContent= "T avg salary "

  let th6EL = document.createElement('th');
  tr3El.appendChild(th6EL);
  th6EL.textContent= "T salary"

  

   