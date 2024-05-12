

function setVideoSize() {
  const vidWidth = 1920;
  const vidHeight = 1080;
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const tempVidWidth = windowHeight * vidWidth / vidHeight;
  const tempVidHeight = windowWidth * vidHeight / vidWidth;
  const newVidWidth = tempVidWidth > windowWidth ? tempVidWidth : windowWidth;
  const newVidHeight = tempVidHeight > windowHeight ? tempVidHeight : windowHeight;
  const tmVideo = $('#tm-video');

  tmVideo.css('width', newVidWidth);
  tmVideo.css('height', newVidHeight);
}

$(document).ready(function(){

  /***************** Pages *****************/

  $('.tm-page-link').click(function(event) {

    if(window.innerWidth > 991) {
      event.preventDefault();
    }
    $('.tm-tab-content').hide();
    $('#' + $(event.currentTarget).data('id')).show();
    $('.tm-tab-link').removeClass('active');
    $(event.currentTarget).addClass('active');
  });

  /************** Video background *********/

  setVideoSize();

  // Set video background size based on window size
  let timeout;
  window.onresize = function(){
    clearTimeout(timeout);
    timeout = setTimeout(setVideoSize, 100);
  };

  // Play/Pause button for video background
  const btn = $("#tm-video-control-button");

  btn.on("click", function(e) {
    const video = document.getElementById("tm-video");
    $(this).removeClass();

    if (video.paused) {
      video.play();
      $(this).addClass("fas fa-pause");
    } else {
      video.pause();
      $(this).addClass("fas fa-play");
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner tous les éléments .chapter-toggle
    const chapterToggles = document.querySelectorAll('.chapter-toggle');

    // Boucler à travers chaque élément .chapter-toggle
    chapterToggles.forEach(function (toggle) {
        // Ajouter un écouteur d'événements sur chaque élément .chapter-toggle
        toggle.addEventListener('click', function () {
            // Trouver le contenu associé à l'élément .chapter-toggle actuel
            const chapterContent = toggle.querySelector('.chapter-content');
            console.log('Salut')
            // Vérifier si le contenu existe
            if (chapterContent) {
              console.log('Salut2')
                // Basculez la classe "hidden" sur le contenu associé
                chapterContent.classList.toggle('hidden');
            }
        });
    });
});





document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tm-tab-button');
    const chapters = document.querySelectorAll('.tm-chapter-list');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const targetId = button.dataset.id;
            chapters.forEach(function (chapter) {
                if (chapter.id === targetId) {
                    chapter.classList.remove('hidden'); // Afficher la div correspondante
                } else {
                    chapter.classList.add('hidden'); // Masquer les autres divs
                }
            });
        });
    });
});
