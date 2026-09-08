---
name: parallel-multi-agent-implementation-orchestrator
description: "Parallel multi-agent implementation orchestrator. Use to fan out coding tasks across multiple agent instances, integrate their output, and drive delivery."
---

# Skill: Parallel Multi-Agent Implementation Orchestrator
## Version: 1.0.0
## Classification: CRITICAL — Execution Layer
## Scope: Parallel AI Agent Implementation, Code Generation, Integration, and Delivery
## Depends On: `project_analysis_planning_orchestrator` (Skill 01)

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `parallel_multi_agent_implementation_orchestrator`
**Role:** Chief Technical Officer & Engineering Director
**Objective:** Execute a fully planned project by orchestrating multiple specialized AI implementation agents in parallel, ensuring zero-conflict code integration, continuous quality validation, and seamless delivery.

**Success Criteria:**
- All planned features implemented with 100% test coverage of critical paths.
- Zero merge conflicts at integration time (prevented by design, not resolved).
- Every commit is traceable to a task, a test, and a quality gate.
- Agents operate with full system awareness and mutual task visibility.
- Implementation is monitored in real-time with automated escalation.
- Entry files, roadmaps, and documentation are living documents updated continuously.

---

## 2. AGENT SELECTION & ONBOARDING PROTOCOL

### 2.1 Minimum Agent Count
**MANDATORY:** At least **2 (two)** distinct AI implementation agents must be selected by the end user. The Orchestrator MUST NOT proceed with fewer.

### 2.2 Agent Role Profiles (User-Selectable)

The user selects agents from the following pool. Each agent has a primary domain but MUST possess system-wide knowledge.

| Agent ID | Primary Domain | Secondary Competencies | Ideal For |
|----------|---------------|----------------------|-----------|
| `IMPL-FRONTEND` | UI/UX Implementation | Accessibility, State Management, API Integration, Performance | Web/Mobile interfaces |
| `IMPL-BACKEND` | API & Business Logic | Database, Caching, Message Queues, Security | Core services |
| `IMPL-DATA` | Data Layer & Analytics | ETL, Data Pipelines, ML Ops, Reporting | Data-intensive systems |
| `IMPL-INFRA` | Infrastructure & DevOps | CI/CD, IaC, Monitoring, Security Hardening | Platform engineering |
| `IMPL-SECURITY` | Security Implementation | AuthZ/AuthN, Encryption, Audit, Compliance | Security-critical systems |
| `IMPL-AI` | AI/ML Implementation | Model Serving, RAG, Vector DBs, Prompt Engineering | AI-native products |
| `IMPL-QA` | Test Automation & Quality | Test Frameworks, Coverage, Chaos, Performance | Quality-first delivery |
| `IMPL-MOBILE` | Mobile Development | Native/Hybrid, Push, Offline, Store Compliance | Mobile-first products |

### 2.3 Onboarding Sequence (MANDATORY for Every Agent)

```
Step 1: SYSTEM BRIEFING
├── Deliver complete artifact package from Skill 01 (all 35+ MD files)
├── Agent must acknowledge receipt and confirm understanding
├── Agent produces "System Comprehension Summary" (max 500 words)
└── Quiz: Agent answers 5 questions about system scope to verify understanding

Step 2: TASK VISIBILITY GRANT
├── Agent receives: Their assigned tasks + ALL other agents' task lists
├── Agent produces "Interdependency Map" showing how their work touches others
└── Agent identifies: potential conflicts, shared resources, API contracts

Step 3: CODEBASE ORIENTATION
├── Agent receives: Existing codebase (if any), coding standards, git strategy
├── Agent produces "Codebase Familiarity Report"
└── Agent identifies: patterns to follow, anti-patterns to avoid

Step 4: TOOLCHAIN SETUP
├── Agent confirms access to: IDE, linters, formatters, test runners, git
├── Agent produces "Development Environment Validation" report
└── Agent runs: hello-world commit to verify end-to-end toolchain

Step 5: ONBOARDING SIGN-OFF
├── Agent signs digital checklist (acknowledgment in markdown)
├── Orchestrator verifies all 5 steps complete
└── Agent status: ACTIVE — ready for task assignment
```

---

## 3. SYSTEM KNOWLEDGE DISTRIBUTION (Non-Negotiable)

### 3.1 Full System Awareness Requirement
**EVERY agent MUST know the ENTIRE system.** This is not optional.

**Mandatory Knowledge Package per Agent:**
- [ ] Complete `04-ARCHITECTURE.md` (C4 diagrams, tech stack, constraints)
- [ ] Complete `05-DATABASE.md` (schema, relationships, migration rules)
- [ ] Complete `06-FLOW-EVENTS.md` (event flows, state machines, sagas)
- [ ] Complete `07-FLOW-UIUX.md` (user flows, interaction patterns)
- [ ] Complete `08-MINDMAP.md` (system concept hierarchy)
- [ ] Complete `09-ENTRY.md` (master index, current status)
- [ ] Complete `12-DEV-RULES.md` (coding standards)
- [ ] Complete `13-FLOW-RULES.md` (git workflow, CI/CD gates)
- [ ] Complete `25-SECURITY-SPEC.md` (security controls to implement)
- [ ] Complete `26-TESTING-STRATEGY.md` (testing requirements for their code)
- [ ] Complete active phase plan (`16-PHASE-XX.md`)
- [ ] Complete `21-PROGRESS.md` (current burn-down, blockers)

### 3.2 Knowledge Verification Protocol
Before task assignment, each agent MUST pass:

```
KNOWLEDGE VERIFICATION CHECKLIST
□ Can explain the system purpose in one sentence
□ Can name all containers/services and their responsibilities
□ Can trace a user request from UI to database and back
□ Can identify all integration points and their contracts
□ Can list the security controls that apply to their domain
□ Can describe the testing pyramid for their component
□ Can explain the git branching strategy
□ Can identify their tasks AND at least 3 tasks of other agents
□ Can name the current active phase and its objectives
□ Can locate any artifact in the project structure
```

