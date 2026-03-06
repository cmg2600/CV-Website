// ====== GESTIÓN DE IDIOMA ======
function changeLang(lang) {
    const enElements = document.querySelectorAll('.lang-en');
    const esElements = document.querySelectorAll('.lang-es');
    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');

    if (lang === 'es') {
        // Mostrar español, ocultar inglés
        enElements.forEach(el => el.classList.add('hidden'));
        esElements.forEach(el => el.classList.remove('hidden'));
        
        // Estilos botones (banderas)
        btnEs.classList.remove('opacity-50', 'grayscale');
        btnEs.classList.add('opacity-100', 'grayscale-0');
        btnEn.classList.remove('opacity-100', 'grayscale-0');
        btnEn.classList.add('opacity-50', 'grayscale');
    } else {
        // Mostrar inglés, ocultar español
        esElements.forEach(el => el.classList.add('hidden'));
        enElements.forEach(el => el.classList.remove('hidden'));
        
        // Estilos botones (banderas)
        btnEn.classList.remove('opacity-50', 'grayscale');
        btnEn.classList.add('opacity-100', 'grayscale-0');
        btnEs.classList.remove('opacity-100', 'grayscale-0');
        btnEs.classList.add('opacity-50', 'grayscale');
    }
}