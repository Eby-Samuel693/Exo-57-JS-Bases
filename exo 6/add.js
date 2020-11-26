let age = +prompt("quel est votre age ?");

if( age ===parseInt(age)) {
    if(age < 0) {
        alert("vous ne pouvez pas avoir d'age négatif");
    }

    else if(age < 18) {
        alert("vous etes mineur!");
    }

    else {
        alert("vous etes majeur!");
    }
}