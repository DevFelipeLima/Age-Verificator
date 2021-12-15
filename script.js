

function verificar(){
    const anoCorrente = new Date().getFullYear()
    const fano = document.getElementById('ano')
    const res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > anoCorrente) {
        window.alert('Verifique os dados e tente novamente!')
    } else{
       var fsex = document.getElementsByName('radsex')
       var idade = anoCorrente - Number(fano.value)
       var genero = ""
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       
       if(fsex[0].checked) {
           genero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'menino.png')
            //criança
            }else if(idade <= 21){
                img.setAttribute('src', 'jovemh.png')
           //jovem
            }else if(idade < 50){
                img.setAttribute('src', 'homem.png')
            //adulto
            }else{
                img.setAttribute('src', 'idoso.png')
           //idoso
       }
    } else if(fsex[1].checked){
           genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'menina.png')
            //criança
            }else if(idade < 21){
                img.setAttribute('src', 'jovemm.png')
           //jovem
            }else if(idade < 50){
                img.setAttribute('src', 'mulher.png')
            //adulto
            }else{
                img.setAttribute('src', 'idosa.png')
           //idoso
       }
    }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
       res.appendChild(img)
    
    }



}

