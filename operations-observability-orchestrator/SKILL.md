---
name: operations-observability-orchestrator
description: "Production operations and observability orchestrator. Use for monitoring, alerting, SRE practices, incident response, and capacity management."
---

# Skill: Operations & Observability Orchestrator
## Version: 1.0.0
## Classification: CRITICAL — Production Layer
## Scope: Production Monitoring, Alerting, SRE, Incident Response, Capacity Management
## Depends On: `parallel_multi_agent_implementation_orchestrator` (Skill 02)

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `operations_observability_orchestrator`
**Role:** Site Reliability Engineer (SRE) & Production Operations Director
**Objective:** Ensure production systems are observable, reliable, and recoverable through automated monitoring, alerting, incident response, and capacity management.

**Success Criteria:**
- MTTR (Mean Time to Recovery) < 30 minutes for SEV-1 incidents.
- 99.99% availability measured and reported in real-time.
- All production issues detected by automated alerts before user reports.
- Zero unplanned capacity exhaustion (predictive scaling).
- Full incident traceability from alert → root cause → resolution → post-mortem.

---

## 2. OBSERVABILITY PILLARS

### 2.1 Metrics (The "What")

**RED Method** (for every service):
| Metric | Target | Alert Threshold | Dashboard |
|--------|--------|-----------------|-----------|
| Rate (requests/sec) | Baseline + 20% buffer | >150% baseline = WARNING | Service Overview |
| Errors (error rate %) | < 0.1% | > 0.5% = CRITICAL | Error Budget |
| Duration (p50/p95/p99) | p95 < 200ms | p95 > 500ms = WARNING | Latency Heatmap |

**USE Method** (for infrastructure):
| Metric | Target | Alert Threshold |
|--------|--------|-----------------|
| Utilization (CPU/Mem/Disk) | < 70% | > 85% = WARNING, > 95% = CRITICAL |
| Saturation (queue depth) | < 100 | > 500 = WARNING |
| Errors (hardware/kernel) | 0 | > 0 = CRITICAL |

**Business Metrics**:
| Metric | Source | Alert |
|--------|--------|-------|
| Conversion rate | Analytics pipeline | Drop > 10% = WARNING |
| Active users | Real-time counter | Drop > 20% = CRITICAL |
| Revenue per minute | Payment events | Drop > 15% = CRITICAL |

### 2.2 Logs (The "Why")

**Structured Logging Requirements:**
- Format: JSON only
- Mandatory fields: `timestamp`, `level`, `service`, `trace_id`, `span_id`, `message`, `user_id` (if applicable), `request_id`
- Log levels: ERROR (alert), WARN (monitor), INFO (normal), DEBUG (dev only, never in prod)
- Retention: Hot 7 days, Warm 30 days, Cold 1 year (compliance-dependent)
- PII masking: Automatic regex-based redaction before ingestion
- Correlation: All logs for a single request share `trace_id`

**Log-Based Alerts:**
| Pattern | Severity | Action |
|---------|----------|--------|
| ERROR rate > 10/min | CRITICAL | Page on-call |
| Authentication failure spike > 100/min | HIGH | Security team alert |
| Database connection pool exhausted | CRITICAL | Auto-scale + page |
| Payment processing failures > 5% | CRITICAL | Page + notify business |
| OutOfMemoryError | CRITICAL | Restart + page |

### 2.3 Traces (The "Where")

**Distributed Tracing Requirements:**
- Standard: OpenTelemetry (OTel)
- Sampling: 100% for errors, 1% for success paths (adjustable)
- Span attributes: `http.method`, `http.status_code`, `db.statement` (sanitized), `cache.hit`, `user.type`
- Trace propagation: W3C Trace Context headers across all service boundaries
- Trace visualization: Jaeger/Tempo with service dependency graphs

**Trace-Based SLOs:**
| Journey | p95 Latency | Error Rate | Trace Coverage |
|---------|-------------|------------|----------------|
| User Login | < 300ms | < 0.1% | 100% |
| Checkout | < 500ms | < 0.01% | 100% |
| Search | < 200ms | < 0.5% | 10% sample |
| Report Generation | < 5s | < 1% | 100% |

### 2.4 Profiles (The "How")

**Continuous Profiling:**
- Tool: Pyroscope, Parca, or language-native (pprof, async-profiler)
- Frequency: 10-second samples, 24/7 in production
- Focus areas: CPU hot paths, memory allocations, goroutine/thread leaks, lock contention
- Alert: If top function changes by >20% week-over-week, flag for review

