# TODO LIST

- [ ] **[HIGH]** Remove committed gh-pages cache causing phantom-submodule checkout failure
  - Type: bug
  - Description: The deploy job fails at the `actions/checkout` step with `fatal: No url found for submodule path 'WeatherApp_main/node_modules/.cache/gh-pages/...' in .gitmodules` (exit 128), because the `gh-pages` package's cache dir — which contains a nested `.git` — was committed and is now seen as an undeclared submodule during `submodules: recursive` checkout. Untrack the entire `WeatherApp_main/node_modules/` tree from git (`git rm -r --cached WeatherApp_main/node_modules`) and add `node_modules/` to `.gitignore` so the cache can never be re-committed. After the change, verify checkout succeeds and the build/deploy job completes; optionally set `submodules: false` in the checkout step since this repo has no real submodules.
  - File: `.gitignore`, `.github/workflows/deploy.yml`
  - Completed: YYYY-MM-DD (PR #<number>)
  <!-- id: 91fb5437-0ba4-4228-8f29-7cc07f4f3508 -->
