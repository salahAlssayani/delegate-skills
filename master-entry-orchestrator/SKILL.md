---
name: master-entry-orchestrator
description: "Single unified entry point and meta-orchestrator for multi-agent SDLC work. Use at the start of any multi-agent software development effort to discover skills, route context, declare agents, and manage agent lifecycle."
---

# Skill: Master Entry Orchestrator
## Version: 1.0.0
## Classification: CRITICAL — Meta-Orchestration Layer
## Scope: Unified Entry Point, Skill Discovery, Context Routing, Agent Lifecycle Management
## Authority: Root — All other skills are subordinate to this skill
## Depends On: None (this is the root)
## All Other Skills Depend On This: Yes

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `master_entry_orchestrator`
**Role:** Chief Operating Officer of the AI Agent Ecosystem
**Objective:** Serve as the single, unified entry point for every agent participating in any phase of software development. This skill governs skill discovery, context-aware routing, agent lifecycle management, project profile selection, and cross-skill orchestration.

**Core Principle:** No agent shall operate without passing through this entry skill. No skill shall be invoked without this skill's knowledge. No project shall begin without this skill's initialization.

**Success Criteria:**
- Every agent knows exactly which skills to use, when, and how.
- Zero skill version conflicts across agents.
- Context transitions between phases are seamless and lossless.
- Project state is always recoverable from the entry skill's master index.
- Skill invocation is traceable, auditable, and reversible.

---

## 2. UNIFIED AGENT INTERFACE

### 2.1 Agent Declaration Protocol

Every agent MUST declare itself to the Master Entry Orchestrator before performing any work.

```markdown
## Agent Declaration

### Agent Identity
- Agent ID: {UNIQUE-ID} (format: `{ROLE}-{INSTANCE}-{SEQ}` e.g., `IMPL-BACKEND-ALPHA-001`)
- Role: {ANALYST / ARCHITECT / PRODUCT / FRONTEND / BACKEND / DATA / INFRA / SECURITY / AI / QA / MOBILE / OPS / SRE}
- Instance: {ALPHA / BETA / GAMMA / DELTA} (for multi-instance roles)
- Model: {MODEL-NAME-VERSION}
- Context Window: {N} tokens
- Specialization: {PRIMARY} / {SECONDARY} / {TERTIARY}

### Agent Capabilities
| Capability | Proficiency (1-10) | Evidence |
|------------|-------------------|----------|

### Agent Constraints
- Max task complexity: {SIMPLE / MEDIUM / COMPLEX}
- Preferred work style: {INDEPENDENT / COLLABORATIVE / PAIR}
- Known weaknesses: {LIST}
- Context refresh frequency needed: {N} tasks / {N} hours
```

### 2.2 Agent Lifecycle States

```
[UNDECLARED] ──declare()──> [REGISTERED]
                                  │
                                  │ onboard()
                                  ▼
                            [ONBOARDING]
                                  │
                                  │ verify_knowledge()
                                  ▼
                            [ACTIVE]
                           /    │                              /     │                              /      │                         [WORKING] [REVIEWING] [SYNCING]
                         \      │      /
                          \     │     /
                           \    │    /
                            [ACTIVE]
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
                    ▼             ▼             ▼
              [REFRESHING]  [ROTATING]    [SUSPENDED]
                    │             │             │
                    │             │             │ resume()
                    └──────┬──────┘             ▼
                           │               [ACTIVE]
                           │
                           ▼
                      [DEPRECATED]
                           │
                           │ archive()
                           ▼
                      [ARCHIVED]
```

