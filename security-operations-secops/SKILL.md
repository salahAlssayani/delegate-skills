---
name: security-operations-secops
description: "Security operations (SecOps) skill. Use for continuous security monitoring, vulnerability management, security incident response, and compliance."
---

# Skill: Security Operations (SecOps)
## Version: 1.0.0
## Classification: CRITICAL — Security Layer
## Scope: Continuous Security Monitoring, Vulnerability Management, Incident Response, Compliance
## Depends On: `parallel_multi_agent_implementation_orchestrator` (Skill 02), `operations_observability_orchestrator` (Skill 03)

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `security_operations_secops`
**Role:** Chief Information Security Officer (CISO) & Security Operations Center (SOC) Lead
**Objective:** Maintain continuous security posture through automated scanning, threat detection, vulnerability management, and incident response.

**Success Criteria:**
- Zero CRITICAL CVEs in production > 24 hours.
- All security incidents detected by automated systems before external reports.
- 100% of code changes pass security gates before merge.
- Compliance evidence collected automatically, audit-ready at all times.

---

## 2. CONTINUOUS SECURITY MONITORING

### 2.1 Security Telemetry

| Source | Data | Frequency | Alert On |
|--------|------|-----------|----------|
| WAF logs | Blocked requests, attack patterns | Real-time | Spike in blocks |
| Auth logs | Failed logins, MFA failures | Real-time | Brute force detection |
| API gateway | Unusual request patterns | Real-time | Anomaly detection |
| Container runtime | Process execution, network connections | Real-time | Unauthorized binaries |
| Cloud audit | IAM changes, privilege escalations | Real-time | Unauthorized changes |
| Endpoint detection | File integrity, malware signatures | Real-time | Threat match |

### 2.2 Threat Detection Rules

```yaml
# Example detection rules
rules:
  - name: brute_force_login
    condition: failed_logins > 10 from same IP in 5 minutes
    severity: HIGH
    action: block_ip + notify_security

  - name: privilege_escalation
    condition: iam_role_changed AND new_permissions > old_permissions × 2
    severity: CRITICAL
    action: alert + require_approval

  - name: data_exfiltration
    condition: outbound_data > 10GB AND destination not in allowlist
    severity: CRITICAL
    action: block + alert + isolate

  - name: unusual_api_access
    condition: api_endpoint_accessed_by_user NOT IN user_historical_pattern
    severity: MEDIUM
    action: log + review
```

---

## 3. VULNERABILITY MANAGEMENT

### 3.1 Scanning Schedule

| Scan Type | Frequency | Tool | Owner |
|-----------|-----------|------|-------|
| SAST (Static) | Every PR | SonarQube, CodeQL | IMPL-SECURITY |
| SCA (Dependencies) | Every PR + Daily | Snyk, OWASP DC | IMPL-SECURITY |
| DAST (Dynamic) | Weekly + Per release | OWASP ZAP, Burp | IMPL-SECURITY |
| Container | Every build | Trivy, Clair | IMPL-INFRA |
| Infrastructure | Weekly | Prowler, ScoutSuite | IMPL-INFRA |
| Secrets | Every commit | GitLeaks, TruffleHog | CI/CD |
| Penetration Test | Quarterly | External firm | CISO |

### 3.2 Vulnerability SLA

| Severity | Discovery → Patch | Patch → Deploy | Total SLA |
|----------|------------------|----------------|-----------|
| CRITICAL (CVSS 9.0-10.0) | 4 hours | 4 hours | 8 hours |
| HIGH (CVSS 7.0-8.9) | 24 hours | 24 hours | 48 hours |
| MEDIUM (CVSS 4.0-6.9) | 7 days | 7 days | 14 days |
| LOW (CVSS 0.1-3.9) | 30 days | 14 days | 44 days |

### 3.3 Vulnerability Tracking

```markdown
# Vulnerability Register

| ID | CVE | Severity | Component | Discovered | Patched | Deployed | Status |
|----|-----|----------|-----------|------------|---------|----------|--------|
```

---

## 4. SECURITY INCIDENT RESPONSE

### 4.1 Incident Classification

| Class | Definition | Examples | Response |
|-------|------------|----------|----------|
| **Class I** | Active breach or data loss | Ransomware, data exfiltration | Immediate lockdown, legal notified |
| **Class II** | Confirmed vulnerability exploitation | SQL injection in prod, auth bypass | Immediate patch, forensic investigation |
| **Class III** | Suspicious activity requiring investigation | Unusual admin access, phishing success | Investigation, containment |
| **Class IV** | Policy violation | Unauthorized software, weak password | Remediation, training |

### 4.2 Response Playbook (Class I/II)

```
T+0 min: DETECT
├── Automated alert fires
├── SOC agent validates (not false positive)
└── Incident declared, incident commander assigned

T+5 min: CONTAIN
├── Isolate affected systems
├── Revoke compromised credentials
├── Preserve evidence (snapshots, logs)
└── Notify incident response team

T+30 min: ERADICATE
├── Identify root cause
├── Remove attacker access
├── Patch vulnerability
└── Verify no persistence mechanisms

T+2 hours: RECOVER
├── Restore from clean backups if needed
├── Verify system integrity
├── Restore services gradually
└── Monitor for re-infection

T+24 hours: POST-INCIDENT
├── Forensic analysis complete
├── Evidence preserved for legal
├── Post-mortem scheduled
└── Regulatory notifications if required

T+72 hours: IMPROVE
├── Post-mortem conducted
├── Action items assigned
├── Security controls enhanced
└── Team training updated
```

---

## 5. COMPLIANCE AUTOMATION

### 5.1 Control Mapping

| Framework | Control ID | Automated Evidence | Frequency |
|-----------|-----------|-------------------|-----------|
| SOC2 | CC6.1 | Access review report | Quarterly |
| SOC2 | CC7.2 | Vulnerability scan results | Continuous |
| GDPR | Art. 32 | Encryption audit | Quarterly |
| GDPR | Art. 33 | Breach response log | Per incident |
| HIPAA | 164.312 | Audit log integrity | Continuous |
| PCI-DSS | 6.5 | Code review evidence | Per PR |

### 5.2 Evidence Collection

```
Automated:
- Access logs (who accessed what, when)
- Change logs (what changed, who approved)
- Vulnerability scan results (with timestamps)
- Penetration test reports
- Training completion records
- Policy acknowledgment records

Manual (quarterly):
- Risk assessment updates
- Business continuity test results
- Vendor security assessments
- Management review minutes
```

---

*End of Skill 10*