---

## 3. ALERTING & ON-CALL

### 3.1 Alert Severity Definitions

| Severity | Response Time | Channel | Auto-Action | Human Required |
|----------|--------------|---------|-------------|----------------|
| **SEV-1** | < 5 min | Page (SMS/Call) | Auto-rollback if applicable | Yes — immediate |
| **SEV-2** | < 15 min | Slack + Email | Auto-mitigation attempt | Yes — within 15 min |
| **SEV-3** | < 4 hours | Slack | Ticket auto-created | No — next business day |
| **SEV-4** | < 24 hours | Email digest | None | No — backlog |

### 3.2 Alert Fatigue Prevention

**Rules:**
1. **No alert without a runbook.** Every alert links to a `RUNBOOK-{ALERT-ID}.md`
2. **Alert grouping:** Related alerts collapse into a single incident.
3. **Auto-resolution:** If metric returns to normal for 5 minutes, auto-resolve.
4. **Weekly alert review:** Every Friday, review all alerts fired. Tune or remove noisy ones.
5. **Error budget:** If error budget is exhausted, freeze all non-critical releases.

### 3.3 On-Call Rotation

```
Primary: Agent-Ops-A (Week 1)
Secondary: Agent-Ops-B (Week 1)
Shadow: Agent-Ops-C (Week 1 — learning)

Rotation: Weekly, handoff includes:
- Active incidents status
- Known flaky alerts
- Upcoming maintenance windows
- Recent deployments and their health
```

---

## 4. INCIDENT RESPONSE PLAYBOOK

### 4.1 Incident Lifecycle

```
DETECT → TRIAGE → MITIGATE → RESOLVE → POST-MORTEM → PREVENT
   │        │         │          │            │            │
   ▼        ▼         ▼          ▼            ▼            ▼
 Alert   Severity   Rollback/   Verify      Document      Fix root
 Fired   Decision   Hotfix      Fix         Timeline      cause
```

### 4.2 Triage Decision Tree

```
Is the system completely down?
├── YES → SEV-1 → Page on-call immediately → Begin auto-rollback
└── NO → Is a critical business flow broken? (payment, auth, checkout)
    ├── YES → SEV-2 → Notify on-call → Begin investigation
    └── NO → Is performance degraded >50%?
        ├── YES → SEV-2 → Monitor closely
        └── NO → SEV-3 → Create ticket, investigate during business hours
```

### 4.3 Mitigation Actions (Pre-Approved)

| Condition | Auto-Action | Human Approval |
|-----------|-------------|----------------|
| Error rate > 10% for 2 min | Rollback to last known good | Not required |
| Latency p95 > 5s for 3 min | Circuit breaker open | Not required |
| CPU > 95% for 5 min | Auto-scale +2 instances | Not required |
| DB connections > 90% | Read replica promotion | Required |
| Security alert (unusual access) | Isolate affected instance | Required |
| Data corruption detected | Stop writes to affected shard | Required |

### 4.4 Post-Mortem Template

```markdown
# Post-Mortem: {INCIDENT-ID}
## Date: {DATE}
## Severity: {SEV-LEVEL}
## Duration: {START} → {RESOLVED} ({DURATION})

## Summary
One-sentence description of what happened.

## Timeline
| Time | Event | Source |
|------|-------|--------|

## Root Cause
5 Whys analysis:
1. Why did X happen? → Because Y
2. Why did Y happen? → Because Z
...
5. Root cause: {FINAL WHY}

## Impact
- Users affected: {N}
- Revenue impact: ${N}
- Data integrity: {YES/NO, details}

## Detection
- How was it detected? {alert/user report/monitoring}
- Time to detect: {N} minutes
- Was alert actionable? {YES/NO}

## Mitigation
- What fixed it? {action}
- Time to mitigate: {N} minutes
- Could it have been auto-mitigated? {YES/NO, how}

## Lessons Learned
| What went well | What went poorly | What was surprising |

## Action Items
| ID | Action | Owner | Due Date | Priority |
|----|--------|-------|----------|----------|

## Prevention
How do we ensure this never happens again?
```

---

## 5. CAPACITY PLANNING & AUTO-SCALING

### 5.1 Scaling Policies

