var bachelors = ["Wraith", "Spirit", "Huntress", "Claudette", "Dwight", "Bubba", "Michael Meyers", "Crow Mommy", "Freddy Krueger"]

function shuffleBachelors (array){

    var bachelorDiv = $("#displayCard")

    //array for bachelors that have been picked
    var newArray = []

    //clearing each time button is pressed
    $(bachelorDiv).text("")
    for(i=3;i>0;i--){

    //randomizing the bachelor while still only picking 3 from the array
    var bachelor = Math.floor(Math.random() * array.length)
    var newBachelor = array[bachelor]
    var newDiv = $("<div>" + newBachelor + "</div>")

    //Here I am pushing the bachelor into the array so I can check for recurring bachelors later
    //newArray.push(newBachelor)

    if (newArray.indexOf(newBachelor) === -1){
        newArray.push(newBachelor)
        $(bachelorDiv).append(newDiv)
        console.log(bachelor)
    }
    else{
        i=i+1
    }

    //console logging for checks
    console.log(newArray)
    console.log(newDiv)
    
    //rendering them on screen
    // $(bachelorDiv).append(newDiv)
    // console.log(bachelor)
      
}
}

//calling the function with our array
shuffleBachelors(bachelors)