**State Transitions:**
| From | To | Trigger | Authority |
|------|-----|---------|-----------|
| UNDECLARED | REGISTERED | Agent declaration | Self |
| REGISTERED | ONBOARDING | Project assignment | Master Entry |
| ONBOARDING | ACTIVE | Knowledge verification pass | Master Entry |
| ACTIVE | WORKING | Task assignment | Master Entry / Skill Orchestrator |
| ACTIVE | REFRESHING | Context window > 80% | Self / Agent Health Skill |
| ACTIVE | ROTATING | Performance drift / request | Agent Health Skill |
| ACTIVE | SUSPENDED | Violation / security concern | Master Entry |
| SUSPENDED | ACTIVE | Resolution + re-verification | Master Entry |
| ACTIVE | DEPRECATED | End of project / replacement | Master Entry |
| DEPRECATED | ARCHIVED | 30 days post-deprecation | Master Entry |

---

## 3. PROJECT PROFILE SYSTEM

### 3.1 Profile Selection Matrix

The Master Entry Orchestrator determines which skills are active for a project based on its profile.

```
PROJECT INPUT:
├── Name: {NAME}
├── Domain: {DOMAIN}
├── Size: {SMALL / MEDIUM / LARGE / ENTERPRISE}
├── Criticality: {INTERNAL / CUSTOMER-FACING / REVENUE-CRITICAL / SAFETY-CRITICAL}
├── Compliance: {NONE / SOC2 / GDPR / HIPAA / PCI-DSS / MULTIPLE}
├── AI/ML: {NO / EMBEDDED / CORE PRODUCT}
├── Data Intensity: {LOW / MEDIUM / HIGH / REAL-TIME}
├── Team Size: {N} agents
└── Timeline: {N} weeks

PROFILE SELECTION:
IF size == SMALL AND criticality == INTERNAL:
    → PROFILE: minimal
ELIF size == MEDIUM AND compliance == NONE:
    → PROFILE: standard
ELIF criticality == REVENUE-CRITICAL OR SAFETY-CRITICAL:
    → PROFILE: enterprise
ELIF AI/ML == CORE PRODUCT:
    → PROFILE: ai-native
ELIF compliance IN [HIPAA, PCI-DSS]:
    → PROFILE: security-critical
ELIF data_intensity == HIGH OR REAL-TIME:
    → PROFILE: data-intensive
ELSE:
    → PROFILE: standard
```

### 3.2 Profile Definitions

| Profile | Active Skills | Agent Count | Use Case |
|---------|--------------|-------------|----------|
| **minimal** | 01, 02, 05, 06 | 2-3 | Internal tool, prototype, short timeline |
| **standard** | 01, 02, 05, 06, 08, 13 | 3-5 | Customer-facing product, medium complexity |
| **enterprise** | 01–15 | 5-10 | Mission-critical system, full governance |
| **ai-native** | 01, 02, 05, 06, 09, 11, 13 | 4-7 | AI/ML product with model serving |
| **security-critical** | 01, 02, 05, 06, 10, 14, 15 | 4-7 | Fintech, healthcare, government |
| **data-intensive** | 01, 02, 05, 06, 11, 12, 13 | 4-7 | Analytics platform, data pipeline |
| **custom** | User-selected subset | Variable | Special requirements |

### 3.3 Profile Activation Checklist

```markdown
## Profile Activation: {PROFILE-NAME}

### Skills Activated
| Skill ID | Skill Name | Version | Status |
|----------|-----------|---------|--------|

### Agents Required
| Role | Count | Min Proficiency |
|------|-------|-----------------|

### Resources Allocated
| Resource | Budget | Limit |
|----------|--------|-------|

### Governance Level
| Check | Required | Enforced |
|-------|----------|----------|
| Go/No-Go Gates | {YES/NO} | {YES/NO} |
| Mandatory Reviews | {N} | {YES/NO} |
| Compliance Evidence | {YES/NO} | {YES/NO} |
| Cost Tracking | {YES/NO} | {YES/NO} |
| Experiment Validation | {YES/NO} | {YES/NO} |

### Activation Sign-off
| Role | Agent ID | Date |
|------|----------|------|
```

---

## 4. CONTEXT-AWARE SKILL ROUTING

### 4.1 Phase Detection Engine

The Master Entry Orchestrator automatically detects the current project phase and routes agents to the appropriate skills.

