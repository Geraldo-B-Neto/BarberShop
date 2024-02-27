

function revelarServico(){
  var nome = document.getElementById('nome').value;
  var telefone = document.getElementById('telefone').value;
  var data = document.getElementById('data').value;
  var pessoas = document.getElementById('pessoas').value;
  
  
  console.log(pessoas)
   var containerServicos = document.getElementById('novoServico')
  if(pessoas >=1 && pessoas<=3){
    for(var i=0; i<pessoas; i++) {
   var novoServicoBox = document.createElement('article');
   novoServicoBox.classList.toggle('boxInput');
   var novoServicoBoxText = document.createElement('p')
   var novoServicoSelect = document.createElement('select')
  
  novoServicoOpt0 = document.createElement('option')
  novoServicoOpt0.value = 'escolha'; 
  novoServicoOpt0.textContent = 'Escolha o serviço';
  
  novoServicoOpt1 = document.createElement('option')
  novoServicoOpt1.value = 'barba'; 
  novoServicoOpt1.textContent = 'Barba';
  
  novoServicoOpt2 = document.createElement('option')
  novoServicoOpt2.value = 'cabelo';
  novoServicoOpt2.textContent = 'Cabelo';
  
  novoServicoOpt3 = document.createElement('option')
  novoServicoOpt3.value = 'bigode';
  novoServicoOpt3.textContent = 'Bigode';
 
  novoServicoSelect.appendChild(novoServicoOpt0)
  novoServicoSelect.appendChild(novoServicoOpt1)
  novoServicoSelect.appendChild(novoServicoOpt2)
  novoServicoSelect.appendChild(novoServicoOpt3) 

  var servicoTexto = document.createTextNode("Qual o serviço desejado?")
  
  novoServicoBoxText.appendChild(servicoTexto)
  novoServicoBox.appendChild(novoServicoBoxText)
  novoServicoBox.appendChild(novoServicoSelect)
  
  containerServicos.appendChild(novoServicoBox) 
 }
  }
  else{
    alert("Insira um valor entre 1 e 3")
    containerServicos.innerText ="";
    containerServicos.removeChild(containerServicos.children)
  }
  
}

var conteudoCabeleleiro1 = document.getElementById('cabeleleiro1')
var conteudoCabeleleiro2 = document.getElementById('cabeleleiro2')
var conteudoCabeleleiro3 = document.getElementById('cabeleleiro3')
var conteudoCabeleleiro4 = document.getElementById('cabeleleiro4')

  var cabeleleiro_1 = document.getElementById('imgCabeleleiro1')
  var cabeleleiro_2 = document.getElementById('imgCabeleleiro2')
  var cabeleleiro_3 = document.getElementById('imgCabeleleiro3')
  var cabeleleiro_4 = document.getElementById('imgCabeleleiro4')
  
  function cabeleleiro1(){
    cabeleleiro_1.style.opacity = '1'
    cabeleleiro_2.style.opacity = '.5'
    cabeleleiro_3.style.opacity = '.5'
    cabeleleiro_4.style.opacity = '.5'
    
    conteudoCabeleleiro1.style.display = 'flex'
    conteudoCabeleleiro2.style.display = 'none'
    conteudoCabeleleiro3.style.display = 'none'
    conteudoCabeleleiro4.style.display = 'none'
  }
  function cabeleleiro2(){
    cabeleleiro_1.style.opacity = '.5'
    cabeleleiro_2.style.opacity = '1'
    cabeleleiro_3.style.opacity = '.5'
    cabeleleiro_4.style.opacity = '.5'
    
     conteudoCabeleleiro1.style.display = 'none'
    conteudoCabeleleiro2.style.display = 'flex'
    conteudoCabeleleiro3.style.display = 'none'
    conteudoCabeleleiro4.style.display = 'none'
  }
  function cabeleleiro3(){
    cabeleleiro_1.style.opacity = '.5'
    cabeleleiro_2.style.opacity = '.5'
    cabeleleiro_3.style.opacity = '1'
    cabeleleiro_4.style.opacity = '.5'
    
     conteudoCabeleleiro1.style.display = 'none'
    conteudoCabeleleiro2.style.display = 'none'
    conteudoCabeleleiro3.style.display = 'flex'
    conteudoCabeleleiro4.style.display = 'none'
  }
  function cabeleleiro4(){
    cabeleleiro_1.style.opacity = '.5'
    cabeleleiro_2.style.opacity = '.5'
    cabeleleiro_3.style.opacity = '.5'
    cabeleleiro_4.style.opacity = '1'
    
     conteudoCabeleleiro1.style.display = 'none'
    conteudoCabeleleiro2.style.display = 'none'
    conteudoCabeleleiro3.style.display = 'none'
    conteudoCabeleleiro4.style.display = 'flex'
  }
  
  var imgs = document.getElementById('containerImg');
  
  var img = document.querySelectorAll('#containerImg .boxConteudoCarrosel');
  
  var idX = 0;
  
  function carousel(){
    idX++;
    if(idX>img.length - 1){
      idX = 0;
    }
    
    console.log("rodando")
    
    imgs.style.transform = 'translateX($(-idX * 23)rem)';
    
  }
  
  setInterval(carousel,1000);