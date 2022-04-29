function asyncLoop(myArray,action,time){
   let firstTime = 0;
   myArray.forEach(element => {
       setTimeout(() => action(element), firstTime);
       firstTime+=time;
   });
}
module.exports = asyncLoop