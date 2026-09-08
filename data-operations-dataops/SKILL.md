---
name: data-operations-dataops
description: "Data operations (DataOps) skill. Use for data pipeline monitoring, data quality, lineage, governance, and ML ops."
---

# Skill: Data Operations (DataOps)
## Version: 1.0.0
## Classification: HIGH — Data Layer
## Scope: Data Pipeline Monitoring, Quality, Lineage, Governance, ML Ops
## Depends On: `parallel_multi_agent_implementation_orchestrator` (Skill 02), `operations_observability_orchestrator` (Skill 03)

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `data_operations_dataops`
**Role:** Chief Data Officer & Data Engineering Lead
**Objective:** Ensure data pipelines are reliable, data quality is high, data lineage is traceable, and ML models are monitored for drift.

**Success Criteria:**
- Data pipeline uptime > 99.9%.
- Data quality issues detected within 1 hour of occurrence.
- 100% of production data has lineage documentation.
- ML model drift detected before accuracy drops below threshold.
- GDPR data subject requests fulfilled within 30 days.

---

## 2. DATA PIPELINE MONITORING

### 2.1 Pipeline Health Metrics

| Metric | Target | Alert Threshold |
|--------|--------|-----------------|
| Pipeline success rate | > 99.5% | < 99% = WARNING |
| Pipeline latency (end-to-end) | < SLA | > 150% SLA = HIGH |
| Data freshness | < 1 hour old | > 2 hours = CRITICAL |
| Record count variance | < 5% vs. expected | > 10% = HIGH |
| Schema drift | 0 | Any = CRITICAL |
| Duplicate records | < 0.01% | > 0.1% = HIGH |

### 2.2 Pipeline Alerting

```yaml
alerts:
  - name: pipeline_failure
    condition: pipeline_status == FAILED
    severity: CRITICAL
    action: retry × 3, then page on-call

  - name: data_freshness
    condition: max(timestamp) < now() - 2h
    severity: HIGH
    action: investigate source system

  - name: schema_drift
    condition: detected_schema != expected_schema
    severity: CRITICAL
    action: halt pipeline, notify data owner

  - name: data_quality_drop
    condition: quality_score < 0.95
    severity: HIGH
    action: quarantine affected records, notify
```

---

## 3. DATA QUALITY FRAMEWORK

### 3.1 Quality Dimensions

| Dimension | Check | Threshold | Action on Failure |
|-----------|-------|-----------|-------------------|
| **Completeness** | Null rate per column | < 1% | Flag for backfill |
| **Uniqueness** | Duplicate rate | < 0.01% | Deduplication job |
| **Validity** | Format conformance (regex) | 100% | Reject invalid |
| **Consistency** | Cross-reference integrity | 100% | Reconciliation job |
| **Timeliness** | Data age | < 1 hour | Alert + investigate |
| **Accuracy** | Sample validation vs. source | > 99% | Source investigation |

### 3.2 Quality Score

```
Overall Quality Score = (Completeness × 0.2) + (Uniqueness × 0.2) +
                        (Validity × 0.2) + (Consistency × 0.2) +
                        (Timeliness × 0.1) + (Accuracy × 0.1)

Target: > 0.98
Warning: < 0.95
Critical: < 0.90
```

---

## 4. DATA LINEAGE

### 4.1 Lineage Requirements

Every data element must be traceable:
- **Source:** Where did this data originate?
- **Transformations:** What operations modified it?
- **Dependencies:** What downstream systems use it?
- **Owner:** Who is responsible for its quality?
- **Classification:** PII, sensitive, public?

### 4.2 Lineage Documentation

```markdown
# Data Lineage: {DATASET-NAME}

## Source
| System | Table/Endpoint | Extraction Method | Frequency |

## Transformations
| Step | Operation | Logic | Owner |
|------|-----------|-------|-------|

## Destinations
| System | Table/Endpoint | Use Case | SLA |

## Dependencies
| Upstream | Downstream | Impact if Failed |

## Classification
| Field | Type | Retention | Encryption |
```

---

## 5. ML OPS (If Applicable)

### 5.1 Model Lifecycle

```
STAGE 1: DEVELOPMENT
├── Experiment tracking (MLflow, Weights & Biases)
├── Version control for data, code, and models
├── Reproducibility: pinned dependencies, random seeds
└── Validation: cross-validation, holdout test

STAGE 2: VALIDATION
├── Bias testing across demographic groups
├── Adversarial robustness testing
├── Performance on edge cases
├── Explainability review (SHAP, LIME)
└── Sign-off from data science + product + legal

STAGE 3: DEPLOYMENT
├── Model packaging (Docker, ONNX, Triton)
├── A/B test vs. previous model
├── Shadow deployment (compare predictions)
├── Gradual traffic shift (1% → 10% → 50% → 100%)
└── Rollback plan if metrics degrade

STAGE 4: MONITORING
├── Prediction distribution drift
├── Feature drift (input distribution changes)
├── Concept drift (relationship changes)
├── Latency and throughput
├── Error rate by prediction type
└── Business metric impact

STAGE 5: RETIREMENT
├── Model performance below threshold for 7 days
├── New model supersedes
├── Archive model artifacts
├── Update documentation
└── Notify all consumers
```

### 5.2 Model Drift Detection

| Drift Type | Detection Method | Threshold | Action |
|------------|-----------------|-----------|--------|
| **Data Drift** | KS-test, PSI on features | p < 0.05 | Alert, investigate source |
| **Concept Drift** | Performance decay on labeled data | Accuracy drop > 5% | Retrain trigger |
| **Prediction Drift** | Distribution shift in outputs | KL divergence > threshold | Alert, review |

---

## 6. DATA GOVERNANCE

### 6.1 GDPR / CCPA Automation

| Request Type | SLA | Automation |
|-------------|-----|------------|
| Access (what data do you have on me?) | 30 days | Automated report generation |
| Deletion (right to be forgotten) | 30 days | Automated cascade delete |
| Portability (export my data) | 30 days | Automated export |
| Rectification (correct my data) | 30 days | Automated update |
| Restriction (stop processing) | Immediate | Automated flag |

### 6.2 Data Retention

| Data Classification | Retention Period | Action at Expiry |
|--------------------|-----------------|------------------|
| PII | Legal minimum + 1 year | Anonymize or delete |
| Transactional | 7 years | Archive to cold storage |
| Analytics | 2 years | Aggregate and delete raw |
| Logs | 90 days hot, 1 year cold | Delete after cold |
| ML Training | Model lifetime + 1 year | Delete |

---

*End of Skill 11*