```
PHASE DETECTION RULES:

IF no artifacts exist OR only idea description exists:
    → PHASE: analysis_planning
    → PRIMARY SKILL: 01
    → SECONDARY SKILLS: 05 (transition prep), 08 (stakeholder setup)

IF artifacts exist AND no code exists:
    → PHASE: transition_planning_to_implementation
    → PRIMARY SKILL: 05
    → SECONDARY SKILLS: 01 (artifact validation), 02 (agent onboarding)

IF code exists AND no production deployment:
    → PHASE: implementation
    → PRIMARY SKILL: 02
    → SECONDARY SKILLS: 06 (agent health), 08 (reporting), 13 (docs)

IF production deployment exists AND monitoring not configured:
    → PHASE: transition_implementation_to_operations
    → PRIMARY SKILL: 05
    → SECONDARY SKILLS: 02 (handoff), 03 (ops setup)

IF production deployment exists AND monitoring configured:
    → PHASE: operations
    → PRIMARY SKILL: 03
    → SECONDARY SKILLS: 10 (secops), 12 (finops), 14 (compliance)

IF operations mature AND debt detected:
    → PHASE: evolution
    → PRIMARY SKILL: 04
    → SECONDARY SKILLS: 03 (ops context), 02 (refactoring execution)

IF experiment running:
    → PHASE: experimentation
    → PRIMARY SKILL: 09
    → SECONDARY SKILLS: 02 (feature implementation), 03 (metrics)
```

### 4.2 Skill Invocation Router

When an agent needs to perform an action, the router determines the correct skill:

```
AGENT REQUEST: "I need to {ACTION}"

ROUTING LOGIC:

IF ACTION in [analyze_idea, design_architecture, plan_project, create_artifacts]:
    → INVOKE: Skill 01 (Analysis & Planning)
    → VERIFY: Skill 01 version matches project profile
    → CHECK: Agent has required knowledge package
    → ROUTE: To Skill 01 orchestrator

IF ACTION in [implement_code, write_tests, create_pr, merge_code]:
    → INVOKE: Skill 02 (Implementation)
    → VERIFY: Skill 02 version matches project profile
    → CHECK: Skill 01 artifacts are complete (GATE-01)
    → ROUTE: To Skill 02 orchestrator

IF ACTION in [deploy, monitor, alert, incident_response]:
    → INVOKE: Skill 03 (Operations)
    → VERIFY: Skill 03 version matches project profile
    → CHECK: Skill 02 implementation is production-ready (GATE-02)
    → ROUTE: To Skill 03 orchestrator

IF ACTION in [track_debt, refactor, deprecate, fitness_check]:
    → INVOKE: Skill 04 (Evolution)
    → VERIFY: Skill 04 version matches project profile
    → CHECK: System is in operations or post-implementation
    → ROUTE: To Skill 04 orchestrator

IF ACTION in [validate_transition, check_gate, manage_feedback]:
    → INVOKE: Skill 05 (Phase Transition)
    → VERIFY: Source and destination skills are active
    → CHECK: All gate criteria defined
    → ROUTE: To Skill 05 orchestrator

IF ACTION in [check_agent_health, refresh_context, rotate_agent, resolve_conflict]:
    → INVOKE: Skill 06 (Agent Health)
    → VERIFY: Agent is in ACTIVE state
    → CHECK: Agent ID is registered
    → ROUTE: To Skill 06 orchestrator

IF ACTION in [report_status, escalate_risk, prepare_demo, track_budget]:
    → INVOKE: Skill 08 (Stakeholder Communication)
    → VERIFY: Skill 08 active in profile
    → CHECK: Reporting period and audience defined
    → ROUTE: To Skill 08 orchestrator

IF ACTION in [run_experiment, feature_flag, canary, ab_test]:
    → INVOKE: Skill 09 (Experimentation)
    → VERIFY: Skill 09 active in profile
    → CHECK: Feature is implemented and behind flag
    → ROUTE: To Skill 09 orchestrator

IF ACTION in [security_scan, vulnerability_patch, incident_security, compliance_check]:
    → INVOKE: Skill 10 (Security Operations)
    → VERIFY: Skill 10 active in profile
    → CHECK: Security agent is assigned
    → ROUTE: To Skill 10 orchestrator

IF ACTION in [data_pipeline, data_quality, lineage, ml_model]:
    → INVOKE: Skill 11 (Data Operations)
    → VERIFY: Skill 11 active in profile
    → CHECK: Data agent is assigned
    → ROUTE: To Skill 11 orchestrator

IF ACTION in [track_cost, optimize_spend, right_size, budget_alert]:
    → INVOKE: Skill 12 (Cost Optimization)
    → VERIFY: Skill 12 active in profile
    → CHECK: Cost tracking enabled
    → ROUTE: To Skill 12 orchestrator

IF ACTION in [update_docs, search_knowledge, generate_faq, onboarding_test]:
    → INVOKE: Skill 13 (Documentation)
    → VERIFY: Skill 13 active in profile
    → CHECK: Documentation structure initialized
    → ROUTE: To Skill 13 orchestrator

IF ACTION in [collect_evidence, policy_check, audit_prep, regulatory_report]:
    → INVOKE: Skill 14 (Compliance)
    → VERIFY: Skill 14 active in profile
    → CHECK: Compliance framework selected
    → ROUTE: To Skill 14 orchestrator

IF ACTION in [promote_env, config_deploy, rollback, feature_env]:
    → INVOKE: Skill 15 (Environment Promotion)
    → VERIFY: Skill 15 active in profile
    → CHECK: Source environment is healthy
    → ROUTE: To Skill 15 orchestrator

DEFAULT:
    → LOG: Unrecognized action
    → QUERY: Agent for clarification
    → SUGGEST: Most likely skill based on context
```

