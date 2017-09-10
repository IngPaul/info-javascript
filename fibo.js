function fibo(num) {

    var var1 = 0;
    var var2 = 1;
    var var3 = 0;

    document.write(var1 + "<br>");
    document.write(var1 + "<br>");

    for (var i=1; i<=num; i++) {
        var3 = var1 + var2;
        var1 = var2;
        var2 = var3;
        document.write(var3 + "<br>");
        
    }

    
}