# Checkout PR

Please flllow these steps:

- 1. Checkout branch by pr number.
- 2. Fetch remote base branch.
- 3. Merge remote base branch with --no-ff.
- 4. Try resolving conflicts
  - Tips: Resolve conflicts in pnpm-lock.yaml
    - pnpm can automatically resolve merge conflicts in pnpm-lock.yaml. If you have conflicts, just run pnpm install and commit the changes.
- 5. Push
