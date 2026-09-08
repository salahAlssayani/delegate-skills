---
name: agent-health-context-manager
description: "Agent health and context window manager. Use to monitor agent performance, manage context window limits, detect drift, and rotate agent instances."
---

# Skill: Agent Health, Context Management & Quality Assurance
## Version: 1.0.0
## Classification: CRITICAL — Meta-Agent Layer
## Scope: Agent Performance Monitoring, Context Window Management, Drift Detection, Agent Rotation
## Depends On: All previous skills

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `agent_health_context_manager`
**Role:** Agent Operations Director & AI System Administrator
**Objective:** Ensure all AI implementation agents operate at peak effectiveness, detect degradation before it impacts deliverables, manage context window constraints, and maintain agent quality over long-running projects.

**Success Criteria:**
- Agent quality degradation detected within 3 tasks of onset.
- Context window exhaustion never causes loss of critical project state.
- Agent rotation completes with < 1 hour knowledge transfer overhead.
- Zero agent conflicts escalate beyond structured resolution protocol.
- All agent outputs meet quality baseline (test pass rate, review acceptance rate, complexity metrics).

---

## 2. AGENT PERFORMANCE METRICS

### 2.1 Quality Indicators (Tracked Per Agent, Per Sprint)

| Metric | Target | Warning | Critical | Measurement |
|--------|--------|---------|----------|-------------|
| Test Pass Rate (self-authored) | > 95% | < 90% | < 80% | CI pipeline |
| PR Review Acceptance (first pass) | > 80% | < 70% | < 60% | PR history |
| Code Complexity (avg cyclomatic) | < 8 | > 10 | > 15 | Static analysis |
| Documentation Completeness | 100% | < 90% | < 75% | PR checklist |
| Task Completion On-Time | > 85% | < 75% | < 60% | Sprint tracking |
| Revert Rate | < 2% | > 5% | > 10% | Git history |
| Cross-Agent Conflict Initiated | < 1/sprint | > 2/sprint | > 4/sprint | Negotiation logs |

### 2.2 Productivity Indicators

| Metric | Target | Warning | Critical |
|--------|--------|---------|----------|
| Tasks Completed/Sprint | Baseline | -20% | -40% |
| Lines of Code / Hour | Baseline | -30% | -50% |
| Time to First Commit (after assignment) | < 1 hour | > 4 hours | > 8 hours |
| Idle Time (no commits > 2h during work window) | < 10% | > 25% | > 50% |

### 2.3 Knowledge Indicators

| Metric | Target | Warning | Critical |
|--------|--------|---------|----------|
| System Comprehension Quiz Score | 100% | < 90% | < 80% |
| Artifact Reference Accuracy | > 95% | < 85% | < 75% |
| Cross-Domain Question Accuracy | > 80% | < 70% | < 60% |

---

## 3. AGENT DRIFT DETECTION

### 3.1 Drift Types

| Type | Symptoms | Detection Method | Response |
|------|----------|-----------------|----------|
| **Quality Drift** | Increasing complexity, more reverts, test failures | Trend analysis over last 10 tasks | Pair with high-performing agent |
| **Context Drift** | References outdated artifacts, misses recent decisions | Artifact version cross-check | Context refresh (Section 4) |
| **Style Drift** | Deviates from coding standards, inconsistent patterns | Lint/style trend analysis | Re-read DEV-RULES.md, re-test |
| **Motivation Drift** | Low interest scores, delayed responses, minimal effort | Self-assessment + output analysis | Task swap, break, or rotation |
| **Knowledge Decay** | Forgets earlier decisions, repeats solved problems | Decision log cross-reference | Knowledge compaction + re-briefing |

### 3.2 Drift Alert Thresholds

```
IF 2+ quality indicators in WARNING for 2 consecutive sprints:
    → Flag agent for review
    → Assign buddy agent for shadowing
    → Review recent tasks for patterns

IF 1+ quality indicator in CRITICAL:
    → Immediate agent rotation consideration
    → Halt new task assignments
    → Conduct performance review

IF context drift detected:
    → Trigger context refresh protocol (Section 4)
    → Re-run knowledge verification

IF motivation drift detected:
    → Task swap to higher-interest area
    → If persists, rotate agent out
```

---

## 4. CONTEXT WINDOW MANAGEMENT

### 4.1 Context Budgeting

**Token Allocation Strategy:**
```
Total Context Window: {N} tokens (model-dependent)

Reserved:
- System prompt + skill instructions: 20%
- Current task context: 30%
- Project artifacts (compressed): 30%
- Conversation history (rolling): 15%
- Working memory (scratchpad): 5%

Overflow Strategy:
1. Archive oldest conversation history (summarize)
2. Compress project artifacts (extract key decisions only)
3. If still overflowing: Split task into smaller sub-tasks
```

### 4.2 Context Refresh Protocol

**Trigger:** Context window > 80% utilized OR agent shows context drift symptoms.

**Steps:**
```
1. SAVE: Export current working state (files in progress, open decisions)
2. SUMMARIZE: Generate "Project State Snapshot" (max 2000 tokens)
   - Current phase, active tasks, recent decisions
   - Open blockers, upcoming milestones
   - Key architectural constraints
3. COMPRESS: Reduce artifact references to decision log + entry file only
4. REBRIEF: Provide summarized context + current task
5. VERIFY: Agent answers 3 comprehension questions
6. RESUME: Continue work from saved state
```

