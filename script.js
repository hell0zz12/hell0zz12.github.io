// ===== Hexagon Site Script =====

const translations = {
    en: {
        nav_products: 'Products',
        nav_about: 'Why Us',
        nav_faq: 'FAQ',
        nav_cta: 'Get Hexagon',
        hero_badge: 'Free \u00b7 Undetected \u00b7 Dominant',
        hero_subtitle: 'The script that puts you above everyone else. Instant advantage, zero effort, permanent dominance across Roblox, Minecraft and CS:GO.',
        hero_cta_primary: 'Get the Script',
        hero_cta_secondary: 'Why Hexagon',
        stat_platforms: 'Platforms',
        stat_detection: 'Detection Rate',
        stat_price_val: 'Free',
        stat_price: 'Forever',
        about_stable_title: 'Rock Solid Stability',
        about_stable_desc: 'No crashes, no freezes, no random disconnects. Hexagon runs clean in the background while you focus on destroying the lobby.',
        about_catalyst_title: 'Instant Dominance',
        about_catalyst_desc: 'One script, full control. Hexagon flips the game in your favor the moment you inject. No setup, no config, just results.',
        about_undetected_title: 'Fully Undetected',
        about_undetected_desc: 'Constantly updated to stay ahead of anti-cheat. Zero bans, zero flags. Play as long as you want without a single worry.',
        products_title: 'Pick Your Game',
        products_subtitle: 'Three platforms. One script. Total control.',
        product_roblox_badge: 'Script',
        product_roblox_title: 'Roblox Script',
        product_roblox_desc: 'Paste one line and own the server. ESP, aimbot, speed, fly — everything you need to make every lobby yours. Three scripts for every situation.',
        tag_free: 'Free',
        scripts_btn: 'View Scripts',
        modal_title: 'Roblox Scripts',
        modal_subtitle: 'Choose a script and copy it into your executor',
        script_vd_desc: 'Dead by Daylight mode',
        script_old_desc: 'Legacy version',
        product_mc_title: 'Minecraft Client',
        product_mc_desc: 'Built for PvP. KillAura, Reach, AutoClicker, ESP, Velocity \u2014 every module tuned to make you untouchable in 1.8.9 combat. Drop in and dominate.',
        product_mc_meta: 'Windows \u00b7 .jar',
        product_csgo_title: 'Gamesense Script',
        product_csgo_desc: 'Advanced AA, resolver, full visuals and misc. Load the .lua into Gamesense and watch your stats climb. Built for players who want to win every round.',
        product_csgo_meta: 'Gamesense \u00b7 .lua',
        download_btn: 'Download',
        copy_btn: 'Copy',
        faq_title: 'FAQ',
        faq_subtitle: 'Everything you need to know before you start winning.',
        faq_q1: 'Is Hexagon free?',
        faq_a1: '100% free. No subscriptions, no paywalls, no catch. Download, inject, dominate.',
        faq_q2: 'Will I get banned?',
        faq_a2: 'Hexagon is actively maintained and updated to stay ahead of anti-cheat. We keep detection at zero so your account stays safe.',
        faq_q3: 'Which executor for Roblox?',
        faq_a3: 'Any executor works \u2014 Synapse X, KRNL, Fluxus, Solara. Copy the loadstring, paste it in, hit execute.',
        faq_q4: 'How to load the Gamesense script?',
        faq_a4: 'Download the .lua file, open Gamesense, go to the Lua tab, click Load script and select the file. Done in 10 seconds.',
        footer_copy: '\u00a9 2026 Hexagon. Built to dominate.',
    },
    ru: {
        nav_products: '\u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b',
        nav_about: '\u041f\u043e\u0447\u0435\u043c\u0443 \u043c\u044b',
        nav_faq: 'FAQ',
        nav_cta: '\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c Hexagon',
        hero_badge: '\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e \u00b7 \u041d\u0435\u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u00b7 \u0414\u043e\u043c\u0438\u043d\u0438\u0440\u0443\u044e\u0449\u0438\u0439',
        hero_subtitle: '\u0421\u043a\u0440\u0438\u043f\u0442, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0442\u0430\u0432\u0438\u0442 \u0442\u0435\u0431\u044f \u0432\u044b\u0448\u0435 \u0432\u0441\u0435\u0445. \u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u043e, \u043d\u0443\u043b\u044c \u0443\u0441\u0438\u043b\u0438\u0439, \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e\u0435 \u0434\u043e\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u2014 \u0432 Roblox, Minecraft \u0438 CS:GO.',
        hero_cta_primary: '\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0441\u043a\u0440\u0438\u043f\u0442',
        hero_cta_secondary: '\u041f\u043e\u0447\u0435\u043c\u0443 Hexagon',
        stat_platforms: '\u041f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b',
        stat_detection: '\u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0439',
        stat_price_val: '\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e',
        stat_price: '\u041d\u0430\u0432\u0441\u0435\u0433\u0434\u0430',
        about_stable_title: '\u041f\u043e\u043b\u043d\u0430\u044f \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c',
        about_stable_desc: '\u041d\u0438\u043a\u0430\u043a\u0438\u0445 \u043a\u0440\u0430\u0448\u0435\u0439, \u0444\u0440\u0438\u0437\u043e\u0432 \u0438 \u0432\u044b\u043b\u0435\u0442\u043e\u0432. Hexagon \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u0447\u0438\u0441\u0442\u043e \u0432 \u0444\u043e\u043d\u0435, \u043f\u043e\u043a\u0430 \u0442\u044b \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0430\u0435\u0448\u044c \u043b\u043e\u0431\u0431\u0438.',
        about_catalyst_title: '\u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0435 \u0434\u043e\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435',
        about_catalyst_desc: '\u041e\u0434\u0438\u043d \u0441\u043a\u0440\u0438\u043f\u0442, \u043f\u043e\u043b\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c. Hexagon \u043f\u0435\u0440\u0435\u0432\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u0438\u0433\u0440\u0443 \u0432 \u0442\u0432\u043e\u044e \u043f\u043e\u043b\u044c\u0437\u0443 \u0441 \u043c\u043e\u043c\u0435\u043d\u0442\u0430 \u0438\u043d\u044a\u0435\u043a\u0446\u0438\u0438. \u041d\u0438\u043a\u0430\u043a\u043e\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438, \u043f\u0440\u043e\u0441\u0442\u043e \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442.',
        about_undetected_title: '\u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043d\u0435\u043e\u0431\u043d\u0430\u0440\u0443\u0436\u0438\u0432\u0430\u0435\u043c\u044b\u0439',
        about_undetected_desc: '\u041f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0447\u0442\u043e\u0431\u044b \u043e\u043f\u0435\u0440\u0435\u0436\u0430\u0442\u044c \u0430\u043d\u0442\u0438\u0447\u0438\u0442. \u041d\u043e\u043b\u044c \u0431\u0430\u043d\u043e\u0432, \u043d\u043e\u043b\u044c \u0444\u043b\u0430\u0433\u043e\u0432. \u0418\u0433\u0440\u0430\u0439 \u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0443\u0433\u043e\u0434\u043d\u043e.',
        products_title: '\u0412\u044b\u0431\u0435\u0440\u0438 \u0438\u0433\u0440\u0443',
        products_subtitle: '\u0422\u0440\u0438 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b. \u041e\u0434\u0438\u043d \u0441\u043a\u0440\u0438\u043f\u0442. \u041f\u043e\u043b\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c.',
        product_roblox_badge: '\u0421\u043a\u0440\u0438\u043f\u0442',
        product_roblox_title: '\u0421\u043a\u0440\u0438\u043f\u0442 \u0434\u043b\u044f Roblox',
        product_roblox_desc: '\u0412\u0441\u0442\u0430\u0432\u044c \u043e\u0434\u043d\u0443 \u0441\u0442\u0440\u043e\u043a\u0443 \u0438 \u0432\u043b\u0430\u0434\u0435\u0439 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c. ESP, \u044d\u0439\u043c\u0431\u043e\u0442, \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c, \u043f\u043e\u043b\u0451\u0442 \u2014 \u0442\u0440\u0438 \u0441\u043a\u0440\u0438\u043f\u0442\u0430 \u043d\u0430 \u043b\u044e\u0431\u043e\u0439 \u0441\u043b\u0443\u0447\u0430\u0439.',
        tag_free: '\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e',
        scripts_btn: '\u0421\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0441\u043a\u0440\u0438\u043f\u0442\u044b',
        modal_title: '\u0421\u043a\u0440\u0438\u043f\u0442\u044b Roblox',
        modal_subtitle: '\u0412\u044b\u0431\u0435\u0440\u0438 \u0441\u043a\u0440\u0438\u043f\u0442 \u0438 \u0441\u043a\u043e\u043f\u0438\u0440\u0443\u0439 \u0432 executor',
        script_vd_desc: '\u0420\u0435\u0436\u0438\u043c Dead by Daylight',
        script_old_desc: '\u0421\u0442\u0430\u0440\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f',
        product_mc_title: '\u041a\u043b\u0438\u0435\u043d\u0442 Minecraft',
        product_mc_desc: '\u0421\u043e\u0437\u0434\u0430\u043d \u0434\u043b\u044f PvP. KillAura, Reach, AutoClicker, ESP, Velocity \u2014 \u043a\u0430\u0436\u0434\u044b\u0439 \u043c\u043e\u0434\u0443\u043b\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0435\u0431\u044f \u043d\u0435\u043f\u043e\u0431\u0435\u0434\u0438\u043c\u044b\u043c \u0432 1.8.9.',
        product_mc_meta: 'Windows \u00b7 .jar',
        product_csgo_title: '\u0421\u043a\u0440\u0438\u043f\u0442 Gamesense',
        product_csgo_desc: '\u041f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0439 AA, \u0440\u0435\u0437\u043e\u043b\u0432\u0435\u0440, \u0432\u0438\u0437\u0443\u0430\u043b\u044b \u0438 \u043c\u0438\u0441\u0446. \u0417\u0430\u0433\u0440\u0443\u0437\u0438 .lua \u0432 Gamesense \u0438 \u043d\u0430\u0431\u043b\u044e\u0434\u0430\u0439 \u043a\u0430\u043a \u0440\u0430\u0441\u0442\u0443\u0442 \u0441\u0442\u0430\u0442\u044b.',
        product_csgo_meta: 'Gamesense \u00b7 .lua',
        download_btn: '\u0421\u043a\u0430\u0447\u0430\u0442\u044c',
        copy_btn: '\u041a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c',
        faq_title: 'FAQ',
        faq_subtitle: '\u0412\u0441\u0451 \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0437\u043d\u0430\u0442\u044c \u043f\u0435\u0440\u0435\u0434 \u043d\u0430\u0447\u0430\u043b\u043e\u043c.',
        faq_q1: 'Hexagon \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439?',
        faq_a1: '100% \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e. \u041d\u0438\u043a\u0430\u043a\u0438\u0445 \u043f\u043e\u0434\u043f\u0438\u0441\u043e\u043a, \u043f\u0435\u0439\u0432\u043e\u043b\u043b\u043e\u0432, \u043f\u043e\u0434\u0432\u043e\u0445\u043e\u0432. \u0421\u043a\u0430\u0447\u0430\u0439, \u0438\u043d\u044a\u0435\u0446\u0442\u0438\u0440\u0443\u0439, \u0434\u043e\u043c\u0438\u043d\u0438\u0440\u0443\u0439.',
        faq_q2: '\u041c\u0435\u043d\u044f \u0437\u0430\u0431\u0430\u043d\u044f\u0442?',
        faq_a2: 'Hexagon \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u044f\u0435\u0442\u0441\u044f. \u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u043d\u0430 \u043d\u0443\u043b\u0435 \u2014 \u0442\u0432\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442 \u0432 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438.',
        faq_q3: '\u041a\u0430\u043a\u043e\u0439 executor \u0434\u043b\u044f Roblox?',
        faq_a3: '\u041b\u044e\u0431\u043e\u0439 \u043f\u043e\u0434\u043e\u0439\u0434\u0451\u0442 \u2014 Synapse X, KRNL, Fluxus, Solara. \u0421\u043a\u043e\u043f\u0438\u0440\u0443\u0439 loadstring, \u0432\u0441\u0442\u0430\u0432\u044c, \u0432\u044b\u043f\u043e\u043b\u043d\u0438.',
        faq_q4: '\u041a\u0430\u043a \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u043a\u0440\u0438\u043f\u0442 Gamesense?',
        faq_a4: '\u0421\u043a\u0430\u0447\u0430\u0439 .lua \u0444\u0430\u0439\u043b, \u043e\u0442\u043a\u0440\u043e\u0439 Gamesense, \u0432\u043a\u043b\u0430\u0434\u043a\u0430 Lua, \u043d\u0430\u0436\u043c\u0438 Load script \u0438 \u0432\u044b\u0431\u0435\u0440\u0438 \u0444\u0430\u0439\u043b. \u0413\u043e\u0442\u043e\u0432\u043e \u0437\u0430 10 \u0441\u0435\u043a\u0443\u043d\u0434.',
        footer_copy: '\u00a9 2026 Hexagon. \u0421\u043e\u0437\u0434\u0430\u043d \u0434\u043e\u043c\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c.',
    }
};

