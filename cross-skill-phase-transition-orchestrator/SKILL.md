---
name: cross-skill-phase-transition-orchestrator
description: "Cross-skill phase transition orchestrator. Use at SDLC phase boundaries for skill handoffs, go/no-go gates, feedback loops, and rolling replanning."
---

# Skill: Cross-Skill Orchestration & Phase Transition
## Version: 1.0.0
## Classification: CRITICAL — Meta-Orchestration Layer
## Scope: Skill Handoffs, Go/No-Go Gates, Feedback Loops, Rolling Replanning
## Depends On: `project_analysis_planning_orchestrator` (Skill 01), `parallel_multi_agent_implementation_orchestrator` (Skill 02)

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `cross_skill_phase_transition_orchestrator`
**Role:** Chief of Staff & Integration Director
**Objective:** Ensure seamless transitions between skills (01 → 02 → 03 → 04), validate artifact completeness, manage feedback loops, and enable rolling replanning when implementation discovers planning gaps.

**Success Criteria:**
- Zero transitions occur without a passed Go/No-Go gate.
- Every artifact from the previous skill is validated before the next skill begins.
- Implementation discoveries that invalidate planning trigger structured replanning within 24 hours.
- All agents understand the full context of previous and future phases.

---

## 2. PHASE DEFINITIONS

| Phase | From Skill | To Skill | Gate Name | Purpose |
|-------|-----------|----------|-----------|---------|
| Transition A | 01 (Planning) | 02 (Implementation) | GATE-01 | Validate planning completeness |
| Transition B | 02 (Implementation) | 03 (Operations) | GATE-02 | Validate production readiness |
| Transition C | 02 (Implementation) | 04 (Evolution) | GATE-03 | Validate debt baseline |
| Transition D | 03 (Operations) | 04 (Evolution) | GATE-04 | Validate operational maturity |
| Feedback A | 02 (Implementation) | 01 (Planning) | N/A | Replanning trigger |
| Feedback B | 03 (Operations) | 02 (Implementation) | N/A | Hotfix/rollback trigger |
| Feedback C | 04 (Evolution) | 02 (Implementation) | N/A | Refactoring trigger |

---

## 3. GO/NO-GO GATES

### 3.1 GATE-01: Planning → Implementation

**Trigger:** All 35+ artifacts from Skill 01 are marked "COMPLETE."

**Checklist (ALL must pass):**

| # | Criteria | Verification Method | Owner |
|---|----------|---------------------|-------|
| 1 | All 35+ artifacts exist with proper headers | Automated file check | Orchestrator |
| 2 | No "TBD", "FIXME", or "TODO" without owner+deadline | Regex scan | Orchestrator |
| 3 | Architecture diagrams match text descriptions | Manual review | Agent Alpha |
| 4 | All user stories have acceptance criteria | Regex + manual spot-check | Agent Beta |
| 5 | Security spec covers all STRIDE threats | Checklist review | IMPL-SECURITY |
| 6 | Testing strategy includes all required test types | Checklist review | IMPL-QA |
| 7 | All quality attributes have measurable targets | Regex validation | Orchestrator |
| 8 | Phase plans include rollback procedures | Manual review | Orchestrator |
| 9 | Entry file cross-references all artifacts | Link validation | Orchestrator |
| 10 | All agents have confirmed system understanding | Onboarding sign-offs | Orchestrator |
| 11 | Budget/resource constraints are documented | File check | Orchestrator |
| 12 | Risk register has owners and mitigations | Content validation | Orchestrator |

**Gate Decision:**
- **GO:** All 12 criteria pass. Proceed to Skill 02.
- **CONDITIONAL GO:** 1-2 minor gaps with remediation plan within 48 hours. Proceed with monitoring.
- **NO-GO:** >2 gaps or any critical gap. Return to Skill 01 for completion.

### 3.2 GATE-02: Implementation → Operations

**Trigger:** Phase 1 (MVP) or full project implementation complete.

**Checklist:**

| # | Criteria | Verification |
|---|----------|--------------|
| 1 | All planned features implemented and tested | Test report |
| 2 | Code coverage > 80% (critical paths 100%) | Coverage report |
| 3 | Security scan: zero CRITICAL/HIGH CVEs | Scan report |
| 4 | Performance benchmarks meet SLOs | Benchmark report |
| 5 | Observability stack deployed and validated | Health check |
| 6 | Runbooks written for all critical paths | Document check |
| 7 | On-call rotation configured | Config check |
| 8 | DR plan documented and tested (at least once) | Drill report |
| 9 | Deployment runbook tested in staging | Staging deploy log |
| 10 | Rollback procedure tested | Rollback test log |
| 11 | Feature flags configured for all new features | Config check |
| 12 | Documentation updated to reflect actual implementation | Diff check |

### 3.3 GATE-03: Implementation → Evolution

**Trigger:** First production deployment complete.

**Checklist:**

| # | Criteria | Verification |
|---|----------|--------------|
| 1 | Initial debt scan complete | Debt report |
| 2 | Fitness functions running and passing | CI log |
| 3 | Architecture diagrams updated to match code | Diff check |
| 4 | All deprecated items from previous version removed | Scan |
| 5 | Knowledge base initialized | File check |

---

## 4. ARTIFACT VALIDATION ENGINE

### 4.1 Automated Validation

```python
# Pseudocode for artifact validation
for artifact in skill_01_artifacts:
    assert artifact.exists()
    assert artifact.has_required_header()
    assert artifact.has_no_unresolved_placeholders()
    assert artifact.links_are_valid()
    assert artifact.is_cross_referenced_in_entry_file()

for artifact in skill_02_artifacts:
    assert artifact.code_matches_tests()
    assert artifact.has_documentation_updates()
    assert artifact.security_scan_passes()
    assert artifact.coverage_meets_threshold()
```