**Failure:** Agent re-reads artifacts and retakes verification. Max 3 attempts.

---

## 4. TASK DECOMPOSITION & ASSIGNMENT ENGINE

### 4.1 Task Granularity Rules
- **Maximum Task Size:** 8 hours of implementation effort (one agent-day).
- **Minimum Task Size:** 30 minutes (avoid overhead).
- **Task MUST include:**
  - Unique Task ID (format: `TASK-{AGENT}-{PHASE}-{SEQ}` e.g., `TASK-FRONT-01-003`)
  - Clear title and description
  - Acceptance criteria (measurable, testable)
  - Dependencies (other tasks, external services, data)
  - Estimated effort (hours)
  - Required skills
  - Risk level (LOW/MEDIUM/HIGH)
  - Test requirements (unit, integration, E2E)
  - Documentation requirements
  - API contracts affected (if any)
  - Database migrations required (if any)
  - Feature flags required (if any)

### 4.2 Dependency Graph Construction
The Orchestrator builds a **Directed Acyclic Graph (DAG)** of all tasks:
- **Nodes:** Tasks
- **Edges:** Dependencies (Task A must complete before Task B)
- **Critical Path:** Longest path through the DAG — determines minimum timeline
- **Parallelizable Sets:** Tasks with no interdependencies — assigned to different agents

### 4.3 Initial Task Distribution
```
FOR each agent selected:
  ASSIGN tasks matching primary domain
  ASSIGN tasks where agent has secondary competency
  FLAG tasks with cross-domain dependencies for negotiation
END

IDENTIFY bottleneck tasks (high dependency count)
IDENTIFY high-risk tasks (HIGH risk level)
PROPOSE pairing for bottleneck/high-risk tasks
```

---

## 5. AGENT SELF-SELECTION & NEGOTIATION PROTOCOL

This is the **core innovation** of this skill. Agents do not blindly accept tasks — they review, challenge, and self-select based on interest and capability.

### 5.1 Task Review Phase (Round 1)

Each agent receives their initial task assignment and produces:

```markdown
## Agent Task Review Document

### Agent: {AGENT_ID}
### Review Date: {DATE}

### Tasks Assigned
| Task ID | Title | Effort | Interest (1-10) | Confidence (1-10) | Concerns |

### Task Interest Analysis
For each task, agent rates:
- **Interest:** How motivated is the agent to implement this? (1-10)
- **Confidence:** How certain is the agent of successful delivery? (1-10)
- **Concerns:** Technical risks, knowledge gaps, blockers

### Proposed Swaps
| Task ID | Current Owner | Proposed Owner | Rationale |

### Proposed Splits
| Task ID | Original Effort | Proposed Split | Rationale |

### New Task Proposals
Tasks the agent believes are missing from the plan:
| Proposed Task ID | Description | Effort | Dependencies |
```

### 5.2 Cross-Agent Negotiation Phase (Round 2)

All agents share their review documents. Negotiation rules:

```
RULE 1: A task swap requires MUTUAL consent + Orchestrator approval.
RULE 2: A task split requires agreement from the original owner + Orchestrator approval.
RULE 3: A new task proposal requires at least ONE other agent to second it.
RULE 4: Agents may NOT reject a task without proposing an alternative assignment.
RULE 5: Interest score below 5 triggers mandatory discussion — why is motivation low?
RULE 6: Confidence score below 6 triggers mandatory pairing or knowledge transfer.
RULE 7: All negotiations are documented in `TASK-NEGOTIATION-LOG.md`.
```

**Negotiation Format:**
```markdown
[FROM: Agent-A] [TO: Agent-B] [TYPE: SWAP-REQUEST]
Task: TASK-FRONT-01-005
Proposal: I take TASK-BACK-01-003, you take TASK-FRONT-01-005
Rationale: I have deep backend experience with payment processing;
           you have stronger React skills for the checkout UI.
Counter-offer window: 24 hours
```

### 5.3 Final Task Assignment (Round 3)

After negotiation, the Orchestrator produces:

```markdown
## Final Task Assignment Matrix

| Task ID | Title | Owner | Backup | Effort | Start | Due | Status |
|---------|-------|-------|--------|--------|-------|-----|--------|

## Task Ownership Rules
1. PRIMARY owner is responsible for implementation and initial testing.
2. BACKUP owner reviews all PRs and can take over if primary is blocked.
3. No task may have zero backup owner.
4. Cross-domain tasks have CO-OWNERS (both agents accountable).
```

---

## 6. INDIVIDUAL IMPLEMENTATION ROADMAP CREATION

After task assignment, EACH agent creates their own implementation roadmap.

### 6.1 Individual Roadmap Template

```markdown
# Implementation Roadmap — {AGENT_ID}
## Phase: {PHASE_NAME}
## Date: {DATE}

## Agent Context
- Primary Domain: {DOMAIN}
- Assigned Tasks: {COUNT}
- Total Estimated Effort: {HOURS}
- Dependencies on Other Agents: {LIST}
- Other Agents Depend on Me For: {LIST}

## Daily/Iteration Plan
| Day | Task ID | Focus | Deliverable | Sync Points |
|-----|---------|-------|-------------|-------------|

## Technical Approach
For each major task:
- Design decisions
- File structure
- Key algorithms/patterns
- Testing strategy
- Documentation plan

## Risk Mitigation
| Risk | Probability | Impact | Mitigation | Contingency |

## Communication Schedule
- Daily standup time
- Blocker escalation protocol
- Code review expectations
- Pair programming sessions
```

### 6.2 Roadmap Sharing & Cross-Review

Each agent shares their roadmap with ALL other agents. Review criteria:
- [ ] Does this roadmap conflict with mine? (same files, same DB migrations)
- [ ] Are the sync points aligned with my schedule?
- [ ] Are the dependencies realistic?
- [ ] Is the testing strategy compatible with the overall testing plan?
- [ ] Are there duplicate efforts?
- [ ] Are there gaps (things nobody is doing)?

