const CATS = {
    balones: 'Balones',
    calzado: 'Calzado',
    ropa: 'Ropa',
    proteccion: 'Protección',
    accesorios: 'Accesorios'
};

const ICON = {
    balones: ['ball', '#FFD23F', '#1F5BFF'],
    calzado: ['shoe', '#1F5BFF', '#FFD23F'],
    ropa: ['jersey', '#FFD23F', '#0F1F3D'],
    proteccion: ['pads', '#0F1F3D', '#1F5BFF'],
    accesorios: ['bag', '#1F5BFF', '#FFD23F']
};

// ===== PRODUCTOS (edita aquí nombres, precios y descripciones) =====
const P = [
    {
        id: 1,
        n: 'Balón Spike Pro',
        c: 'balones',
        p: 129,
        t: 'ball',
        a: '#FFD23F',
        b: '#1F5BFF',
        d: 'Balón de competencia con paneles cosidos. Vuelo estable y toque suave en cada remate.'
    },
    {
        id: 2,
        n: 'Balón Beach Sol',
        c: 'balones',
        p: 89,
        t: 'ball',
        a: '#FF7A2F',
        b: '#fff',
        d: 'Pensado para vóley playa: resistente al agua y a la arena, fácil de ver en el aire.'
    },
    {
        id: 3,
        n: 'Balón Training Soft',
        c: 'balones',
        p: 69,
        t: 'ball',
        a: '#fff',
        b: '#1F5BFF',
        d: 'Cuero sintético más blando para practicar recepción y saque sin dolor en los antebrazos.'
    },
    {
        id: 4,
        n: 'Zapatillas Ace Court',
        c: 'calzado',
        p: 289,
        t: 'shoe',
        a: '#1F5BFF',
        b: '#FFD23F',
        d: 'Suela de goma con agarre en cancha, amortiguación en el talón y soporte lateral para saltar.'
    },
    {
        id: 5,
        n: 'Zapatillas Libero Flex',
        c: 'calzado',
        p: 249,
        t: 'shoe',
        a: '#0F1F3D',
        b: '#FF7A2F',
        d: 'Ligeras y flexibles para desplazarte rápido y llegar a cada defensa.'
    },
    {
        id: 6,
        n: 'Camiseta Match Azul',
        c: 'ropa',
        p: 89,
        t: 'jersey',
        a: '#1F5BFF',
        b: '#FFD23F',
        d: 'Tela que respira y seca rápido. Corte deportivo con mangas libres para el brazo.'
    },
    {
        id: 7,
        n: 'Camiseta Match Amarilla',
        c: 'ropa',
        p: 89,
        t: 'jersey',
        a: '#FFD23F',
        b: '#0F1F3D',
        d: 'La misma tela técnica del modelo azul, en el color del equipo que no pasa desapercibido.'
    },
    {
        id: 8,
        n: 'Short Rally',
        c: 'ropa',
        p: 59,
        t: 'jersey',
        a: '#0F1F3D',
        b: '#1F5BFF',
        d: 'Short liviano con cintura elástica y bolsillo para el pañuelo o el llavero.'
    },
    {
        id: 9,
        n: 'Rodilleras Dig Pro',
        c: 'proteccion',
        p: 69,
        t: 'pads',
        a: '#0F1F3D',
        b: '#FFD23F',
        d: 'Espuma de alta densidad en la rótula para lanzarte al piso sin miedo. Se venden por par.'
    },
    {
        id: 10,
        n: 'Mangas Block',
        c: 'proteccion',
        p: 45,
        t: 'pads',
        a: '#1F5BFF',
        b: '#fff',
        d: 'Mangas para antebrazo que protegen en recepción y mantienen el calor del músculo.'
    },
    {
        id: 11,
        n: 'Mochila Team 35L',
        c: 'accesorios',
        p: 119,
        t: 'bag',
        a: '#1F5BFF',
        b: '#FFD23F',
        d: 'Espacio para zapatillas, ropa y dos balones. Bolsillo ventilado para la ropa húmeda.'
    },
    {
        id: 12,
        n: 'Red Oficial 9.5 m',
        c: 'accesorios',
        p: 189,
        t: 'net',
        a: '#0F1F3D',
        b: '#FFD23F',
        d: 'Red de competencia con banda superior reforzada y cuerda tensora incluida.'
    }
];

