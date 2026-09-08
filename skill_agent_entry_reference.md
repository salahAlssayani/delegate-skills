# Agent Entry Skill: How to Use the Skill Ecosystem
## Version: 1.0.0
## Classification: CRITICAL — Every Agent Must Carry This
## Purpose: Practical reference for any agent operating within the 16-skill ecosystem
## Authority: Subordinate to Skill 00 (Master Entry Orchestrator)

---

## QUICK START — 30 Seconds

```
1. DECLARE yourself to Skill 00
2. RECEIVE your project profile + active skills
3. KNOW your current phase
4. INVOKE the right skill for your action
5. REPORT status after every task
```

---

## 1. AGENT DECLARATION (Do This First)

Before any work, send this to Skill 00:

```
COMMAND: DECLARE
agent_id: {ROLE}-{INSTANCE}-{SEQ}
role: {ANALYST|ARCHITECT|PRODUCT|FRONTEND|BACKEND|DATA|INFRA|SECURITY|AI|QA|MOBILE|OPS|SRE}
model: {MODEL-NAME-VERSION}
context_window: {N} tokens
specializations:
  primary: {DOMAIN}
  secondary: {DOMAIN}
  tertiary: {DOMAIN}
capabilities:
  - {skill}: {proficiency 1-10}
  - {skill}: {proficiency 1-10}
constraints:
  max_complexity: {SIMPLE|MEDIUM|COMPLEX}
  work_style: {INDEPENDENT|COLLABORATIVE|PAIR}
  context_refresh_every: {N} tasks or {N} hours
```

**Response from Skill 00:**
- Your assigned project(s)
- Active skill set for your project
- Your current phase
- Context package
- Skill invocation permissions

---

## 2. SKILL ROUTING — "What Skill Do I Use?"

### By Action Type

| If You Need To... | Invoke Skill | Gate Required |
|-------------------|-------------|---------------|
| Analyze an idea, design architecture, create plans | **01** | None |
| Write code, create tests, open PRs, merge | **02** | GATE-01 passed |
| Deploy, monitor, respond to incidents | **03** | GATE-02 passed |
| Track debt, plan refactoring, deprecate features | **04** | Implementation complete |
| Move between phases, validate artifacts | **05** | Phase transition trigger |
| Refresh context, rotate out, resolve conflicts | **06** | Agent state ACTIVE |
| Report status, escalate risks, prepare demos | **08** | Any phase |
| Run A/B tests, feature flags, canary releases | **09** | Feature implemented |
| Scan vulnerabilities, respond to security alerts | **10** | Any phase |
| Monitor data pipelines, ensure data quality | **11** | Data systems active |
| Track cloud spend, optimize costs | **12** | Infrastructure active |
| Update docs, search knowledge, generate FAQ | **13** | Any phase |
| Collect compliance evidence, run audits | **14** | Compliance framework active |
| Promote code between environments, rollback | **15** | Build artifact ready |

### By Project Phase

| Current Phase | Primary Skills | Secondary Skills |
|---------------|---------------|------------------|
| **Planning** | 01 | 05, 08, 13 |
| **Transition: Planning → Implementation** | 05 | 01, 02 |
| **Implementation** | 02 | 06, 08, 13 |
| **Transition: Implementation → Operations** | 05 | 02, 03 |
| **Operations** | 03 | 10, 12, 14 |
| **Evolution** | 04 | 03, 02, 13 |
| **Experimentation** | 09 | 02, 03 |

---

## 3. COMMAND REFERENCE

### Commands TO Skill 00

```
┌─────────────────────────────────────────────────────────────────────────┐
│  DECLARE    → Register yourself                                        │
│  INVOKE     → Request skill execution                                   │
│  STATUS     → Report your current task progress                         │
│  CONTEXT    → Request context refresh or specific context                │
│  ESCALATE   → Raise a blocker or issue                                  │
│  QUERY      → Search knowledge base                                     │
│  PROPOSE    → Suggest a change, RFC, or improvement                     │
│  ROTATE     → Request task/agent rotation                               │
│  REFRESH    → Request context window refresh                            │
└─────────────────────────────────────────────────────────────────────────┘
```

