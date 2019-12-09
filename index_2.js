function isValid(ip) {
    try {
        var parts = ip.split('.');

        var min = 0x01000000;
        var max = 0xFFFFFFFF;

        if (parts.length !== 4) return false;

        var hex = parts.map(num => {
            if (num > 255 || num < 0) {
                return max.toString(16);
            }
            return (+num).toString(16);
        }).join('');

        hex = parseInt(hex, 16);

        return hex > min && hex < max;
    } catch (err) {
        return false;
    }
}