const IMG = {
    1: 'Balón Spike Pro.webp',
    2: 'Balon Beach sol.jpg',
    3: 'Balón training soft.webp',
    4: 'zapatillas ace court.webp',
    5: 'zapatillas libero flex.jpg',
    6: 'camiseta match azul.jpg',
    7: 'camiseta match amarilla.jpg',
    8: 'short rally.jpg',
    9: 'rodilleras dig pro.jpg',
    10: 'mangas block.jpg',
    11: 'mochila team 35L.jpg',
    12: 'red oficial 9.5m.webp'
};

const $ = (s, r = document) => r.querySelector(s),
    money = n => 'S/ ' + n.toFixed(2),
    q = new URLSearchParams(location.search);

const art = (t, a, b) => `
    <svg viewBox="0 0 200 200" aria-hidden="true">
        ${{
            ball: `
                <circle cx=100 cy=100 r=78 fill="${a}"/>
                <g fill=none stroke="${b}" stroke-width=7 stroke-linecap=round>
                    <path d="M32 70Q100 105 168 70"/>
                    <path d="M32 130Q100 95 168 130"/>
                    <path d="M100 22Q62 100 100 178"/>
                </g>
            `,
            shoe: `
                <path d="M24 118V84Q58 84 78 62L96 74Q128 98 176 108Q190 112 186 128Z" fill="${a}"/>
                <rect x=20 y=124 width=170 height=16 rx=8 fill="${b}"/>
                <path d="M92 82l22 14M84 92l22 14" stroke="#fff" stroke-width=5 stroke-linecap=round />
            `,
            jersey: `
                <path d="M62 28L86 38Q100 54 114 38L138 28L180 64L156 88L146 78V176H54V78L44 88L20 64Z" fill="${a}"/>
                <path d="M54 120H146V138H54Z" fill="${b}"/>
            `,
            pads: `
                <rect x=56 y=34 width=88 height=132 rx=40 fill="${a}"/>
                <ellipse cx=100 cy=100 rx=30 ry=36 fill="${b}"/>
            `,
            bag: `
                <path d="M70 72Q70 36 100 36Q130 36 130 72" fill=none stroke="${b}" stroke-width=8 />
                <rect x=30 y=66 width=140 height=100 rx=22 fill="${a}"/>
                <rect x=30 y=102 width=140 height=14 fill="${b}"/>
            `,
            net: `
                <path d="M24 40V172M176 40V172" stroke="${b}" stroke-width=8 stroke-linecap=round />
                <rect x=24 y=46 width=152 height=10 fill="${b}"/>
                <g stroke="${a}" stroke-width=2.5>
                    ${[...Array(8)].map((_, i) => `<path d="M${24 + i * 21.7} 56V130" />`).join('')}
                    ${[1, 2, 3].map(i => `<path d="M24 ${56 + i * 18.5}H176" />`).join('')}
                </g>
            `
        }[t]}
    </svg>
`;

const pic = p => `
    <img src="assets/img/${encodeURI(IMG[p.id])}" alt="${p.n}" data-id=${p.id}>
`;

addEventListener('error', e => {
    const i = e.target;

    if (i.tagName == 'IMG' && i.dataset.id) {
        const p = P.find(x => x.id == i.dataset.id);
        i.outerHTML = art(p.t, p.a, p.b);
    }
}, true);

const card = p => `
    <a class=card href="shop-single.html?id=${p.id}">
        <div class=art>${pic(p)}</div>
        <small>${CATS[p.c]}</small>
        <h3>${p.n}</h3>
        <b>${money(p.p)}</b>
    </a>
`;

// ===== Carrito (se guarda en el navegador, sin base de datos) =====
let cart = [];

try {
    cart = JSON.parse(localStorage.getItem('rm-cart') || '[]');
} catch (e) {}

