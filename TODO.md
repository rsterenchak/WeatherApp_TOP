# TODO LIST

- [ ] **[MEDIUM]** Add responsive breakpoints so fixed-width containers reflow on tablet and mobile
  - Type: bug
  - Description: The layout uses fixed pixel widths/heights with no @media queries anywhere in style.css, causing overflow/clipping on narrow viewports: #main's 1000px center column, #spaceForm's 450px search input column, and #outerContainer's mixed px/vh row heights. Add a ~768px tablet breakpoint that collapses #main to a single "weatherOuter" column (hiding #sideSpace1/#sideSpace2) and shrinks #spaceForm's grid-template-columns to a smaller fixed input width, and a ~480px mobile breakpoint that stacks #weatherOuter's inner1/innerMain/inner2 into a single column and makes #spaceForm a full-width single-column stack (formInput above formButton) with adjusted padding/gap. Likely code location is the CSS rules for #outerContainer, #main, #weatherOuter, and #spaceForm.
  - File: `WeatherApp_main/src/style.css`
  - Completed: YYYY-MM-DD (PR #<number>)
  <!-- id: 3b17b856-b659-446f-9696-86e5f1f54fd0 -->
