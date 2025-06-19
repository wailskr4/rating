document.addEventListener('DOMContentLoaded', function() {

const images = [
    // Paysages existants
    { src: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Paysage', predefinedScore: 8.5 },
    { src: 'https://images.unsplash.com/photo-1557409518-691ebcd96038?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Nourriture', predefinedScore: 9 },
    { src: 'https://tlemcen.mta.gov.dz/wp-content/uploads/sites/8/2022/01/tlemcen-telecabine-algerie-1-1400x1011-1.jpg', category: 'Paysage', predefinedScore: 10 },
    { src: 'https://www.oldelpaso.fr/-/media/project/gmi/oldelpaso/oldelpaso-fr/oepp/nri/tacos-de-boeuf-facon-birria-mexicaine-hero.png?h=320&iar=0&w=480&rev=a663805fddd94a5d8e0a17a594f8a002&hash=F8C3E3319E2ED859A01BF9F7AF653DC5', category: 'Nourriture', predefinedScore: 9 },
        { src: 'https://fac.img.pmdstatic.net/scale/https.3A.2F.2Ffac.2Eimg.2Epmdstatic.2Enet.2Ffit.2Fhttp.2E3A.2E2F.2E2Fprd2-bone-image.2E2Es3-website-eu-west-1.2E2Eamazonaws.2E2Ecom.2E2Ffac.2E2F2019.2E2F09.2E2F19.2E2Fdaf7cf46-7099-41d2-83de-3b6ae513b873.2E2Ejpeg.2F650x365.2Fquality.2F80.2Fthumbnail.2Ejpg/650xauto/quality/80/crop-from/center/picture.jpeg', category: 'Nourriture', predefinedScore: 8.5 },
        
                { src: 'https://fac.img.pmdstatic.net/fit/~1~fac~2022~03~25~8d9afbe0-2084-47f8-855f-bb4f6825acdd.jpeg/850x478/quality/90/crop-from/center/focus-point/1377%2C636/cookies-tout-chocolat.jpeg', category: 'Nourriture', predefinedScore: 8.5 },
        
        
        
        
    { src: 'https://previews.123rf.com/images/luckybusiness/luckybusiness1506/luckybusiness150600257/41805626-the-view-from-the-airplane-window-to-the-ground-dotted-with-rivers.jpg', category: 'Paysage', predefinedScore: 9 },

    // 🍔 Hamburger
    { src: 'https://www.simpleetgourmand.fr/wp-content/uploads/berkoukes_01.jpg', category: 'Nourriture', predefinedScore: 7.5 },

    // 🍲 Chekhchoukha (image illustrative type plat algérien)
    { src: 'https://cdn.alweb.com/thumbs/maghrebkitchen/article/fit727x484/%D9%88%D8%B5%D9%81%D8%A9-%D8%AD%D8%B1%D9%8A%D8%B1%D8%A9-%D9%88%D9%87%D8%B1%D8%A7%D9%86%D9%8A%D8%A9.jpg', category: 'Nourriture', predefinedScore: 9.5 },

    // 🌯 Tacos
    { src: 'https://huiles-et-olives.fr/wp-content/uploads/2024/08/huiles-et-olives-dorage-grillee-citron-ail-thym-romarin.jpg', category: 'Nourriture', predefinedScore: 9.5 },

    // 🍰 Macaron
    { src: 'https://cache.marieclaire.fr/data/photo/w1000_ci/5h/saute-de-legumes-a-l-indonesienne.webp', category: 'Nourriture', predefinedScore: 9 },

    // 🥣 Hrira (illustration d'une soupe marocaine/algérienne)
    { src: 'https://img-3.journaldesfemmes.fr/6oqO_pwejtqVj9d-2AQOUsGddEE=/1240x/smart/e2384d1c32d444528e8ec0881c4d632d/ccmcms-jdf/27162578.jpg', category: 'Nourriture', predefinedScore: 9 },
    
     { src: 'https://www.largus.fr/images/styles/max_1300x1300/public/2024-10/BMW-M5-2024-G90-verte-reveal-constructeur-020_4.jpg?itok=0zKEklmb', category: 'Paysage', predefinedScore: 10 },

  // 🏞️ Norvège – forêt et montagnes (automne)
  { src: 'https://image.made-in-china.com/155f0j00jKAofGuRChkl/New-Dongfeng-Forthing-T5-Evo-Petrol-Car-SUV-1-5-Shiny-Version.webp', category: 'Paysage', predefinedScore: 9.5 },

  // 🌉 Constantine, Algérie – vue de la ville suspendue
  { src: 'https://cdn.tourismetvoyages.dz/wp-content/uploads/2022/09/PLAGE-SKIKDA.jpg', category: 'Paysage', predefinedScore: 9.5 },

  // 🌅 Pays‑Bas – dune ou parc au coucher de soleil
  { src: 'https://lelocalapizzas.fr/wp-content/uploads/2022/02/recette-pizza-4-saisons.jpg', category: 'Paysage', predefinedScore: 10 },

  // 🌲 Turquie – forêt de montagne
  { src: 'https://cache.marieclaire.fr/data/photo/w1000_ci/1bi/conchiglioni-farcis-au-veau.webp', category: 'Paysage', predefinedScore: 8 },
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
