let menu1 = document.querySelector("#menu1");
function restart() {
    location.reload();
}
function somar() {
    menu1.innerHTML = "";
    let n1 = document.createElement("input");
    let n2 = document.createElement("input");
    let btn = document.createElement("input");
    let res = document.createElement("p");
    btn.addEventListener("click", fazerSoma);
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "Somar");
    n1.setAttribute("type", "number");
    n2.setAttribute("type", "number");
    btn.setAttribute("id", "btn");
    n1.setAttribute("id", "n1");
    n2.setAttribute("id", "n2");
    menu1.appendChild(n1);
    menu1.appendChild(n2);
    menu1.appendChild(btn);
    menu1.appendChild(res);
    // restart
    let reiniciar = document.createElement("input");
    reiniciar.setAttribute("type", "button");
    reiniciar.setAttribute("value", "Voltar");
    menu1.appendChild(reiniciar);
    reiniciar.addEventListener("click", restart);
    function fazerSoma() {
        if (n1.value === "" || n2.value === "") {
            alert("[ERROR] Digite um número válido.");
            return;
        }
        let soma = Number(n1.value) + Number(n2.value);
        res.innerHTML = `A soma de ${Number(n1.value)} e ${Number(
            n2.value
        )} é ${soma}`;
    }
}
function subtrair() {
    menu1.innerHTML = "";
    let n1 = document.createElement("input");
    let n2 = document.createElement("input");
    let btn = document.createElement("input");
    let res = document.createElement("p");
    btn.addEventListener("click", fazerSubtracao);
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "Subtrair");
    n1.setAttribute("type", "number");
    n2.setAttribute("type", "number");
    btn.setAttribute("id", "btn");
    n1.setAttribute("id", "n1");
    n2.setAttribute("id", "n2");
    menu1.appendChild(n1);
    menu1.appendChild(n2);
    menu1.appendChild(btn);
    menu1.appendChild(res);

    // restart

    let reiniciar = document.createElement("input");
    reiniciar.setAttribute("type", "button");
    reiniciar.setAttribute("value", "Voltar");
    menu1.appendChild(reiniciar);
    reiniciar.addEventListener("click", restart);
    function fazerSubtracao() {
        if (n1.value === "" || n2.value === "") {
            alert("[ERROR] Digite um número válido.");
            return;
        }
        let subtracao = Number(n1.value) - Number(n2.value);
        res.innerHTML = `A subtração de ${Number(n1.value)} e ${Number(
            n2.value
        )} é ${subtracao}`;
    }
}
function dividir() {
    menu1.innerHTML = "";
    let n1 = document.createElement("input");
    let n2 = document.createElement("input");
    let btn = document.createElement("input");
    let res = document.createElement("p");
    btn.addEventListener("click", fazerDivisao);
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "Dividir");
    n1.setAttribute("type", "number");
    n2.setAttribute("type", "number");
    btn.setAttribute("id", "btn");
    n1.setAttribute("id", "n1");
    n2.setAttribute("id", "n2");
    menu1.appendChild(n1);
    menu1.appendChild(n2);
    menu1.appendChild(btn);
    menu1.appendChild(res);
    let reiniciar = document.createElement("input");
    reiniciar.setAttribute("type", "button");
    reiniciar.setAttribute("value", "Voltar");
    menu1.appendChild(reiniciar);
    reiniciar.addEventListener("click", restart);
    function fazerDivisao() {
        if (n1.value === "" || n2.value === "") {
            alert("[ERROR] Digite um número válido.");
            return;
        }
        let divisao = Number(n1.value) / Number(n2.value);
        res.innerHTML = `${Number(n1.value)} dividido por ${Number(
            n2.value
        )} é ${divisao}`;
    }
}
function potencia() {
    menu1.innerHTML = "";
    let n1 = document.createElement("input");
    let n2 = document.createElement("input");
    let btn = document.createElement("input");
    let res = document.createElement("p");
    btn.addEventListener("click", calcularPotencia);
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "Potenciar");
    n1.setAttribute("type", "number");
    n2.setAttribute("type", "number");
    btn.setAttribute("id", "btn");
    n1.setAttribute("id", "n1");
    n2.setAttribute("id", "n2");
    menu1.appendChild(n1);
    menu1.appendChild(n2);
    menu1.appendChild(btn);
    menu1.appendChild(res);
    let reiniciar = document.createElement("input");
    reiniciar.setAttribute("type", "button");
    reiniciar.setAttribute("value", "Voltar");
    menu1.appendChild(reiniciar);
    reiniciar.addEventListener("click", restart);
    function calcularPotencia() {
        if (n1.value === "" || n2.value === "") {
            alert("[ERROR] Digite um número válido.");
            return;
        }
        let potencia = Number(n1.value) ** Number(n2.value);
        res.innerHTML = `${Number(n1.value)} elevado a ${Number(
            n2.value
        )} é ${potencia}`;
    }
}
function fatorial() {
    menu1.innerHTML = "";
    let n1 = document.createElement("input");
    let btn = document.createElement("input");
    let res = document.createElement("p");
    btn.addEventListener("click", calcularFatorial);
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "Fatorar");
    n1.setAttribute("type", "number");

    btn.setAttribute("id", "btn");
    n1.setAttribute("id", "n1");

    menu1.appendChild(n1);

    menu1.appendChild(btn);
    menu1.appendChild(res);
    let reiniciar = document.createElement("input");
    reiniciar.setAttribute("type", "button");
    reiniciar.setAttribute("value", "Voltar");
    menu1.appendChild(reiniciar);
    reiniciar.addEventListener("click", restart);
    function calcularFatorial() {
        if (n1.value === "") {
            alert("[ERROR] Digite um número válido.");
            return;
        }
        n2 = Number(n1.value);
        let contador = n2;
        if (n2 == 0) {
            res.innerHTML = `O fatorial de ${n2} é 1`;
        } else {
            for (let c = n2 - 1; c > 0; c--) {
                contador *= c;
            }
            res.innerHTML = `O fatorial de ${n2} é ${contador}`;
        }
    }
}

function multiplicar() {
    menu1.innerHTML = "";
    let n1 = document.createElement("input");
    let n2 = document.createElement("input");
    let btn = document.createElement("input");
    let res = document.createElement("p");
    btn.addEventListener("click", calcularVezes);
    btn.setAttribute("type", "button");
    btn.setAttribute("value", "Multiplicar");
    n1.setAttribute("type", "number");
    n2.setAttribute("type", "number");
    btn.setAttribute("id", "btn");
    n1.setAttribute("id", "n1");
    n2.setAttribute("id", "n2");
    menu1.appendChild(n1);
    menu1.appendChild(n2);
    menu1.appendChild(btn);
    menu1.appendChild(res);
    let reiniciar = document.createElement("input");
    reiniciar.setAttribute("type", "button");
    reiniciar.setAttribute("value", "Voltar");
    menu1.appendChild(reiniciar);
    reiniciar.addEventListener("click", restart);
    function calcularVezes() {
        if (n1.value === "" || n2.value === "") {
            alert("[ERROR] Digite um número válido.");
            return;
        }
        let multiplicacao = Number(n1.value) * Number(n2.value);
        res.innerHTML = `${Number(n1.value)} vezes ${Number(
            n2.value
        )} é ${multiplicacao}`;
    }
}
