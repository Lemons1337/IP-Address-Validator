function isValid(ip) {
    // Check if ip has any forbidden characters
    if (ip === ip.replace(/[^0-9.]/gi, '')) {
        if (ip.split(".") && ip.split(".")[3]) {
            // split ip into an array
            var list = ip.split(".");
            a = 0;
            // check each value of the array
            list.forEach(g => {
                if (parseInt(g) < 255) {
                    a++;
                }
            });
            // check if each value passed the forEach loop
            if (a === 4) {
                return true
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}
