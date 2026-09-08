---
name: cost-optimization-finops
description: "Cost optimization (FinOps) skill. Use for cloud cost monitoring, optimization, budgeting, and resource right-sizing."
---

# Skill: Cost Optimization & FinOps
## Version: 1.0.0
## Classification: MEDIUM — Financial Layer
## Scope: Cloud Cost Monitoring, Optimization, Budgeting, Right-Sizing
## Depends On: `operations_observability_orchestrator` (Skill 03)

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `cost_optimization_finops`
**Role:** Cloud Financial Manager & FinOps Engineer
**Objective:** Optimize cloud and infrastructure spending while maintaining performance and reliability.

**Success Criteria:**
- Cloud spend is 100% attributable to services/teams/features.
- Monthly spend variance from budget < 10%.
- Waste (unused resources) identified and eliminated within 7 days.
- Reserved capacity covers > 60% of baseline load.

---

## 2. COST MONITORING

### 2.1 Cost Allocation

| Dimension | Tagging Required | Attribution |
|-----------|-----------------|-------------|
| Environment | `env: dev/staging/prod` | Chargeback |
| Service | `service: {name}` | Chargeback |
| Team | `team: {name}` | Showback |
| Feature | `feature: {name}` | Business value |
| Project | `project: {name}` | Budget tracking |

### 2.2 Cost Dashboard

```markdown
# Cost Dashboard — {MONTH}

## Total Spend: ${N} (Budget: ${N}, Variance: {N}%)

## By Service
| Service | Spend | % of Total | Trend | Action |
|---------|-------|-----------|-------|--------|

## By Environment
| Environment | Spend | % of Total | Trend |
|-------------|-------|-----------|-------|

## Anomalies
| Service | Expected | Actual | Variance | Investigation |
|---------|----------|--------|----------|---------------|

## Forecast
| Month | Forecast | Budget | Risk |
|-------|----------|--------|------|
```

---

## 3. OPTIMIZATION STRATEGIES

### 3.1 Right-Sizing

| Resource | Check | Action |
|----------|-------|--------|
| Compute | CPU < 30% for 7 days | Downsize or use spot |
| Compute | CPU > 80% for 7 days | Upsize or scale out |
| Storage | Access frequency < 1/month | Move to cold storage |
| Database | Connections < 20% of max | Downsize instance |
| Cache | Hit rate < 50% | Review cache strategy |

### 3.2 Reserved Capacity

| Commitment | Discount | Best For |
|------------|----------|----------|
| 1-year reserved | 30-40% | Stable baseline |
| 3-year reserved | 50-60% | Very stable workloads |
| Savings plans | 20-30% | Flexible commitment |
| Spot/Preemptible | 60-90% | Fault-tolerant workloads |

### 3.3 Waste Elimination

| Waste Type | Detection | Action |
|------------|-----------|--------|
| Orphaned volumes | Unattached > 7 days | Alert + auto-delete after 14 days |
| Idle load balancers | 0 targets or 0 traffic | Alert + review |
| Unused IPs | Not attached > 7 days | Alert + release |
| Oversized instances | CPU < 20% for 30 days | Recommend right-size |
| Dev environments running nights | Uptime outside business hours | Auto-shutdown schedule |
| Duplicate data | Same data in multiple places | Deduplication |
| Over-provisioned databases | Storage < 50% for 30 days | Downsize |

---

## 4. BUDGET MANAGEMENT

### 4.1 Budget Alerts

| Threshold | Alert | Action |
|-----------|-------|--------|
| 50% of monthly budget | INFO | Normal review |
| 80% of monthly budget | WARNING | Review spending, identify optimization |
| 90% of monthly budget | HIGH | Freeze non-essential, escalate |
| 100% of monthly budget | CRITICAL | Emergency freeze, executive escalation |
| Forecast > 110% of budget | CRITICAL | Immediate review, scope reduction |

### 4.2 Cost Per Transaction

Track cost efficiency:
```
Cost Per User = Total Infrastructure Cost / Monthly Active Users
Cost Per Request = Total Infrastructure Cost / Total Requests
Cost Per Conversion = Total Infrastructure Cost / Conversions

Target: Decrease by 5% quarter-over-quarter
```

---

*End of Skill 12*
