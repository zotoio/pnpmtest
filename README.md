# pnpmtest

A sample repository for testing that pnpm lockfiles are used as precedence for dependency collection.

## Structure

This repository demonstrates a basic pnpm workspace with multiple packages:

- `packages/package-a`: A simple package with a lodash dependency
- `packages/package-b`: A package that depends on package-a (workspace dependency)

## Setup

```bash
pnpm install
```

## Build

```bash
pnpm build
```

## Features

- **pnpm lockfile**: Contains `pnpm-lock.yaml` with locked dependency versions
- **Workspace dependencies**: package-b depends on package-a using `workspace:*` protocol
- **External dependencies**: Includes both lodash and axios with specific locked versions
- **pnpm configuration**: Includes `.npmrc` for pnpm settings

## Testing Lockfile Precedence

This repository is specifically designed to test that dependency collection tools prioritize the `pnpm-lock.yaml` file over `package.json` when determining exact dependency versions. The lockfile contains:

- Locked versions for all direct and transitive dependencies
- Workspace link information
- Integrity hashes for verification