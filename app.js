const bibtexData = {
    'make6030099': `@Article{make6030099,
AUTHOR = {Martínez, Carlos and Teijeira, Susana and Domínguez, Patricia and Campanioni, Silvia and Busto, Laura and González-Nóvoa, José A. and Alonso, Jacobo and Poveda, Eva and San Millán, Beatriz and Veiga, César},
TITLE = {Correlating Histopathological Microscopic Images of Creutzfeldt–Jakob Disease with Clinical Typology Using Graph Theory and Artificial Intelligence},
JOURNAL = {Machine Learning and Knowledge Extraction},
VOLUME = {6},
YEAR = {2024},
NUMBER = {3},
PAGES = {2018--2032},
URL = {https://www.mdpi.com/2504-4990/6/3/99},
ISSN = {2504-4990},
DOI = {10.3390/make6030099}
}`,
    'make7040128': `@Article{make7040128,
AUTHOR = {Martínez, Carlos and Busto, Laura and Zulaica, Olivia and Veiga, César},
TITLE = {Interleaved Fusion Learning for Trustworthy AI: Improving Cross-Dataset Performance in Cervical Cancer Analysis},
JOURNAL = {Machine Learning and Knowledge Extraction},
VOLUME = {7},
YEAR = {2025},
NUMBER = {4},
ARTICLE-NUMBER = {128},
URL = {https://www.mdpi.com/2504-4990/7/4/128},
ISSN = {2504-4990},
DOI = {10.3390/make7040128}
}`
};

function copyBibtex(id, btnElement) {
    if (bibtexData[id]) {
        navigator.clipboard.writeText(bibtexData[id]).then(() => {
            const icon = btnElement.querySelector('i');
            const originalClass = icon.className;
            icon.className = 'fa-solid fa-check text-green-600 mr-1.5';
            
            setTimeout(() => {
                icon.className = originalClass;
            }, 2000);
        }).catch(err => console.error('Failed to copy BibTeX: ', err));
    }
}

// Esta función evita que los bots lean tu email o teléfono directamente del HTML
function copyObfuscatedData(part1, part2, btnElement) {
    // Si la segunda parte incluye un ".", asumimos que es un email. Si no, un teléfono.
    const isEmail = part2.includes('.');
    const separator = isEmail ? '@' : ' ';
    const textToCopy = part1 + separator + part2;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const icon = btnElement.querySelector('i');
        const originalClass = icon.className;
        const originalHtml = btnElement.innerHTML;
        
        icon.className = 'fa-solid fa-check mr-2 text-green-600';
        btnElement.innerHTML = `<i class="${icon.className}"></i> Copied!`;
        
        setTimeout(() => {
            btnElement.innerHTML = originalHtml;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy data: ', err);
    });
}