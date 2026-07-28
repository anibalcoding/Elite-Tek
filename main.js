// ── GALLERY RENDER ──
(function () {
    var roster = [
        { cat: 'Pro',     photo: 'PlayerPhotos/Pro/IMG_0758.jpeg' },
        { cat: 'College', photo: 'PlayerPhotos/College/IMG_0772.jpeg' },
        { cat: 'Academy', photo: 'PlayerPhotos/Academy/IMG_0307.jpeg' },
        { cat: 'Pro',     photo: 'PlayerPhotos/Pro/IMG_1833.jpeg' },
        { cat: 'College', photo: 'PlayerPhotos/College/IMG_1675.jpeg' },
        { cat: 'Academy', photo: 'PlayerPhotos/Academy/IMG_0463.jpeg' },
        { cat: 'Pro',     photo: 'PlayerPhotos/Pro/IMG_1853.jpeg' },
        { cat: 'College', photo: 'PlayerPhotos/College/IMG_2036.jpeg' },
        { cat: 'Academy', photo: 'PlayerPhotos/Academy/IMG_0897.jpeg' },
        { cat: 'Pro',     photo: 'PlayerPhotos/Pro/IMG_1957.jpeg' },
        { cat: 'College', photo: 'PlayerPhotos/College/IMG_4350.jpeg' },
        { cat: 'Academy', photo: 'PlayerPhotos/Academy/IMG_1025.jpeg' },
        { cat: 'Pro',     photo: 'PlayerPhotos/Pro/IMG_4092.jpeg' },
        { cat: 'College', photo: 'PlayerPhotos/College/IMG_4518.jpeg' },
        { cat: 'Academy', photo: 'PlayerPhotos/Academy/IMG_1085.jpeg' },
        { cat: 'Pro',     photo: 'PlayerPhotos/Pro/IMG_4152.jpeg' },
        { cat: 'College', photo: 'PlayerPhotos/College/IMG_1209.jpeg' },
        { cat: 'Academy', photo: 'PlayerPhotos/Academy/IMG_1134.jpeg' }
    ];

    var grid = document.getElementById('roster-grid');
    if (!grid) return;

    grid.innerHTML = roster.map(function (p, i) {
        return '<a href="#" class="roster-card" data-reveal="' + (i * 40) + '">' +
            '<img src="' + p.photo + '" alt="Elite Tek ' + p.cat + ' player" class="roster-card-img">' +
            '<div class="roster-card-overlay"></div>' +
            '<div class="roster-card-info">' +
                '<span class="roster-card-tick"></span>' +
                '<span class="roster-card-cat">' + p.cat + '</span>' +
            '</div>' +
        '</a>';
    }).join('');
}());

// ── SOCIALS RENDER ──
(function () {
    var igIcon = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>';
    var fbIcon = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>';
    var ttIcon = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" aria-hidden="true"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>';

    var platforms = [
        { icon: igIcon, platform: 'Instagram', handle: '@EliteTekSoccerAcademy', tag: 'Training · Highlights', url: 'https://www.instagram.com/EliteTekSoccerAcademy' },
        { icon: fbIcon, platform: 'Facebook',  handle: '@EliteTekSoccerAcademy', tag: 'Updates · Community',   url: 'https://www.facebook.com/EliteTekSoccerAcademy' },
        { icon: ttIcon, platform: 'TikTok',    handle: '@EliteTekSoccerAcademy', tag: 'Drills · Reels',       url: 'https://www.tiktok.com/@EliteTekSoccerAcademy' }
    ];

    var grid = document.getElementById('socials-grid');
    if (!grid) return;

    grid.innerHTML = platforms.map(function (p, i) {
        return '<a href="' + p.url + '" target="_blank" rel="noopener noreferrer" class="social-card" data-reveal="' + (i * 80) + '">' +
            '<div class="social-card-top">' +
                '<span class="social-card-icon">' + p.icon + '</span>' +
                '<span class="social-card-platform">' + p.platform + '</span>' +
            '</div>' +
            '<div class="social-card-panel">' +
                '<span class="social-card-panel-icon">' + p.icon + '</span>' +
            '</div>' +
            '<div class="social-card-bottom">' +
                '<span class="social-card-tick"></span>' +
                '<span class="social-card-handle">' + p.handle + '</span>' +
                '<span class="social-card-tag">' + p.tag + '</span>' +
                '<span class="social-card-btn">Follow <span class="social-card-arrow" aria-hidden="true">→</span></span>' +
            '</div>' +
        '</a>';
    }).join('');
}());

