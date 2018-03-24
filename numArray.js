function numbersOnly(arr){

  for (var i = 0; i < arr.length; i++){
    if (typeof arr[i] === "number"){
      console.log(arr[i]);
    }
  }
}