const page = document.body.dataset.page;

$('#hdr').innerHTML = `
    <div class="w nav">
        <a class=logo href=index.html>
            ${art('ball', '#FFD23F', '#1F5BFF')}Remate
        </a>

        <nav>
            ${[
                ['index', 'Inicio'],
                ['shop', 'Tienda'],
                ['about', 'Nosotros'],
                ['contact', 'Contacto']
            ]
                .map(([h, t]) => `<a href=${h}.html class="${page == h ? 'on' : ''}">${t}</a>`)
                .join('')}
        </nav>

        <button class=cartbtn id=cb>
            Carrito <span id=cn>0</span>
        </button>
    </div>
`;

$('#ftr').innerHTML = `
    <div class=w>
        <div>
            <h3>Remate</h3>
            <p>Tienda de vóley en Cusco. Balones, calzado y ropa para jugar mejor.</p>
        </div>

        <div>
            <h3>Tienda</h3>
            ${Object.entries(CATS)
                .map(([k, v]) => `<a href="shop.html?cat=${k}">${v}</a>`)
                .join('')}
        </div>

        <div>
            <h3>Contacto</h3>
            <a href="mailto:021200987j@uandina.edu.pe">021200987j@uandina.edu.pe</a>
            <a href="tel:+51997827387">+51 997 827 387</a>
            <p>Urb. Ttio Av. Costanera (Ref. 1er Paradero), Cusco</p>
        </div>

        <small>© 2026 Remate Vóley Store. Atiende: Justo Cristobher Villafuerte Andrade.</small>
    </div>
`;

document.body.insertAdjacentHTML(
    'beforeend',
    `
    <div id=ov></div>

    <aside id=cart aria-label="Carrito">
        <header>
            <h3>Tu carrito</h3>
            <button class=x id=cx aria-label="Cerrar carrito">×</button>
        </header>

        <div id=cl></div>

        <div class=tot>
            <span>Total</span>
            <span id=ct></span>
        </div>

        <a
            class=btn
            id=wa
            target=_blank
            rel=noopener
            style="text-align:center"
        >
            Pedir por WhatsApp
        </a>
    </aside>
    `
);

const open = o => {
    $('#cart').classList.toggle('open', o);
    $('#ov').classList.toggle('open', o);
};

function drawCart() {
    try {
        localStorage.setItem('rm-cart', JSON.stringify(cart));
    } catch (e) {}

    const tot = cart.reduce(
        (s, i) => s + i.q * P.find(x => x.id == i.id).p,
        0
    );

    $('#cn').textContent = cart.reduce((s, i) => s + i.q, 0);
    $('#ct').textContent = money(tot);

    $('#cl').innerHTML = cart.length
        ? cart.map((i, k) => {
            const p = P.find(x => x.id == i.id);

            return `
                <div class=row>
                    <div class=th>${pic(p)}</div>

                    <div>
                        <b>${p.n}</b><br>
                        <small>Talla ${i.s} · ${money(p.p)}</small>

                        <div class=qt>
                            <button data-k=${k} data-d=-1>−</button>
                            ${i.q}
                            <button data-k=${k} data-d=1>+</button>
                        </div>
                    </div>

                    <button
                        class=x
                        data-k=${k}
                        data-d=0
                        aria-label="Quitar"
                    >
                        ×
                    </button>
                </div>
            `;
        }).join('')
        : '<p class=empty>Tu carrito está vacío. Elige algo en la tienda para empezar.</p>';

    const msg =
        'Hola Remate, quiero pedir:\n' +
        cart
            .map(i => {
                const p = P.find(x => x.id == i.id);
                return `- ${i.q} x ${p.n} (talla ${i.s}) ${money(p.p * i.q)}`;
            })
            .join('\n') +
        '\nTotal: ' +
        money(tot);

    $('#wa').href = cart.length
        ? 'https://wa.me/51997827387?text=' + encodeURIComponent(msg)
        : 'shop.html';

    $('#wa').textContent = cart.length
        ? 'Pedir por WhatsApp'
        : 'Ir a la tienda';
}

