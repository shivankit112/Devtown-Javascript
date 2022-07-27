//Create a array of  country objects having name capital and population as properties.
//Print the countries whose population is less than 2000

let country = [
    {
        Name: "India",
        capital: "Delhi",
        pupulation: "1250"
        
    },
    
    {
        Name: "America",
        capital: "Washinton D.C",
        pupulation: "3450"
    },
    
    {
        Name: "china",
        capital: "Tokyo",
        pupulation: "1150"
    },
    
    {
        Name: "Australia",
        capital: "canberra",
        pupulation: "4000"
    }
    ]
     for (let i = 0; i < country.length; i++) {
        if (country[i].pupulation<2000) {
            console.log(country[i].Name)
        }
           
     }