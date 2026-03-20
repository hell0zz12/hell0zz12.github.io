// ===== Hexagon Site Script =====

// ===== i18n Translations =====
const translations = {
    en: {
        nav_products: 'Products',
        nav_about: 'About',
        nav_faq: 'FAQ',
        nav_cta: 'Get Hexagon',
        hero_badge: 'Stable · Irreversible · Dominant',
        hero_subtitle: 'Hexagon is a molecular lattice structure. The hexagon is the most stable shape in nature. Our script is a catalyst that restructures gameplay for you, making your advantage irreversible and stable.',
        hero_cta_primary: 'Explore Products',
        hero_cta_secondary: 'Learn More',
        about_stable_title: 'Structurally Stable',
        about_stable_desc: 'Like the hexagon in nature, our scripts are engineered for maximum stability. No crashes, no detection, no compromise.',
        about_catalyst_title: 'Catalyst Effect',
        about_catalyst_desc: "We don't just give you tools — we restructure the game around you. Your advantage becomes a permanent part of the lattice.",
        about_undetected_title: 'Undetected',
        about_undetected_desc: 'Built with the same precision as molecular bonds. Our protection layers make detection structurally impossible.',
        products_title: 'Our Products',
        products_subtitle: 'Three platforms. One lattice. Irreversible advantage.',
        product_roblox_badge: 'Script',
        product_roblox_title: 'Roblox Script',
        product_roblox_desc: 'Hexagon Lua script for Roblox. Inject via any executor and let the lattice restructure your gameplay instantly.',
        tag_free: 'Free',
        product_mc_title: 'Minecraft Cheat',
        product_mc_desc: 'Hexagon client for Minecraft 1.8.9. Optimized for PvP with KillAura, Reach, AutoClicker, ESP and more. Stable as the lattice itself.',
        product_mc_meta: 'Windows · .jar',
        product_csgo_title: 'Gamesense Lua Script',
        product_csgo_desc: 'Hexagon Lua script for Gamesense CS:GO. Advanced AA, resolver, visuals and misc features. Download the .lua file and load it in Gamesense.',
        product_csgo_meta: 'Gamesense · .lua',
        download_btn: 'Download',
        copy_btn: 'Copy',
        faq_title: 'FAQ',
        faq_subtitle: 'Common questions about the lattice.',
        faq_q1: 'Is Hexagon free?',
        faq_a1: 'Yes. All Hexagon products are completely free. The lattice belongs to everyone.',
        faq_q2: 'Is it undetected?',
        faq_a2: 'Hexagon is built with structural integrity in mind. Our scripts are regularly updated to maintain zero detection rate.',
        faq_q3: 'Which executor for Roblox?',
        faq_a3: 'Any modern Roblox executor works. Just paste the loadstring and execute.',
        faq_q4: 'How to use the Gamesense script?',
        faq_a4: 'Download the .lua file, open Gamesense, go to Lua tab, click Load script and select the file. Done.',
        footer_copy: '© 2026 Hexagon. The most stable shape in nature.',
    },
    ru: {
        nav_products: 'Продукты',
        nav_about: 'О нас',
        nav_faq: 'FAQ',
        nav_cta: 'Получить Hexagon',
        hero_badge: 'Стабильный · Необратимый · Доминирующий',
        hero_subtitle: 'Hexagon — это молекулярная решётчатая структура. Шестиугольник — самая стабильная форма в природе. Наш скрипт — катализатор, который перестраивает геймплей под тебя, делая твоё преимущество необратимым и стабильным.',
        hero_cta_primary: 'Смотреть продукты',
        hero_cta_secondary: 'Узнать больше',
        about_stable_title: 'Структурная стабильность',
        about_stable_desc: 'Как шестиугольник в природе, наши скрипты созданы для максимальной стабильности. Никаких крашей, никакого обнаружения, никаких компромиссов.',
        about_catalyst_title: 'Эффект катализатора',
        about_catalyst_desc: 'Мы не просто даём инструменты — мы перестраиваем игру вокруг тебя. Твоё преимущество становится постоянной частью решётки.',
        about_undetected_title: 'Необнаруживаемый',
        about_undetected_desc: 'Создан с той же точностью, что и молекулярные связи. Наши уровни защиты делают обнаружение структурно невозможным.',
        products_title: 'Наши продукты',
        products_subtitle: 'Три платформы. Одна решётка. Необратимое преимущество.',
        product_roblox_badge: 'Скрипт',
        product_roblox_title: 'Скрипт для Roblox',
        product_roblox_desc: 'Lua-скрипт Hexagon для Roblox. Вставь в любой executor и позволь решётке мгновенно перестроить твой геймплей.',
        tag_free: 'Бесплатно',
        product_mc_title: 'Чит на Minecraft',
        product_mc_desc: 'Клиент Hexagon для Minecraft 1.8.9. Оптимизирован для PvP: KillAura, Reach, AutoClicker, ESP и многое другое. Стабилен как сама решётка.',
        product_mc_meta: 'Windows · .jar',
        product_csgo_title: 'Lua-скрипт для Gamesense',
        product_csgo_desc: 'Lua-скрипт Hexagon для Gamesense CS:GO. Продвинутый AA, резолвер, визуалы и прочие функции. Скачай .lua файл и загрузи в Gamesense.',
        product_csgo_meta: 'Gamesense · .lua',
        download_btn: 'Скачать',
        copy_btn: 'Копировать',
        faq_title: 'FAQ',
        faq_subtitle: 'Частые вопросы о решётке.',
        faq_q1: 'Hexagon бесплатный?',
        faq_a1: 'Да. Все продукты Hexagon полностью бесплатны. Он принадлежит всем.',
        faq_q2: 'Он необнаруживаемый?',
        faq_a2: 'Hexagon создан с упором на структурную целостность. Наши скрипты регулярно обновляются для поддержания нулевого уровня обнаружения.',
        faq_q3: 'Какой executor для Roblox?',
        faq_a3: 'Подойдёт любой современный executor. Просто вставь loadstring и выполни.',
        faq_q4: 'Как использовать скрипт для Gamesense?',
        faq_a4: 'Скачай .lua файл, открой Gamesense, перейди во вкладку Lua, нажми Load script и выбери файл. Готово.',
        footer_copy: '© 2026 Hexagon. Самая стабильная форма в природе.',
    }
};

