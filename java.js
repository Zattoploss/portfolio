
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");

}

function grande(num) {
  var grandes = document.getElementById("roll");
  var grandes2 = document.getElementById("roll2");
  var grandes3 = document.getElementById("roll3");
  var grandes4 = document.getElementById("roll4");
  switch (num) {
    case 1:
      remover()
      if (window.screenY >= 200) {
        var grandes = document.getElementById("roll");
        grandes.classList.add("letra_grande")
      }
      else {
        grandes.classList.add("letra_grande")
      }
      break;
    case 2:
      remover()
      if (window.screenY >= 2000) {
        var grandes2 = document.getElementById("roll");
        grandes2.classList.add("letra_grande")
      }
      else {
        grandes2.classList.add("letra_grande")
      }
      break;
    case 3:
      remover()
      grandes3.classList.add("letra_grande")
      break;
    case 4:
      remover()
      grandes4.classList.add("letra_grande")
      break;
    default:
      break;
  }
}





function remover() {
  var grandes = document.getElementById("roll");
  var grandes2 = document.getElementById("roll2");
  var grandes3 = document.getElementById("roll3");
  var grandes4 = document.getElementById("roll4");
  grandes.classList.remove("letra_grande")
  grandes2.classList.remove("letra_grande")
  grandes3.classList.remove("letra_grande")
  grandes4.classList.remove("letra_grande")
}

function rolarCrias() {
  scrollbars
}

const msg = "enviado com exito"
function mensage() {
  window.alert(msg)
}

const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, "($1) $2")
  value = value.replace(/(\d)(\d{4})$/, "$1-$2")
  return value
}

function cpfMask(cpf) {
  cpf = cpf.replace(/\D/g, ''); // Remove tudo o que não é dígito
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o segundo ponto
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o hífen
  return cpf;
}

function CpfValidate() {
  const cpfInput = document.getElementById('CPF');
  cpfInput.value = cpfMask(cpfInput.value);
}

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

