---
name: multi-environment-promotion
description: "Multi-environment promotion skill. Use for environment parity, promotion pipelines, configuration management, and data management across dev/staging/prod."
---

# Skill: Multi-Environment Promotion Strategy
## Version: 1.0.0
## Classification: HIGH — Deployment Layer
## Scope: Environment Parity, Promotion Pipeline, Configuration Management, Data Management
## Depends On: `parallel_multi_agent_implementation_orchestrator` (Skill 02), `operations_observability_orchestrator` (Skill 03)

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `multi_environment_promotion`
**Role:** Release Engineer & Deployment Architect
**Objective:** Ensure code and configuration promote safely across environments (dev → staging → prod) with full traceability, zero configuration drift, and automated validation at each stage.

**Success Criteria:**
- 100% of production deployments pass through staging first.
- Zero configuration drift between staging and production.
- Deployment rollback completes in < 5 minutes.
- All environments are reproducible from code (IaC).

---

## 2. ENVIRONMENT DEFINITIONS

### 2.1 Environment Inventory

| Environment | Purpose | Data | Uptime SLA | Access |
|-------------|---------|------|-----------|--------|
| **Local** | Developer workstation | Synthetic | N/A | Individual |
| **Dev** | Integration testing | Synthetic | 95% | Engineering |
| **Staging** | Pre-production validation | Anonymized production | 99% | Engineering + QA |
| **Production** | Live users | Real | 99.99% | SRE only |
| **DR** | Disaster recovery | Replicated | 99.99% (failover) | SRE only |
| **Feature** | Per-PR testing | Synthetic | 90% | PR author |

### 2.2 Environment Parity Matrix

| Dimension | Dev | Staging | Production | Enforcement |
|-----------|-----|---------|-----------|-------------|
| OS / Container image | Same base | Same base | Same base | Dockerfile |
| Runtime version | Same | Same | Same | Pin in config |
| Dependency versions | Same | Same | Same | Lock files |
| Infrastructure topology | Scaled down | Same | Same | Terraform |
| Configuration schema | Same | Same | Same | Config validation |
| Feature flags | All ON | Prod-like | Prod values | Flag service |
| Security policies | Same | Same | Same | Policy-as-code |
| Monitoring | Basic | Full | Full | IaC |

**Rule:** If staging differs from production in any dimension, the difference MUST be documented with risk assessment.

---

## 3. PROMOTION PIPELINE

### 3.1 Promotion Flow

```
Local → Dev → Staging → Production
   ↑       ↑         ↑           ↑
   │       │         │           │
   │       │         │           └── Blue/Green or Canary
   │       │         └── Full regression + performance test
   │       └── Integration test + security scan
   └── Unit test + lint + type check
```

### 3.2 Promotion Gates

| Gate | From → To | Criteria | Auto-Promote |
|------|-----------|----------|--------------|
| **Gate L→D** | Local → Dev | All unit tests pass, lint clean | Yes |
| **Gate D→S** | Dev → Staging | Integration tests pass, security scan clean, build succeeds | Yes (if criteria met) |
| **Gate S→P** | Staging → Production | Full regression pass, performance baseline met, manual approval | No (requires human) |
| **Gate P→DR** | Production → DR | DR sync validation, failover test | Scheduled |

### 3.3 Promotion Checklist (Staging → Production)

```markdown
## Production Promotion Checklist

### Pre-Deployment
- [ ] Staging deployment successful for > 24 hours
- [ ] All automated tests pass (unit, integration, E2E, performance)
- [ ] Security scan: zero CRITICAL/HIGH
- [ ] Database migration tested on production-like data
- [ ] Rollback procedure tested in staging
- [ ] Feature flags configured for gradual rollout
- [ ] Monitoring dashboards verified
- [ ] On-call engineer notified
- [ ] Change log reviewed and approved

### Deployment
- [ ] Blue/Green or Canary deployment initiated
- [ ] Health checks pass
- [ ] Error rate baseline verified
- [ ] Latency baseline verified
- [ ] Business metrics stable

### Post-Deployment
- [ ] Monitor for 1 hour (canary) or 4 hours (full)
- [ ] Verify all SLOs met
- [ ] Confirm no customer-facing issues
- [ ] Update status page
- [ ] Notify stakeholders
- [ ] Schedule 24-hour and 7-day health checks
```

---

## 4. CONFIGURATION MANAGEMENT

### 4.1 Configuration Hierarchy

