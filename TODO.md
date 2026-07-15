# TODO LIST

- [x] **[HIGH]** Remove committed gh-pages cache causing phantom-submodule checkout failure
  - Type: bug
  - Description: The deploy job fails at the `actions/checkout` step with `fatal: No url found for submodule path 'WeatherApp_main/node_modules/.cache/gh-pages/...' in .gitmodules` (exit 128), because the `gh-pages` package's cache dir — which contains a nested `.git` — was committed and is now seen as an undeclared submodule during `submodules: recursive` checkout. Untrack the entire `WeatherApp_main/node_modules/` tree from git (`git rm -r --cached WeatherApp_main/node_modules`) and add `node_modules/` to `.gitignore` so the cache can never be re-committed. After the change, verify checkout succeeds and the build/deploy job completes; optionally set `submodules: false` in the checkout step since this repo has no real submodules.
  - File: `.gitignore`, `.github/workflows/deploy.yml`
  - Completed: 2026-07-15
  <!-- id: 91fb5437-0ba4-4228-8f29-7cc07f4f3508 -->

- [ ] **[LOW]** Set submodules: false on the deploy.yml checkout step
  - Type: feature
  - Description: Defense-in-depth follow-up to the node_modules untracking fix. Add `with: { submodules: false }` to the `actions/checkout` step in the deploy workflow, since this repo has no real submodules and disabling submodule checkout prevents any stray nested `.git` from being misread as an undeclared submodule. This was split out of the phantom-submodule fix because the automated routine's GitHub App token lacks the `workflows` permission required to modify files under `.github/workflows/`; a human (or a token with `workflows` scope) must apply it. The root-cause fix (untracked node_modules + node_modules/ in .gitignore) already resolves the checkout failure on its own, so this is purely hardening.
  - File: `.github/workflows/deploy.yml`

- [ ] **[HIGH]** Replace Jekyll build in deploy.yml with a Vite build so Pages serves the app
  - Type: bug
  - Description: The Pages site returns GitHub's "404 — File not found" because `deploy.yml` uses `actions/jekyll-build-pages@v1`, which builds a Jekyll site (`_site/`) instead of running `vite build`, so no `dist/index.html` is ever published. Replace the Jekyll step with a Node pipeline: checkout, `npm ci` and `npm run build` in `WeatherApp_main`, then `actions/upload-pages-artifact@v3` with `path: WeatherApp_main/dist`, followed by `actions/deploy-pages`. Also confirm `vite.config.js` sets `base: '/WeatherApp_TOP/'` so built asset paths resolve under the project-site subpath. NOTE: this file is under `.github/workflows/`, which the routine's GitHub App token cannot modify — it must be applied by a human or a `workflows`-scoped token.
  - File: `.github/workflows/deploy.yml`, `WeatherApp_main/vite.config.js`
  - Completed: YYYY-MM-DD (PR #<number>)
  <!-- id: 622507bc-438d-4960-976f-c3886acf9b3b -->
