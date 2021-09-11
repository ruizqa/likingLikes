likes = document.querySelector("h3 span")
likes_array = document.querySelectorAll("h3 span")

addLike = function(element){
    number = parseInt(element.innerText);
    number +=1;
    element.innerText = number;


}