| Metric | Scale-Up Trigger | Scale-Down Trigger | Cooldown |
|--------|-----------------|-------------------|----------|
| CPU | > 70% for 2 min | < 30% for 10 min | 5 min |
| Memory | > 80% for 3 min | < 40% for 15 min | 10 min |
| Request Queue | > 100 pending | < 10 pending | 3 min |
| Custom (business) | Orders/min > 10x baseline | Orders/min < 0.5x baseline | 5 min |

### 5.2 Capacity Forecasting

```
Weekly: Review last 7 days vs. previous week
Monthly: Trend analysis, seasonal adjustment
Quarterly: Infrastructure budget review, reserved capacity planning
Annually: Multi-year capacity roadmap, data center/cloud region expansion

Formula for headroom:
Required Capacity = Peak Load × 1.5 (buffer) × Growth Factor
Growth Factor = (Current Month / Same Month Last Year) ^ (1/12)
```

### 5.3 Cost-Aware Scaling

- **Spot/Preemptible instances** for stateless, fault-tolerant workloads
- **Reserved instances** for baseline capacity (1-year or 3-year commitment)
- **Savings plans** for flexible commitment-based discounts
- **Auto-shutdown** of dev/test environments outside business hours
- **Right-sizing alerts:** If instance utilization < 30% for 7 days, recommend downsizing

---

## 6. DISASTER RECOVERY

### 6.1 DR Tiers

| Tier | RTO | RPO | Strategy | Frequency Tested |
|------|-----|-----|----------|------------------|
| Tier 1 (Critical) | < 1 hour | < 5 min | Multi-region active-active | Monthly |
| Tier 2 (Important) | < 4 hours | < 1 hour | Multi-region active-passive | Quarterly |
| Tier 3 (Standard) | < 24 hours | < 24 hours | Backup + restore | Annually |

### 6.2 DR Drill Protocol

```
1. ANNOUNCE: 48h advance notice to all stakeholders
2. ISOLATE: Simulate failure (network partition, region down)
3. FAILOVER: Execute runbook, measure actual RTO
4. VERIFY: Run smoke tests, validate data consistency
5. FAILBACK: Return to primary, verify synchronization
6. DOCUMENT: Update DR runbook with actual vs. expected times
7. REVIEW: Post-drill retrospective
```

---

## 7. SLO/SLI/ERROR BUDGET MANAGEMENT

### 7.1 SLO Definitions

| Service | SLI | SLO | Error Budget (per 30 days) |
|---------|-----|-----|---------------------------|
| API Gateway | Availability | 99.99% | 4.32 minutes downtime |
| API Gateway | Latency p95 | < 200ms | 5% of requests may exceed |
| Database | Availability | 99.95% | 21.6 minutes downtime |
| Search | Latency p99 | < 500ms | 1% of requests may exceed |
| Payment | Success rate | 99.99% | 0.01% failures allowed |

### 7.2 Error Budget Policy

```
IF error budget > 50% remaining:
    → Normal operations, releases proceed

IF error budget 25-50% remaining:
    → WARNING: Reduce release velocity, increase testing
    → Require SRE approval for all releases

IF error budget 10-25% remaining:
    → HIGH: Freeze feature releases
    → Bug fixes and security patches only
    → Daily SRE review of all changes

IF error budget < 10% remaining:
    → CRITICAL: Complete release freeze
    → All engineering focused on reliability
    → Post-mortem for every SLO miss
    → Executive escalation required to lift freeze
```

---

## 8. EXECUTION WORKFLOW

```
PHASE 0: BASELINE
├── Deploy observability stack (metrics, logs, traces, profiles)
├── Define SLOs with stakeholders
├── Create initial dashboards
├── Configure alerting rules
└── Write runbooks for every alert

PHASE 1: MONITORING
├── Validate all services emit RED metrics
├── Validate distributed tracing across all boundaries
├── Validate structured logging
├── Validate profiling
└── Baseline performance established

PHASE 2: ALERTING
├── Deploy alertmanager with routing rules
├── Configure on-call rotation
├── Test every alert (fire and verify)
├── Tune thresholds to eliminate false positives
└── Document runbooks

PHASE 3: INCIDENT RESPONSE
├── Simulate SEV-1 incident
├── Measure MTTD (Mean Time To Detect)
├── Measure MTTR (Mean Time To Recover)
├── Conduct post-mortem
└── Implement prevention action items

PHASE 4: CONTINUOUS IMPROVEMENT
├── Weekly alert review
├── Monthly SLO review
├── Quarterly capacity planning
├── Annual DR drill
└── Continuous runbook updates
```

---

*End of Skill 03*
