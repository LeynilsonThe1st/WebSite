//eventos do navbar
const btn = document.querySelector(".btn");
const btnLines = document.querySelectorAll(".btn-lines");
const nav = document.querySelector(".nav");
const logo = document.querySelector("#logo");
const navItens = document.querySelector(".nav-itens");
const navItem = document.querySelectorAll(".nav-item");

let navi = false;

btn.addEventListener("click", cliqueDoBtn);
logo.addEventListener("mouseover", logoShake);
logo.addEventListener("mouseout", logoShakeReset);

function cliqueDoBtn() {
  if (navi === false) {
    btn.classList.add("fechar");
    nav.classList.remove("invisivel");
    nav.classList.add("visivel");
    logo.classList.add("visivel");
    btnLines.forEach(
      line => (line.style.cssText = "background-color: #f5f5f5")
    );
    btnLines.forEach(line => line.classList.add("turn"));
    navItem.forEach(item => item.classList.remove("invisivel"));
    navItem.forEach(item => item.classList.add("visivel"));
    navItem.forEach(item => item.classList.add("delay"));
    navi = true;
  } else {
    btn.classList.remove("fechar");
    nav.classList.remove("visivel");
    nav.classList.add("invisivel");
    logo.classList.remove("visivel");
    btnLines.forEach(line => (line.style.cssText = "background-color: #fff"));
    btnLines.forEach(line => line.classList.remove("turn"));
    navItem.forEach(item => item.classList.remove("visivel"));
    navItem.forEach(item => item.classList.add("invisivel"));
    navItem.forEach(item => item.classList.remove("delay"));
    navi = false;
  }
} //fim

function logoShake() {
  logo.classList.add("shake");
}

function logoShakeReset() {
  logo.classList.remove("shake");
}
