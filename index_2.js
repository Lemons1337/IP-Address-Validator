function isValid(ip) {
    try {
        var parts = ip.split('.');
        if (parts.length !== 4) return false;
        
        var min = 0x01000000;
        var max = 0xFFFFFFFF;
        
        var hex = parts.reduce((a, b) => {
            var int = Number(b);
            return int + (a << 8);
        });
        
        hex >>>= 0;

        return hex > min && hex < max;
    } catch (err) {
        return false;
    }
}
