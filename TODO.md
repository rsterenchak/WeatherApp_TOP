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

- [x] **[HIGH]** Set Webpack publicPath to the GitHub Pages project subpath
  - Type: bug
  - Description: The deployed site returns "404 File not found" on GitHub Pages because the Webpack build emits asset/script paths rooted at `/` instead of the project-site subpath `/WeatherApp_TOP/`, so the browser requests resolve to non-existent URLs. Set `output.publicPath` (and any `homepage`/base path config used by `html-webpack-plugin`) to `/WeatherApp_TOP/` in `webpack.config.js` so built `index.html` and asset references resolve correctly once deployed under `https://rsterenchak.github.io/WeatherApp_TOP/`. Verify after build that `WeatherApp_main/dist/index.html` references `/WeatherApp_TOP/...` paths, not `/...`.
  - File: `WeatherApp_main/webpack.config.js`
  - Completed: 2026-07-15
  <!-- id: 93267aef-2022-4357-a776-4f715cfa1e6e -->
