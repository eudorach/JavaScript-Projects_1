function displayType(character) {
    var characterType=character.getAttribute("data-movie_name");
    alert(characterType+" is made by " + character.innerHTML + "!");
}