---
allowed-tools: Bash(git push:*), Bash(gh pr create:*)
description: Create a pull request from local changes
---

# Create PR from changes

Please follow these steps:

1. (Optional) Create a branch if there is base branch (e.g. `main`, `develop`, `dev`)
2. (Optional) Create commits if there are uncommitted changes
3. Create a pull request
4. View the pull request

## 1. (Optional) Create a branch if there is base branch

When creating branch names, follow a clear and consistent naming convention similar to Conventional Commits. Use a prefix that indicates the type of work (e.g., feat/, fix/, docs/, refactor/, test/, chore/, hotfix/), followed by a short, kebab-case description of the change. For example: feat/add-login-endpoint, fix/null-pointer-error, docs/update-readme.
If the branch name is too generic or likely to conflict in the future, append a date suffix in yyyymmdd format to ensure uniqueness (e.g., feat/add-campaign-banner-20250902). Avoid long or ambiguous names.

```bash
git checkout -b <branch-name>
```

## 2. (Optional) Create commits if there are uncommitted changes

Follow the Conventional Commits specification.

Each commit must be atomic and represent a single, clear purpose. Do not mix multiple unrelated changes in one commit. Instead, split changes into smaller commits so that each commit corresponds to exactly one logical change, with a properly formatted commit message according to Conventional Commits (e.g., feat: ..., fix: ..., docs: ...).

## 3. Create a pull request

If the pull request contains multiple changes, the title should be concise but broad enough to cover all included changes.

The description must clearly explain each change in detail, including the motivation, scope, and any relevant context.

Avoid vague titles like 'update code' or 'misc fixes'. Instead, use descriptive titles that summarize the overall purpose of the PR.

Use bullet points or sections in the description if multiple changes are involved, to keep it organized and easy to review."

## 4. View the pull request

Open the pull request in the web browser.

```bash
gh pr view --web
```
