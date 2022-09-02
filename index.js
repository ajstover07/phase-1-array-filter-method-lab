    const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];
    //const result = drivers.filter(drivers => drivers.length > 6);
    function findMatching(source, driver) {
        return source.filter(
            (possibleMatch) => possibleMatch.toLowerCase() === driver.toLowerCase()
        ) 
    } 

    function fuzzyMatch(source, string) {
        return source.filter((possibleMatch) => possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0)
    }
    
    function matchName(source, driverName){
        return source.filter((record) => record.name === driverName)
    }
  
 
    


    
//should take an array of drivers' names and a string as an argument
//return the matching list of drivers
//function should be case insensitive



