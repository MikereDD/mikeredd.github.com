TYPEZER∅ System — Pass 2 Overlay

Copy the CONTENTS of this overlay directly over the root of:
G:\Forgejo\mikeredd.github.com

Branch:
redesign/typezero-system

Files replaced:
- index.html
- assets/site.css
- assets/site.js

Pass 2 changes:
- Detail panel is collapsed until a project is selected.
- System map reclaims the full width when no project is selected.
- Project nodes use compact semantic role labels instead of truncated descriptions.
- Node typography and geometry are larger and cleaner.
- Project-to-project relationship lines are more visible.
- Selecting a project highlights connected systems and dims unrelated systems.
- Added a close control to return the map to its full-system state.
- Timeline now scales dynamically around the actual project creation range instead of forcing a 2022–2027 axis.
- Timeline ticks use month/year labels and resize with the viewport.
- Browser cache version bumped to v21.

After copying:
  git diff
  git status
  python -m http.server 8080

Then open:
  http://localhost:8080

Nothing in this overlay deletes repository files.