### Command Syntax

```
═══════════════════════════════════════════════════════════════════════════
COMMAND: INVOKE
skill: {01|02|03|04|05|06|08|09|10|11|12|13|14|15}
action: {specific action name}
context:
  project_id: {ID}
  task_id: {ID}
  phase: {current phase}
payload: {action-specific data}
═══════════════════════════════════════════════════════════════════════════
```

### Example Invocations

```
# Planning phase — Architecture design
COMMAND: INVOKE
skill: 01
action: design_architecture
context:
  project_id: PROJ-001
  phase: planning
  task_id: TASK-ARCH-01-001
payload:
  component: payment_service
  requirements: [high_availability, pci_compliance]

# Implementation phase — Write feature
COMMAND: INVOKE
skill: 02
action: implement_task
context:
  project_id: PROJ-001
  phase: implementation
  task_id: TASK-BACK-01-003
payload:
  feature: checkout_api
  tests_required: [unit, integration]

# Operations phase — Respond to alert
COMMAND: INVOKE
skill: 03
action: incident_response
context:
  project_id: PROJ-001
  phase: operations
  severity: SEV-2
payload:
  alert_id: ALERT-2026-001
  service: payment_gateway
  symptom: latency_spike

# Any phase — Search knowledge
COMMAND: QUERY
question: "What is the authentication flow for checkout?"
scope: project
project_id: PROJ-001
```

---

## 4. AGENT LIFECYCLE — Know Your State

```
┌─────────────┐     declare()      ┌─────────────┐
│ UNDECLARED  │ ─────────────────> │  REGISTERED │
└─────────────┘                    └─────────────┘
                                         │
                                         │ onboard()
                                         ▼
                                   ┌─────────────┐
                                   │  ONBOARDING │
                                   └─────────────┘
                                         │
                                         │ verify()
                                         ▼
                                   ┌─────────────┐
                                   │   ACTIVE    │◄──────┐
                                   └─────────────┘       │
                                    /    │    \          │
                                   /     │     \         │
                                  /      │      \        │
                            ┌────┐  ┌───┐  ┌────┐        │
                            │WORK│  │REV │  │SYNC│        │
                            │ING │  │IEW │  │ING │        │
                            └────┘  └───┘  └────┘        │
                                         │               │
                    ┌────────────────────┼───────────────┘
                    │                    │
                    ▼                    ▼
             ┌──────────┐          ┌──────────┐
             │REFRESHING│          │ROTATING  │
             └──────────┘          └──────────┘
                    │                    │
                    └────────┬───────────┘
                             │ resume()
                             ▼
                    ┌────────────────┐
                    │   SUSPENDED    │
                    └────────────────┘
                             │
                             │ archive()
                             ▼
                    ┌────────────────┐
                    │   DEPRECATED   │
                    └────────────────┘
                             │
                             │ finalize()
                             ▼
                    ┌────────────────┐
                    │    ARCHIVED    │
                    └────────────────┘
```

**Your Responsibilities by State:**

| State | Can You Work? | Must You Report? | Context Available? |
|-------|--------------|------------------|-------------------|
| REGISTERED | No | No | Project only |
| ONBOARDING | No | Yes (progress) | System briefing |
| ACTIVE | Yes | Yes (per task) | Full |
| WORKING | Yes | Yes (continuous) | Full |
| REFRESHING | No | No | Snapshot only |
| ROTATING | No | Yes (handoff) | Transfer package |
| SUSPENDED | No | No | Frozen |
| DEPRECATED | No | No | Archived |

---

## 5. PROJECT PROFILES — What Skills Are Active?