**Cross-Review Output:** Each agent produces a `ROADMAP-REVIEW-{AGENT_ID}.md` with findings.

---

## 7. UNIFIED IMPLEMENTATION ROADMAP

The Orchestrator synthesizes all individual roadmaps into a single master document.

### 7.1 Unified Roadmap Structure

```markdown
# Unified Implementation Roadmap
## Project: {NAME}
## Phase: {PHASE}
## Version: {VERSION}
## Last Updated: {DATE}

## 1. Executive Summary
- Total tasks: {N}
- Total agent-hours: {N}
- Critical path duration: {N} days
- Parallel efficiency: {N}% (theoretical max vs actual)
- Risk-adjusted delivery date: {DATE}

## 2. Timeline (Gantt-style Text)
```
Week 1: [Agent-A: Task-1, Task-2] [Agent-B: Task-3] [Agent-C: Task-4]
Week 2: [Agent-A: Task-5] [Agent-B: Task-6, Task-7] [Agent-C: Task-8]
```

## 3. Dependency Matrix
| Task | Depends On | Blocks | Owner | Status |

## 4. Sync Points
| Date/Time | Type | Participants | Purpose | Output |

## 5. Integration Milestones
| Milestone | Date | Criteria | Verification |

## 6. Risk Dashboard
| Risk | Owner | Mitigation | Contingency | Status |

## 7. Resource Allocation
| Agent | Tasks | Hours | Utilization % | Buffer |

## 8. Quality Gates
| Gate | Trigger | Criteria | Owner | Status |
```

### 7.2 Roadmap as Living Document
The Unified Roadmap MUST be updated:
- **Daily:** Task status, blockers, actual vs estimated effort
- **Per Milestone:** Integration results, quality gate outcomes
- **Per Phase:** Retrospective findings, process improvements
- **On Exception:** Any deviation from plan triggers immediate update

---

## 8. EXTREME GIT STRATEGY (Zero-Conflict by Design)

### 8.1 Branching Model: Trunk-Based Development with Feature Environments

```
main (production-ready, always deployable)
├── release/v{X.Y.Z} (cut from main, stabilization)
│   └── hotfix/v{X.Y.Z}-p{N} (emergency fixes)
├── develop (integration branch, nightly builds)
│   └── feature/{AGENT-ID}/{TASK-ID}-{description} (agent work branches)
│   └── feature/{AGENT-ID}/{TASK-ID}-{description}
│   └── ...
└── experiment/{AGENT-ID}/{hypothesis} (spikes, PoCs)
```

### 8.2 Branch Naming Convention
```
feature/{agent-id}/{phase}-{seq}-{kebab-description}
Example: feature/front/01-003-checkout-payment-form
```

### 8.3 Commit Convention (Conventional Commits + Agent Tracking)
```
{TYPE}({SCOPE}): {description} [AGENT:{ID}] [TASK:{TASK-ID}]

Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
Scope: component or module name

Examples:
feat(payment): add Stripe checkout integration [AGENT:FRONT] [TASK:FRONT-01-003]
fix(auth): resolve JWT expiration race condition [AGENT:BACK] [TASK:BACK-01-007]
test(api): add contract tests for user endpoints [AGENT:QA] [TASK:QA-01-002]
```

### 8.4 Pre-Commit & Pre-Push Hooks (Mandatory)

```yaml
# .githooks/pre-commit
stages:
  - lint:        # Zero tolerance for lint errors
  - type-check:  # TypeScript/mypy — must pass
  - unit-test:   # Related unit tests must pass
  - security:    # secrets-scan, no hardcoded credentials
  - format:      # Auto-format, fail if unformatted
```

```yaml
# .githooks/pre-push
stages:
  - integration-test:  # Component-level tests
  - build:             # Must build successfully
  - dependency-check:  # No known CVEs in dependencies
```

### 8.5 Pull Request Protocol

```markdown
## PR Template (MANDATORY)

### Task Link
Closes: TASK-{ID}

### Changes
- [ ] List every file changed and why

### Testing
- [ ] Unit tests added/updated
- [ ] Integration tests pass
- [ ] Manual testing performed (describe)
- [ ] Screenshots/videos (for UI changes)

### Code Review Checklist
- [ ] Follows DEV-RULES.md
- [ ] No secrets or credentials
- [ ] Error handling implemented
- [ ] Logging added appropriately
- [ ] Documentation updated
- [ ] Backward compatibility maintained

### Reviewers Required
- [ ] Primary: {BACKUP-AGENT}
- [ ] Secondary: {CROSS-DOMAIN-AGENT} (if touching their domain)
- [ ] Security: {SECURITY-AGENT} (if auth/data/security involved)

### Merge Requirements
- [ ] All CI checks pass
- [ ] All reviewers approve
- [ ] No merge conflicts
- [ ] Squash commit message follows convention
```

### 8.6 Conflict Prevention Strategies

| Strategy | Implementation |
|----------|---------------|
| **Contract-First Development** | APIs defined in OpenAPI before implementation. Agents code against contracts, not each other. |
| **Database Migration Ownership** | Single agent owns migrations per phase. Others request migrations via RFC. |
| **Feature Flags** | All new features behind flags. Agents can merge incomplete work safely. |
| **Interface Segregation** | Agents depend on interfaces, not implementations. Mock services for parallel dev. |
| **File Ownership Map** | Each file/directory has a primary owner. Changes require owner review. |
| **Shared Resource Locking** | Database schema, CI/CD configs, environment variables — lock file + approval process. |
| **Daily Sync Commits** | Agents push WIP branches daily. Others can see progress and adjust. |
| **Integration Branch Rebase** | Feature branches rebase onto `develop` daily. Conflicts caught early, not at merge. |

---

## 9. IMPLEMENTATION EXECUTION PROTOCOL

### 9.1 Daily Execution Cycle

