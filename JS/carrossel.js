let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
 nextImagem();
}, 3000)

function nextImagem(){
    count++;
    if(count > 3){
        count = 1
    }
   
    document.getElementById("radio"+count).checked = true;

}





const carouselImages = document.querySelector('.carousel-images');
const carouselText = document.querySelector('.carousel-text');
const prevBtn = document.querySelector('.prev-button');
const nextBtn = document.querySelector('.next-button');

let currentIndex = 0;

function showImage() {
  carouselImages.style.transform = `translateX(-${currentIndex * 50}%)`;
  carouselText.style.transform = `translateX(-${currentIndex * 50}%)`;
}

prevBtn.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = carouselImages.children.length - 1;
  } else {
    currentIndex--;
  }
  showImage();
});





nextBtn.addEventListener('click', () => {
  if (currentIndex === carouselImages.children.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  showImage();
});

/*// seleciona o elemento do carrossel
var carousel = document.querySelector('.carousel');

// seleciona as imagens do carrossel
var images = carousel.querySelectorAll('.carousel-images img');

// seleciona os botões de navegação do carrossel
var prevButton = document.querySelector('.prev-button');
var nextButton = document.querySelector('.next-button');

// inicia o índice atual como zero
var currentIndex = 0;

// adiciona um evento ao botão "anterior" que move o carrossel para a esquerda
prevButton.addEventListener('click', function() {
  currentIndex = Math.max(currentIndex - 1, 0);
  carousel.style.transform = 'translateX(' + (currentIndex * -100) + '%)';
});

// adiciona um evento ao botão "próximo" que move o carrossel para a direita
nextButton.addEventListener('click', function() {
  currentIndex = Math.min(currentIndex + 1, images.length - );
  carousel.style.transform = 'translateX(' + (currentIndex * -100) + '%)';
});*/





 