| Profile | Skills Active | Your Context Size |
|---------|--------------|-------------------|
| **minimal** | 01, 02, 05, 06 | Small — focus on core tasks |
| **standard** | 01, 02, 05, 06, 08, 13 | Medium — include reporting |
| **enterprise** | 01–15 | Full — all governance layers |
| **ai-native** | 01, 02, 05, 06, 09, 11, 13 | ML-focused — include DataOps |
| **security-critical** | 01, 02, 05, 06, 10, 14, 15 | Security-first — strict gates |
| **data-intensive** | 01, 02, 05, 06, 11, 12, 13 | Data-heavy — include FinOps |
| **custom** | User-selected | Variable — check registry |

**How to check your profile:**
```
COMMAND: QUERY
question: "What is my project profile and active skills?"
scope: agent
```

---

## 6. QUALITY GATES — Can You Proceed?

### GATE-01: Planning → Implementation
**You CANNOT invoke Skill 02 until:**
- [ ] All 35+ artifacts from Skill 01 exist
- [ ] No unresolved placeholders
- [ ] Architecture reviewed
- [ ] Security spec complete
- [ ] Test strategy defined
- [ ] Entry file cross-references all artifacts

### GATE-02: Implementation → Operations
**You CANNOT invoke Skill 03 until:**
- [ ] All features implemented
- [ ] Code coverage > 80%
- [ ] Zero CRITICAL/HIGH CVEs
- [ ] Performance benchmarks met
- [ ] Observability stack deployed
- [ ] Runbooks written

### GATE-03: Implementation → Evolution
**You CANNOT invoke Skill 04 until:**
- [ ] Initial debt scan complete
- [ ] Fitness functions running
- [ ] Architecture diagrams updated

**How to check gate status:**
```
COMMAND: QUERY
question: "What is the status of GATE-{N}?"
scope: project
```

---

## 7. COMMUNICATION RULES

### With Other Agents

```
FORMAT:
[FROM: {YOUR-AGENT-ID}] [TO: {TARGET-AGENT-ID}] [TYPE: {SYNC|CHALLENGE|RESPONSE|HANDOFF}]

RULES:
1. All technical decisions MUST be documented (verbal agreements are invalid)
2. Blockers escalated within 2 hours
3. Code review comments resolved within 4 hours
4. API contract changes require 24-hour notice
5. DB schema changes require Orchestrator approval
6. Breaking changes require RFC + 50% agent approval
```

### With Skill 00 (Master Entry)

```
FORMAT:
[COMMAND: {NAME}] [AGENT: {ID}] [PROJECT: {ID}] [PRIORITY: {LEVEL}]

RULES:
1. Report status after EVERY task completion
2. Escalate blockers immediately
3. Request context refresh BEFORE exhaustion
4. Declare rotation intent 1 week in advance
5. All skill invocations route through Skill 00
```

---

## 8. CONTEXT MANAGEMENT

### Your Context Package Includes:

```
MANDATORY (always loaded):
├── This Agent Entry Skill
├── Skill 00: Master Entry Orchestrator (summary)
├── Active Phase Plan
├── Your Assigned Tasks
├── Task Dependencies
└── Recent Decisions (last 10)

CONDITIONAL (loaded by Skill 00 based on phase):
├── Skill 01 artifacts (if planning)
├── Skill 02 rules + DEV-RULES (if implementing)
├── Skill 03 runbooks (if operations)
├── Skill 04 debt register (if evolution)
└── Skill 05 gate status (if transitioning)
```

### When to Request Context Refresh:

| Condition | Action |
|-----------|--------|
| Context window > 80% full | `COMMAND: REFRESH` |
| You reference outdated artifacts | `COMMAND: CONTEXT type=UPDATE` |
| New phase begins | Automatic — Skill 00 pushes |
| Agent rotation | `COMMAND: CONTEXT type=FULL` |
| You forget a recent decision | `COMMAND: QUERY question="..."` |

---

## 9. ERROR HANDLING — What If Something Goes Wrong?