// ── GOLD BULLETS RENDER ──
(function () {
    var goldBullets = [
        '12 group training sessions per month',
        '3 sessions per week',
        'Tue, Wed &amp; Thu',
        'Ages 10–13: 5:00 PM',
        'Ages 14+: 6:00 PM',
        '$25 off all EliteTek Academy camps',
        '$40 off private training packages',
        'Free Friday shooting sessions',
        '1 free speed &amp; agility session per month'
    ];
    var el = document.getElementById('gold-bullets');
    if (el) {
        el.innerHTML = goldBullets.map(function (b) {
            return '<li><span class="programs-bullet-dot" aria-hidden="true"></span>' + b + '</li>';
        }).join('');
    }
}());

// ── MOBILE MENU ──
function toggleMenu(btn) {
    var isOpen = btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    var menu = document.getElementById('mobile-menu');
    menu.classList.toggle('open', isOpen);
    menu.setAttribute('aria-hidden', !isOpen);
}

document.getElementById('mobile-menu').querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        var btn = document.querySelector('.hamburger');
        if (btn.classList.contains('open')) toggleMenu(btn);
    });
});

var prefersReduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

// ── SLIDESHOW ──
(function () {
    function initSlideshow(el, intervalMs, delayMs) {
        var slides = el.querySelectorAll('.slide');
        if (slides.length < 2) return;
        var current = 0;
        setTimeout(function () {
            setInterval(function () {
                slides[current].classList.remove('active');
                current = (current + 1) % slides.length;
                slides[current].classList.add('active');
            }, intervalMs);
        }, delayMs);
    }
    initSlideshow(document.getElementById('slide-left'),  4500,    0);
    initSlideshow(document.getElementById('slide-right'), 4500, 2250);
}());

// ── CURTAIN REVEAL ──
(function () {
    var columns = document.querySelectorAll('.photo-column');
    if (prefersReduced) return;

    columns.forEach(function (col) {
        col.querySelector('.photo-panel').style.clipPath = 'inset(100% 0 0 0)';
        var label = col.querySelector('.photo-label');
        label.style.opacity = '0';
        label.style.transform = 'translateX(-16px)';
        col.classList.add('curtain-ready');
    });

    var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
        });
    }, { threshold: 0.25 });

    columns.forEach(function (col) { obs.observe(col); });
}());

// ── SCROLL REVEAL ──
(function () {
    if (prefersReduced) return;

    var reveals = document.querySelectorAll('[data-reveal]');
    reveals.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(26px)';
        el.style.transition = 'opacity 0.9s cubic-bezier(0.22,0.9,0.3,1), transform 0.9s cubic-bezier(0.22,0.9,0.3,1)';
    });

    var revealObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.style.transitionDelay = (entry.target.dataset.reveal || '0') + 'ms';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            revealObs.unobserve(entry.target);
        });
    }, { threshold: 0.15 });

    reveals.forEach(function (el) { revealObs.observe(el); });

    if (window.gsap) {
        gsap.from('.hero-ball', {
            x: -260,
            rotation: -720,
            duration: 1.3,
            ease: 'power3.out',
            delay: 0.25
        });
    }
}());

// ── BIO / CAREER TABS ──
(function () {
    document.querySelectorAll('.about-tabs').forEach(function (tabGroup) {
        tabGroup.querySelectorAll('.about-tab').forEach(function (tab) {
            tab.addEventListener('click', function () {
                var content = tabGroup.parentElement;
                tabGroup.querySelectorAll('.about-tab').forEach(function (t) {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                content.querySelectorAll('.about-tab-panel').forEach(function (p) {
                    p.classList.remove('active');
                });
                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');
                document.getElementById(tab.dataset.tab).classList.add('active');
            });
        });
    });
}());

// ── PROG-CARD PROGRESS BAR ──
(function () {
    if (prefersReduced) return;
    var cards = document.querySelectorAll('.prog-card');
    if (!cards.length) return;
    var barObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('prog-card--in');
            barObs.unobserve(entry.target);
        });
    }, { threshold: 0.2 });
    cards.forEach(function (card) { barObs.observe(card); });
}());

