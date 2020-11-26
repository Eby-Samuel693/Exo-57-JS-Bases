let nb1 = +prompt("choisi 1 nombre a virgule");
let nb2 = +prompt("choisi un 2eme nombre");

if(nb1 ===parseInt(nb1) && nb2 ===parseInt(nb2)) {
    alert("recommence!");
}
else {
    let nb3 = (parseInt(nb1) * nb2);
    alert(nb3);
}

/*parseInt converti la variable en entier*/