

    // 1. Zapisz zmienną z liczbą wartością 45, dodaj instrukcję if która sprawdzi czy liczba jest większa
    // od 70. Gdy warunek jest spełniony w konsoli pojawi się "liczba jest większa od 70", w przeciwnym razie po else
    // konsola pokaże, że liczba jest mniejsza.

    number = 45
    if (number > 70) {
        console.log("liczba jest większa od 70")
    } else {
        console.log("liczba jest mniejsza of 70")
    }
    

    // 2. Stwórz kolejną konstrukcję if else ale sprawdź kilka warunków: 
    // - jeśli liczba jest mniejsza od 45 to info w log
    // - jeśli liczba jest równa 45 to log
    // - jeśli liczba jest mniejsza od 90 to log
    // - końcowy else z info, że liczba jest większa lub równa 90

    number = 45

    if (number < 45) {
        console.log("liczba jest mniejsza od 45")
    } else if (number == 45) {
        console.log("liczba równa się 45")
    } else if (number < 90) {
        console.log("liczba jest mniejsza od 90")
    } else {
        console.log("liczba jest większa lub równa 90")
    }