```
06:00 UTC — Automated Standup Report Generation
├── Each agent submits: Yesterday's completed tasks, today's plan, blockers
├── Orchestrator produces: Unified standup summary, cross-agent blocker matrix
└── Agents review: Other agents' plans for conflicts

08:00 UTC — Sync Window (Optional, triggered by dependency)
├── Agents with interdependent tasks sync
├── Resolve interface questions, contract clarifications
└── Update Unified Roadmap

09:00-17:00 UTC — Deep Work Blocks
├── Agents implement assigned tasks
├── Continuous testing (TDD/BDD enforced)
├── Commit every 30-60 minutes (small, atomic commits)
└── Push to feature branch at least every 2 hours

17:00 UTC — End-of-Day Sync
├── Agents push final commits
├── Automated tests run on all feature branches
├── Orchestrator produces: Progress report, deviation analysis
└── Blockers escalated if unresolved

20:00 UTC — Nightly Integration
├── All passing feature branches auto-rebased onto develop
├── Integration tests run
├── Orchestrator produces: Nightly build report
└── Failures trigger morning priority assignment
```

### 9.2 Task Implementation Checklist (Per Task)

```markdown
## Task Implementation Checklist — {TASK-ID}

### Before Coding
- [ ] Re-read acceptance criteria
- [ ] Check dependencies are complete
- [ ] Review related code (existing patterns)
- [ ] Write test cases FIRST (TDD)
- [ ] Update task status: IN-PROGRESS

### During Coding
- [ ] Follow DEV-RULES.md
- [ ] Add/update documentation inline
- [ ] Handle all error cases
- [ ] Add structured logging
- [ ] Security review: input validation, output encoding, auth checks
- [ ] Performance review: N+1 queries, memory leaks, async patterns
- [ ] Accessibility review (if UI): ARIA labels, keyboard nav, color contrast
- [ ] Commit every logical step with conventional commit message

### Before PR
- [ ] All unit tests pass locally
- [ ] All integration tests pass locally
- [ ] Linting passes with zero errors
- [ ] Type checking passes
- [ ] No secrets in code (run scanner)
- [ ] Update relevant documentation
- [ ] Update ENTRY.md if architecture changed
- [ ] Update UNIFIED-ROADMAP.md with actual effort

### PR & Review
- [ ] Fill PR template completely
- [ ] Request review from backup owner
- [ ] Address all review comments
- [ ] Re-request review after changes
- [ ] Merge only when all gates pass

### After Merge
- [ ] Update task status: DONE
- [ ] Update PROGRESS.md
- [ ] Notify dependent task owners
- [ ] Archive feature branch
```

### 9.3 Test-Driven Development Enforcement

**MANDATORY:** No production code without a failing test first.

```
RED: Write test → must fail (proves test is valid)
GREEN: Write minimum code → test passes
REFACTOR: Improve code → all tests still pass
COMMIT: Atomic commit with test + implementation
```

**Test Coverage Requirements:**
- Unit tests: Minimum 80% line coverage, 100% critical path coverage
- Integration tests: Every API endpoint, every DB query path
- Component tests: Every service in isolation
- E2E tests: Every critical user journey

---

## 10. CROSS-AGENT COMMUNICATION PROTOCOL

### 10.1 Communication Channels

| Channel | Purpose | Frequency | Participants |
|---------|---------|-----------|--------------|
| `standup-{date}.md` | Daily progress, blockers | Daily | All agents |
| `sync-{topic}-{date}.md` | Technical sync on specific topic | As needed | Relevant agents |
| `blocker-{task-id}.md` | Escalated blocker with context | On escalation | Blocked agent + Orchestrator + relevant agents |
| `review-{pr-id}.md` | PR review thread | Per PR | Author + Reviewers |
| `decision-{id}.md` | Architecture/technical decisions | As needed | All agents + Orchestrator |
| `handoff-{task-id}.md` | Task handoff between agents | On transfer | Outgoing + Incoming agent |

### 10.2 Communication Rules
1. **All technical decisions MUST be documented.** Verbal agreements are invalid.
2. **Blockers MUST be escalated within 2 hours** of identification.
3. **Code review comments MUST be resolved within 4 hours** during work window.
4. **API contract changes require 24-hour notice** to all consuming agents.
5. **Database schema changes require Orchestrator approval** and migration plan.
6. **Breaking changes require RFC** and approval from 50%+ of agents.

### 10.3 Handoff Protocol

When an agent transfers a task or responsibility:

```markdown
## Task Handoff — {TASK-ID}

### From: {OUTGOING-AGENT}
### To: {INCOMING-AGENT}
### Date: {DATE}

### Context
- Original plan vs actual progress
- Key decisions made
- Technical debt accumulated
- Known issues

### Code State
- Branch: {BRANCH-NAME}
- Last commit: {HASH}
- Test status: {PASS/FAIL}
- Coverage: {N}%

### Dependencies
- Blocks: {LIST}
- Blocked by: {LIST}

### Knowledge Transfer
- [ ] Walkthrough of key files
- [ ] Explanation of design decisions
- [ ] Review of test cases
- [ ] Q&A session completed

### Sign-off
- [ ] Outgoing agent confirms completeness
- [ ] Incoming agent confirms understanding
- [ ] Orchestrator approves handoff
```

---

## 11. MONITORING & PROGRESS TRACKING

### 11.1 Real-Time Metrics Dashboard

The Orchestrator maintains a live dashboard (text-based in `PROGRESS.md`):

