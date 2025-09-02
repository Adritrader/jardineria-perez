// Script para inicializar traducciones con persistencia mejorada
console.log('Initializing enhanced translation system...');

// Funciones para manejar cookies con mejor compatibilidad
function setCookie(name, value, days = 365) {
    try {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        const cookieString = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
        document.cookie = cookieString;
        console.log('Cookie set:', name, '=', value);
        return true;
    } catch (error) {
        console.error('Error setting cookie:', error);
        // Fallback a localStorage si las cookies fallan
        try {
            localStorage.setItem(name, value);
            console.log('Fallback to localStorage:', name, '=', value);
            return true;
        } catch (storageError) {
            console.error('Error with localStorage fallback:', storageError);
            return false;
        }
    }
}

function getCookie(name) {
    try {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) {
                const value = c.substring(nameEQ.length, c.length);
                console.log('Cookie retrieved:', name, '=', value);
                return value;
            }
        }
        
        // Fallback a localStorage si no se encuentra la cookie
        const storageValue = localStorage.getItem(name);
        if (storageValue) {
            console.log('Fallback from localStorage:', name, '=', storageValue);
            // Migrar a cookie si se encuentra en localStorage
            setCookie(name, storageValue);
            return storageValue;
        }
        
        return null;
    } catch (error) {
        console.error('Error getting cookie:', error);
        return null;
    }
}

// Migrar desde localStorage si existe
const storedLang = localStorage.getItem('preferred-language');
if (storedLang && ['es', 'en', 'de', 'fr', 'nl'].includes(storedLang)) {
    setCookie('preferred-language', storedLang);
    localStorage.removeItem('preferred-language');
    console.log('Migrated language preference to cookie:', storedLang);
}

// Función mejorada para traducir elementos
function translatePage(lang = 'es') {
    console.log('Translating page to:', lang);
    
    if (!translations || !translations[lang]) {
        console.error('Language not found in translations:', lang);
        return false;
    }
    
    const translation = translations[lang];
    
    // Traducir todos los elementos con data-translate
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found elements to translate:', elements.length);
    
    let successCount = 0;
    
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translation[key]) {
            try {
                // Si el elemento contiene HTML (como <strong>, <i>, etc.)
                if (element.innerHTML.includes('<')) {
                    // Mantener las etiquetas HTML pero cambiar el texto
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = element.innerHTML;
                    
                    // Buscar nodos de texto y reemplazarlos
                    function replaceTextNodes(node) {
                        if (node.nodeType === Node.TEXT_NODE) {
                            const text = node.textContent.trim();
                            if (text.length > 0) {
                                node.textContent = translation[key];
                                return true;
                            }
                        } else {
                            for (let child of node.childNodes) {
                                if (replaceTextNodes(child)) {
                                    break; // Solo reemplazar el primer nodo de texto significativo
                                }
                            }
                        }
                        return false;
                    }
                    
                    replaceTextNodes(tempDiv);
                    element.innerHTML = tempDiv.innerHTML;
                } else {
                    // Sin HTML, reemplazo directo
                    element.textContent = translation[key];
                }
                successCount++;
                console.log('Translated:', key, '→', translation[key]);
            } catch (error) {
                console.error('Error translating element:', key, error);
            }
        } else {
            console.warn('Translation key not found:', key);
        }
    });
    
    // Actualizar idioma del HTML
    document.documentElement.lang = lang;
    
    // Actualizar selector de idioma actual
    updateLanguageSelector(lang);
    
    console.log(`Translation completed for language: ${lang} (${successCount}/${elements.length} elements)`);
    return successCount > 0;
}

// Función para cambiar idioma con persistencia mejorada
function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    
    // Verificar que el idioma es válido
    const validLanguages = ['es', 'en', 'de', 'fr', 'nl'];
    if (!validLanguages.includes(lang)) {
        console.error('Invalid language:', lang);
        return false;
    }
    
    // Traducir la página
    if (translatePage(lang)) {
        // Guardar en cookie y localStorage como respaldo
        const cookieSaved = setCookie('preferred-language', lang);
        
        // Verificar que se guardó correctamente
        setTimeout(() => {
            const savedLang = getCookie('preferred-language');
            if (savedLang === lang) {
                console.log('Language preference saved successfully:', lang);
                
                // Disparar evento personalizado para notificar el cambio
                window.dispatchEvent(new CustomEvent('languageChanged', { 
                    detail: { language: lang } 
                }));
            } else {
                console.error('Failed to save language preference');
            }
        }, 100);
        
        return true;
    }
    
    return false;
}