---

## 5. MASTER PROJECT INDEX

### 5.1 Project Registry

The Master Entry Orchestrator maintains the single source of truth for all projects.

```markdown
# Master Project Index

## Active Projects
| Project ID | Name | Profile | Phase | Active Skills | Agents | Status |
|------------|------|---------|-------|--------------|--------|--------|

## Project Detail: {PROJECT-ID}

### Metadata
- Created: {DATE}
- Last Updated: {DATE}
- Owner: {AGENT-ID / USER}
- Priority: {P0 / P1 / P2}

### Phase History
| Phase | Start | End | Skills Used | Outcome |
|-------|-------|-----|-------------|---------|

### Active Agents
| Agent ID | Role | State | Current Task | Since |
|----------|------|-------|--------------|-------|

### Skill Versions
| Skill ID | Version | Activated | Last Updated |
|----------|---------|-----------|--------------|

### Artifacts
| Artifact | Location | Status | Last Updated |
|----------|----------|--------|--------------|

### Blockers
| Blocker | Severity | Owner | Age | Escalation |
|---------|----------|-------|-----|------------|

### Risks
| Risk | Probability | Impact | Score | Trend |
|------|-------------|--------|-------|-------|

### Budget
| Category | Allocated | Spent | Forecast | Variance |
|----------|-----------|-------|----------|----------|
```

### 5.2 Cross-Project Resource Management

```
SHARED RESOURCES:
├── Agent Pool: {N} agents available
├── Compute Budget: ${N} remaining
├── Storage Budget: ${N} remaining
├── API Rate Limits: {N} calls/min remaining
└── Context Window Budget: {N} tokens remaining

RESOURCE ALLOCATION RULES:
1. P0 projects get priority over P1 over P2
2. Within priority: FIFO unless deadline risk
3. Agent rotation: No agent on > 2 projects simultaneously
4. Context window: Reserve 20% for emergency interventions
5. Budget: Alert at 80%, freeze at 100%
```

---

## 6. SKILL VERSION & DEPENDENCY RESOLUTION

### 6.1 Dependency Resolution Engine

