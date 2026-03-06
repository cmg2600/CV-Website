// ====== GESTIÓN DE IDIOMA ======
function changeLang(lang) {
    const enElements = document.querySelectorAll('.lang-en');
    const esElements = document.querySelectorAll('.lang-es');
    const btnEn = document.getElementById('btn-en');
    const btnEs = document.getElementById('btn-es');

    if (lang === 'es') {
        enElements.forEach(el => el.classList.add('hidden'));
        esElements.forEach(el => el.classList.remove('hidden'));

        btnEs.classList.remove('opacity-50', 'grayscale');
        btnEs.classList.add('opacity-100', 'grayscale-0');
        btnEn.classList.remove('opacity-100', 'grayscale-0');
        btnEn.classList.add('opacity-50', 'grayscale');

    } else {
        esElements.forEach(el => el.classList.add('hidden'));
        enElements.forEach(el => el.classList.remove('hidden'));

        btnEn.classList.remove('opacity-50', 'grayscale');
        btnEn.classList.add('opacity-100', 'grayscale-0');
        btnEs.classList.remove('opacity-100', 'grayscale-0');
        btnEs.classList.add('opacity-50', 'grayscale');
    }
}


// ====== COPIAR EMAIL / TELÉFONO ======
function copyObfuscatedData(part1, part2, button) {

    let text;

    // detectar si es email
    if (part2.includes('.')) {
        text = part1 + '@' + part2;
    } else {
        text = part1 + ' ' + part2;
    }

    copyToClipboard(text, button);
}


// ====== COPIAR BIBTEX ======
function copyBibtex(id, button) {

    const bibtexEntries = {

        make6030099: `@article{martinez2024cjd,
  title={Correlating Histopathological Microscopic Images of Creutzfeldt-Jakob Disease with Clinical Typology Using Graph Theory and Artificial Intelligence},
  journal={Machine Learning and Knowledge Extraction},
  year={2024},
  doi={10.3390/make6030099}
}`,

        make7040128: `@article{martinez2025fusion,
  title={Interleaved Fusion Learning for Trustworthy AI: Improving Cross-Dataset Performance in Cervical Cancer Analysis},
  journal={Machine Learning and Knowledge Extraction},
  year={2025},
  doi={10.3390/make7040128}
}`
    };

    if (bibtexEntries[id]) {
        copyToClipboard(bibtexEntries[id], button);
    }
}


// ====== FUNCIÓN GENERAL DE COPIADO ======
function copyToClipboard(text, button) {

    if (navigator.clipboard) {

        navigator.clipboard.writeText(text).then(() => {
            showCopied(button);
        });

    } else {

        // fallback navegadores antiguos
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        showCopied(button);
    }
}


// ====== FEEDBACK VISUAL ======
function showCopied(button) {

    const originalHTML = button.innerHTML;

    button.innerHTML = `<i class="fa-solid fa-check mr-2"></i> Copied`;

    setTimeout(() => {
        button.innerHTML = originalHTML;
    }, 1500);
}