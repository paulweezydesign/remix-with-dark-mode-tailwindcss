var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3, handleRequest = (request, responseStatusCode, responseHeaders, remixContext) => (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) : handleBrowserRequest(
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
), entry_server_default = handleRequest, handleBotRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, this),
    {
      onAllReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
}), handleBrowserRequest = (request, responseStatusCode, responseHeaders, remixContext) => new Promise((resolve, reject) => {
  let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    {
      onShellReady: () => {
        let body = new import_stream.PassThrough();
        responseHeaders.set("Content-Type", "text/html"), resolve(
          new import_node.Response(body, {
            headers: responseHeaders,
            status: didError ? 500 : responseStatusCode
          })
        ), pipe(body);
      },
      onShellError: (error) => {
        reject(error);
      },
      onError: (error) => {
        didError = !0, console.error(error);
      }
    }
  );
  setTimeout(abort, ABORT_DELAY);
});

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => AppWithProviders,
  links: () => links,
  meta: () => meta
});
var import_react4 = require("@remix-run/react"), import_framer_motion4 = require("framer-motion"), import_react_router_dom = require("react-router-dom");

// app/components/Sidebar.jsx
var import_react2 = require("react"), import_framer_motion3 = require("framer-motion"), import_fa = require("react-icons/fa");

// app/components/Navigation.tsx
var import_framer_motion2 = require("framer-motion");

