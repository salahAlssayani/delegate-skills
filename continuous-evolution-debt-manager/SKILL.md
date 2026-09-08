---
name: continuous-evolution-debt-manager
description: "Technical debt and continuous evolution manager. Use for debt tracking, refactoring planning, deprecation, and architecture fitness checks."
---

# Skill: Continuous Evolution & Technical Debt Management
## Version: 1.0.0
## Classification: HIGH — Sustainability Layer
## Scope: Technical Debt Tracking, Refactoring, Deprecation, Architecture Fitness
## Depends On: `parallel_multi_agent_implementation_orchestrator` (Skill 02)

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `continuous_evolution_debt_manager`
**Role:** Chief Technical Officer (Long-term) & Engineering Excellence Lead
**Objective:** Prevent technical debt from accumulating to the point of project collapse, manage deprecation lifecycles, and ensure the architecture remains fit for purpose as the system evolves.

**Success Criteria:**
- Technical debt is quantified, visible, and capped at <15% of sprint capacity.
- No deprecated feature remains in production > 6 months past sunset date.
- Architecture fitness functions run on every build and fail the build on drift.
- Refactoring is scheduled, not reactive.
- Knowledge decay is detected and corrected before it causes incidents.

---

## 2. TECHNICAL DEBT FRAMEWORK

### 2.1 Debt Taxonomy

| Category | Description | Example | Interest Rate |
|----------|-------------|---------|---------------|
| **Code Debt** | Poor implementation | God classes, duplicated logic | Medium |
| **Design Debt** | Architectural shortcuts | Tight coupling, missing abstractions | High |
| **Test Debt** | Insufficient coverage | Untested error paths, flaky tests | High |
| **Documentation Debt** | Outdated/missing docs | API docs don't match code | Medium |
| **Infrastructure Debt** | Outdated platforms | EOL OS versions, deprecated services | Critical |
| **Security Debt** | Unpatched vulnerabilities | Known CVEs, weak crypto | Critical |
| **Data Debt** | Poor data quality | Unvalidated schemas, orphaned records | High |

### 2.2 Debt Quantification

**Debt Score Formula:**
```
Debt Score = (Severity × Effort to Fix × Frequency of Impact) / Business Value

Severity: 1-5 (1 = cosmetic, 5 = system-breaking)
Effort: 1-5 (1 = hours, 5 = quarters)
Frequency: 1-5 (1 = monthly, 5 = every request)
Business Value: 1-5 (1 = critical revenue, 5 = internal tool)
```

**Debt Budget:**
- Maximum 15% of each sprint allocated to debt reduction
- If debt score > 100 for any item, it MUST be addressed in next sprint
- Debt items are tracked in `TECHNICAL-DEBT.md` with owners and deadlines

### 2.3 Debt Tracking Artifact

```markdown
# Technical Debt Register

| ID | Category | Description | Location | Score | Owner | Sprint Target | Status |
|----|----------|-------------|----------|-------|-------|---------------|--------|
| TD-001 | Design | Auth service directly accesses user DB | `auth/service.go:45` | 120 | IMPL-BACKEND | Sprint 12 | OPEN |
| TD-002 | Security | JWT uses HS256 instead of RS256 | `auth/jwt.go` | 200 | IMPL-SECURITY | Sprint 11 | IN-PROGRESS |
| TD-003 | Code | 3 duplicate validation functions | `validators/` | 45 | IMPL-FRONTEND | Sprint 13 | OPEN |
```

---

## 3. ARCHITECTURE FITNESS FUNCTIONS

### 3.1 Automated Fitness Checks

Fitness functions are automated tests that verify architectural constraints. They run on every build.

| Constraint | Fitness Function | Failure Action |
|------------|-----------------|--------------|
| No circular dependencies | Dependency graph analysis | Build fails |
| Service coupling < threshold | Static analysis (import graph) | Build fails |
| API response time < SLO | Performance benchmark | Build fails |
| Test coverage > 80% | Coverage report | Build fails |
| No secrets in code | Secret scanning | Build fails |
| Cyclomatic complexity < 10 | Static analysis | Build fails |
| No deprecated dependencies | Dependency scan | Build warns |
| Database query count < N per request | Integration test | Build fails |
| Memory usage < threshold per container | Load test | Build fails |

### 3.2 Architecture Drift Detection

```
Monthly: Compare current C4 diagrams with actual code structure
- If a new dependency exists that's not in the diagram → DRIFT
- If a service communicates with another it shouldn't → DRIFT
- If a technology is used that's not in the tech stack → DRIFT

On DRIFT:
1. Create ADR explaining why drift occurred
2. Update architecture diagrams
3. If drift was unintentional, create remediation task
4. If drift was intentional, update fitness functions to allow it
```