// ===== Apply Translations =====
function applyLang(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem('hexagon_lang', lang);
}

// ===== Theme =====
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hexagon_theme', theme);
}

// ===== Init =====
document.addEventListener('DOMContentLoaded', () => {
    // Restore preferences
    const savedTheme = localStorage.getItem('hexagon_theme') || 'dark';
    const savedLang = localStorage.getItem('hexagon_lang') || 'en';
    applyTheme(savedTheme);
    applyLang(savedLang);

    // Theme toggle
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            applyTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    // Language toggle
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-lang');
            applyLang(current === 'en' ? 'ru' : 'en');
        });
    }

    // Mobile menu
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });
        mobileMenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => mobileMenu.classList.remove('open'));
        });
    }

    // Navbar scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Copy buttons
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.getAttribute('data-copy');
            navigator.clipboard.writeText(text).then(() => {
                const span = btn.querySelector('span');
                const original = span.textContent;
                btn.classList.add('copied');
                span.textContent = document.documentElement.getAttribute('data-lang') === 'ru' ? 'Скопировано!' : 'Copied!';
                setTimeout(() => {
                    btn.classList.remove('copied');
                    span.textContent = original;
                }, 2000);
            });
        });
    });

    // FAQ accordion
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });

    // Scroll reveal
    const fadeEls = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('visible'), i * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    fadeEls.forEach(el => observer.observe(el));
});
