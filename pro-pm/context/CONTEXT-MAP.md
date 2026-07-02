# Context Path Map (Canonical)

Agents and skills should use these paths. Legacy folders below redirect here.

| Legacy / informal path | Use instead |
|------------------------|-------------|
| `context/product/` | `context/products/{your-product}/` |
| `context/market/` | `context/company/overview.md` + `discover/market-sizing` skill output |
| `context/competitors/` | `context/products/*/competitors.md` |
| `context/customers/` | `context/products/*/customers.md` |
| `context/metrics/` | `context/products/*/metrics.md` |
| `context/technical/` | `context/products/*/tech-context.md`, `context/integrations/codebase.md` |
| `context/okrs/` | `context/company/okrs.md` |
| `context/feedback/` | `artifacts/research/` or product `customers.md` |
| `context/experiments/` | `artifacts/research/` or initiative files |
| `context/personas/` | `personas/` (top-level) |

Empty files → `context/_defaults.md`. Never block work on missing context.
