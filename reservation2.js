let checkReservation=function(){
let reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  }
  let name = document.getElementById("inputId").value
  //let name = prompt('Please enter the name for your reservation');
  let j=0
  for(let i in reservations){
  
   if(name.toLowerCase()===i.toLowerCase()){
  
  if(!reservations[i].claimed)
  {
     alert("welcome");
    break
  }
  else{
    alert("Hmm, someone already claimed this reservation")
  break
  
  }
  }
  
  else {
  
  j+=1
  
  if(j===Object.keys(reservations).length){
    alert(name+" You have no reservation")
  reservations[Object.keys(reservations).length+1]=name
  reservations[name]={ claimed: true }
  alert("welcome now u have")
  console.log(reservations)
  // console.log(Object.keys(reservations).length+1)
  }
  }
  }
}