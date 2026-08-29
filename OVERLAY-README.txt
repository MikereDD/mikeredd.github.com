TYPEZER∅ System — Pass 3.1 Corrective Overlay

Copy the CONTENTS over:
G:\Forgejo\mikeredd.github.com

Branch:
redesign/typezero-system

Replaces only:
- index.html
- assets/site.css
- assets/site.js

Corrections:
- Moves FIT SYSTEM / LABELS / MOTION into a safer, visibly framed control strip
  lower inside the map so the sticky header cannot visually clamp it.
- Moves family labels away from the headline collision zone.
- Restricts map zoom-out to a useful range and makes FIT SYSTEM restore focus.
- Repairs Signal view's accidental native grey-button appearance.
- Rebuilds History around actual repository creation dates with a padded,
  adaptive time range and readable month/year ticks.
- Adds safer intermediate-width behavior for the graph + inspector.
- Keeps reduced-motion and all Pass 3 living-system behavior intact.
- Cache version bumped to v311.

Suggested regression test:
1. System -> select project -> close inspector -> select another.
2. Signal / History / Relations / Index -> back to System.
3. Toggle LABELS and MOTION repeatedly.
4. Zoom/drag map, then FIT SYSTEM.
5. Browser zoom 90%, 110%, 125%.
6. Resize around ~1000-1400 px while inspector is open.
7. Observe mode -> exit -> confirm toolbar/header restore.
