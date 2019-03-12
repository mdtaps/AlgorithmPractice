//Solution for Vasya Clerk Kata on CodeWars.com
//https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8
function tickets(peopleInLine){
    peopleInLine.reduce((changeAvailable, cashTendered, temp, lineArray) => {
        var breakReduce = false;
        debugger;
        switch(cashTendered) {
            case 25:
                changeAvailable.unshift(25);
                break;
            case 100:
                if(changeAvailable.length > 1) {
                    var change = changeAvailable.pop();
                    debugger;
                    switch(change) {
                        case 25:
                            if(changeAvailable.length > 1) {
                                changeAvailable.shift();
                                changeAvailable.shift();
                            } else {
                                breakReduce = true;
                            }
                            break;
                        case 50:
                            changeAvailable.shift();
                            break;
                    }
                    break;
                } else {
                    breakReduce = true; //Breaks out of reduce
                    break;
                }
            case 50:
                if(changeAvailable.length > 0 && changeAvailable[0] === 25) {
                    changeAvailable.shift();
                    changeAvailable.push(50);
                } else {
                    breakReduce = true; //Breaks out of reduce
                }
                break;
        }
        if(breakReduce) {
            lineArray.splice(0, 0, "NO");
        }
        return changeAvailable;
    }, []);

    if(peopleInLine[0] === "NO") {
        return "NO";
    } else {
        return "YES";
    }
}