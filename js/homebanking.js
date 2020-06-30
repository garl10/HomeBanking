//Declaración de variables
var nombreUsuario = "Guillermo Romero";
var saldoCuenta = 10000;
var codigoDeSeguridad = "1234";
var limiteExtraccion = 3000;
iniciarSesion();

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}
// Función que sume dinero a la cuenta.
function sumarDinero(dineroDepositado) {
    saldoCuenta += dineroDepositado;
}
// Función que reste dinero de la cuenta.
function restarDinero(dineroExtraido) {
    saldoCuenta -= dineroExtraido;
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt("Ingrese el nuevo limite de extracción"));
    if (isNaN(nuevoLimite) || nuevoLimite <= 0) {
        return alert("Debe ingresar un número valido.");
    }
    limiteExtraccion = nuevoLimite;
    alert("Nuevo limite de extracción: $" + nuevoLimite);
    actualizarLimiteEnPantalla();
}


function extraerDinero() {
    var cantidadAExtraer = parseInt(prompt("Ingrese la cantidad a extraer."));
    if (isNaN(cantidadAExtraer) || cantidadAExtraer <= 0) {
        return alert("Debe ingresar un número valido.");
    }
    if (cantidadAExtraer % 100 != 0) {
        return alert("Solo es posible retirar dinero en multiplos de cien");
    }
    var saldoAnterior = saldoCuenta;
    if (cantidadAExtraer > limiteExtraccion) {
        return alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extracción.");
    } else if (cantidadAExtraer <= saldoCuenta) {
        restarDinero(cantidadAExtraer);
        actualizarSaldoEnPantalla();
        alert("Saldo anterior: $" + saldoAnterior + "\n" + "Saldo Actual: $" + saldoCuenta + "\n" + "Monto Extraido: $" + cantidadAExtraer);
    } else {
        return alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
    }
}

function depositarDinero() {
    var cantidadADepositar = parseInt(prompt("Ingrese la cantidad a depositar."));
    if (isNaN(cantidadADepositar) || cantidadADepositar <= 0) {
        return alert("Debe ingresar un número valido.");
    }
    var saldoAnterior = saldoCuenta;
    sumarDinero(cantidadADepositar);
    actualizarSaldoEnPantalla();
    alert("Saldo anterior: $" + saldoAnterior + "\n" + "Saldo Actual: $" + saldoCuenta + "\n" + "Monto Depositado: $" + cantidadADepositar);
}

function pagarServicio() {
    var agua = 350;
    var telefono = 425;
    var luz = 210;
    var internet = 570;
    var saldoAnterior = saldoCuenta;
    var servicio = prompt("Ingrese el numero que corresponda con el servicio que desea pagar." + "\n" + "1 - Agua." + "\n" + "2 - Telefono." + "\n" + "3 - Luz" + "\n" + "4 - Internet.");

    function haySaldoDisponible(servicio) {
        if (servicio <= saldoCuenta) {
            restarDinero(servicio);
        } else {
            return alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
        }
    }

    switch (servicio) {
        case "1":
            haySaldoDisponible(agua);
            alert("Has pagado el servicio Agua." + "\n" + "Saldo anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + agua + "\n" + "Saldo actual: $" + saldoCuenta);
            break;
        case "2":
            haySaldoDisponible(telefono);
            alert("Has pagado el servicio telefono." + "\n" + "Saldo anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + telefono + "\n" + "Saldo actual: $" + saldoCuenta);
            break;
        case "3":
            haySaldoDisponible(luz);
            alert("Has pagado el servicio luz." + "\n" + "Saldo anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + luz + "\n" + "Saldo actual: $" + saldoCuenta);
            break;
        case "4":
            haySaldoDisponible(internet);
            alert("Has pagado el servicio internet." + "\n" + "Saldo anterior: $" + saldoAnterior + "\n" + "Dinero descontado: $" + internet + "\n" + "Saldo actual: $" + saldoCuenta);
            break;
        default:
            alert("El numero seleccionado no corresponde a ningun servicio.")
    }
    actualizarSaldoEnPantalla();
}

function transferirDinero() {
    var cuentaAmiga1 = 1234567;
    var cuentaAmiga2 = 7654321;
    var montoATransferir = parseInt(prompt("Ingrese el monto a transferir"));
    if (isNaN(montoATransferir) || montoATransferir <= 0) {
        return alert("Debe ingresar un número valido.");
    }
    if (montoATransferir > saldoCuenta) {
        return alert("No se puede transferir esa cantidad de dinero");
    } 
    var cuentaAmiga = parseInt(prompt("Ingrese el numero de cuenta al que desea transferir el dinero:"));
    if (cuentaAmiga === cuentaAmiga1) {
        restarDinero(montoATransferir);
        actualizarSaldoEnPantalla();
        alert("Se han transferido $" + montoATransferir + "\n" + "Cuenta destino: " + cuentaAmiga);
    } else if (cuentaAmiga === cuentaAmiga2) {
        restarDinero(montoATransferir);
        actualizarSaldoEnPantalla();
        alert("Se han transferido $" + montoATransferir + "\n" + "Cuenta destino: " + cuentaAmiga);
    } else {
        alert("Solo puede transferirse dinero a una cuenta amiga.");
    }
}

function iniciarSesion() {
    var codigo = prompt("Ingrese el codigo de su cuenta: 1234");
    if (codigoDeSeguridad === codigo) {
        return alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones.");
        actualizarSaldoEnPantalla();
    } else {
        saldoCuenta = 0;
        alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
        actualizarSaldoEnPantalla();
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
