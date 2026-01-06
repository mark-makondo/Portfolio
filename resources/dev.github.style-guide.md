# GitHub Style Guide

## Branch Naming Convention

A consistent branch naming convention helps maintain organized and scalable repository structure.

### Format

<type>/<scope>/<short-description>

### Branch Types

| Type | Purpose | Example |
|------|---------|---------|
| `feat/` | New features | `feat/payment/stripe-integration` |
| `fix/` | Bug fixes | `fix/auth/login-error` |
| `improve/` | Enhancements | `improve/performance/caching` |
| `docs/` | Documentation | `docs/api/endpoints` |
| `test/` | Testing | `test/unit/user-service` |
| `refactor/` | Code restructuring | `refactor/payment/cleanup` |
| `style/` | CSS/formatting | `style/theme/dark-mode` |
| `chore/` | Maintenance tasks | `chore/deps/update-packages` |

## Rules & Best Practices

- ✅ **Use lowercase only**
- ✅ **Use hyphens for word separation** (`user-profile` not `userProfile`)
- ✅ **Keep descriptions concise but clear** (3-5 words max)
- ✅ **Include scope when applicable** (feature area, module, or component)
- ❌ **Avoid including dates** (Git tracks this automatically)
- ❌ **Avoid long, ambiguous names**

### Feature Development

```bash

# Features
feat/user/registration-flow
feat/payment/refund-system
feat/auth/two-factor

# Bug Fixes
fix/checkout/cart-calculation
fix/ui/mobile-responsive
fix/api/rate-limiting

# Improvements & Maintenance
improve/performance/image-optimization
refactor/database/query-optimization
chore/ci/cd-pipeline

# From main branch
git checkout -b feat/payment/stripe-integration

# From development branch  
git checkout develop -b fix/auth/login-error

```