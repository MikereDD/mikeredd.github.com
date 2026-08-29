# TYPEZER∅ // System

The GitHub Pages home for the TYPEZER∅ software ecosystem.

This site is intentionally not a conventional portfolio. It presents the public project collection as an interactive system with multiple views:

- **System** — spatial ecosystem map
- **Signal** — current GitHub repository activity
- **History** — project evolution over time
- **Relations** — workflows, lineages, and shared infrastructure
- **Index** — fast conventional project access
- **Observe** — distraction-free system visualization

The page is static-hosting friendly and uses the public GitHub API at runtime for repository metadata. If that request is unavailable or rate-limited, the embedded project model remains fully usable.

## Local preview

Serve the repository with any static HTTP server. For example:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.