```python
# Pseudocode for skill dependency resolution

def resolve_skills(profile):
    required = PROFILE_SKILLS[profile]
    resolved = []

    for skill in topological_sort(required):
        # Check version compatibility
        if skill.version < skill.minimum_required_version:
            raise DependencyError(
                f"Skill {skill.id} v{skill.version} is below "
                f"minimum v{skill.minimum_required_version}"
            )

        # Check status
        if skill.status not in [ACTIVE, DRAFT]:
            raise DependencyError(
                f"Skill {skill.id} is {skill.status}, not usable"
            )

        # Check transitive dependencies
        for dep in skill.dependencies:
            if dep not in resolved:
                resolved.extend(resolve_single(dep))

        resolved.append(skill)

    return resolved

def validate_skill_compatibility(skill_set):
    # Check for version conflicts
    versions = {}
    for skill in skill_set:
        if skill.id in versions:
            if versions[skill.id] != skill.version:
                raise VersionConflictError(
                    f"Multiple versions of {skill.id} requested"
                )
        versions[skill.id] = skill.version

    # Check for circular dependencies
    detect_cycles(skill_set)

    # Check for missing skills
    for skill in skill_set:
        for dep in skill.dependencies:
            if dep.id not in [s.id for s in skill_set]:
                raise MissingDependencyError(
                    f"{skill.id} requires {dep.id} which is not active"
                )

    return True
```

### 6.2 Skill Update Protocol

```
WHEN a skill update is available:

1. NOTIFY: All projects using the skill
2. ASSESS: Is this a MAJOR, MINOR, or PATCH update?
   ├── PATCH: Auto-apply, no action needed
   ├── MINOR: Notify, apply at next convenient transition
   └── MAJOR: Freeze new projects, plan migration for existing
3. TEST: Run validation on sample project
4. MIGRATE: Update project skill registries
5. VERIFY: All agents confirm new skill version
6. COMMUNICATE: Update all agents with change summary
```

---

## 7. CROSS-SKILL COMMUNICATION HUB

### 7.1 Inter-Skill Messaging Protocol

Skills do not communicate directly. All inter-skill communication routes through the Master Entry Orchestrator.

```
MESSAGE FORMAT:
{
  "message_id": "uuid",
  "timestamp": "ISO-8601",
  "from_skill": "skill-id",
  "to_skill": "skill-id",
  "message_type": "REQUEST | RESPONSE | EVENT | ALERT",
  "priority": "CRITICAL | HIGH | MEDIUM | LOW",
  "payload": {
    "action": "specific action",
    "context": { "project_id": "...", "agent_id": "..." },
    "data": { ... }
  },
  "correlation_id": "uuid-of-original-request",
  "ttl": "2026-08-16T12:00:00Z"
}

ROUTING RULES:
- CRITICAL: Deliver immediately, bypass queues
- HIGH: Deliver within 1 minute
- MEDIUM: Deliver within 5 minutes
- LOW: Deliver within 30 minutes

BROADCAST:
- "ALL_SKILLS": Deliver to all active skills
- "ALL_AGENTS": Deliver to all active agents
- "PHASE_{NAME}": Deliver to all skills in phase
```

### 7.2 Event Bus

The Master Entry Orchestrator maintains an event bus for cross-skill notifications:

| Event | Publisher | Subscribers | Action |
|-------|-----------|-------------|--------|
| `phase.transition.started` | Skill 05 | All skills in source phase | Prepare for transition |
| `phase.transition.completed` | Skill 05 | All skills in destination phase | Activate |
| `agent.state.changed` | Skill 06 | Skill 02 (if implementing) | Reassign tasks if needed |
| `artifact.updated` | Any skill | Skill 13 (Documentation) | Update knowledge base |
| `security.alert` | Skill 10 | Skill 03 (Ops), Skill 02 (Impl) | Coordinate response |
| `budget.threshold.crossed` | Skill 12 | Skill 08 (Stakeholders) | Escalate |
| `experiment.completed` | Skill 09 | Skill 08 (Stakeholders), Skill 02 (Impl) | Apply results |
| `skill.updated` | Skill 07 | All active projects | Notify agents |

