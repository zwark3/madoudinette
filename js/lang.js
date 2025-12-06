const pageURL = new URL(window.location.href);
const acceptedLangs = ['fr', 'en'];
const langSwitchForm = document.querySelectorAll('.lang-switch');

let langPage = pageURL.searchParams.get('lang');

// Validation de la langue
if (!langPage || !acceptedLangs.includes(pageURL.searchParams.get('lang'))) {
    langPage = 'fr'; // langue par défaut
}

// Pour avoir la langue en paramètre comme langue dans le menu déroulant.

document.querySelectorAll('.lang-btn-switcher .btn-lang').forEach(langBtn => {

    if (langBtn.value == langPage) {
        langBtn.classList.add('active');
    }

    langBtn.addEventListener('click', function(e) {
        lang = e.target.value;
        pageURL.searchParams.set('lang', lang);
        window.location.href = pageURL;
    })
});

// Change les liens
document.querySelectorAll('a').forEach(link => {
    link.href += `?lang=${langPage}`;
})


// Une fonction asynchrone est une fonction dont l'éxecution est lancée mais dont on n'attend pas le résultat. 
// Lorsque l’exécution est terminée, la fonction asynchrone émet un événement et transmet son résultat via celui-ci.
// Autrement dit, lorsqu'on exécute une fonction asynchrone, elle prendra du temps pour accomplir ce qu'elle doit faire. Le programme ne l'attend pas et continue de son côté. Une fois qu'elle a terminé, elle envoie son résultat.
async function getLanguageFile(lang) {
    const response = await fetch(`/madoudinette/locales/${lang}.json`); // Le mot-clé "await" est utilisé pour les tâches qui prennent du temps. On attend d'abord qu'elle se conclut.
    return response.json();
}

function translateElement(langData) {
    // Traduire les éléments possédant des data-i18n.
    document.querySelectorAll('[data-i18n]').forEach(element => {
        let key = element.getAttribute('data-i18n');
        element.textContent = langData[key];
    })

    // Traduire les éléments possédant des placeholders
    document.querySelectorAll('.form-wrapper input').forEach(input => {
        const key = input.name;
        input.placeholder = langData[key];
    });
}

async function changePageLanguage(lang) {
    const langData = await getLanguageFile(lang);
    translateElement(langData);
}

changePageLanguage(langPage);





