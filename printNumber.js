function printNumber(promise) {
    promise
        
        .then(function(r){
            if(typeof r === 'number'){
               console.log(`Number: ${r}`);
            }
        
        })
        .catch(function(e){
            console.log('There was an error');
        })
        .finally(function(f){
            console.log('-- All done --')
        })
}

module.exports = printNumber;