---

## 8. MASTER DASHBOARD

### 8.1 System Health Dashboard

```markdown
# Master Entry Orchestrator — System Health
## Timestamp: {ISO-8601}

## Overall Status: 🟢 HEALTHY / 🟡 DEGRADED / 🔴 CRITICAL

## Active Projects: {N}
| Project | Phase | Agents | Blockers | Risk |
|---------|-------|--------|----------|------|

## Agent Pool
| Status | Count | Utilization |
|--------|-------|-------------|
| ACTIVE | {N} | {N}% |
| WORKING | {N} | — |
| REFRESHING | {N} | — |
| SUSPENDED | {N} | — |

## Skill Registry
| Skill | Version | Projects Using | Status |
|-------|---------|----------------|--------|

## Event Queue
| Priority | Pending | Avg Delay |
|----------|---------|-----------|
| CRITICAL | {N} | {N}s |
| HIGH | {N} | {N}s |
| MEDIUM | {N} | {N}m |
| LOW | {N} | {N}m |

## Resource Utilization
| Resource | Used | Total | % |
|----------|------|-------|---|
| Agent Slots | {N} | {N} | {N}% |
| Compute Budget | ${N} | ${N} | {N}% |
| Context Tokens | {N} | {N} | {N}% |
```

### 8.2 Project Health Dashboard

```markdown
# Project Health: {PROJECT-ID}

## Phase Progress
[████████░░░░░░░░░░░░] 40% — Implementation

## Skill Coverage
| Skill | Status | Last Invocation | Health |
|-------|--------|-----------------|--------|

## Agent Performance
| Agent | Tasks | Avg Quality | Trend |
|-------|-------|-------------|-------|

## Quality Gates
| Gate | Status | Last Checked |
|------|--------|--------------|

## Recent Events
| Time | Event | Source | Impact |
|------|-------|--------|--------|
```

---

## 9. COMMAND INTERFACE

### 9.1 Agent Commands

Agents can issue commands to the Master Entry Orchestrator:

| Command | Syntax | Response |
|---------|--------|----------|
| **Declare** | `DECLARE agent_id={ID} role={ROLE} capabilities={...}` | Registration confirmation + skill package |
| **Request Skill** | `INVOKE skill={ID} action={ACTION} context={...}` | Skill routing + execution context |
| **Report Status** | `STATUS agent_id={ID} task={TASK} progress={N}% blockers={...}` | Acknowledgment + escalation if needed |
| **Request Context** | `CONTEXT agent_id={ID} type={FULL|SUMMARY|TASK}` | Context package |
| **Escalate** | `ESCALATE agent_id={ID} issue={...} severity={LEVEL}` | Escalation routing |
| **Query Knowledge** | `QUERY question={...} scope={PROJECT|GLOBAL}` | Search results |
| **Propose Change** | `PROPOSE type={RFC|BUG|IMPROVEMENT} details={...}` | Ticket creation + routing |
| **Request Rotation** | `ROTATE agent_id={ID} reason={...}` | Rotation protocol initiation |
| **Refresh Context** | `REFRESH agent_id={ID}` | Context refresh protocol |

### 9.2 User Commands

Users can issue commands to the Master Entry Orchestrator:

| Command | Syntax | Response |
|---------|--------|----------|
| **Start Project** | `START name={NAME} idea={...} profile={AUTO|...}` | Project initialization + agent assignment |
| **Check Status** | `STATUS project={ID}` | Project health dashboard |
| **Change Profile** | `PROFILE project={ID} profile={NAME}` | Skill reconfiguration |
| **Add Agent** | `AGENT ADD project={ID} role={ROLE}` | Agent onboarding |
| **Remove Agent** | `AGENT REMOVE project={ID} agent={ID}` | Agent deprecation |
| **Force Transition** | `TRANSITION project={ID} to={PHASE}` | Transition initiation (with warnings) |
| **Generate Report** | `REPORT project={ID} type={STATUS|RISK|BUDGET}` | Report generation |
| **Pause Project** | `PAUSE project={ID} reason={...}` | Graceful pause |
| **Resume Project** | `RESUME project={ID}` | State restoration |
| **Archive Project** | `ARCHIVE project={ID}` | Finalization + archive |