```markdown
# Implementation Progress Dashboard
## Last Updated: {TIMESTAMP}

## Sprint/Phase Progress
| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Tasks Completed | {N} | {N} | 🟢/🟡/🔴 |
| Tasks In Progress | {N} | {N} | — |
| Tasks Blocked | 0 | {N} | 🔴 if >2 |
| Code Coverage | >80% | {N}% | 🟢/🟡/🔴 |
| PRs Open | <5 | {N} | 🟢/🟡/🔴 |
| PR Review Time | <4h | {N}h | 🟢/🟡/🔴 |
| Build Success Rate | >95% | {N}% | 🟢/🟡/🔴 |
| Test Pass Rate | 100% | {N}% | 🔴 if <100% |
| Commits/Day | {N} | {N} | 🟢/🟡/🔴 |
| Blocker Resolution Time | <4h | {N}h | 🟢/🟡/🔴 |

## Agent Utilization
| Agent | Tasks | Hours Done | Hours Remaining | Utilization | Status |

## Burn-Down Chart (Text)
Day 0: ████████████████████ 100%
Day 1: ██████████████████░░  90%
Day 2: ████████████████░░░░  80%
...

## Blocker Matrix
| Blocker | Affected Tasks | Owner | Age | Escalation Level |

## Risk Heat Map
| Risk | Probability | Impact | Score | Trend |
```

### 11.2 Automated Alerts

| Condition | Alert Level | Action |
|-----------|-------------|--------|
| Build fails on develop | CRITICAL | Stop all merges, investigate immediately |
| Test coverage drops below 80% | HIGH | Block merges until restored |
| PR open >24h without review | MEDIUM | Auto-assign additional reviewer |
| Task blocked >4h | HIGH | Escalate to Orchestrator + backup agent |
| Task effort exceeds estimate by 50% | HIGH | Re-plan, consider split or pair |
| Security scan finds CRITICAL CVE | CRITICAL | Stop line, patch immediately |
| Integration test fails | HIGH | Revert offending commit, investigate |
| Agent idle >2h during work window | MEDIUM | Check for blockers, reassign tasks |
| Merge conflict detected | MEDIUM | Auto-notify both agents, require resolution |

### 11.3 Orchestrator Intervention Triggers

The Orchestrator MUST intervene when:
- [ ] Any CRITICAL alert fires
- [ ] Two or more agents are blocked simultaneously
- [ ] A task exceeds 150% of estimated effort
- [ ] An agent reports repeated failures on same task type
- [ ] Integration tests fail for 3 consecutive builds
- [ ] A security vulnerability is discovered
- [ ] An agent requests help or escalation
- [ ] Deadline risk exceeds 20% buffer

**Intervention Actions:**
1. Analyze root cause
2. Reassign resources if needed
3. Adjust Unified Roadmap
4. Communicate changes to all agents
5. Document decision in `decision-{id}.md`

---

## 12. ENTRY FILE & DOCUMENTATION UPDATES

### 12.1 Continuous Documentation Mandate

**Rule: Documentation is code. Untracked documentation is technical debt.**

| Trigger | Documentation Action | Owner |
|---------|---------------------|-------|
| New API endpoint | Update API spec, add examples | Implementing agent |
| DB schema change | Update DATABASE.md, add migration doc | Implementing agent |
| Architecture decision | Create new ADR in `33-ADR/` | Orchestrator |
| New feature | Update README.md feature list | Implementing agent |
| UI component | Update design system docs, add story | Frontend agent |
| Security control | Update SECURITY-SPEC.md | Security agent |
| Test strategy change | Update TESTING-STRATEGY.md | QA agent |
| Phase complete | Update phase plan, mark DONE | Orchestrator |
| Task complete | Update PROGRESS.md, TODO.md | Implementing agent |
| Bug fix | Update known issues, add regression test | Fixing agent |
| Breaking change | Update migration guide, notify all | Orchestrator |

### 12.2 Entry File Update Protocol

`09-ENTRY.md` MUST be updated:
- **Per commit** that changes architecture (auto-append to decision log)
- **Per task completion** (update progress, cross-references)
- **Per phase milestone** (update current phase, quality gates)
- **Per blocker resolution** (update risk dashboard)
- **Per release** (update version, changelog)

**Update Format:**
```markdown
## Update Log
| Date | Agent | Artifact | Change | Reason |
```

### 12.3 Unified Roadmap Update Protocol

`UNIFIED-IMPLEMENTATION-ROADMAP.md` MUST be updated:
- **Daily:** Actual vs planned progress, effort variance
- **Per task:** Actual start/end, blockers encountered
- **Per integration:** Milestone results, quality gate outcomes
- **Per retrospective:** Process improvements, lessons learned

---

## 13. MIGRATION STRATEGY

### 13.1 Database Migration Protocol

```
OWNER: Single agent per phase (typically IMPL-DATA or IMPL-BACKEND)

RULES:
1. Migrations are forward-only in production. Rollbacks are new migrations.
2. Every migration has: UP script, DOWN script (for dev), test data, rollback verification
3. Migrations are numbered sequentially: YYYYMMDDHHMMSS_description.sql
4. Migrations run automatically in CI before application startup
5. Long-running migrations use background jobs with progress tracking
6. Schema changes require approval from data owner + affected agents

MIGRATION CHECKLIST:
□ Backward compatible (old code works with new schema)
□ Indexed appropriately
□ Tested on copy of production data (size-wise)
□ Rollback plan documented
□ Communication sent to all agents 24h before execution
□ Monitoring alerts configured for migration duration
```

### 13.2 Code Migration Protocol

```
For major refactoring or technology changes:

1. RFC Phase: Document rationale, alternatives, impact, rollback plan
2. Spike Phase: Implement in isolated branch, measure impact
3. Parallel Phase: Run old + new code simultaneously (feature flag)
4. Cutover Phase: Gradual traffic shift (1% → 10% → 50% → 100%)
5. Verification Phase: Monitor metrics for 48h minimum
6. Cleanup Phase: Remove old code, update docs

NEVER: Big-bang rewrites without parallel execution
NEVER: Deploy migrations and code changes in same commit
ALWAYS: Have instant rollback capability
```

### 13.3 Data Migration Protocol

```
For data transformations, ETL, or data model changes:

1. Audit: Document current data state, volume, distribution
2. Transform: Build idempotent transformation job
3. Validate: Compare old vs new data (checksums, row counts, samples)
4. Shadow: Run transformation in parallel, compare outputs
5. Cutover: Atomic switch using feature flag or blue/green
6. Verify: Business logic validation, report comparison
7. Archive: Preserve old data for compliance period
8. Cleanup: Remove after retention period
```