// Función para actualizar el selector de idiomas visualmente
function updateLanguageSelector(lang) {
    console.log('Updating language selector to:', lang);
    
    const currentLangText = document.getElementById('current-lang-text');
    const currentFlag = document.getElementById('current-flag');
    
    const languages = {
        'es': { name: 'ES', flag: 'flag-es' },
        'en': { name: 'EN', flag: 'flag-gb' },
        'de': { name: 'DE', flag: 'flag-de' },
        'fr': { name: 'FR', flag: 'flag-fr' },
        'nl': { name: 'NL', flag: 'flag-nl' }
    };
    
    if (languages[lang]) {
        // Actualizar texto del idioma
        if (currentLangText) {
            currentLangText.textContent = languages[lang].name;
            console.log('Updated language text to:', languages[lang].name);
        }
        
        // Actualizar bandera
        if (currentFlag) {
            // Remover todas las clases de bandera existentes
            currentFlag.className = '';
            // Añadir las clases correctas
            currentFlag.className = 'flag-icon ' + languages[lang].flag;
            console.log('Updated flag to:', languages[lang].flag);
        }
        
        // Marcar opción activa en el dropdown
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            const optionLang = option.getAttribute('data-lang');
            if (optionLang === lang) {
                option.classList.add('active');
                console.log('Marked active:', optionLang);
            } else {
                option.classList.remove('active');
            }
        });
        
        console.log('Language selector updated successfully to:', lang);
    } else {
        console.error('Language not supported:', lang);
    }
}

// Inicialización mejorada cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM ready, initializing enhanced translation system...');
    
    // Obtener idioma preferido con múltiples fallbacks
    let preferredLang = getCookie('preferred-language');
    
    // Si no hay idioma guardado, detectar idioma del navegador
    if (!preferredLang) {
        const browserLang = navigator.language || navigator.userLanguage;
        const langCode = browserLang.substring(0, 2).toLowerCase();
        const supportedLangs = ['es', 'en', 'de', 'fr', 'nl'];
        
        if (supportedLangs.includes(langCode)) {
            preferredLang = langCode;
            console.log('Using browser language:', preferredLang);
        } else {
            preferredLang = 'es'; // Español por defecto
            console.log('Using default language: es');
        }
        
        // Guardar la preferencia detectada
        setCookie('preferred-language', preferredLang);
    }
    
    console.log('Using language:', preferredLang);
    
    // Esperar a que las traducciones estén disponibles
    function initializeTranslations() {
        if (typeof translations !== 'undefined' && translations[preferredLang]) {
            // Traducir la página al idioma preferido
            if (translatePage(preferredLang)) {
                console.log('Initial translation successful');
                
                // Configurar selector de idiomas después de la traducción inicial
                setTimeout(() => {
                    setupLanguageSelector();
                    
                    // Debug para móviles
                    if (isMobileDevice()) {
                        setTimeout(debugMobileEvents, 1000);
                    }
                }, 100);
            } else {
                console.error('Initial translation failed, falling back to Spanish');
                translatePage('es');
                setupLanguageSelector();
                
                // Debug para móviles
                if (isMobileDevice()) {
                    setTimeout(debugMobileEvents, 1000);
                }
            }
        } else {
            console.log('Waiting for translations to load...');
            setTimeout(initializeTranslations, 100);
        }
    }
    
    initializeTranslations();
});

// Debug function to check mobile events
function debugMobileEvents() {
    const currentLang = document.getElementById('current-lang');
    const dropdown = document.getElementById('lang-options');
    
    if (currentLang && dropdown) {
        console.log('Debugging mobile events...');
        console.log('Current lang element:', currentLang);
        console.log('Dropdown element:', dropdown);
        console.log('Is mobile device:', isMobileDevice());
        console.log('Dropdown classes:', dropdown.className);
        
        // Test if elements are clickable
        const rect = currentLang.getBoundingClientRect();
        console.log('Current lang position:', rect);
        
        const dropdownRect = dropdown.getBoundingClientRect();
        console.log('Dropdown position:', dropdownRect);
        
        // Check z-index
        const computedStyle = window.getComputedStyle(dropdown);
        console.log('Dropdown z-index:', computedStyle.zIndex);
        console.log('Dropdown position style:', computedStyle.position);
    }
}

// Detectar si es un dispositivo móvil
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
           ('ontouchstart' in window) || 
           (navigator.maxTouchPoints > 0);
}