---

## 4. DEPRECATION LIFECYCLE

### 4.1 Deprecation Stages

```
STAGE 1: ANNOUNCE (T-6 months)
├── Mark API/feature as deprecated in code (annotations)
├── Update documentation with deprecation notice
├── Add runtime warnings (logs, response headers)
├── Notify all consumers via email/Slack
└── Create migration guide

STAGE 2: MIGRATION (T-6 to T-3 months)
├── Provide migration tooling/scripts
├── Offer office hours for migration support
├── Track migration progress per consumer
└── Send weekly reminders to non-migrated consumers

STAGE 3: RESTRICT (T-3 to T-1 month)
├── Return deprecation warnings in responses
├── Rate-limit deprecated endpoints
├── Remove from public documentation
└── Notify remaining consumers of imminent removal

STAGE 4: REMOVE (T-0)
├── Remove code
├── Remove tests
├── Update documentation
├── Archive ADR
└── Celebrate (one less thing to maintain)
```

### 4.2 Deprecation Artifact

```markdown
# Deprecation Notice: {FEATURE/API-NAME}

## Deprecation Date: {DATE}
## Removal Date: {DATE + 6 months}
## Owner: {AGENT-ID}

## Reason
Why is this being deprecated?

## Migration Path
How do consumers migrate?

## Affected Consumers
| Consumer | Contact | Migration Status | Target Date |

## Rollback Plan
Can we un-deprecate if needed?
```

---

## 5. REFACTORING STRATEGY

### 5.1 Refactoring Triggers

| Trigger | Threshold | Action |
|---------|-----------|--------|
| Code complexity | Cyclomatic > 10 or cognitive > 15 | Mandatory refactor |
| Duplication | > 3 instances of same logic | Extract to shared module |
| Test flakiness | > 5% failure rate | Investigate and fix |
| Performance regression | p95 latency > 120% of baseline | Profile and optimize |
| Dependency EOL | < 6 months until EOL | Upgrade or replace |
| Security vulnerability | CVSS > 7.0 | Immediate patch |
| Knowledge silo | Only 1 agent understands module | Pair programming + documentation |

### 5.2 Refactoring Sprint Template

```markdown
# Refactoring Sprint: {SPRINT-ID}
## Theme: {FOCUS AREA}
## Debt Items: {LIST}

## Goals
- Reduce complexity in {module} by 30%
- Extract shared {component}
- Eliminate {N} code smells

## Approach
1. Write characterization tests (preserve behavior)
2. Refactor in small, reviewable chunks
3. Run full test suite after each change
4. Measure before/after metrics

## Success Criteria
- [ ] All tests pass
- [ ] Complexity reduced
- [ ] No new debt introduced
- [ ] Documentation updated
```

---

## 6. KNOWLEDGE DECAY MANAGEMENT

### 6.1 Knowledge Freshness Scoring

| Artifact | Max Age | Check Frequency | Action if Stale |
|----------|---------|-----------------|-----------------|
| README.md | 30 days | Weekly | Auto-flag for update |
| API Documentation | 7 days | Per PR | Must update with code |
| Architecture Diagrams | 90 days | Monthly | Compare with code, update |
| Runbooks | 30 days | Monthly | Test against reality |
| ADRs | 180 days | Quarterly | Review for obsolescence |
| Onboarding Guide | 90 days | Per new hire | Update based on feedback |

### 6.2 Knowledge Archaeology Protocol

When encountering undocumented or confusing code:

```
1. SEARCH: Find related commits, PRs, ADRs
2. BLAME: Identify original author (agent)
3. TRACE: Follow data flow to understand purpose
4. DOCUMENT: Write "Archaeology Note" explaining findings
5. TEST: Write characterization tests to lock in behavior
6. DECIDE: Refactor, document, or leave with warning comment
```

---

## 7. EXECUTION WORKFLOW

```
PHASE 0: BASELINE
├── Run initial debt scan across all code
├── Quantify all debt items
├── Establish debt budget (15% of sprint capacity)
├── Set up fitness function pipeline
└── Create TECHNICAL-DEBT.md

PHASE 1: TRIAGE
├── Prioritize debt by score
├── Assign owners to top 20 items
├── Schedule refactoring sprints
└── Communicate debt budget to all agents

PHASE 2: ACTIVE MANAGEMENT
├── Weekly debt review (5 min standup item)
├── Monthly fitness function review
├── Quarterly architecture drift check
└── Annual full system health assessment

PHASE 3: CONTINUOUS
├── Every PR: Check for new debt introduction
├── Every sprint: Allocate debt budget
├── Every release: Verify no deprecated features remain
└── Every quarter: Review and update this skill
```

---

*End of Skill 04*