---

## 14. QUALITY GATES & REVIEW PROCESS

### 14.1 Quality Gate Definitions

| Gate | Trigger | Criteria | Enforcement |
|------|---------|----------|-------------|
| **QG-1: Code Quality** | Every PR | Lint pass, type check pass, complexity <10, no code smells | CI block |
| **QG-2: Test Coverage** | Every PR | Unit coverage >80%, critical path 100%, all tests pass | CI block |
| **QG-3: Security** | Every PR | No secrets, no CRITICAL/HIGH CVEs, SAST pass | CI block |
| **QG-4: Integration** | Every merge to develop | All integration tests pass, no breaking changes | CI block |
| **QG-5: Performance** | Per feature completion | Load test p95 < target, no memory leaks | Manual gate |
| **QG-6: UX Review** | Per UI feature | Accessibility pass, responsive check, design match | Agent review |
| **QG-7: Documentation** | Per task | README updated, API docs updated, ADR if needed | PR checklist |
| **QG-8: Cross-Agent** | Per integration milestone | All agents sign off, no conflicts, contracts honored | Orchestrator |

### 14.2 Review Types

| Review Type | When | Who | Focus | Duration |
|-------------|------|-----|-------|----------|
| **Self-Review** | Before PR | Author | Logic, style, tests | 15 min |
| **Peer Review** | PR creation | Backup owner | Correctness, patterns, security | 30 min |
| **Cross-Domain Review** | PR touches other domain | Domain owner | Integration points, contracts | 20 min |
| **Security Review** | Auth/data/security changes | IMPL-SECURITY | Vulnerabilities, compliance | 30 min |
| **Architecture Review** | Structural changes | Orchestrator + Alpha | Design alignment, tech debt | 45 min |
| **Final Review** | Before release | Orchestrator | Completeness, documentation, readiness | 60 min |

### 14.3 Review Checklist (For Reviewers)

```markdown
## Code Review Checklist

### Correctness
- [ ] Logic matches acceptance criteria
- [ ] Edge cases handled
- [ ] Error paths tested
- [ ] No race conditions
- [ ] No resource leaks

### Security
- [ ] Input validated
- [ ] Output encoded
- [ ] Auth checks present
- [ ] No SQL injection vectors
- [ ] No XSS vectors
- [ ] Secrets not hardcoded

### Performance
- [ ] No N+1 queries
- [ ] Appropriate indexing
- [ ] Caching strategy sound
- [ ] No unnecessary allocations
- [ ] Async where appropriate

### Maintainability
- [ ] Naming is clear and consistent
- [ ] Functions are focused (<50 lines ideal)
- [ ] No magic numbers/strings
- [ ] Comments explain WHY, not WHAT
- [ ] No dead code

### Testing
- [ ] Tests cover happy path
- [ ] Tests cover error paths
- [ ] Tests are readable and maintainable
- [ ] Mocking is appropriate
- [ ] No test interdependencies

### Documentation
- [ ] README updated if needed
- [ ] API docs updated if needed
- [ ] Complex logic has inline comments
- [ ] Breaking changes documented
```

---

## 15. ERROR HANDLING & RECOVERY

### 15.1 Implementation Failure Scenarios

| Scenario | Detection | Response | Recovery |
|----------|-----------|----------|----------|
| Agent stuck on task >150% estimate | Progress monitoring | Pair with backup agent, split task | Re-estimate, reassign |
| Agent produces incorrect implementation | Code review, tests | Revert, root cause analysis, re-implement | Fix + regression test |
| Merge conflict | Git automation | Notify both agents, require resolution | Manual resolution with Orchestrator |
| Integration test failure | CI pipeline | Bisect to offending commit, revert | Fix in isolation, re-integrate |
| Performance regression | Benchmark suite | Profile, identify cause, optimize | Performance test before merge |
| Security vulnerability | SAST/DAST scan | Immediate patch, audit scope | Fix + penetration test |
| Agent unavailable | Heartbeat monitoring | Reassign tasks to backup | Load balance across remaining agents |
| Scope creep | Task tracking | RFC required for new tasks | Defer to next phase or swap with lower priority |
| Technical debt accumulation | Static analysis | Debt budget exceeded → mandatory refactoring sprint | Schedule refactoring tasks |
| Knowledge silo | Code review patterns | Cross-training, pair programming | Rotate task assignments |

### 15.2 Rollback Procedures

```markdown
## Rollback Decision Matrix

| Condition | Rollback Type | Trigger | Verification |
|-----------|--------------|---------|-------------|
| Feature broken in production | Feature flag OFF | Alert/monitoring | Error rate returns to baseline |
| Release has critical bug | Full release rollback | Incident declared | Previous version deploys successfully |
| Database migration corrupts data | Migration rollback | Data integrity alert | Data restored from backup + migration fixed |
| API breaking change deployed | API version revert | Consumer failure alerts | All consumers functional |
| Security breach | Emergency lockdown | Security alert | Threat contained, forensic complete |
```

### 15.3 Incident Response During Implementation

```
SEV-1 (Critical): System down, data loss, security breach
→ Stop all work, all agents focus on incident
→ Orchestrator coordinates response
→ Post-incident review within 24h

SEV-2 (High): Major feature broken, significant performance degradation
→ Affected agents pivot to fix
→ Other agents continue with caution
→ Review within 48h

SEV-3 (Medium): Minor bug, non-critical feature issue
→ Ticket created, assigned to next sprint
→ No work stoppage

SEV-4 (Low): Cosmetic issue, documentation typo
→ Backlog item, no urgency
```

---

## 16. GAPS ANALYSIS & MISSING REQUIREMENTS

Based on my analysis of your requirements, here are the gaps I identified and have filled in this skill:

### 16.1 Gaps You Identified (Covered)
- ✅ Parallel multi-agent implementation with at least 2 agents
- ✅ Task decomposition and assignment
- ✅ Implementation stages and migration strategy
- ✅ Implementation monitoring flow
- ✅ Project monitoring
- ✅ Git functionality for error-free progress
- ✅ System-wide knowledge for all agents
- ✅ Mutual task visibility
- ✅ Extreme implementation instructions
- ✅ Agent self-selection and negotiation
- ✅ Individual implementation roadmaps
- ✅ Unified implementation roadmap
- ✅ Monitoring based on guidance
- ✅ Entry file updates
- ✅ Codebase rules and skills updates

### 16.2 Gaps You Missed (Now Covered)

| # | Gap | Why It Matters | Where Covered |
|---|-----|---------------|-------------|
| 1 | **Conflict Prevention** (not just resolution) | Merge conflicts kill velocity. Prevention > resolution. | Section 8.6 |
| 2 | **Feature Flags** | Allow incomplete features to merge safely. Critical for parallel work. | Section 8.6, 13.2 |
| 3 | **Contract-First Development** | Agents code against API contracts, not each other's code. Eliminates integration surprises. | Section 8.6 |
| 4 | **File Ownership Map** | Prevents agents from stepping on each other's files. | Section 8.6 |
| 5 | **TDD Enforcement** | No code without tests. Catches bugs before they spread. | Section 9.3 |
| 6 | **Pre-Commit/Pre-Push Hooks** | Quality gates at commit time, not PR time. | Section 8.4 |
| 7 | **Knowledge Verification** | Agents must prove they understand the system before coding. | Section 3.2 |
| 8 | **Backup Ownership** | Every task has a backup owner. No single point of failure. | Section 5.3 |
| 9 | **Handoff Protocol** | Structured knowledge transfer when tasks move between agents. | Section 10.3 |
| 10 | **Incident Response** | What happens when things break during implementation. | Section 15.3 |
| 11 | **Rollback Decision Matrix** | When and how to roll back, not just forward. | Section 15.2 |
| 12 | **Technical Debt Budget** | Prevents debt accumulation from killing velocity. | Section 15.1 |
| 13 | **Cross-Training / Pair Programming** | Prevents knowledge silos. | Section 15.1 |
| 14 | **Heartbeat Monitoring** | Detects when an agent goes silent or gets stuck. | Section 11.2 |
| 15 | **Nightly Integration** | Catches integration issues daily, not at release. | Section 9.1 |
| 16 | **Security Scanning in CI** | Every PR scanned. No vulnerabilities reach develop. | Section 14.1 |
| 17 | **Performance Regression Testing** | Prevents "it worked on my machine" performance issues. | Section 15.1 |
| 18 | **Accessibility Review in PR** | Accessibility is not an afterthought. | Section 9.2 |
| 19 | **RFC Process for Breaking Changes** | Structured process for changes that affect others. | Section 10.2 |
| 20 | **Post-Mortem Process** | Learn from failures, don't repeat them. | Section 15.3 |

---

## 17. ADDITIONAL PROFESSIONAL REQUIREMENTS (Filled Gaps)

### 17.1 Environment Management
- **Development:** Each agent has isolated environment. Docker Compose for local stack.
- **Staging:** Shared environment, auto-deployed from develop. Used for integration testing.
- **Production:** Blue/green deployment. Zero-downtime releases.
- **Feature Environments:** Per-PR ephemeral environments for manual testing.

### 17.2 Secret Management During Development
- No secrets in code. Ever.
- Use `.env.example` with dummy values.
- Development secrets in encrypted vault (e.g., Doppler, 1Password, AWS Secrets Manager).
- Rotation policy: 90 days for development, 30 days for production.

### 17.3 Configuration Management
- Environment-specific configs in version control (no secrets).
- Feature flags in dedicated service (LaunchDarkly, Unleash, or config-based).
- Config validation on startup — fail fast if misconfigured.

### 17.4 Logging Standards During Implementation
- Structured JSON logs only.
- Correlation IDs propagated across all services.
- Log levels: ERROR (alert), WARN (monitor), INFO (normal), DEBUG (dev only).
- No PII in logs. Mask sensitive data.

### 17.5 Error Handling Patterns
- **Expected errors:** Return appropriate HTTP status codes with structured error responses.
- **Unexpected errors:** Log full stack trace, return generic 500, alert on-call.
- **Retry logic:** Exponential backoff with jitter. Max 3 retries for idempotent operations.
- **Circuit breaker:** Fail fast when dependencies are unhealthy.
- **Graceful degradation:** Core features work even when non-critical services fail.

### 17.6 Code Organization
```
src/
├── domain/           # Business logic, entities, value objects
├── application/      # Use cases, services, DTOs
├── infrastructure/   # DB, cache, external APIs, messaging
├── interfaces/       # Controllers, presenters, CLI commands
├── shared/           # Utilities, constants, exceptions
└── config/           # Configuration files
tests/
├── unit/             # Fast, isolated tests
├── integration/      # DB, cache, message queue tests
├── component/        # Service-level tests
└── e2e/              # Full system tests
```

### 17.7 Dependency Management
- Pin exact versions in production (`package-lock.json`, `poetry.lock`, `go.mod`)
- Weekly dependency update PRs (automated via Dependabot/Renovate)
- License compliance check (no GPL in proprietary code without legal review)
- Vulnerability scanning on every PR (Snyk, Trivy, OWASP)

### 17.8 Performance Budgets
- Set performance budgets before implementation:
  - Page load time: < 2s (mobile), < 1s (desktop)
  - API response time: p95 < 200ms
  - Bundle size: < 200KB initial JS
  - Memory usage: < 512MB per container
- Automated Lighthouse CI for frontend
- Automated k6 benchmarks for backend

### 17.9 Accessibility Implementation
- Semantic HTML always.
- ARIA labels where native semantics insufficient.
- Keyboard navigation for all interactive elements.
- Focus management for dynamic content.
- Color contrast ratio >= 4.5:1 (AA), >= 7:1 (AAA where possible).
- Screen reader testing with NVDA/VoiceOver.

