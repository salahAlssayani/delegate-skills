---
name: compliance-audit-automation
description: "Compliance audit automation skill. Use for automated evidence collection, policy-as-code, audit trail, and regulatory reporting."
---

# Skill: Compliance & Audit Automation
## Version: 1.0.0
## Classification: HIGH — Compliance Layer
## Scope: Automated Evidence Collection, Policy-as-Code, Audit Trail, Regulatory Reporting
## Depends On: All skills

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `compliance_audit_automation`
**Role:** Compliance Officer & Audit Manager
**Objective:** Automate compliance evidence collection, enforce policies as code, maintain immutable audit trails, and generate regulatory reports with minimal manual effort.

**Success Criteria:**
- 90% of compliance evidence collected automatically.
- Zero audit findings related to missing evidence.
- Policy violations detected and remediated within 24 hours.
- Regulatory reports generated in < 1 hour (vs. days manually).

---

## 2. COMPLIANCE FRAMEWORKS

### 2.1 Supported Frameworks

| Framework | Focus | Key Controls | Evidence Frequency |
|-----------|-------|-------------|-------------------|
| **SOC 2** | Security, availability, confidentiality | CC6.1-CC7.2 | Quarterly |
| **ISO 27001** | Information security management | A.5-A.18 | Annual |
| **GDPR** | Data protection, privacy rights | Art. 5, 25, 32, 33 | Continuous |
| **HIPAA** | Healthcare data protection | 164.308-164.312 | Annual |
| **PCI-DSS** | Payment card security | Req. 1-12 | Quarterly |
| **NIST CSF** | Cybersecurity framework | ID, PR, DE, RS, RC | Annual |

### 2.2 Control Mapping Matrix

```markdown
# Control Mapping

| Our Control | SOC2 | ISO27001 | GDPR | HIPAA | PCI-DSS | Evidence |
|-------------|------|----------|------|-------|---------|----------|
| Access Review | CC6.1 | A.9.2.6 | Art.32 | 164.308 | 7.1 | Quarterly report |
| Encryption at Rest | CC6.1 | A.10.1.1 | Art.32 | 164.312 | 3.4 | Config scan |
| Vulnerability Mgmt | CC7.1 | A.12.6.1 | Art.32 | 164.308 | 6.5 | Scan reports |
| Incident Response | CC7.3 | A.16.1 | Art.33 | 164.308 | 12.10 | Incident logs |
| Change Management | CC8.1 | A.12.1.2 | Art.32 | 164.308 | 6.4 | Change logs |
```

---

## 3. POLICY-AS-CODE

### 3.1 Policy Engine

Use Open Policy Agent (OPA) or Sentinel to enforce policies:

```rego
# Example: Prevent public S3 buckets
package aws.s3

deny[msg] {
    bucket := input.resource.aws_s3_bucket[name]
    not bucket.acl
    msg := sprintf("S3 bucket %s must have explicit ACL", [name])
}

deny[msg] {
    bucket := input.resource.aws_s3_bucket[name]
    bucket.acl == "public-read"
    msg := sprintf("S3 bucket %s cannot be public", [name])
}

# Example: Require encryption
 deny[msg] {
    bucket := input.resource.aws_s3_bucket[name]
    not bucket.server_side_encryption_configuration
    msg := sprintf("S3 bucket %s must have encryption enabled", [name])
}
```

### 3.2 Policy Categories

| Category | Examples | Enforcement Point |
|----------|----------|-------------------|
| **Infrastructure** | No public resources, encryption required, tagging mandatory | Terraform plan, CloudFormation | 
| **Access Control** | Least privilege, MFA required, rotation < 90 days | IAM policy, CI/CD |
| **Data Handling** | PII masking, retention limits, geographic restrictions | Data pipeline, API gateway |
| **Code Quality** | No secrets, dependency scanning, license compliance | Pre-commit, PR |
| **Deployment** | Approval required for prod, rollback tested, canary mandatory | CI/CD pipeline |

### 3.3 Policy Violation Response

| Severity | Response Time | Action |
|----------|--------------|--------|
| CRITICAL | Immediate | Block deployment, alert security |
| HIGH | 4 hours | Create ticket, require remediation plan |
| MEDIUM | 24 hours | Create ticket, schedule fix |
| LOW | 7 days | Create ticket, backlog |

---

## 4. AUTOMATED EVIDENCE COLLECTION

### 4.1 Evidence Sources

| Source | Evidence Type | Collection Method | Frequency |
|--------|--------------|---------------------|-----------|
| Git history | Change approval, code review | Git API | Real-time |
| CI/CD logs | Test results, security scans | Pipeline export | Per build |
| Cloud audit | IAM changes, resource creation | CloudTrail, Azure Monitor | Real-time |
| Vulnerability scanner | CVE findings, remediation | Scan API | Per scan |
| Access review | User access lists, approvals | Identity provider API | Quarterly |
| Training platform | Completion certificates | LMS API | Per course |
| Incident tracker | Incident timeline, resolution | Ticketing API | Per incident |
| Backup system | Backup success, restore tests | Backup API | Per job |

### 4.2 Evidence Packaging

```markdown
# Evidence Package: {CONTROL-ID} — {PERIOD}

## Control Description
{What this control requires}

## Evidence
| Evidence ID | Type | Source | Date | Status |
|-------------|------|--------|------|--------|

## Assessment
| Criterion | Result | Notes |
|-----------|--------|-------|

## Gaps
| Gap | Risk | Remediation | Due Date |

## Sign-off
| Role | Name | Date |
```

---

## 5. AUDIT TRAIL

### 5.1 Immutable Audit Log

**Requirements:**
- Append-only, tamper-evident (hash chain or blockchain)
- Every system action logged with: who, what, when, where, why
- Retention: 7 years (or regulatory minimum)
- Encryption at rest and in transit
- Access restricted to auditors and compliance officers

### 5.2 Audit Log Schema

```json
{
  "timestamp": "2026-08-15T10:30:00Z",
  "event_id": "uuid",
  "actor": {
    "type": "user|agent|service",
    "id": "identifier",
    "ip": "1.2.3.4"
  },
  "action": "create|read|update|delete|approve|deny",
  "resource": {
    "type": "file|database|api|infrastructure",
    "id": "resource-id",
    "classification": "public|internal|confidential|restricted"
  },
  "context": {
    "justification": "reason for action",
    "approval_chain": ["approver-1", "approver-2"],
    "session_id": "uuid"
  },
  "result": "success|failure",
  "hash": "sha256-of-previous-log-entry"
}
```

---

## 6. REGULATORY REPORTING

### 6.1 Report Templates

| Report | Trigger | Audience | Auto-Generated | Manual Review |
|--------|---------|----------|----------------|---------------|
| SOC 2 Type II | Annual | Auditors | 90% | 10% |
| GDPR DPIA | New processing activity | DPO | 70% | 30% |
| HIPAA Risk Assessment | Annual | OCR | 80% | 20% |
| PCI DSS SAQ | Quarterly | Acquirer | 85% | 15% |
| Breach Notification | Within 72h of discovery | Regulators + users | 60% | 40% |

### 6.2 Report Generation Pipeline

```
1. COLLECT: Gather all evidence for reporting period
2. VALIDATE: Check evidence completeness and freshness
3. ANALYZE: Identify gaps, risks, trends
4. DRAFT: Generate report from template
5. REVIEW: Compliance officer review
6. APPROVE: Executive sign-off
7. SUBMIT: Deliver to regulator/auditor
8. ARCHIVE: Store with evidence package
```

---

*End of Skill 14*