```
config/
├── default.yaml          # Shared defaults
├── dev.yaml              # Dev overrides
├── staging.yaml          # Staging overrides
├── production.yaml       # Production overrides
└── secrets/              # Encrypted secrets (per env)
    ├── dev.enc.yaml
    ├── staging.enc.yaml
    └── production.enc.yaml
```

### 4.2 Configuration Validation

```
ON STARTUP:
1. Load default config
2. Apply environment-specific overrides
3. Validate required fields present
4. Validate no secrets in plaintext
5. Validate values within acceptable ranges
6. If any validation fails: FAIL FAST, do not start
```

### 4.3 Configuration Drift Detection

```
DAILY:
1. Extract actual config from running environments
2. Compare with code-defined config
3. Identify drift
4. Alert on any drift
5. Auto-remediate if safe, otherwise create ticket
```

---

## 5. DATA MANAGEMENT ACROSS ENVIRONMENTS

### 5.1 Data Strategy per Environment

| Environment | Data Source | Refresh Frequency | Anonymization |
|-------------|------------|-------------------|---------------|
| Local | Synthetic | Per test run | N/A |
| Dev | Synthetic + subset | Weekly | N/A |
| Staging | Production snapshot | Weekly | Full PII anonymization |
| Production | Live | Real-time | None |
| DR | Production replication | Real-time | None |

### 5.2 Data Anonymization Rules

| Data Type | Anonymization Method | Reversibility |
|-----------|---------------------|---------------|
| Names | Faker library | No |
| Emails | Hash + domain preserve | No |
| Phone numbers | Mask last 4 digits | No |
| SSN / National ID | Replace with synthetic | No |
| Credit cards | Tokenize | Yes (token vault) |
| Addresses | Faker library | No |
| Dates | Shift by random offset | No |
| IDs (foreign keys) | Consistent hash | No |

### 5.3 Data Refresh Protocol

```
1. SNAPSHOT: Create production database snapshot
2. ANONYMIZE: Run anonymization pipeline
3. VALIDATE: Verify no PII remains (scan + sample check)
4. TRANSFER: Secure transfer to staging
5. RESTORE: Load into staging database
6. VERIFY: Run smoke tests on staging
7. CLEANUP: Delete transfer files
```

---

## 6. FEATURE ENVIRONMENTS

### 6.1 Per-PR Environments

```
TRIGGER: PR created or updated
ACTION:
1. Provision ephemeral environment (Kubernetes namespace, serverless stack)
2. Deploy PR branch
3. Run smoke tests
4. Post environment URL to PR
5. Keep alive for PR lifetime + 24 hours
6. Destroy on PR merge or close

COST CONTROL:
- Auto-destroy after 24h of inactivity
- Resource limits: CPU/memory caps
- No persistent data (ephemeral databases)
```

### 6.2 Feature Environment Checklist

| Check | Requirement |
|-------|-------------|
| Isolation | No shared state with other environments |
| Seed data | Synthetic data loaded automatically |
| URL | Predictable: `{pr-number}-{project}.preview.example.com` |
| Cleanup | Auto-destroy on PR close |
| Access | Same auth as staging |
| Logs | Forwarded to central logging |

---

## 7. ROLLBACK STRATEGY

### 7.1 Rollback Triggers

| Trigger | Rollback Type | Time Target |
|---------|--------------|-------------|
| Error rate > 5% for 2 min | Automatic (feature flag or deployment) | < 2 min |
| Latency p95 > 3x baseline | Automatic (circuit breaker) | < 1 min |
| Business metric drop > 20% | Manual decision | < 5 min |
| Security alert | Immediate (emergency) | < 1 min |
| Customer complaint spike | Manual decision | < 10 min |

### 7.2 Rollback Methods

| Method | Speed | Data Risk | Use Case |
|--------|-------|-----------|----------|
| **Feature Flag OFF** | Instant | None | Feature-level rollback |
| **Blue/Green Swap** | < 1 min | Minimal | Full deployment rollback |
| **Database Rollback** | 5-30 min | Data loss risk | Schema rollback (last resort) |
| **DNS Failover** | < 5 min | None | Regional failure |
| **Container Rollback** | < 2 min | None | Image rollback |

### 7.3 Rollback Decision Tree

```
Is the issue isolated to a single feature?
├── YES → Feature flag OFF → Monitor → Fix forward
└── NO → Is it infrastructure-level?
    ├── YES → Blue/Green swap → Investigate
    └── NO → Is it data corruption?
        ├── YES → Stop writes → Restore from backup → Verify
        └── NO → Container rollback → Investigate
```

---

*End of Skill 15*