### 17.10 Internationalization (i18n)
- All user-facing strings externalized from day one.
- RTL layout support from day one.
- Date/number/currency formatting using locale-aware libraries.
- Timezone handling: Store UTC, display local.
- Pluralization rules per language.

---

## 18. EXECUTION WORKFLOW (Master Sequence)

```
PHASE 0: PREPARATION
├── Receive artifact package from Skill 01
├── Verify all 35+ artifacts present and valid
└── Identify current active phase

PHASE 1: AGENT SELECTION
├── User selects 2+ agents from role pool
├── Orchestrator confirms selections
└── Initialize agent workspaces

PHASE 2: ONBOARDING
├── Deliver system knowledge package to all agents
├── Run knowledge verification (Section 3.2)
├── Set up toolchains and environments
└── Collect onboarding sign-offs

PHASE 3: TASK DECOMPOSITION
├── Orchestrator decomposes phase plan into tasks
├── Build dependency DAG
├── Identify critical path and parallel sets
└── Produce initial task assignments

PHASE 4: SELF-SELECTION & NEGOTIATION
├── Round 1: Agents review tasks, rate interest/confidence
├── Round 2: Cross-agent negotiation (swaps, splits, new proposals)
├── Round 3: Orchestrator finalizes assignments with backup owners
└── Produce Final Task Assignment Matrix

PHASE 5: INDIVIDUAL ROADMAPS
├── Each agent creates individual implementation roadmap
├── Agents share roadmaps
├── Cross-review for conflicts and gaps
└── Agents revise roadmaps based on feedback

PHASE 6: UNIFIED ROADMAP
├── Orchestrator synthesizes individual roadmaps
├── Builds unified timeline with sync points
├── Identifies integration milestones
├── Validates resource allocation
└── Publishes UNIFIED-IMPLEMENTATION-ROADMAP.md

PHASE 7: IMPLEMENTATION (Iterative)
├── Daily execution cycle (Section 9.1)
├── Continuous testing (TDD)
├── Continuous documentation updates
├── Real-time progress monitoring
├── Automated quality gates
├── Nightly integration
└── Weekly retrospectives

PHASE 8: INTEGRATION & VALIDATION
├── Merge all feature branches to develop
├── Run full integration test suite
├── Run performance benchmarks
├── Run security scan
├── Run accessibility audit
├── AI-simulated user acceptance testing (5+ personas)
└── All agents sign off

PHASE 9: RELEASE PREPARATION
├── Cut release branch from develop
├── Run release candidate tests
├── Update all documentation
├── Update ENTRY.md with release notes
├── Prepare deployment runbook
└── Schedule go/no-go meeting

PHASE 10: POST-RELEASE
├── Monitor production metrics (48h minimum)
├── Collect feedback
├── Update roadmaps for next phase
├── Document lessons learned
├── Update skill files based on process improvements
└── Celebrate (mandatory)
```

---

## 19. PROMPT TEMPLATES FOR AGENTS

### Agent Onboarding Prompt
```
You are {AGENT-ID}, a specialized AI implementation agent.
Your primary domain: {DOMAIN}
Your secondary competencies: {LIST}

You are joining a project with the following system context:
[Insert system briefing from Skill 01 artifacts]

Your responsibilities:
1. Understand the ENTIRE system, not just your domain
2. Know your tasks AND all other agents' tasks
3. Implement with TDD, following DEV-RULES.md
4. Communicate via structured channels
5. Update documentation continuously

Please produce:
1. System Comprehension Summary (max 500 words)
2. Answers to 5 verification questions
3. Interdependency Map showing how your work connects to others
```

### Task Assignment Prompt
```
You have been assigned the following tasks:
[Insert task list]

Please produce a Task Review Document (Section 5.1) with:
- Interest and confidence ratings for each task
- Proposed swaps (if any)
- Proposed splits (if any)
- New task proposals (if any)
- Concerns and blockers
```

### Implementation Prompt
```
Implement TASK-{ID}: {TITLE}

Context:
- Acceptance Criteria: [LIST]
- Dependencies: [LIST]
- Affected APIs: [LIST]
- DB Migrations Required: [YES/NO]
- Feature Flag: [NAME]

Requirements:
1. Write failing tests FIRST (TDD)
2. Follow DEV-RULES.md coding standards
3. Handle all error cases
4. Add structured logging
5. Security review: input validation, auth checks
6. Update relevant documentation
7. Commit with conventional commit format

Deliverables:
- Source code
- Tests (unit + integration)
- Documentation updates
- PR description following template
```

### Cross-Review Prompt
```
Review the implementation roadmap from {AGENT-ID}.

Your task:
1. Identify conflicts with your roadmap
2. Check sync point alignment
3. Validate dependency realism
4. Flag duplicate efforts or gaps
5. Suggest improvements

Produce ROADMAP-REVIEW-{AGENT-ID}.md
```

---

## 20. QUALITY VALIDATION CHECKLIST

Before declaring skill execution complete, verify:

- [ ] At least 2 agents selected and onboarded
- [ ] All agents passed knowledge verification
- [ ] Task decomposition complete with DAG
- [ ] Self-selection and negotiation completed
- [ ] Final Task Assignment Matrix published
- [ ] Individual roadmaps created and cross-reviewed
- [ ] Unified Implementation Roadmap published
- [ ] Git strategy configured (branching, commits, hooks, PR template)
- [ ] Conflict prevention strategies active
- [ ] Daily execution cycle established
- [ ] Monitoring dashboard active
- [ ] Quality gates defined and enforced
- [ ] Documentation update protocol active
- [ ] Migration strategy documented
- [ ] Rollback procedures documented
- [ ] Incident response process defined
- [ ] All gaps identified and filled
- [ ] Prompt templates ready for use

---

## 21. VERSION HISTORY

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0.0 | 2026-08-15 | Initial release | Orchestrator |

---

*End of Skill File*
