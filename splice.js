
let splice=function(arr,start=0,deleteCount=arr.length-start, item1=null, item2=null){
    let del=[]
      let arr1=[]
      let counter=0
      if(arr!==null)
      for(start;start<arr.length;start+=1)
      { 
      if(deleteCount!==counter){
      del.push(arr[start])
      arr[start]=null
      counter+=1
      }
      }
    
    if(item1!==null)
    arr1.push(item1)
    if(item2!==null)
    arr1.push(item2)
    
      for(let i in arr)
      if(arr[i]!==null)
      arr1.push(arr[i])
    
    // console.log(del)
      arr=arr1
    return arr
    }
    
    let arr = [1,2,3]
    //delete 1 elment
    arr=splice(arr,0,1); //should be [2,3]
    console.log(arr)
    // returns array of deleted elements
    // splice(arr,1); //[2,3]
    //delete all
    // arr=splice(arr)//[]
    // add 1 element
    // arr=splice(arr, 0,0,0); //should be [0,1,2,3]
    // add 2 elements
    // arr=splice(arr,0,0,-1,0); //should be [-1,0,1,2,3]
    // delete all elements from index to end
    // arr=splice(arr,1);  //should be [1] 
    // returns an array of the deleted element (1 element)
    //  splice(arr,1,1); //should be [2] 
    