(function(){

    function moveDecimal(value, precision){

        value = value.toString();

        if (precision === 0){
            return Math.round(value);
        }

        var arr = value.split('');
        var indexOfPoint = arr.indexOf('.');

        if (indexOfPoint === -1){
            indexOfPoint = arr.length;
        } else {
            arr.splice(indexOfPoint, 1);
        }

        newIndexOfPoint = indexOfPoint + precision;

        if (newIndexOfPoint > arr.length){
            while (newIndexOfPoint > arr.length) {
                arr.push('0');
            }
        }

        if (newIndexOfPoint < 1){
            while (newIndexOfPoint < 1){
                arr.unshift('0');
                newIndexOfPoint++;
            }
        }

        arr.splice(newIndexOfPoint, 0, '.');
        return arr.join('');
    }

    function myToFixed(value, precision){
        value = moveDecimal(value, precision);
        value = Math.round(value);
        value = moveDecimal(value, -precision);

        return value;
    }

    window.myToFixed = myToFixed;
})();