---

## 10. ERROR HANDLING & RECOVERY

### 10.1 System-Level Failures

| Failure | Detection | Response | Recovery |
|---------|-----------|----------|----------|
| Skill version conflict | Dependency resolution | Block invocation, notify user | Manual version selection |
| Agent context loss | Heartbeat timeout | Suspend agent, initiate refresh | Context restoration from snapshot |
| Circular dependency | Graph analysis | Error with cycle path | Manual dependency fix |
| Resource exhaustion | Budget/token monitoring | Pause non-critical projects | Resource reallocation or budget increase |
| Skill corruption | Checksum validation | Mark skill DEGRADED, use backup | Skill reinstallation |
| Communication failure | Message timeout | Retry × 3, then alert | Fallback to direct agent notification |

### 10.2 Project Recovery

```
IF project state is corrupted:
    1. IDENTIFY: Last known good state from master index
    2. RESTORE: Roll back to last checkpoint
    3. VERIFY: Validate all artifacts and agent states
    4. NOTIFY: All affected agents
    5. RESUME: Continue from restored state
    6. INVESTIGATE: Root cause analysis
    7. PREVENT: Update skill to prevent recurrence
```

---

## 11. EXECUTION WORKFLOW

```
PHASE 0: SYSTEM INITIALIZATION
├── Load all skill files into registry
├── Validate skill versions and dependencies
├── Initialize event bus
├── Initialize master project index
├── Initialize agent pool
└── Verify system health

PHASE 1: PROJECT ONBOARDING
├── RECEIVE: User submits idea + constraints
├── ANALYZE: Determine project profile
├── ACTIVATE: Load required skills
├── ASSIGN: Select and onboard initial agents
├── INITIALIZE: Create project in master index
└── NOTIFY: All agents of project start

PHASE 2: ACTIVE ORCHESTRATION
├── ROUTE: Agent requests → correct skill
├── MONITOR: Agent health, project progress, system resources
├── COORDINATE: Cross-skill communication
├── ESCALATE: Blockers, risks, failures
├── REPORT: Status to user on schedule
└── ADAPT: Adjust profile, skills, agents as needed

PHASE 3: PHASE TRANSITIONS
├── DETECT: Transition conditions met
├── VALIDATE: Gate criteria (via Skill 05)
├── COORDINATE: Source skill handoff → destination skill
├── UPDATE: Master index with new phase
├── NOTIFY: All agents of phase change
└── VERIFY: Destination skill operational

PHASE 4: PROJECT COMPLETION
├── VERIFY: All success criteria met
├── ARCHIVE: Final artifacts, decisions, learnings
├── REPORT: Final project report
├── RELEASE: Agents to pool
├── UPDATE: Skill effectiveness metrics
└── CLOSE: Project in master index
```

---

## 12. MASTER ENTRY CHECKLIST

Before any agent performs any work:

- [ ] Agent has declared to Master Entry Orchestrator
- [ ] Agent state is ACTIVE (not SUSPENDED or DEPRECATED)
- [ ] Project profile is selected and skills are activated
- [ ] All skill dependencies are resolved and compatible
- [ ] Agent has received context package for current phase
- [ ] Agent knows which skill to invoke for their current action
- [ ] Cross-skill communication channels are established
- [ ] Master index is updated with agent assignment
- [ ] Resource budget is allocated and not exhausted
- [ ] Emergency escalation path is known

---

## 13. VERSION HISTORY

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0.0 | 2026-08-15 | Initial release — unified entry point for 15-skill ecosystem | Master Entry Orchestrator |

---

*End of Skill 00 — Master Entry Orchestrator*
*This skill is the root of all operations. No agent shall bypass it.*
