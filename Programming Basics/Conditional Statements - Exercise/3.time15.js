function hm(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let newhours = 0;
    let newminutes = 0;

    if (hours >= 0 & hours < 23) {

        if (minutes >= 0 & minutes <= 44) {
            let newminutes = minutes + 15;
            console.log(`${hours}:${newminutes}`);
        } else if (minutes > 44 & minutes <= 54) {
            let newhours = hours + 1;
            let newminutes = (minutes + 15) % 60;
            console.log(`${newhours}:0${newminutes}`);
        } else if (minutes > 54) {
            let newhours = hours + 1;
            let newminutes = (minutes + 15) % 60;
            console.log(`${newhours}:${newminutes}`);
        }
    } else if (hours = 23) {
        if (minutes >= 0 & minutes <= 44) {
            let newminutes = minutes + 15;
            console.log(`${hours}:${newminutes}`);
        } else if (minutes > 44 & minutes <= 54) {
            let newminutes = (minutes + 15) % 60;
            console.log(`0:0${newminutes}`);
        } else if (minutes > 54) {
            let newminutes = (minutes + 15) % 60;
            console.log(`0:${newminutes}`);
        }
    }
}

hm(["23", "54"]);