// app/components/MenuItem.tsx
var import_framer_motion = require("framer-motion");
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1e3, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1e3 }
    }
  }
}, colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"], MenuItem = ({ i }) => {
  let style = { border: `2px solid ${colors[i]}`, padding: "1rem 2rem" };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    import_framer_motion.motion.li,
    {
      className: "mb-[20px] px-4 text-placeholder py-5  flex items-center pointer",
      variants,
      whileHover: { scale: 1.1 },
      whileTap: { scale: 0.95 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "icon-placeholder", style }, void 0, !1, {
          fileName: "app/components/MenuItem.tsx",
          lineNumber: 32,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "text-placeholder", style }, void 0, !1, {
          fileName: "app/components/MenuItem.tsx",
          lineNumber: 33,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/MenuItem.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
};

// app/components/Navigation.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), variants2 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}, Navigation = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_framer_motion2.motion.ul, { className: "p-[25px] top-[100px] w-[230px] icon-placeholder", variants: variants2, children: itemIds.map((i) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(MenuItem, { i }, i, !1, {
  fileName: "app/components/Navigation.tsx",
  lineNumber: 17,
  columnNumber: 7
}, this)) }, void 0, !1, {
  fileName: "app/components/Navigation.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this), itemIds = [0, 1, 2, 3, 4];

// app/components/Sidebar.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), variants3 = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" }
}, Sidebar = () => {
  let [isOpen, setIsOpen] = (0, import_react2.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "", children: isOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_framer_motion3.motion.aside,
      {
        animate: isOpen ? "open" : "closed",
        variants: variants3,
        className: "fixed bottom-0 top-0 left-0 w-[350px] animate-[translate-x-full]  z-50 h-screen bg-black  shadow-xl shadow-black/60",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex justify-end w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "text-3xl font-medium pr-4 pt-3 bg-transparent text-white", onClick: () => setIsOpen((isOpen2) => !isOpen2), children: "\xD7" }, void 0, !1, {
            fileName: "app/components/Sidebar.jsx",
            lineNumber: 25,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/Sidebar.jsx",
            lineNumber: 24,
            columnNumber: 21
          }, this),
          "s",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { className: "text-xl text-white text-center font-black", children: "Menu" }, void 0, !1, {
            fileName: "app/components/Sidebar.jsx",
            lineNumber: 27,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Navigation, {}, void 0, !1, {
            fileName: "app/components/Sidebar.jsx",
            lineNumber: 28,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Sidebar.jsx",
          lineNumber: 23,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 19,
        columnNumber: 8
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/Sidebar.jsx",
      lineNumber: 16,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      import_framer_motion3.motion.button,
      {
        whileHover: { scale: 1.1 },
        whileTap: { scale: 0.9 },
        onClick: () => setIsOpen((isOpen2) => !isOpen2),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_fa.FaBars, { className: "text-4xl" }, void 0, !1, {
          fileName: "app/components/Sidebar.jsx",
          lineNumber: 38,
          columnNumber: 15
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Sidebar.jsx",
        lineNumber: 33,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Sidebar.jsx",
    lineNumber: 15,
    columnNumber: 9
  }, this);
}, Sidebar_default = Sidebar;

// app/utils/theme-provider.tsx
var import_react3 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
var ThemeContext = (0, import_react3.createContext)(void 0);
function ThemeProvider({ children }) {
  let [theme, setTheme] = (0, import_react3.useState)("light" /* LIGHT */);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ThemeContext.Provider, { value: [theme, setTheme], children }, void 0, !1, {
    fileName: "app/utils/theme-provider.tsx",
    lineNumber: 16,
    columnNumber: 10
  }, this);
}
function useTheme() {
  let context = (0, import_react3.useContext)(ThemeContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}

// app/components/ThemeToggle.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), ThemeToggle = () => {
  let [, setTheme] = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "px-4 py-4", onClick: () => {
    setTheme((prevTheme) => prevTheme === "light" /* LIGHT */ ? "dark" /* DARK */ : "light" /* LIGHT */);
  }, children: "Toggle" }, void 0, !1, {
    fileName: "app/components/ThemeToggle.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this);
}, ThemeToggle_default = ThemeToggle;

// app/styles/app.css
var app_default = "/build/_assets/app-SKC7H5KH.css";

// app/root.tsx
var import_clsx = __toESM(require("clsx"));

// app/styles/styles.css
var styles_default = "/build/_assets/styles-BAXI443Y.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-OPRLFJET.css";

// app/root.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "stylesheet", href: app_default },
  {
    rel: "stylesheet",
    href: styles_default
  },
  {
    rel: "stylesheet",
    href: dark_default,
    media: "(prefers-color-scheme: dark)"
  }
], App = () => {
  let outlet = (0, import_react_router_dom.useOutlet)(), [theme] = useTheme();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("html", { lang: "en", className: (0, import_clsx.default)(theme), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("script", { src: "https://cdn.tailwindcss.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("header", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("nav", { className: "flex justify-evenly items-center text-xl py-5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.NavLink, { to: "/", children: "Home" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.NavLink, { to: "/about", children: "About" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.NavLink, { to: "/blogs", children: "Blogs" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Sidebar_default, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ThemeToggle_default, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "flex flex-col items-center justify-center h-screen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_framer_motion4.AnimatePresence, { exitBeforeEnter: !0, initial: !1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_framer_motion4.motion.main,
          {
            initial: { x: "100", opacity: 0 },
            animate: { x: "0", opacity: 1 },
            exit: { x: "-40%", opacity: 0 },
            children: outlet
          },
          (0, import_react_router_dom.useLocation)().pathname,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 69,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 68,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 78,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 79,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 80,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
};
function AppWithProviders() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(App, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 90,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 89,
    columnNumber: 5
  }, this);
}

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About
});
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-7xl font-black", children: "About Page" }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/blogs.tsx
var blogs_exports = {};
__export(blogs_exports, {
  default: () => Blog
});
var import_react_use = require("react-use"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), Demo = () => {
  let [set, { add, has, remove, toggle, reset }] = (0, import_react_use.useSet)(/* @__PURE__ */ new Set(["hello"]));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: () => add(String(Date.now())), children: "Add" }, void 0, !1, {
      fileName: "app/routes/blogs.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: () => reset(), children: "Reset" }, void 0, !1, {
      fileName: "app/routes/blogs.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: () => remove("hello"), disabled: !has("hello"), children: "Remove 'hello'" }, void 0, !1, {
      fileName: "app/routes/blogs.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { onClick: () => toggle("hello"), children: "Toggle hello" }, void 0, !1, {
      fileName: "app/routes/blogs.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("pre", { children: JSON.stringify(Array.from(set), null, 2) }, void 0, !1, {
      fileName: "app/routes/blogs.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blogs.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
};
function Blog() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { className: "text-7xl font-black", children: "Blog Page" }, void 0, !1, {
      fileName: "app/routes/blogs.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Demo, {}, void 0, !1, {
      fileName: "app/routes/blogs.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blogs.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mx-auto mt-16 max-w-7xl text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-gray-900 text-7xl font-black dark:text-white/90", children: "Hello world" }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 11,
    columnNumber: 3
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 9,
    columnNumber: 2
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "1d171e13", entry: { module: "/build/entry.client-WHPMBXZR.js", imports: ["/build/_shared/chunk-B227A2MP.js", "/build/_shared/chunk-56THQXCK.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-2KFHBE34.js", imports: ["/build/_shared/chunk-356W4OA6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-R6TCZPU6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blogs": { id: "routes/blogs", parentId: "root", path: "blogs", index: void 0, caseSensitive: void 0, module: "/build/routes/blogs-3ZIXTQBN.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-DDO7PMDD.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-1D171E13.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/blogs": {
    id: "routes/blogs",
    parentId: "root",
    path: "blogs",
    index: void 0,
    caseSensitive: void 0,
    module: blogs_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
