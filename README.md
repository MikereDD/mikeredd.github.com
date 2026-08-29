<div align="center">

# TYPEZER∅ // System

### A software ecosystem, not a portfolio.

**Projects are presented as connected systems — through topology, activity, history, native media, and relationships.**

</div>

---

## The observatory

**TYPEZER∅ // System** is the source for the Typezer∅ GitHub Pages home.

The site deliberately avoids the conventional portfolio pattern of cards, screenshots, and a flat repository list. Instead, the public Typezer∅ project collection is treated as one evolving software ecosystem.

Projects have families. Systems have relationships. Repositories emit signals. Ideas have history.

The result is an interactive observatory for exploring the work as a connected whole.

```text
                         TYPEZER∅ // SYSTEM
                                ∅
                 ┌──────────────┼──────────────┐
                 │              │              │
           STUDIO SUITE   ANDROID / MEDIA    WEAR OS
                 │              │              │
                 └─────── RELATIONSHIPS ───────┘
                                │
                    AUTOMATION  ·  ENGINEERING
```

## Views

| View | Purpose |
| --- | --- |
| **System** | Spatial map of the Typezer∅ software ecosystem |
| **Signal** | Current public GitHub repository activity |
| **History** | Project evolution across time |
| **Relations** | Workflows, lineage, shared infrastructure, and families |
| **Index** | Direct conventional access to every project |
| **Observe** | Distraction-free autonomous system visualization |

Selecting a project opens an inspector with project identity, platform and stack information, repository activity, relationships, and project-native media.

Projects with multiple screenshots or visual references can expose a native media gallery directly inside the inspector.

## Relationship focus

Selecting a system can temporarily reorganize the topology around it.

The selected project becomes the focus hub, directly connected systems form its immediate orbit, and unrelated systems recede. **Return to Origin** restores the canonical ecosystem map.

This is intentionally more than a highlight state: the topology itself becomes part of the explanation.

## Project families

The current observatory groups public work into five families:

- **Studio Suite** — Windows desktop applications
- **Android / Media** — mobile, TV, connected-device, and media applications
- **Wear OS** — watch faces and time-oriented design
- **Automation** — Telegram automation agents
- **Engineering / Tools** — infrastructure, media organization, repair, and release tooling

The embedded project model remains usable even when live GitHub metadata is unavailable.

## Native project media

The inspector follows a simple media hierarchy:

1. real project screenshot or interface preview
2. native project avatar, icon, or logo
3. generated Typezer∅ system identity only when no native media is available

The goal is to show the projects as they actually exist rather than filling the interface with generic repository artwork.

## Navigation

| Input | Action |
| --- | --- |
| `1` – `5` | Switch primary views |
| `/` | Open system search |
| `[` / `]` | Previous / next project |
| `Shift` + `[` / `]` | Previous / next gallery image when available |
| `Esc` | Close the inspector / return from relationship focus |
| Mouse wheel | Zoom the system map |
| Drag | Pan the system map |

The interface also exposes visible controls for the major interactions; keyboard shortcuts are enhancements rather than requirements.

## `404 // ORIGIN VECTOR LOST`

Missing routes have their own Typezer∅ failure state.

Instead of a generic error page, `404.html` presents the observatory as a destabilized system: warped orbital geometry, drifting unresolved nodes, route diagnostics, and a recovery path back to the origin.

Motion respects `prefers-reduced-motion`.

## Architecture

The site intentionally remains lightweight:

```text
.
├── index.html
├── 404.html
├── assets/
│   ├── site.css
│   └── site.js
├── favicon.svg
├── favicon.png
└── .nojekyll
```

The primary experience is built with:

- semantic HTML
- modern CSS
- vanilla JavaScript
- the public GitHub API for live repository metadata
- an embedded fallback project model for graceful degradation

There is no front-end framework and no application build step required for normal deployment.

## Local preview

From the repository root:

```powershell
python -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

Python's simple HTTP server does **not** automatically route missing paths to the custom `404.html`. To preview the failure-state design locally, open:

```text
http://localhost:8080/404.html
```

GitHub Pages will use `404.html` for unresolved published routes.

## Design principles

The system is built around a few rules:

- **The ecosystem is the interface.**
- **Relationships should be visible, not merely described.**
- **Real project media takes priority over generic decoration.**
- **Motion should communicate state, not exist only for spectacle.**
- **The static fallback must remain useful without live network data.**
- **Unusual presentation must not come at the cost of navigation or readability.**

---

<div align="center">

**TYPEZER∅ // System**

*Built with precision. Driven by purpose.*

</div>
