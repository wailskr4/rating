document.addEventListener('DOMContentLoaded', function() {

const images = [
    // Paysages existants
    { src: 'https://img.freepik.com/photos-gratuite/belle-photo-maison-pres-du-lac-mont-ojstrica-bled-slovenie_181624-11390.jpg', category: 'Paysage', predefinedScore: 10 },
    { src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c', category: 'Nourriture', predefinedScore: 9 },
    { src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e', category: 'Paysage', predefinedScore: 9 },
    { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38', category: 'Nourriture', predefinedScore: 8 },
        { src: 'https://cdn.pratico-pratiques.com/app/uploads/sites/2/2018/08/27223922/creme-glacee-sans-sorbetiere.jpeg', category: 'Nourriture', predefinedScore: 9 },
        
                { src: 'https://www.hervecuisine.com/wp-content/uploads/2015/10/brownies-1118x516.jpg.webp', category: 'Nourriture', predefinedScore: 10 },
        
        
        
        
    { src: 'https://www.okvoyage.com/wp-content/uploads/2023/11/les-paysages-du-japon-1536x1026.jpg', category: 'Paysage', predefinedScore: 10 },

    // 🍔 Hamburger
    { src: 'https://images.unsplash.com/photo-1550547660-d9450f859349', category: 'Nourriture', predefinedScore: 9 },

    // 🍲 Chekhchoukha (image illustrative type plat algérien)
    { src: 'https://gourmandiseassia.fr/wp-content/uploads/2019/11/Picsart_22-12-05_23-25-30-149-810x810.jpg', category: 'Nourriture', predefinedScore: 10 },

    // 🌯 Tacos
    { src: 'https://media.allinsmart.com/deal/1c6582c9aabd_30-de-rduction-partir-1000eur-dachat.png?h=400&fit=crop', category: 'Nourriture', predefinedScore: 9 },

    // 🍰 Macaron
    { src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Macarons%2C_French_made_mini_cakes.JPG', category: 'Nourriture', predefinedScore: 9 },

    // 🥣 Hrira (illustration d'une soupe marocaine/algérienne)
    { src: 'https://www.auxdelicesdupalais.net/wp-content/uploads/2020/05/harira-soupe-alg%C3%A9roise.jpg.webp', category: 'Nourriture', predefinedScore: 9 },
    
     { src: 'https://www.okvoyage.com/wp-content/uploads/2022/09/les-plus-beaux-paysages-despagne-1536x1062.jpg', category: 'Paysage', predefinedScore: 10 },

  // 🏞️ Norvège – forêt et montagnes (automne)
  { src: 'https://www.okvoyage.com/wp-content/uploads/2020/04/norvege-1536x1023.jpg', category: 'Paysage', predefinedScore: 9 },

  // 🌉 Constantine, Algérie – vue de la ville suspendue
  { src: 'https://www.elmoudjahid.com/storage/images/article/cad95c8f24ff45adfcda7d0cfef78608.jpg', category: 'Paysage', predefinedScore: 9 },

  // 🌅 Pays‑Bas – dune ou parc au coucher de soleil
  { src: 'https://static.wixstatic.com/media/108ff4_aab3f4e4c3614f68b7582ec68afeedd3~mv2.jpg/v1/fill/w_938,h_717,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/108ff4_aab3f4e4c3614f68b7582ec68afeedd3~mv2.jpg', category: 'Paysage', predefinedScore: 8.5 },

  // 🌲 Turquie – forêt de montagne
  { src: 'https://www.terdav.com/Content/img/mag/vignettes/grande/1552.jpg', category: 'Paysage', predefinedScore: 9 },
];


    let currentImageIndex = 0;
let totalDifference = 0;
let totalPossibleDifference = 0;
    const imageCategoryElement = document.getElementById('image-category');
    const galleryImageElement = document.getElementById('gallery-image');
    const userRatingInput = document.getElementById('user-rating');
    const submitRatingButton = document.getElementById('submit-rating');
    const resultMessageElement = document.getElementById('result-message');
    const nextImageButton = document.getElementById('next-image');
    const ratingSection = document.getElementById('rating-section');

    function showImage(index) {
        if (index < images.length) {
            const image = images[index];
            imageCategoryElement.textContent = image.category;
            galleryImageElement.src = image.src;
            galleryImageElement.alt = image.category;

            // Réinitialisation pour la nouvelle image
            userRatingInput.value = '';
            resultMessageElement.style.display = 'none';
            nextImageButton.style.display = 'none';
            ratingSection.style.display = 'block';
            userRatingInput.disabled = false;
            submitRatingButton.disabled = false;
        } else {
            // Fin de la galerie
const compatibility = Math.max(0, 100 - Math.round((totalDifference / totalPossibleDifference) * 100));

document.getElementById('gallery-container').innerHTML = `
  <div class="alert alert-info text-center">
    <h2>💑 Jeu terminé !</h2>
    <p>Tu as noté toutes les images.</p>
    <h3>💖 Taux de compatibilité avec Nesrine : <strong>${compatibility}%</strong></h3>
    <p>${compatibility >= 75 ? "On est faits l'un pour l'autre 😍 !" :
        compatibility >= 45 ? "c'est bien omri presque le meme gout 😉." :
        " chacun ses goûts 😅. Mais on je vais apprécié tes gout quand même ❤️."}
    </p>
    <button onclick="location.reload()" class="btn btn-outline-primary mt-3">Rejouer</button>
  </div>
`;

        }
    }

    submitRatingButton.addEventListener('click', function() {
        const userRating = parseInt(userRatingInput.value);


        if (isNaN(userRating) || userRating < 0 || userRating > 10) {
            alert("Merci de donner une note entre 0 et 10.");
            return;
        }

        const predefinedScore = images[currentImageIndex].predefinedScore;
        const difference = Math.abs(userRating - predefinedScore);

        let message = '';
        let alertClass = '';

       if (difference < 2) {
    message = `💖 super omri on a *exactement* les mêmes goûts ! (Ta note : ${userRating}, Ma note : ${predefinedScore})`;
    alertClass = 'alert-success';
} else if (difference <= 3) {
    message = `😊 On a comprend presque le meme gout  (Ta note : ${userRating}, Ma note : ${predefinedScore})`;
    alertClass = 'alert-warning';
} else {
    message = `😅 dommage honey  ! (Ta note : ${userRating}, Ma note : ${predefinedScore})`;
    alertClass = 'alert-danger';
}

totalDifference += difference;
totalPossibleDifference += 10; // car la note max est 10

        resultMessageElement.innerHTML = message;
        resultMessageElement.className = `alert ${alertClass}`;
        resultMessageElement.style.display = 'block';

        // Masquer la section de notation et afficher le bouton "Suivant"
        ratingSection.style.display = 'none';
        nextImageButton.style.display = 'block';
    });

    nextImageButton.addEventListener('click', function() {
        currentImageIndex++;
        showImage(currentImageIndex);
    });

    // Afficher la première image au chargement
    showImage(currentImageIndex);
});
