(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Nav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Nav() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Nav.useEffect": ()=>{
            const onScroll = {
                "Nav.useEffect.onScroll": ()=>setScrolled(window.scrollY > 30)
            }["Nav.useEffect.onScroll"];
            window.addEventListener('scroll', onScroll, {
                passive: true
            });
            return ({
                "Nav.useEffect": ()=>window.removeEventListener('scroll', onScroll)
            })["Nav.useEffect"];
        }
    }["Nav.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            padding: '1.25rem clamp(1.5rem, 8vw, 4rem)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'background 0.35s ease, backdrop-filter 0.35s ease',
            backdropFilter: scrolled ? 'blur(12px)' : 'none',
            backgroundColor: scrolled ? 'rgba(250, 246, 240, 0.85)' : 'transparent',
            borderBottom: scrolled ? '1px solid rgba(44, 26, 14, 0.06)' : '1px solid transparent'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: 'var(--font-cormorant)',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    fontSize: '1.15rem',
                    color: 'var(--dark-brown)',
                    letterSpacing: '0.02em'
                },
                children: "ARG"
            }, void 0, false, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "nav-links",
                style: {
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center'
                },
                children: [
                    [
                        'work',
                        'creative',
                        'about',
                        'contact'
                    ].map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `#${id}`,
                            className: "nav-link",
                            children: id
                        }, id, false, {
                            fileName: "[project]/components/Nav.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/cv",
                        className: "cv-pill",
                        style: cvPillStyle,
                        children: "cv ↓"
                    }, void 0, false, {
                        fileName: "[project]/components/Nav.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Nav.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Nav.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Nav, "tQtW9FyKD+Ut/6k+f0BCbABprL4=");
_c = Nav;
const cvPillStyle = {
    backgroundColor: 'var(--rust)',
    color: 'var(--cream)',
    padding: '0.4rem 1.1rem',
    borderRadius: '100px',
    textDecoration: 'none',
    fontFamily: 'var(--font-homemade-apple)',
    fontSize: '0.875rem'
};
var _c;
__turbopack_context__.k.register(_c, "Nav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ConcentricCircles.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConcentricCircles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function ConcentricCircles({ className = '', size = 600, opacity = 0.15 }) {
    const center = size / 2;
    const rings = [
        {
            r: size * 0.48,
            color: '#B8456B',
            width: size * 0.025
        },
        {
            r: size * 0.40,
            color: '#E8907A',
            width: size * 0.022
        },
        {
            r: size * 0.32,
            color: '#B8456B',
            width: size * 0.02
        },
        {
            r: size * 0.24,
            color: '#E8907A',
            width: size * 0.018
        },
        {
            r: size * 0.16,
            color: '#B8456B',
            width: size * 0.016
        },
        {
            r: size * 0.08,
            color: '#E8907A',
            width: size * 0.015
        }
    ];
    // Dot ring around second-innermost circle
    const dotRingR = size * 0.36;
    const dotCount = 32;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: size,
        height: size,
        viewBox: `0 0 ${size} ${size}`,
        className: className,
        style: {
            opacity
        },
        "aria-hidden": "true",
        children: [
            rings.map((ring, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: center,
                    cy: center,
                    r: ring.r,
                    fill: "none",
                    stroke: ring.color,
                    strokeWidth: ring.width
                }, i, false, {
                    fileName: "[project]/components/ConcentricCircles.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)),
            Array.from({
                length: dotCount
            }).map((_, i)=>{
                const angle = i / dotCount * Math.PI * 2;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    cx: center + Math.cos(angle) * dotRingR,
                    cy: center + Math.sin(angle) * dotRingR,
                    r: size * 0.007,
                    fill: "#E8907A"
                }, `dot-${i}`, false, {
                    fileName: "[project]/components/ConcentricCircles.tsx",
                    lineNumber: 52,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: center,
                cy: center,
                r: size * 0.04,
                fill: "#B8456B",
                opacity: 0.4
            }, void 0, false, {
                fileName: "[project]/components/ConcentricCircles.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ConcentricCircles.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_c = ConcentricCircles;
var _c;
__turbopack_context__.k.register(_c, "ConcentricCircles");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConcentricCircles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ConcentricCircles.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function Hero() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        style: {
            minHeight: '100vh',
            backgroundColor: 'var(--off-white)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 'clamp(7rem, 12vw, 12rem) clamp(1.5rem, 8vw, 8rem) clamp(5rem, 8vw, 8rem)',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    right: '-8%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                    zIndex: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConcentricCircles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 720,
                    opacity: 0.13
                }, void 0, false, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: '-4%',
                    top: '8%',
                    pointerEvents: 'none',
                    zIndex: 0,
                    transform: 'rotate(15deg)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConcentricCircles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 200,
                    opacity: 0.08
                }, void 0, false, {
                    fileName: "[project]/components/Hero.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                initial: {
                    opacity: 0,
                    y: 36
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.9,
                    ease: [
                        0.25,
                        0.1,
                        0.25,
                        1
                    ],
                    delay: 0.1
                },
                style: {
                    fontFamily: 'var(--font-cormorant)',
                    fontStyle: 'italic',
                    fontWeight: 700,
                    fontSize: 'clamp(3.5rem, 9vw, 9rem)',
                    lineHeight: 1.0,
                    color: 'var(--dark-brown)',
                    maxWidth: '14ch',
                    marginBottom: '1.5rem',
                    position: 'relative',
                    zIndex: 1
                },
                children: "Amélie Romano"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.7,
                    ease: [
                        0.25,
                        0.1,
                        0.25,
                        1
                    ],
                    delay: 0.42
                },
                style: {
                    fontFamily: 'var(--font-homemade-apple)',
                    fontSize: '1.05rem',
                    color: 'var(--rust)',
                    marginBottom: '0.65rem',
                    position: 'relative',
                    zIndex: 1
                },
                children: "builder · researcher · maker"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                initial: {
                    opacity: 0,
                    y: 16
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.6,
                    ease: [
                        0.25,
                        0.1,
                        0.25,
                        1
                    ],
                    delay: 0.54
                },
                style: {
                    fontFamily: 'var(--font-homemade-apple)',
                    fontSize: '0.85rem',
                    color: 'var(--dusty-rose)',
                    marginBottom: '2.5rem',
                    position: 'relative',
                    zIndex: 1,
                    transform: 'rotate(-0.8deg)',
                    transformOrigin: 'left center',
                    opacity: 0.8
                },
                children: "London, UK ↗"
            }, void 0, false, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.7,
                    ease: [
                        0.25,
                        0.1,
                        0.25,
                        1
                    ],
                    delay: 0.62
                },
                className: "hero-buttons",
                style: {
                    display: 'flex',
                    gap: '1rem',
                    flexWrap: 'wrap',
                    position: 'relative',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#work",
                        className: "hero-btn",
                        style: {
                            backgroundColor: 'var(--rust)',
                            color: 'var(--cream)',
                            padding: '0.8rem 2.25rem',
                            borderRadius: '100px',
                            textDecoration: 'none',
                            fontFamily: 'var(--font-jost)',
                            fontWeight: 400,
                            fontSize: '0.95rem',
                            letterSpacing: '0.01em'
                        },
                        children: "See my work ↓"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/cv",
                        className: "hero-btn",
                        style: {
                            backgroundColor: 'transparent',
                            color: 'var(--dark-brown)',
                            padding: '0.8rem 2.25rem',
                            borderRadius: '100px',
                            textDecoration: 'none',
                            fontFamily: 'var(--font-jost)',
                            fontWeight: 400,
                            fontSize: '0.95rem',
                            border: '1.5px solid rgba(44, 26, 14, 0.4)',
                            letterSpacing: '0.01em'
                        },
                        children: "Download CV ↓"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 1.2,
                    delay: 1.3
                },
                style: {
                    position: 'absolute',
                    bottom: '2.5rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    zIndex: 1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'var(--font-jost)',
                            fontSize: '0.7rem',
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: 'var(--dark-brown)',
                            opacity: 0.4
                        },
                        children: "scroll"
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        animate: {
                            y: [
                                0,
                                10,
                                0
                            ]
                        },
                        transition: {
                            duration: 1.8,
                            repeat: Infinity,
                            ease: 'easeInOut'
                        },
                        style: {
                            width: 1,
                            height: 44,
                            background: 'linear-gradient(to bottom, var(--rust), transparent)',
                            opacity: 0.5
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/Hero.tsx",
                        lineNumber: 188,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Hero.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Hero.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/FadeIn.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FadeIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function FadeIn({ children, className = '', delay = 0, y = 20 }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: '-80px'
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y
        },
        animate: isInView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y
        },
        transition: {
            duration: 0.65,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ],
            delay
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/FadeIn.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
_s(FadeIn, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = FadeIn;
var _c;
__turbopack_context__.k.register(_c, "FadeIn");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Work.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Work
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FadeIn.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const projects = [
    {
        name: 'Pons',
        category: 'femtech · founder',
        description: 'AI companion for heavy menstrual flow. Phased roadmap from app to NFC stickers to hardware sensors. Built with Claude Code + n8n.',
        color: '#B8456B',
        shadowColor: 'rgba(184, 69, 107, 0.25)',
        links: []
    },
    {
        name: 'HPE Study Agent',
        category: 'RAG · AI',
        description: 'RAG pipeline on personal UCL course materials. Custom chunking, embeddings, prompt engineering. Built to understand every decision.',
        color: '#4A5E3A',
        shadowColor: 'rgba(74, 94, 58, 0.25)',
        image: '/projects/hpe-agent-preview.png',
        links: [
            {
                label: 'view on github →',
                href: 'https://github.com/amelieromano/study-agent-hpe'
            }
        ]
    },
    {
        name: 'Papillon Classifier',
        category: 'ML · computer vision',
        description: 'ResNet18 image classifier, 91.7% accuracy. PyTorch + Gradio. First ML project, built from zero.',
        color: '#E8907A',
        shadowColor: 'rgba(232, 144, 122, 0.25)',
        image: '/projects/papillon-preview.png',
        links: [
            {
                label: 'view on github →',
                href: 'https://github.com/amelieromano/papillon-classifier'
            },
            {
                label: 'live demo ↗',
                href: 'https://huggingface.co/spaces/amelieromano/papillon-classifier'
            }
        ]
    },
    {
        name: 'E-commerce Automation',
        category: 'n8n · Make · Zapier',
        description: 'Workflow automation for small business clients — intake flows, CRM sync, order notifications.',
        color: '#D4607A',
        shadowColor: 'rgba(212, 96, 122, 0.25)',
        links: []
    },
    {
        name: 'LAWRS Research',
        category: 'policy · research',
        description: "Co-authored published report on online abuse and fetishisation of young Latinas. Peer researcher, Young Women's Advisory Board.",
        color: '#3D1028',
        shadowColor: 'rgba(61, 16, 40, 0.3)',
        image: '/projects/YWAB-report-preview.jpg',
        links: [
            {
                label: 'read the report ↓',
                href: '/projects/YWAB-Peer-research-report-2025.pdf'
            }
        ]
    }
];
function ProjectRow({ project, index }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        margin: '-60px'
    });
    const isEven = index % 2 === 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: ref,
        initial: {
            opacity: 0,
            y: 32
        },
        animate: isInView ? {
            opacity: 1,
            y: 0
        } : {},
        transition: {
            duration: 0.7,
            ease: [
                0.25,
                0.1,
                0.25,
                1
            ],
            delay: 0.05
        },
        className: `project-row${isEven ? '' : ' reverse'}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "project-placeholder",
                whileHover: {
                    y: -10,
                    boxShadow: `0 28px 70px ${project.shadowColor}`
                },
                transition: {
                    duration: 0.3,
                    ease: 'easeOut'
                },
                style: {
                    backgroundColor: project.color,
                    position: 'relative',
                    overflow: 'hidden'
                },
                children: 'image' in project && project.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: project.image,
                    alt: project.name,
                    fill: true,
                    style: {
                        objectFit: 'cover'
                    },
                    sizes: "(max-width: 768px) 100vw, 55vw"
                }, void 0, false, {
                    fileName: "[project]/components/Work.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Work.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-text",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontFamily: 'var(--font-homemade-apple)',
                            fontSize: '0.95rem',
                            color: 'var(--rust)',
                            display: 'inline-block',
                            transform: 'rotate(-1.5deg)',
                            marginBottom: '0.85rem'
                        },
                        children: project.category
                    }, void 0, false, {
                        fileName: "[project]/components/Work.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        style: {
                            fontFamily: 'var(--font-cormorant)',
                            fontStyle: 'italic',
                            fontWeight: 700,
                            fontSize: 'clamp(2rem, 4vw, 3.75rem)',
                            color: 'var(--dark-brown)',
                            lineHeight: 1.05,
                            marginBottom: '1rem'
                        },
                        children: project.name
                    }, void 0, false, {
                        fileName: "[project]/components/Work.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'var(--font-jost)',
                            fontWeight: 300,
                            fontSize: '1rem',
                            lineHeight: 1.8,
                            color: 'var(--dark-brown)',
                            opacity: 0.75,
                            maxWidth: '38ch'
                        },
                        children: project.description
                    }, void 0, false, {
                        fileName: "[project]/components/Work.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, this),
                    project.links.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '1.5rem',
                            marginTop: '1.4rem',
                            flexWrap: 'wrap'
                        },
                        children: project.links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: l.href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                style: {
                                    fontFamily: 'var(--font-homemade-apple)',
                                    fontSize: '0.9rem',
                                    color: 'var(--rust)',
                                    textDecoration: 'none',
                                    borderBottom: '1px solid var(--dusty-rose)',
                                    paddingBottom: '0.15rem'
                                },
                                children: l.label
                            }, l.href, false, {
                                fileName: "[project]/components/Work.tsx",
                                lineNumber: 157,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Work.tsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Work.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Work.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(ProjectRow, "DljcBprJKYjULUac3YKdUV9OwZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = ProjectRow;
function Work() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "work",
        style: {
            padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 8vw, 8rem)',
            backgroundColor: 'var(--off-white)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 'clamp(3.5rem, 7vw, 7rem)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: 'var(--font-cormorant)',
                                fontStyle: 'italic',
                                fontWeight: 700,
                                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                                color: 'var(--dark-brown)',
                                marginBottom: '0.75rem'
                            },
                            children: "Work"
                        }, void 0, false, {
                            fileName: "[project]/components/Work.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "140",
                            height: "18",
                            viewBox: "0 0 140 18",
                            fill: "none",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0 9 Q17.5 1 35 9 Q52.5 17 70 9 Q87.5 1 105 9 Q122.5 17 140 9",
                                stroke: "#B8456B",
                                strokeWidth: "2",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/components/Work.tsx",
                                lineNumber: 213,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Work.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: 'var(--font-homemade-apple)',
                                fontSize: '0.85rem',
                                color: 'var(--dusty-rose)',
                                marginTop: '0.85rem',
                                transform: 'rotate(-0.6deg)',
                                transformOrigin: 'left center',
                                opacity: 0.75
                            },
                            children: "selected projects, 2024–present"
                        }, void 0, false, {
                            fileName: "[project]/components/Work.tsx",
                            lineNumber: 220,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Work.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Work.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            projects.map((project, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectRow, {
                    project: project,
                    index: i
                }, project.name, false, {
                    fileName: "[project]/components/Work.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/components/Work.tsx",
        lineNumber: 183,
        columnNumber: 5
    }, this);
}
_c1 = Work;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProjectRow");
__turbopack_context__.k.register(_c1, "Work");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Creative.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Creative
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FadeIn.tsx [app-client] (ecmascript)");
'use client';
;
;
const panels = [
    {
        label: 'Photography',
        color: '#B8456B',
        rotate: 1.2
    },
    {
        label: 'Mixed Media',
        color: '#E8907A',
        rotate: -1.0
    },
    {
        label: 'Writing',
        color: '#D4607A',
        rotate: 1.5
    }
];
function Creative() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "creative",
        style: {
            padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 8vw, 8rem)',
            backgroundColor: 'var(--burgundy)',
            color: 'var(--cream)',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": "true",
                style: {
                    position: 'absolute',
                    top: '-80px',
                    right: '-60px',
                    opacity: 0.06,
                    pointerEvents: 'none'
                },
                width: "400",
                height: "400",
                viewBox: "0 0 400 400",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ellipse", {
                    cx: "200",
                    cy: "200",
                    rx: "180",
                    ry: "160",
                    fill: "#B8456B"
                }, void 0, false, {
                    fileName: "[project]/components/Creative.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Creative.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: 'var(--font-cormorant)',
                                fontStyle: 'italic',
                                fontWeight: 700,
                                fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                                color: 'var(--cream)',
                                marginBottom: '0.75rem'
                            },
                            children: "Creative"
                        }, void 0, false, {
                            fileName: "[project]/components/Creative.tsx",
                            lineNumber: 43,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "140",
                            height: "18",
                            viewBox: "0 0 140 18",
                            fill: "none",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M0 9 Q17.5 1 35 9 Q52.5 17 70 9 Q87.5 1 105 9 Q122.5 17 140 9",
                                stroke: "#E8907A",
                                strokeWidth: "2",
                                fill: "none"
                            }, void 0, false, {
                                fileName: "[project]/components/Creative.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Creative.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Creative.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Creative.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                delay: 0.1,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'var(--font-cormorant)',
                            fontStyle: 'italic',
                            fontWeight: 400,
                            fontSize: 'clamp(1.25rem, 2.5vw, 2rem)',
                            color: 'var(--cream)',
                            maxWidth: '34ch',
                            marginBottom: '0.75rem',
                            opacity: 0.85,
                            lineHeight: 1.4
                        },
                        children: "The rest of the work — images, objects, words."
                    }, void 0, false, {
                        fileName: "[project]/components/Creative.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'var(--font-homemade-apple)',
                            fontSize: '0.9rem',
                            color: 'var(--dusty-rose)',
                            marginBottom: 'clamp(3rem, 6vw, 5rem)',
                            transform: 'rotate(-1deg)',
                            transformOrigin: 'left center',
                            opacity: 0.75
                        },
                        children: "coming soon — film, collage, words"
                    }, void 0, false, {
                        fileName: "[project]/components/Creative.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Creative.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                delay: 0.2,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "creative-grid",
                    style: {
                        marginBottom: '3rem'
                    },
                    children: panels.map((panel)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        backgroundColor: panel.color,
                                        aspectRatio: '2 / 3',
                                        borderRadius: '3px',
                                        marginBottom: '1rem',
                                        transform: `rotate(${panel.rotate}deg)`,
                                        transformOrigin: 'center bottom'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/Creative.tsx",
                                    lineNumber: 109,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'var(--font-homemade-apple)',
                                        fontSize: '1rem',
                                        color: 'var(--cream)',
                                        display: 'block',
                                        textAlign: 'center',
                                        transform: `rotate(${panel.rotate * 0.6}deg)`,
                                        opacity: 0.9
                                    },
                                    children: panel.label
                                }, void 0, false, {
                                    fileName: "[project]/components/Creative.tsx",
                                    lineNumber: 119,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, panel.label, true, {
                            fileName: "[project]/components/Creative.tsx",
                            lineNumber: 108,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Creative.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Creative.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                delay: 0.35,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontFamily: 'var(--font-homemade-apple)',
                        fontSize: '0.95rem',
                        color: 'var(--dusty-rose)',
                        opacity: 0.8
                    },
                    children: "more soon ↗"
                }, void 0, false, {
                    fileName: "[project]/components/Creative.tsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Creative.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Creative.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Creative;
var _c;
__turbopack_context__.k.register(_c, "Creative");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/About.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FadeIn.tsx [app-client] (ecmascript)");
'use client';
;
;
const roles = [
    {
        text: '— Vice-President, UCL AI Society (2025–present)',
        rotation: -1
    },
    {
        text: '— President, UCL Mexican Society (2025–present)',
        rotation: 1.5
    },
    {
        text: '— Peer Researcher, LAWRS YWAB (2025–present)',
        rotation: -0.8
    },
    {
        text: '— Incoming Intern, Mindverse Berlin (June 2026)',
        rotation: 1.2
    }
];
function About() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        style: {
            backgroundColor: 'var(--cream)',
            width: '100%'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '780px',
                padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 8vw, 8rem)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            marginBottom: 'clamp(2.5rem, 5vw, 4rem)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                style: {
                                    fontFamily: 'var(--font-cormorant)',
                                    fontStyle: 'italic',
                                    fontWeight: 700,
                                    fontSize: 'clamp(2.5rem, 5vw, 5rem)',
                                    color: 'var(--dark-brown)',
                                    marginBottom: '0.75rem'
                                },
                                children: "About"
                            }, void 0, false, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "100",
                                height: "18",
                                viewBox: "0 0 100 18",
                                fill: "none",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0 9 Q12.5 1 25 9 Q37.5 17 50 9 Q62.5 1 75 9 Q87.5 17 100 9",
                                    stroke: "#E8907A",
                                    strokeWidth: "2",
                                    fill: "none"
                                }, void 0, false, {
                                    fileName: "[project]/components/About.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 0.1,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontFamily: 'var(--font-jost)',
                            fontWeight: 300,
                            fontSize: '1.05rem',
                            lineHeight: 1.85,
                            color: 'var(--dark-brown)',
                            marginBottom: '3rem'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginBottom: '1.5rem'
                                },
                                children: "I'm a first-year History, Politics & Economics student at UCL, building things in AI while studying the systems that shape the world."
                            }, void 0, false, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginBottom: '1.5rem'
                                },
                                children: "Founder of Pons — a femtech app for people with heavy menstrual flow. VP of UCL AI Society, where I run hackathons and events for 700+ members alongside partners like Anthropic, AWS, and Entrepreneurs First."
                            }, void 0, false, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    marginBottom: '1.5rem'
                                },
                                children: "Peer researcher at LAWRS, co-authoring published work on online violence against young Latinas. Incoming intern at Mindverse (Berlin) from June — an LLM-powered workflow tools startup."
                            }, void 0, false, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "Every project here taught me something I now use everywhere else."
                            }, void 0, false, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 0.2,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: 'var(--font-homemade-apple)',
                            fontSize: '1.35rem',
                            color: 'var(--rust)',
                            marginBottom: '2.5rem',
                            transform: 'rotate(-1.2deg)',
                            transformOrigin: 'left center',
                            lineHeight: 1.5
                        },
                        children: "I learn by doing."
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    delay: 0.25,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem',
                            paddingTop: '0.5rem'
                        },
                        children: roles.map((role, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: 'var(--font-homemade-apple)',
                                    fontSize: '0.9rem',
                                    color: 'var(--rust)',
                                    display: 'inline-block',
                                    transform: `rotate(${role.rotation}deg)`,
                                    transformOrigin: 'left center',
                                    lineHeight: 1.6
                                },
                                children: role.text
                            }, i, false, {
                                fileName: "[project]/components/About.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/About.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/About.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/About.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/About.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FadeIn.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConcentricCircles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ConcentricCircles.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
const links = [
    {
        label: 'amelieromanogzz05@gmail.com',
        href: 'mailto:amelieromanogzz05@gmail.com',
        external: false
    },
    {
        label: 'github.com/amelieromano',
        href: 'https://github.com/amelieromano',
        external: true
    },
    {
        label: 'linkedin.com/in/amelieromanogonzalez',
        href: 'https://linkedin.com/in/amelieromanogonzalez',
        external: true
    }
];
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        style: {
            padding: 'clamp(5rem, 10vw, 10rem) clamp(1.5rem, 8vw, 8rem)',
            backgroundColor: 'var(--off-white)',
            position: 'relative',
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'absolute',
                    left: '-12%',
                    bottom: '-15%',
                    pointerEvents: 'none',
                    zIndex: 0
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConcentricCircles$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    size: 560,
                    opacity: 0.07
                }, void 0, false, {
                    fileName: "[project]/components/Contact.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Contact.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: 'relative',
                        zIndex: 1,
                        marginBottom: '1rem'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: 'var(--font-cormorant)',
                                fontStyle: 'italic',
                                fontWeight: 700,
                                fontSize: 'clamp(3rem, 7vw, 7rem)',
                                color: 'var(--dark-brown)',
                                lineHeight: 1.0,
                                marginBottom: '1.25rem'
                            },
                            children: "Say hello."
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: 'var(--font-homemade-apple)',
                                fontSize: '0.95rem',
                                color: 'var(--rust)',
                                marginBottom: '3.5rem'
                            },
                            children: "open to part-time roles from september ↗"
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Contact.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Contact.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                delay: 0.15,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.85rem',
                        position: 'relative',
                        zIndex: 1
                    },
                    children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: link.href,
                            target: link.external ? '_blank' : undefined,
                            rel: link.external ? 'noopener noreferrer' : undefined,
                            className: "contact-link",
                            style: {
                                fontFamily: 'var(--font-jost)',
                                fontWeight: 300,
                                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)'
                            },
                            children: link.label
                        }, link.label, false, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Contact.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Contact.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FadeIn$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                delay: 0.3,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        marginTop: '5rem',
                        paddingTop: '2rem',
                        borderTop: '1px solid rgba(44, 26, 14, 0.1)',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '1rem',
                        position: 'relative',
                        zIndex: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '0.25rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'var(--font-jost)',
                                        fontWeight: 300,
                                        fontSize: '0.85rem',
                                        color: 'var(--dark-brown)',
                                        opacity: 0.45
                                    },
                                    children: "© 2025 Amélie Romano · London, UK"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 125,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        fontFamily: 'var(--font-homemade-apple)',
                                        fontSize: '0.8rem',
                                        color: 'var(--dusty-rose)',
                                        opacity: 0.65,
                                        transform: 'rotate(-0.5deg)',
                                        transformOrigin: 'left center',
                                        display: 'inline-block'
                                    },
                                    children: "London, 2025"
                                }, void 0, false, {
                                    fileName: "[project]/components/Contact.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/cv",
                            className: "cv-pill",
                            style: {
                                backgroundColor: 'var(--rust)',
                                color: 'var(--cream)',
                                padding: '0.5rem 1.25rem',
                                borderRadius: '100px',
                                textDecoration: 'none',
                                fontFamily: 'var(--font-homemade-apple)',
                                fontSize: '0.9rem'
                            },
                            children: "download cv ↓"
                        }, void 0, false, {
                            fileName: "[project]/components/Contact.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Contact.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Contact.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Contact.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_0bk157h._.js.map