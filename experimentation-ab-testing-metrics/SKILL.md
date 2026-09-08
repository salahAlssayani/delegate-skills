---
name: experimentation-ab-testing-metrics
description: "Experimentation and A/B testing metrics skill. Use for hypothesis testing, feature flags, canary releases, and statistical validation."
---

# Skill: Experimentation, A/B Testing & Metrics-Driven Development
## Version: 1.0.0
## Classification: HIGH — Validation Layer
## Scope: Hypothesis Testing, Feature Flags, Canary Releases, Statistical Validation
## Depends On: `parallel_multi_agent_implementation_orchestrator` (Skill 02), `operations_observability_orchestrator` (Skill 03)

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `experimentation_ab_testing_metrics`
**Role:** Growth Engineer & Data Science Lead
**Objective:** Validate that implemented features deliver measurable business value through controlled experiments, feature flags, and statistical analysis.

**Success Criteria:**
- Every feature release is validated by data before full rollout.
- No feature ships to 100% of users without statistical significance.
- Rollback decisions are data-driven, not opinion-based.
- Experiment results are documented and inform future product decisions.

---

## 2. EXPERIMENT LIFECYCLE

### 2.1 Hypothesis Formulation

```markdown
## Experiment Hypothesis — {EXP-ID}

### Hypothesis
If we {change}, then {metric} will {increase/decrease} by {N}% for {user segment} because {reasoning}.

### Success Criteria
| Metric | Baseline | Target | Minimum Detectable Effect |
|--------|----------|--------|--------------------------|

### Failure Criteria
| Condition | Action |
|-----------|--------|
| Metric degrades > {N}% | Immediate rollback |
| Error rate increases > {N}% | Immediate rollback |
| User complaints > {N} | Immediate rollback |

### Duration
- Minimum: {N} days (to capture weekly patterns)
- Maximum: {N} days (to avoid stale results)
- Required sample size: {N} users per variant

### Risk Assessment
| Risk | Probability | Impact | Mitigation |
```

### 2.2 Experiment Stages

```
STAGE 1: DESIGN (1-2 days)
├── Define hypothesis, metrics, success/failure criteria
├── Calculate required sample size (power analysis)
├── Identify user segmentation strategy
├── Design control and treatment variants
└── Write experiment spec

STAGE 2: IMPLEMENTATION (2-3 days)
├── Implement feature behind feature flag
├── Add metric collection (events, logs)
├── Set up experiment infrastructure
├── QA test both variants
└── Validate metric pipeline

STAGE 3: LAUNCH (Day 0)
├── Enable for 1% of target population
├── Monitor for 24 hours (safety check)
├── If safe, ramp to 10%
├── Monitor for 48 hours
└── If safe, ramp to 50% (full experiment)

STAGE 4: RUN (Days 3-N)
├── Daily metric review
├── Weekly statistical significance check
├── Monitor for interaction effects with other experiments
└── Document observations

STAGE 5: ANALYSIS (Day N+1)
├── Calculate statistical significance (p < 0.05)
├── Calculate confidence intervals
├── Segment analysis (by user type, geography, device)
├── Document results
└── Make recommendation

STAGE 6: DECISION (Day N+2)
├── WIN: Roll out to 100%
├── LOSE: Roll back, document learnings
├── INCONCLUSIVE: Extend or redesign
└── Update feature flag state

STAGE 7: DOCUMENT (Day N+3)
├── Write experiment report
├── Archive in knowledge base
├── Update product roadmap based on learnings
└── Share with stakeholders
```

---

## 3. FEATURE FLAG MANAGEMENT

### 3.1 Flag Taxonomy

| Flag Type | Purpose | Lifecycle | Owner |
|-----------|---------|-----------|-------|
| **Experiment** | A/B test | 2-4 weeks | Growth team |
| **Kill Switch** | Emergency disable | Indefinite | SRE |
| **Gradual Rollout** | Percentage-based release | 1-2 weeks | Engineering |
| **Permission** | Feature gating (RBAC) | Indefinite | Product |
| **Operational** | Circuit breaker, rate limit | Indefinite | SRE |

### 3.2 Flag Hygiene Rules

```
RULE 1: Every flag has an owner and an expiration date.
RULE 2: Experiment flags are removed within 7 days of experiment conclusion.
RULE 3: Kill switches are reviewed quarterly — remove if no longer needed.
RULE 4: Permission flags are documented in authorization matrix.
RULE 5: No flag may control > 1 feature (single responsibility).
RULE 6: Flag state changes are logged with user, timestamp, and reason.
```

### 3.3 Flag Registry

```markdown
# Feature Flag Registry

| Flag Key | Type | Status | Owner | Created | Expires | Affected Users |
|----------|------|--------|-------|---------|---------|----------------|
```

---

## 4. STATISTICAL VALIDATION

### 4.1 Minimum Requirements

| Check | Requirement | Tool |
|-------|-------------|------|
| Sample size | Power analysis: 80% power, 5% significance | G*Power, custom calculator |
| Randomization | User ID hash modulo 100 | Consistent hash |
| Independence | No user in > 1 experiment affecting same metric | Experiment collision detection |
| Significance | p < 0.05, two-tailed test | Stats library |
| Practical significance | Effect size > minimum detectable effect | Custom threshold |
| Duration | Minimum 1 full business cycle (7 days) | Calendar check |

### 4.2 Segmentation Analysis

After overall significance, analyze by:
- User type (new vs. returning)
- Device (mobile vs. desktop)
- Geography (region, country)
- Traffic source (organic, paid, direct)
- Time of day / day of week

**Rule:** A feature only ships if it wins in the PRIMARY segment AND does not significantly harm any secondary segment.

---

## 5. CANARY & DARK LAUNCH STRATEGY

### 5.1 Canary Deployment

```
Phase 1: Deploy to 1% of production traffic
├── Monitor for 1 hour
├── Check: error rate, latency, business metrics
└── If healthy → Phase 2

Phase 2: Deploy to 10% of traffic
├── Monitor for 4 hours
├── Check: all metrics + user feedback
└── If healthy → Phase 3

Phase 3: Deploy to 50% of traffic
├── Monitor for 24 hours
├── Check: all metrics + statistical significance
└── If healthy → Phase 4

Phase 4: Deploy to 100%
├── Monitor for 48 hours
├── If issues → immediate rollback to Phase 3
└── After 48h stable → mark complete
```

### 5.2 Dark Launch

Deploy feature to production but:
- Not visible to users (hidden UI, no routing)
- Processing real traffic in shadow mode
- Comparing outputs with existing system
- No user-facing impact

Use for: High-risk changes, performance-critical paths, complex migrations.

---

## 6. METRICS-DRIVEN DEVELOPMENT

### 6.1 Leading vs. Lagging Indicators

| Type | Metric | When Measured | Action Trigger |
|------|--------|--------------|----------------|
| **Leading** | Feature adoption rate | Week 1 post-release | If < 20%, investigate UX |
| **Leading** | Task completion time | Per session | If > baseline, review flow |
| **Lagging** | Revenue per user | Monthly | If declining, strategic review |
| **Lagging** | Net Promoter Score | Quarterly | If < 40, product review |

### 6.2 North Star Metric

Every project defines ONE north star metric:
- Directly reflects user value
- Actionable (teams can influence it)
- Measurable in real-time or near real-time
- Not a vanity metric

Examples:
- SaaS: Weekly Active Users (WAU)
- E-commerce: Gross Merchandise Value (GMV)
- Content: Time spent per session
- AI Product: Successful completions per user

---

*End of Skill 09*
