# UltraBoost

## Note for developers
before committing to the repo, please do the following code:

### For React
for files within src/components:
``` npx prettier --write src/components/ ```

for files within src/pages:
``` npx prettier --write src/pages/ ```

For linting jsx with ESlint:
```npx eslint "src/components/**" --fix```

### For CSS
Pretties the files:
``` npx prettier --write "**/*.css" ```

For linting css with Stylelint. Beware that don't run this cmd if you have `build/` directory: 
``` npx stylelint "**/*.css" --fix ```