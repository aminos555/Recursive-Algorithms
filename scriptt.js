



function facto(n) {
    if (n == 1 ) {
        return 1
    }else {
        return n* facto(n - 1)
    }
}
console.log(facto(5))









function LeapYear(Leap) {
    
    if ((Leap % 4 == 0 && Leap % 100 != 0) || (Leap % 400 == 0)) {
        return "Leap year";
    } else {
        return "Not a leap year";
    }
}

console.log(LeapYear(2021));  




function TicketPrice(user) {

    if (user <= 12 ) {
        return "User is childern ticket = 10$"

    }if (user > 13 && user <=17 ) {
        return "User is Teenage ticket = 15$"
    }else{
        return "User is adult ticket = 20$"
    }
}
console.log(TicketPrice(21))







function clothAdviser(Adv) {

    if (Adv <= 15 ) {
        return "You can Wear  'Winter Coat' & 'Thermal Sweater' & 'Boots' "

    }if (Adv > 15 && Adv <= 40) {
        return "You can Wear 'Light Jacket' & 'Long-Sleeve Shirt' & 'Jeans' "

    }else {
        return "Dont go Out"
    }
}

console.log(clothAdviser(7))





function fibonatchi(fibo) {

    if (fibo == 1) {
        return 1

    }else {
        return fibo * fibonatchi(fibo - 1)
    }
}

console.log(fibonatchi(5))



function reverce(rev) {
    rev = rev.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    if (rev  ) {
        
    }
}