// ── LOCATIONS RENDER ──
(function () {
    var pinSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.083 3.810-5.257 3.810-9.077C20.099 5.245 16.45 2 12 2S3.9 5.245 3.9 9.25c0 3.82 1.866 6.994 3.81 9.077a19.58 19.58 0 002.684 2.282 16.975 16.975 0 001.144.742zM12 13.5a4.25 4.25 0 100-8.5 4.25 4.25 0 000 8.5z" clip-rule="evenodd"/></svg>';

    var venues = [
        {
            index: '01',
            category: 'GROUP TRAINING',
            name: 'HAROLD BACCHUS COMMUNITY PARK',
            address: ['13995 E Main St', 'Frisco, TX 75035', 'United States'],
            chips: ['Gold Membership', 'Silver Membership', 'Bronze Membership'],
            photo: 'assets/harold-park-optimized.webp',
            reverse: false
        },
        {
            index: '02',
            category: 'SMALL GROUP & SPECIALTY',
            name: 'INPOWERiQ',
            address: ['6051 Alma Rd', 'McKinney, TX 75070', 'United States'],
            chips: ['Mini Elites', 'Beginners Sessions', 'Shooting Sessions'],
            photo: 'assets/inpower.jpeg',
            reverse: true
        }
    ];

    var container = document.getElementById('locations-bands');
    if (!container) return;

    container.innerHTML = venues.map(function (v) {
        var mapsUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(v.address.join(', '));

        var chips = v.chips.map(function (c) {
            return '<span class="loc-chip">' + c + '</span>';
        }).join('');

        var photoCol = '<div class="loc-photo-col" data-loc-stagger="0">' +
            '<div class="loc-photo-wrap">' +
                '<img src="' + v.photo + '" alt="' + v.name + '" class="loc-photo-img">' +
            '</div>' +
        '</div>';

        var contentCol = '<div class="loc-content-col" data-loc-stagger="1">' +
            '<div class="loc-index-row">' +
                '<span class="loc-index">' + v.index + '</span>' +
                '<span class="loc-category">' + v.category + '</span>' +
            '</div>' +
            '<h3 class="loc-name">' + v.name + '</h3>' +
            '<address class="loc-address">' + v.address.join('<br>') + '</address>' +
            '<div class="loc-chips">' + chips + '</div>' +
            '<a href="' + mapsUrl + '" target="_blank" rel="noopener noreferrer" class="loc-directions-pill">' +
                'GET DIRECTIONS <span aria-hidden="true">→</span>' +
            '</a>' +
        '</div>';

        return '<div class="loc-band' + (v.reverse ? ' loc-band--reverse' : '') + '">' +
            photoCol + contentCol +
        '</div>';
    }).join('');

    if (prefersReduced) return;

    var locEls = container.querySelectorAll('[data-loc-stagger]');
    locEls.forEach(function (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(28px)';
        el.style.transition = 'opacity 0.9s cubic-bezier(.16,.84,.32,1), transform 0.9s cubic-bezier(.16,.84,.32,1)';
        el.style.transitionDelay = (parseInt(el.dataset.locStagger, 10) * 90) + 'ms';
    });

    var locObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            entry.target.style.transitionDelay = (parseInt(entry.target.dataset.locStagger, 10) * 90) + 'ms';
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            locObs.unobserve(entry.target);
        });
    }, { threshold: 0.15 });

    locEls.forEach(function (el) { locObs.observe(el); });
}());

// ── CONTACT FORM ──
(function () {
    var form   = document.getElementById('contact-form');
    var btn    = document.getElementById('form-submit');
    var status = document.getElementById('form-status');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        btn.disabled = true;
        btn.textContent = 'Sending…';
        status.textContent = '';
        status.className = 'form-status';

        fetch('contact.php', {
            method: 'POST',
            body: new FormData(form)
        })
        .then(function (res) { return res.json(); })
        .then(function (data) {
            if (data.success) {
                status.textContent = data.message;
                status.classList.add('form-status--ok');
                form.reset();
            } else {
                status.textContent = data.message;
                status.classList.add('form-status--err');
            }
        })
        .catch(function () {
            status.textContent = 'Network error. Please call us at (469) 625-6553.';
            status.classList.add('form-status--err');
        })
        .finally(function () {
            btn.disabled = false;
            btn.textContent = 'Send Message';
        });
    });
}());
