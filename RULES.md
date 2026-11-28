# Development Rules

These human-maintained rules apply to all implementation work in this
repository.

## Engineering

1. Use TypeScript by default.
2. Choose clear, meaningful names and explicit types where they improve safety.
3. Keep files below 120 lines; split cohesive responsibilities when they grow.
4. Prefer small, composable functions and simple, maintainable designs.
5. Favor immutable data and return new instances when practical.
6. Separate pure logic, data structures, and side effects.
7. Maximize testability through pure logic and dependency injection.
8. Prefer built-in or proven dependencies over custom infrastructure.
9. Use named exports and kebab-case paths; avoid unnecessary barrel files.
10. Apply YAGNI: keep the core small and avoid speculative abstractions.
11. Log errors in catch paths; never silently swallow failures.
12. Investigate unclear failures with temporary diagnostic logging, then remove
    noise that is not part of the intended behavior.
13. Do not uncritically accept requirements or agent claims; verify evidence.

## Repository hygiene

29. Create or resume a task branch before planning or editing; never deliver
    task changes directly on the base branch.
30. Run and record required local checks before each completion commit, then
    push the task branch after completed commits or a resumable recovery commit.
31. Keep temporary investigation or run documents in `docs/temps/`, using a UTC
    timestamp prefix, and report their paths.
32. Do not modify generated files or dependency lockfiles without a reason tied
    to the requested change.
33. Keep documentation minimal and limited to behavior needed to use or
    maintain the harness.