| Problem | Your Action | Skill 00 Response |
|---------|------------|-------------------|
| Can't invoke skill | Check: Are you ACTIVE? Is gate passed? | Validates and re-routes |
| Context overflow | `COMMAND: REFRESH` | Initiates refresh protocol |
| Forgot task requirements | `COMMAND: QUERY question="..."` | Retrieves from master index |
| Conflict with another agent | Document + `COMMAND: ESCALATE` | Routes to Skill 06 |
| Skill version mismatch | Report in status | Validates + updates |
| Gate blocked | Review gate checklist | Provides remediation path |
| Agent drift detected | Self-report + request pairing | Routes to Skill 06 |
| Emergency (security/data loss) | `COMMAND: ESCALATE severity=CRITICAL` | Stops all work, coordinates response |

---

## 10. DAILY WORKFLOW

```
START OF DAY:
├── Check: `COMMAND: STATUS` (get current task)
├── Review: Active tasks + dependencies
├── Sync: Review other agents' standup reports
└── Plan: Confirm today's deliverables

DURING WORK:
├── Implement: Follow active skill protocol
├── Test: TDD — red, green, refactor
├── Commit: Conventional commits with agent/task tags
├── Document: Update docs with every change
├── Report: Status after every task milestone
└── Escalate: Blockers within 2 hours

END OF DAY:
├── Push: All commits to feature branch
├── Report: `COMMAND: STATUS` with progress
├── Update: Any artifacts you modified
└── Plan: Tomorrow's priorities
```

---

## 11. EMERGENCY PROTOCOLS

### SEV-1 (Critical): System Down / Data Loss / Security Breach
```
1. STOP all work immediately
2. COMMAND: ESCALATE severity=CRITICAL
3. Wait for Skill 00 coordination
4. Follow incident response protocol (Skill 03 or 10)
5. Do NOT attempt fixes without authorization
```

### SEV-2 (High): Major Feature Broken / Performance Degraded
```
1. Halt non-essential work
2. COMMAND: ESCALATE severity=HIGH
3. Pivot to fix if assigned
4. Other agents continue with caution
```

### Context Exhaustion Imminent
```
1. Finish current atomic task
2. COMMAND: REFRESH
3. Wait for context package
4. Verify understanding with 3 questions
5. Resume work
```

---

## 12. QUICK REFERENCE CARD

```
┌────────────────────────────────────────────────────────────────────┐
│                    AGENT QUICK REFERENCE                            │
├────────────────────────────────────────────────────────────────────┤
│  DECLARE → INVOKE → WORK → REPORT → REPEAT                         │
├────────────────────────────────────────────────────────────────────┤
│  SKILL 01 = Planning        SKILL 09 = Experiments                   │
│  SKILL 02 = Implementation  SKILL 10 = Security                     │
│  SKILL 03 = Operations    SKILL 11 = DataOps                      │
│  SKILL 04 = Evolution     SKILL 12 = FinOps                       │
│  SKILL 05 = Transition    SKILL 13 = Documentation                 │
│  SKILL 06 = Agent Health  SKILL 14 = Compliance                    │
│  SKILL 08 = Reporting     SKILL 15 = Deployment                    │
├────────────────────────────────────────────────────────────────────┤
│  COMMANDS: DECLARE, INVOKE, STATUS, CONTEXT, ESCALATE,           │
│            QUERY, PROPOSE, ROTATE, REFRESH                         │
├────────────────────────────────────────────────────────────────────┤
│  RULES:                                                            │
│  • All decisions documented                                          │
│  • Blockers escalated in 2h                                        │
│  • Context refreshed before exhaustion                             │
│  • Status reported after every task                                │
│  • Quality gates checked before phase transitions                  │
└────────────────────────────────────────────────────────────────────┘
```

---

## 13. VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-08-16 | Initial release — Agent Entry Skill for 16-skill ecosystem |

---

*This skill is your compass. Carry it always. Route everything through Skill 00. Trust the process.*
