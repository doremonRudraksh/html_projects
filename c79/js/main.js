name_of_the_student_array = [];

function submit(){

    for(var j=1; j<=4; j++){
        var name_of_the_student = document.getElementById("name_of_the_student"+j).value;
        name_of_the_student_array.push(name_of_the_student);
        console.log(name_of_the_student);


    }
    
    console.log(name_of_the_student_array);

    document.getElementById("display_names").innerHTML = name_of_the_student_array;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display_names").innerHTML = name_of_the_student_array;
}

    
