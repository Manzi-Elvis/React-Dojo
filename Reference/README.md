# CineScope — Movie Website Reference Project

A polished, responsive movie-discovery website made with **HTML, CSS, and vanilla JavaScript**. It uses the supplied CineScope logo, cinematic poster cards, a featured hero, search, filters, a watchlist, a details modal, theme switching, and local persistence.

> This is a learning/reference UI with illustrative movie data. The poster/backdrop URLs use TMDB's public image CDN. This demo does not make API requests or provide actual trailer playback yet.

## Run it

1. Extract the ZIP.
2. Open the folder in VS Code.
3. Start a local server, for example install/use the **Live Server** VS Code extension and choose **Open with Live Server**.
4. Open `index.html` using that local server.

You can usually open the HTML file directly, but a local server gives a more realistic development workflow.

## What's interactive

- Home / Discover / My watchlist navigation (hash-based)
- Movie detail modal with overview, genres, rating, poster and backdrop
- Add/remove watchlist items; saved to `localStorage`
- Watchlist tabs and sorting
- Search overlay, live search, keyboard `/` shortcut, Escape to close
- Discover search, genre/year filters, sorting, load-more, reset
- Light/dark theme preference
- Hero slide controls, horizontal movie rails, toast notifications
- Responsive layout, focus styles, accessible labels, lazy-loaded posters

## The React mastery connection

This app is deliberately written in vanilla JavaScript, so the following are **conceptual parallels**, not React APIs. Rebuild each feature in React to practice the actual concepts.

| Vanilla implementation | React concept to practice in the rebuild |
| --- | --- |
| `renderCard(movie)` | `MovieCard` component and typed props |
| `movies.map(...)` in render functions | Rendering lists, stable keys |
| `state` object | Component state, state ownership |
| `toggleWatchlist` | Immutable state updates with `useState` or `useReducer` |
| `showPage` and hash navigation | React Router, route params, nested layouts |
| `openModal` / `closeModal` | Component composition, controlled state, portals, focus management |
| `debounce` and search inputs | Controlled inputs, custom hooks, cleanup |
| `localStorage` persistence | `useEffect`, custom `useLocalStorage` hook, hydration concerns |
| `applyTheme` | Context provider + `useContext` |
| `getDiscoverResults` | Derived state; use `useMemo` only if it helps performance |
| Event delegation | Component event handlers and event propagation |
| `window` event listeners | `useEffect` setup and cleanup |
| `renderGlobalResults` | Search component, API query state, debounced fetching |
| `load-more` | Pagination / infinite query patterns |
| Error/fallback text | Conditional rendering, error boundaries for render failures |
| Image `loading="lazy"` | Image optimization and lazy loading |
| CSS media queries | Responsive design (not a React concept, but essential UI engineering) |
| Keyboard shortcuts | Effects, refs, accessible keyboard interactions |
| `storage` event | `useSyncExternalStore` or a state-store subscription when appropriate |
| Modal trailer placeholder | Fetch TMDB videos; use state for playback modal |
| Static `movies` array | Typed API response interfaces and TanStack Query |
| `profile-button` toast | Authentication state, protected routes, forms |
| Repeated layout primitives | Reusable component APIs, composition, compound components |
| UI updates and animation | React DevTools profiling, `memo`, `useCallback` only after measuring |

## Suggested React rebuild sequence

1. **Foundation:** Vite + React + TypeScript; build `Navbar`, `HeroSection`, `MovieCard`, `MovieRow`, `Footer`.
2. **Props and types:** define `Movie`, `MovieCardProps`, `MovieResponse`; make all repeated UI data-driven.
3. **State:** implement modal, theme, tabs, grid/list view, and watchlist using immutable updates.
4. **Routing:** add Home, Discover, Watchlist, Movie Detail, Person Detail, Settings, and Not Found routes.
5. **Effects and custom hooks:** `useDebounce`, `useLocalStorage`, `useMediaQuery`; include cleanup where needed.
6. **API:** create a typed TMDB service; use TanStack Query for caching, loading, errors, refetching and pagination.
7. **Shared state:** use Context for theme/preferences and `useReducer` or Zustand for complex watchlist state.
8. **Forms:** React Hook Form + Zod for preferences and auth forms; use a real auth provider/backend for accounts.
9. **Advanced UI:** portals, accessible dialog focus management, lazy-loaded routes, Suspense, Error Boundaries.
10. **Performance:** React DevTools Profiler, image sizing, code splitting, and measured use of `memo`, `useMemo`, `useCallback`, `useTransition`, and `useDeferredValue`.
11. **Testing:** Vitest, React Testing Library, and Playwright for important user journeys.
12. **Advanced architecture:** explore `useSyncExternalStore`, `useId`, `useLayoutEffect`, `useImperativeHandle`, `useDebugValue`, and React Server Components in appropriate exercises.

Do not force every hook into the app just to use it. Learn what problem each one solves and create a small focused exercise for specialized hooks.

## Connecting TMDB later

- Start here: https://developer.themoviedb.org/docs/getting-started
- Image basics: https://developer.themoviedb.org/docs/image-basics
- Search movie: https://developer.themoviedb.org/reference/search-movie
- Movie details: https://developer.themoviedb.org/reference/movie-details
- Movie videos: https://developer.themoviedb.org/reference/movie-videos

For a Vite-only learning demo, a `VITE_` variable is visible to browser users. Treat it as public. If a credential must remain confidential, put TMDB requests behind a server-side proxy. Follow TMDB's current attribution and usage terms before publishing.

## Project files

- `index.html` — page structure
- `styles.css` — full responsive visual design and theme
- `app.js` — sample data, UI state, rendering, and interactions
- `assets/cinescope-logo.png` — supplied logo
