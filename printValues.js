function printValues(promise) {
    promise
        .then(function(p){
            p.forEach(element => {
                console.log(element)
            });
        })
        .catch(function(e){
            console.log(e);
        })
}

module.exports = printValues;