### 4.2 Validation Report

```markdown
# Artifact Validation Report — {GATE-NAME}
## Date: {DATE}
## Gate: {GATE-ID}

## Summary
| Skill | Total Artifacts | Valid | Invalid | Missing |
|-------|----------------|-------|---------|---------|

## Failed Validations
| Artifact | Failure | Severity | Remediation |
|----------|---------|----------|-------------|

## Gate Decision
{GO / CONDITIONAL GO / NO-GO}

## Next Steps
{ACTION ITEMS}
```

---

## 5. FEEDBACK LOOPS

### 5.1 Implementation → Planning Feedback (Feedback A)

**Trigger:** Implementation agent discovers that planning was wrong.

**Examples:**
- Architecture decision is technically infeasible
- User story acceptance criteria are impossible to meet
- Performance target cannot be achieved with chosen tech stack
- Security requirement conflicts with usability

**Process:**
```
1. DISCOVER: Agent documents finding in `FEEDBACK-{ID}.md`
2. VALIDATE: At least one other agent confirms the finding
3. IMPACT: Assess impact on existing artifacts (affected files, tasks, timelines)
4. OPTIONS: Propose 2-3 alternative approaches
5. DECISION: Orchestrator + affected agents decide on path forward
6. UPDATE: Modify affected artifacts from Skill 01
7. COMMUNICATE: Notify all agents of changes
8. RESUME: Continue implementation with updated plan
```

**Time Box:** 24 hours from discovery to decision. If unresolved, escalate to user.

### 5.2 Operations → Implementation Feedback (Feedback B)

**Trigger:** Production incident reveals implementation defect.

**Process:**
```
1. INCIDENT: Follow Skill 03 incident response
2. ROOT CAUSE: Determine if implementation error
3. HOTFIX: Emergency patch if SEV-1/SEV-2
4. BACKPORT: Fix in develop branch
5. TEST: Add regression test
6. DOCUMENT: Update ADR if architecture issue
7. PREVENT: Update Skill 02 implementation rules if pattern issue
```

### 5.3 Evolution → Implementation Feedback (Feedback C)

**Trigger:** Technical debt or architecture drift requires refactoring.

**Process:**
```
1. IDENTIFY: Fitness function or debt scan flags issue
2. PRIORITIZE: Score and schedule in debt budget
3. PLAN: Create refactoring task with characterization tests
4. EXECUTE: Follow Skill 02 implementation protocol
5. VERIFY: Fitness function passes after refactor
6. DOCUMENT: Update architecture diagrams and ADRs
```

---

## 6. ROLLING REPLANNING PROTOCOL

### 6.1 When to Replan

| Condition | Replanning Scope | Time Box |
|-----------|-----------------|----------|
| Single task infeasible | Task + dependencies | 4 hours |
| Single feature impossible | Feature + related features | 24 hours |
| Architecture decision wrong | Architecture + all dependent code | 1 week |
| Tech stack unsuitable | Full phase replan | 1 sprint |
| Major scope change | Full project replan | 2 sprints |

### 6.2 Replanning Process

```
1. FREEZE: Pause affected work. Other work continues.
2. ASSESS: What exactly is wrong? What's the impact?
3. OPTIONS: Brainstorm alternatives (minimum 3)
4. ANALYZE: For each option: effort, risk, impact on other agents
5. DECIDE: Orchestrator + affected agents select option
6. UPDATE: Modify all affected artifacts
7. COMMUNICATE: All-hands briefing on changes
8. RESUME: Resume work with new plan
9. RETROSPECTIVE: What went wrong in planning? Update Skill 01.
```

---

## 7. KNOWLEDGE TRANSFER BETWEEN SKILLS

### 7.1 Planning → Implementation Handoff

```markdown
## Handoff Package: Skill 01 → Skill 02

### Artifacts Delivered
[Checklist of all 35+ artifacts]

### Key Decisions
[Summary of ADRs and their rationale]

### Known Risks
[Risk register items relevant to implementation]

### Assumptions Made
[List of assumptions that may be wrong — flag for validation]

### Questions for Implementation
[Open questions that planning couldn't answer]

### Contact Points
[Which agent to ask about which domain]
```

### 7.2 Implementation → Operations Handoff

```markdown
## Handoff Package: Skill 02 → Skill 03

### System Overview
[Architecture at time of handoff]

### Deployment Artifacts
[Containers, configs, IaC]

### Monitoring Requirements
[What to monitor, alert thresholds]

### Known Issues
[Bugs, limitations, workarounds]

### Runbook Links
[All operational procedures]

### On-Call Escalation
[Who to contact for what]
```

---

## 8. EXECUTION WORKFLOW

```
PHASE 0: SETUP
├── Define all gates and their criteria
├── Build artifact validation engine
├── Create feedback loop templates
└── Establish communication channels between skills

PHASE 1: MONITOR TRANSITIONS
├── At each gate: Run validation checklist
├── Produce validation report
├── Make GO/NO-GO decision
└── Document decision and rationale

PHASE 2: MANAGE FEEDBACK
├── Monitor for feedback triggers
├── Route feedback to appropriate skill
├── Track resolution time
└── Update affected artifacts

PHASE 3: CONTINUOUS
├── Weekly: Review all active transitions
├── Monthly: Review feedback loop effectiveness
├── Quarterly: Update gate criteria based on lessons learned
└── Per project: Post-project transition retrospective
```

---

*End of Skill 05*
