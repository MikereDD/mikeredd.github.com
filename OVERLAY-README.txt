TYPEZER∅ System — Pass 7.1 Corrective Overlay

Copy contents over:
G:\Forgejo\mikeredd.github.com

Branch:
redesign/typezero-system

Replaces only:
- index.html
- assets/site.js

Fixes:
- Esc now clears lingering keyboard-focus outlines when exiting Observe.
- Esc preserves the selected project when Observe was entered with a project selected.
- [ and ] now use physical BracketLeft / BracketRight key codes.
- [ and ] work even when the inspector is closed:
    ] selects the first project in project order and continues forward.
    [ selects the last project in project order and continues backward.
- Existing deep links and browser Back/Forward remain intact.
- Cache version bumped to v71.

Retest:
1. Select Resound.
2. Enter Observe.
3. Press Esc — Resound inspector should return if it was selected before Observe.
4. Press ] several times.
5. Press [ several times.
6. Close inspector with Esc, then press ] again — a project should open.