### 4.3 Long-Running Project Strategy

For projects exceeding 50 tasks or 4 weeks:

```
Milestone-Based Context Reset:
- Every 20 tasks: Full context refresh
- Every phase completion: Comprehensive re-briefing
- Every month: Agent performance review + context optimization

Artifact Compression Hierarchy (when space limited):
1. Keep: Entry file, current phase plan, active tasks, DEV-RULES
2. Summarize: Architecture (C4 context + container only), security spec
3. Reference-by-link: Database schema, testing strategy, completed phases
4. Archive: Old ADRs, resolved blockers, completed sprints
```

---

## 5. AGENT ROTATION PROTOCOL

### 5.1 Rotation Triggers

| Trigger | Action | Lead Time |
|---------|--------|-----------|
| Agent performance CRITICAL for 1 sprint | Immediate rotation | 0 hours |
| Agent performance WARNING for 3 sprints | Planned rotation | 1 week |
| Agent context exhaustion (repeated refreshes) | Rotation | 2 days |
| Agent requests rotation | Rotation | 1 week |
| Project phase change | Optional rotation | 1 sprint |
| New domain expertise needed | Skill-based rotation | 1 week |

### 5.2 Rotation Process

```
PHASE 1: PREPARATION (T-3 days)
├── Outgoing agent produces "Knowledge Transfer Package"
│   ├── Active task status and rationale
│   ├── Key files and their purposes
│   ├── Recent decisions and their context
│   ├── Known issues and workarounds
│   └── Personal notes / scratchpad
├── Orchestrator validates package completeness
└── Incoming agent reviews package

PHASE 2: KNOWLEDGE TRANSFER (T-2 days)
├── Walkthrough of active codebase (2 hours)
├── Review of recent PRs and decisions
├── Q&A session
├── Incoming agent shadows outgoing agent on current task
└── Incoming agent produces "Comprehension Confirmation"

PHASE 3: HANDOFF (T-1 day)
├── Outgoing agent completes current task or documents exact state
├── All branches pushed, all WIP committed
├── Handoff document signed by both agents
├── Orchestrator approves handoff
└── Outgoing agent status: ROTATING OUT

PHASE 4: ONBOARDING (T-0 to T+3 days)
├── Incoming agent takes ownership
├── First task is "warm-up" (low risk, high visibility)
├── Daily check-ins with Orchestrator
└── Full productivity expected by T+3
```

### 5.3 Knowledge Transfer Package Template

```markdown
# Knowledge Transfer Package
## From: {OUTGOING-AGENT}
## To: {INCOMING-AGENT}
## Date: {DATE}

## Active Tasks
| Task ID | Status | Blockers | Key Files | Notes |

## Recent Decisions (Last 10)
| Decision | Rationale | Impact | Files Affected |

## Codebase Map
| Directory | Purpose | Key Files | Patterns Used |

## Known Issues
| Issue | Workaround | Priority | Owner |

## Personal Notes
[Free-form notes, shortcuts, gotchas]

## Questions for Incoming Agent
[Things outgoing agent wishes they'd known]
```

---

## 6. AGENT CONFLICT RESOLUTION

### 6.1 Conflict Escalation Ladder

```
LEVEL 1: Agent-to-Agent Negotiation
├── Structured discussion using negotiation format (Skill 02, Section 5.2)
├── 24-hour resolution window
└── If unresolved → Level 2

LEVEL 2: Orchestrator Mediation
├── Orchestrator reviews both positions
├── Requests additional evidence/analysis
├── Proposes compromise or decision
├── 48-hour resolution window
└── If unresolved → Level 3

LEVEL 3: Expert Panel
├── 3 neutral agents review the conflict
├── Each provides independent recommendation
├── Majority vote decides
├── If tie → Level 4

LEVEL 4: User Escalation
├── Orchestrator presents both positions with impact analysis
├── User decides with full context
├── Decision is final and documented in ADR
└── No appeals
```

### 6.2 Conflict Documentation

Every escalated conflict produces:
```markdown
# Conflict Resolution: {CONFLICT-ID}
## Date: {DATE}
## Level: {1-4}
## Agents: {LIST}

## Positions
### Agent A Position
### Agent B Position

## Resolution
{Decision}

## Rationale
{Why this decision}

## Trade-offs Accepted
{What each side gave up}

## Prevention
{How to avoid similar conflict}
```

---

## 7. EXECUTION WORKFLOW

```
PHASE 0: BASELINE
├── Establish quality metrics for each agent
├── Set up drift detection automation
├── Define context window limits
├── Create rotation pool
└── Document conflict resolution ladder

PHASE 1: MONITORING
├── Track quality indicators per sprint
├── Monitor context window utilization
├── Detect drift patterns
└── Flag agents for review

PHASE 2: INTERVENTION
├── Context refresh for drift
├── Buddy pairing for quality issues
├── Rotation for persistent problems
└── Escalation for conflicts

PHASE 3: CONTINUOUS
├── Weekly: Quality dashboard review
├── Bi-weekly: Context optimization
├── Monthly: Agent performance review
├── Quarterly: Rotation planning
└── Per project: Agent effectiveness retrospective
```

---

*End of Skill 06*
