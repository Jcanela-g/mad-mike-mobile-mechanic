# CODEX.md — Coding Guidelines for OpenAI Codex (Custom for Jose)

## 0 — Purpose
These rules ensure clean, maintainable, production-ready code for small/medium full-stack apps, Upwork client projects, and portfolio work.

- MUST = hard rule
- SHOULD = strong recommendation

## 1 — Before Coding
- BP-1 (MUST) Ask clarifying questions when the task is ambiguous.
- BP-2 (SHOULD) Provide a brief plan for any non-trivial feature.
- BP-3 (SHOULD) When multiple approaches exist, list pros/cons.

## 2 — While Coding
- C-1 (SHOULD) Favor small, testable, pure functions when possible.
- C-2 (SHOULD) Use domain-consistent names.
- C-3 (SHOULD NOT) Introduce classes unless needed.
- C-4 (SHOULD) Keep functions simple, readable, and composable.
- C-5 (SHOULD) Use TypeScript types consistently in TS projects.
- C-6 (MUST) Use `import type` for type-only imports in TS projects.
- C-7 (SHOULD) Avoid unnecessary comments; rely on clean code.
- C-8 (SHOULD) Prefer `type` over `interface` unless interfaces simplify the API.
- C-9 (SHOULD) Extract new functions only when improving readability, reuse, or testability.

## 3 — Testing
- T-1 (SHOULD) Place simple unit tests next to source files.
- T-2 (SHOULD) Use integration tests for API routes.
- T-3 (SHOULD) Separate pure logic tests from DB/network tests.
- T-4 (SHOULD) Test edge cases and real user input patterns.
- T-5 (SHOULD) Use strong assertions (`toEqual`).

## 4 — Database
- D-1 (SHOULD) Keep DB logic in separate modules.
- D-2 (SHOULD) Validate incoming data at API layer with Zod or similar.

## 5 — Code Organization
- O-1 (SHOULD) Organize code by feature folders.
- O-2 (SHOULD) Place shared utilities in `utils/` or `lib/`.

## 6 — Tooling Gates
- G-1 (MUST) Prettier formatting must pass.
- G-2 (MUST) ESLint must pass.

## 7 — Git
- GH-1 (SHOULD) Use Conventional Commits.
- GH-2 (MUST NOT) Mention AI tools (Codex/ChatGPT/Claude) in commits.

## Function Quality Checklist
1. Is it easy to read?
2. Avoid deep nesting?
3. Uses appropriate data structures?
4. Parameters all necessary?
5. No unnecessary casts?
6. Testable independently?
7. No hidden dependencies?
8. Name clear & consistent?

## Test Quality Checklist
- Parameterize inputs.
- Only write tests that detect real failures.
- Descriptions must match assertions.
- Use independent expectations.
- Use `toEqual` not weak assertions.
- Include edge cases.

## Codex Shortcuts

### qnew
Apply all CODEx.md rules.

### qplan
Draft a plan consistent with CODEx.md.

### qcode
Implement the plan with clean formatting.

### qcheck
Senior engineer review using all checklists.

### qcheckf
Senior engineer review of functions only.

### qcheckt
Senior engineer review of tests only.

### qux
List UX scenarios a real user would test.

### qgit
Stage changes, write a Conventional Commit message, output git commands.
