const SUPPORTED_LANGS = ["de", "en", "es", "fr", "ja", "pt"];

function getLang() {
    const params = new URLSearchParams(window.location.search);
    return params.get("lang") || "en";
}

function getSupportedLang(lang) {
    return SUPPORTED_LANGS.includes(lang) ? lang : "en";
}

// Функция загрузки JSON перевода
async function loadTranslations(lang) {
    try {
        const response = await fetch(`../locales/${lang}.json`);
        if (!response.ok) throw new Error("Translation file not found");
        return await response.json();
    } catch (err) {
        console.error(err);
        return {}; // возвращаем пустой объект если что-то не так
    }
}

async function applyTranslations(lang) {
    const dict = await loadTranslations(lang);

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) {
            el.innerHTML = dict[key];
        }
    });
}

// Главный вызов
const lang = getSupportedLang(getLang());
document.body.classList.add(`lang-${lang}`);
console.log(document.body.classList)
applyTranslations(lang);