$('#cl').onclick = e => {
    const b = e.target.closest('button');

    if (!b) return;

    const k = +b.dataset.k,
        d = +b.dataset.d;

    if (d) cart[k].q += d;

    if (!d || cart[k].q < 1) cart.splice(k, 1);

    drawCart();
};

$('#cb').onclick = () => open(1);
$('#cx').onclick = $('#ov').onclick = () => open(0);
onkeydown = e => e.key == 'Escape' && open(0);

drawCart();

// ===== Páginas =====
if ($('#cats')) {
    $('#cats').innerHTML = Object.entries(CATS)
        .map(([k, v]) => `<a class=cat href="shop.html?cat=${k}">${art(...ICON[k])}${v}</a>`)
        .join('');
}

if ($('#feat')) {
    $('#feat').innerHTML = [1, 4, 6, 11]
        .map(i => card(P.find(p => p.id == i)))
        .join('');
}

if ($('#grid')) {
    let c = CATS[q.get('cat')] ? q.get('cat') : 'todo';

    $('#chips').innerHTML = ['todo', ...Object.keys(CATS)]
        .map(k => `<button class=chip data-c=${k}>${CATS[k] || 'Todo'}</button>`)
        .join('');

    const draw = () => {
        let l = P.filter(p => c == 'todo' || p.c == c),
            s = $('#sort').value;

        if (s) {
            l.sort((a, b) => s == 'asc' ? a.p - b.p : b.p - a.p);
        }

        $('#grid').innerHTML = l.map(card).join('');
        $('#count').textContent = l.length + ' productos';

        document
            .querySelectorAll('#chips .chip')
            .forEach(b => b.classList.toggle('on', b.dataset.c == c));
    };

    $('#chips').onclick = e => {
        if (e.target.dataset.c) {
            c = e.target.dataset.c;
            draw();
        }
    };

    $('#sort').onchange = draw;

    draw();
}

if ($('#one')) {
    const p = P.find(x => x.id == q.get('id')) || P[0];

    document.title = p.n + ' | Remate';

    const sz =
        p.c == 'calzado'
            ? ['37', '38', '39', '40', '41', '42', '43']
            : p.c == 'ropa'
                ? ['S', 'M', 'L', 'XL']
                : ['Única'];

    let s = sz[0];

    $('#one').innerHTML = `
        <div class=big>${pic(p)}</div>

        <div>
            <small>${CATS[p.c]}</small>
            <h1>${p.n}</h1>
            <p class=pr>${money(p.p)}</p>
            <p>${p.d}</p>

            <h3>Talla</h3>

            <div id=szs>
                ${sz
                    .map(x => `<button class="chip ${x == s ? 'on' : ''}">${x}</button>`)
                    .join('')}
            </div>

            <button class="btn d" id=add>
                Agregar al carrito
            </button>
        </div>
    `;

    $('#szs').onclick = e => {
        if (e.target.matches('.chip')) {
            s = e.target.textContent;

            document
                .querySelectorAll('#szs .chip')
                .forEach(b => b.classList.toggle('on', b.textContent == s));
        }
    };

    $('#add').onclick = () => {
        const f = cart.find(i => i.id == p.id && i.s == s);

        f
            ? f.q++
            : cart.push({
                id: p.id,
                s,
                q: 1
            });

        drawCart();
        open(1);
    };

    $('#rel').innerHTML = P
        .filter(x => x.c == p.c && x.id != p.id)
        .concat(P.filter(x => x.c != p.c))
        .slice(0, 4)
        .map(card)
        .join('');
}

if ($('#form')) {
    $('#form').onsubmit = e => {
        e.preventDefault();

        const f = e.target,
            [n, m, t] = f.elements;

        location.href =
            'mailto:021200987j@uandina.edu.pe?subject=' +
            encodeURIComponent('Consulta de ' + n.value) +
            '&body=' +
            encodeURIComponent(
                t.value + '\n\n' + n.value + ' (' + m.value + ')'
            );

        f.reset();
        $('#ok').style.display = 'block';
    };
}