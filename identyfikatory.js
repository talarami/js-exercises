 // To co ma się pojawić na stronie zawieramy w "ramce" od script do script, wszystko co wyżej jest podkładką do wyświetlenia strony.

        /*
            Identyfikator to nazwa zmiennej, którą nadajemy. 
            Musi zaczynać się dużą literą,małą literą,
            podkreśleniem lub znakiem $. Nazwy zmiennych nie
            mogą mieć kropki, spacji czy przecinka. 
            Identyfikatorem nie mogą być również słowa
            kluczowe np.: let, for etc bo powstanie błąd JS
        */ 

        let data = 10;
        //let da.ta2 = 10; // Uncaught SyntaxError: Unexpected token '.' 
        //let da ta3 = 10; // Uncaught SyntaxError: Unexpected entifier 'ta3' 
        //let 11data = 123; // caught SyntaxError: Invalid or unexpected token 
        //let %data5 = 21356; // błąd
        //let #data5 = 21356; // błąd

        let info = 123
        let Info = 345

        let _str = "Adam"
        let $name = "Ola"

        //let let = 4653;
        //let for = 546;

        let sdf567sdfg = "Kasia" 
        let studentNameFromSchool = "Kasia" // camelCase - kolejne słowa w ciągu identyfikatora są z dużej litery


