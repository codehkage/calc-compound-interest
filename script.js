window.onload = function() {
    function calInstrest(init_amount, rate, year) {
        var final = 0;
        var temp = init_amount;
        var compoundInt = new Array();
        for (var i = 0; i < year; i++) {
            year_value = rate / 100 * init_amount;
            new_pp = init_amount + year_value;
            init_amount = new_pp;
            compoundInt.push(Math.floor(init_amount));
        }
        // return ;
        for (var i = 0; i < compoundInt.length; i++) {
            final = parseInt(compoundInt[i]);
        }
        var answr = final - temp;
        return compoundInt + " and final anser is N" + answr;
    }

    function find() {
        var parseAmount = document.getElementById('amount').value;
        var parseRate = document.getElementById('rate').value;
        var parseYear = document.getElementById('year').value;
        var amount = parseFloat(parseAmount);
        var rate = parseFloat(parseRate);
        var year = parseFloat(parseYear);
        if (amount == " " && rate == " " && year == " ") {
            return "empty fill all fields";
        }

        document.getElementById('answer').innerText = calInstrest(amount, rate, year);
    }

    // calInstrest(5000, 5, 4);
    document.getElementById('amount').addEventListener('keyup', function() {
        find();
    });

    document.getElementById('rate').addEventListener('keyup', function() {
        find();
    });

    document.getElementById('year').addEventListener('keyup', function() {
        find();
    });


}