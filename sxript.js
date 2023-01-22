const form = document.querySelector("form") //Pode fazer pelo seletor '#form-habits' ao inves de 'form'
const nlwSetup = new NLWSetup(form) //Nome de variavel nao pode iniciar com numero e enm caractere, nem ter espaço, e nem usar uma palavra ja reservada (function)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5) //Adiciona a data do dia, slice = formata a data para xx/xx o -5 recorta do fim para o inicio
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso ❌")
    return //sempre que encontrar, para o codigo imediatamente
  }
  alert("Dia adicionado com sucesso ✅")
  nlwSetup.addDay(today)
}

// Grava na memoria o que foi adicionado e salva
function save() {
  //                chave = qualquer nome  transforma o dado em string
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

// Torna o que foi salvo visivel ao recarregar a pagina
// Transforma a string de volta em objeto para exibir no display
const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()


  