function applyLang(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem('hexagon_lang', lang);
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('hexagon_theme', theme);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('hexagon_theme') || 'dark';
    const savedLang = localStorage.getItem('hexagon_lang') || 'en';
    applyTheme(savedTheme);
    applyLang(savedLang);

    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            applyTheme(current === 'dark' ? 'light' : 'dark');
        });
    }

    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-lang');
            applyLang(current === 'en' ? 'ru' : 'en');
        });
    }

    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener('click', () => mobileMenu.classList.toggle('open'));
        mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));
    }

    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 50));

    // Scripts Modal
    const openBtn = document.getElementById('openScriptsModal');
    const closeBtn = document.getElementById('closeScriptsModal');
    const overlay = document.getElementById('scriptsModal');
    if (openBtn && overlay) {
        openBtn.addEventListener('click', () => overlay.classList.add('open'));
        closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('open'); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') overlay.classList.remove('open'); });
    }

    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const text = btn.getAttribute('data-copy');
            navigator.clipboard.writeText(text).then(() => {
                const span = btn.querySelector('span');
                const original = span.textContent;
                btn.classList.add('copied');
                span.textContent = document.documentElement.getAttribute('data-lang') === 'ru' ? '\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u043e!' : 'Copied!';
                setTimeout(() => { btn.classList.remove('copied'); span.textContent = original; }, 2000);
            });
        });
    });

    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });

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