// Función separada para configurar el selector de idiomas
function setupLanguageSelector() {
    const langOptions = document.querySelectorAll('.lang-option');
    console.log('Found language options:', langOptions.length);
    
    const isMobile = isMobileDevice();
    console.log('Is mobile device:', isMobile);
    
    langOptions.forEach(option => {
        // Agregar soporte para touch events en móviles
        const handleOptionClick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            console.log('Language option clicked:', lang);
            
            if (changeLanguage(lang)) {
                // Cerrar dropdown
                const dropdown = document.getElementById('lang-options');
                if (dropdown) {
                    dropdown.classList.remove('open');
                }
                
                // Actualizar enlaces de navegación si es necesario
                updateNavigationLinks();
            }
        };
        
        if (isMobile) {
            // En móviles, usar touchstart para mejor respuesta
            option.addEventListener('touchstart', handleOptionClick, { passive: false });
        }
        // Siempre agregar click como fallback
        option.addEventListener('click', handleOptionClick);
    });
    
    // Configurar botón actual del selector
    const currentLang = document.getElementById('current-lang');
    if (currentLang) {
        const handleToggle = function(e) {
            e.preventDefault();
            e.stopPropagation();
            const dropdown = document.getElementById('lang-options');
            if (dropdown) {
                dropdown.classList.toggle('open');
                console.log('Dropdown toggled');
            }
        };
        
        if (isMobile) {
            // En móviles, usar touchstart
            currentLang.addEventListener('touchstart', handleToggle, { passive: false });
        }
        // Siempre agregar click como fallback
        currentLang.addEventListener('click', handleToggle);
        
        // Cerrar dropdown al hacer click fuera
        const closeDropdown = function(e) {
            const selector = document.getElementById('language-selector');
            if (selector && !selector.contains(e.target)) {
                const dropdown = document.getElementById('lang-options');
                if (dropdown && dropdown.classList.contains('open')) {
                    dropdown.classList.remove('open');
                    console.log('Dropdown closed by outside click');
                }
            }
        };
        
        if (isMobile) {
            document.addEventListener('touchstart', closeDropdown, { passive: true });
        }
        document.addEventListener('click', closeDropdown);
    }
    
    console.log('Language selector configured with mobile support');
}

// Función para actualizar enlaces de navegación
function updateNavigationLinks() {
    // Esta función puede ser expandida en el futuro si necesitas 
    // parámetros de idioma en las URLs
    console.log('Navigation links updated');
}

// Funciones globales para debug y control
window.translateTo = changeLanguage;
window.forceTranslate = translatePage;
window.debugCookies = function() {
    console.log('=== LANGUAGE DEBUG INFO ===');
    console.log('All cookies:', document.cookie);
    console.log('Preferred language cookie:', getCookie('preferred-language'));
    console.log('Current HTML lang:', document.documentElement.lang);
    console.log('Browser language:', navigator.language);
    console.log('Available translations:', Object.keys(translations || {}));
    console.log('========================');
};
window.testLanguageChange = function(lang) {
    console.log('Testing language change to:', lang);
    const result = changeLanguage(lang);
    console.log('Change result:', result);
    setTimeout(() => {
        console.log('Verification - saved language:', getCookie('preferred-language'));
    }, 200);
};
window.resetLanguage = function() {
    console.log('Resetting language to Spanish...');
    document.cookie = 'preferred-language=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
    localStorage.removeItem('preferred-language');
    location.reload();
};

// Listener para cambios de idioma en otras ventanas/pestañas
window.addEventListener('storage', function(e) {
    if (e.key === 'preferred-language' && e.newValue) {
        console.log('Language changed in another tab:', e.newValue);
        translatePage(e.newValue);
    }
});

// Interceptar navegación para mantener idioma
window.addEventListener('beforeunload', function() {
    const currentLang = getCookie('preferred-language');
    if (currentLang) {
        console.log('Page unloading, language preference:', currentLang);
        // Asegurar que la cookie persista
        setCookie('preferred-language', currentLang);
    }
});

// Verificar idioma al cargar la página
window.addEventListener('load', function() {
    const savedLang = getCookie('preferred-language');
    console.log('Page loaded, checking language preference:', savedLang);
    
    if (savedLang && savedLang !== 'es') {
        // Re-verificar que la traducción se aplicó correctamente
        setTimeout(() => {
            const currentHtmlLang = document.documentElement.lang;
            if (currentHtmlLang !== savedLang) {
                console.log('Re-applying language preference:', savedLang);
                translatePage(savedLang);
            }
        }, 500);
    }
});

console.log('Enhanced translation system loaded');
console.log('Debug functions available: window.debugCookies(), window.testLanguageChange(lang), window.resetLanguage()');
