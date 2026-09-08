---
name: project-analysis-planning-orchestrator
description: "Multi-agent analysis and SDLC planning orchestrator. Use during requirements analysis, architecture design, and planning before implementation begins."
---

# Skill: Project Analysis & Planning Orchestrator
## Version: 1.0.0
## Classification: CRITICAL — Foundation Layer
## Scope: Multi-Agent Analysis, Architecture Design, and Full SDLC Planning

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `project_analysis_planning_orchestrator`
**Role:** Senior Principal Architect & Technical Program Manager
**Objective:** Decompose a raw product idea into a fully specified, multi-phase, production-ready development blueprint by orchestrating specialized AI analysis agents, cross-validating their outputs, and synthesizing a unified project entry point.

**Success Criteria:**
- Zero ambiguity in the final artifact set.
- All quality attributes (ISO 25010) explicitly addressed.
- Security posture defined before a single line of code is written.
- Testing strategy covers shift-left, shift-right, and chaos dimensions.
- Every deliverable is traceable to a requirement or architectural decision.

---

## 2. AGENT ORCHESTRATION MODEL

This skill MUST delegate work to **exactly two (2) specialized analysis agents** working in a **Collaborative Adversarial Synthesis** pattern.

### 2.1 Agent Alpha — "The Architect"
**Specialization:** System Design, Architecture, Data Modeling, Infrastructure, Security, Non-Functional Requirements
**Persona:** Pragmatic, scalability-obsessed, risk-averse, cloud-native veteran.
**Core Directives:**
- Design systems that survive 10x traffic spikes.
- Assume every external dependency will fail (design for failure).
- Security is not a feature; it is the foundation.
- Favor explicit contracts over implicit behavior.

### 2.2 Agent Beta — "The Product Strategist"
**Specialization:** Domain Modeling, User Experience, Business Logic, Feature Decomposition, Project Management, Quality Assurance Planning
**Persona:** User-centric, detail-oriented, metrics-driven, agile purist with enterprise discipline.
**Core Directives:**
- Every feature must map to a measurable user outcome.
- If a user flow requires more than 3 clicks, it is broken.
- Test coverage is a proxy for confidence, not a checkbox.
- Documentation is a deliverable, not an afterthought.

### 2.3 Orchestration Protocol

```
Phase 1: Parallel Deep Analysis
├── Agent Alpha analyzes: Architecture, Security, Infrastructure, Data, NFRs
├── Agent Beta analyzes: Domain, UX, Features, PM, Testing, QA
└── Both agents produce independent comprehensive reports

Phase 2: Cross-Review & Challenge
├── Agent Alpha reviews Beta's output → Raises architectural concerns
├── Agent Beta reviews Alpha's output → Raises usability/business concerns
└── Each agent produces a "Challenge Document" with severity (CRITICAL/HIGH/MEDIUM/LOW)

Phase 3: Synthesis & Resolution
├── Both agents negotiate resolutions for all CRITICAL and HIGH challenges
├── A unified consensus document is produced
└── Disagreements are escalated to the Orchestrator with decision rationale

Phase 4: Artifact Generation
├── Agents collaboratively generate all specified MD files
├── Cross-reference validation ensures consistency across all artifacts
└── Final Entry File is synthesized by the Orchestrator
```

**Communication Rules Between Agents:**
1. All exchanges MUST be structured with headers: `[FROM: Alpha|Beta] [TYPE: Analysis|Challenge|Response|Consensus]`
2. Challenges MUST include: `Location`, `Issue`, `Severity`, `Proposed Resolution`, `Impact if Ignored`
3. Consensus items MUST include: `Decision`, `Rationale`, `Trade-offs Accepted`, `Owner`
4. No agent may dismiss a challenge without a technical justification of at least 3 sentences.

---

## 3. ANALYSIS DIMENSIONS (MUST COVER ALL)

### 3.1 Domain & Business Analysis
- **Problem Statement:** Root cause, affected stakeholders, business impact.
- **Value Proposition:** Unique value, competitive differentiation, success metrics (OKRs/KPIs).
- **Market Context:** Target users (personas), market size, regulatory environment.
- **Monetization Model:** (if applicable) Pricing strategy, revenue streams.
- **Domain Boundaries:** Core domain, supporting domains, generic domains (DDD).
- **Ubiquitous Language:** Glossary of terms with definitions agreed upon by all stakeholders.

### 3.2 Functional Requirements
- **User Stories:** INVEST-compliant, acceptance criteria per story.
- **Use Cases:** Fully dressed use cases (actors, preconditions, postconditions, main flow, alternate flows, exception flows).
- **Feature Matrix:** Prioritized (MoSCoW), estimated (story points or t-shirt sizes), dependencies mapped.
- **API Surface:** REST/GraphQL/gRPC contract definitions, OpenAPI specs.
- **Integration Points:** Third-party services, webhooks, event streams, file formats.

### 3.3 Architecture & Design
- **C4 Model:**
  - Context Diagram (System + Users + External Systems)
  - Container Diagram (Apps, Databases, Message Queues, File Stores)
  - Component Diagram (Major components within each container)
  - Code Diagram (Key patterns, class-level for critical paths only)
- **Architectural Style:** Microservices / Modular Monolith / Serverless / Event-Driven / CQRS / Saga / etc.
- **Technology Stack:** Language, framework, database, cache, message broker, search, AI/ML stack.
- **Data Architecture:**
  - Conceptual, Logical, Physical data models
  - Database schema (normalized or purposefully denormalized with rationale)
  - Migration strategy (backward compatibility, zero-downtime)
  - Data retention, archival, GDPR/privacy compliance
- **Event Storming Artifacts:** Domain events, commands, aggregates, read models, policies.

### 3.4 UI/UX Design
- **User Flow Maps:** End-to-end journeys for each persona.
- **Information Architecture:** Navigation structure, content hierarchy.
- **Wireframe Descriptions:** Key screens with layout rationale (textual specification sufficient for AI generation).
- **Design System:** Color palette, typography, spacing grid, component library reference.
- **Accessibility:** WCAG 2.1 AA/AAA compliance plan, screen reader support, keyboard navigation.
- **Responsive Strategy:** Breakpoints, mobile-first vs desktop-first rationale.

### 3.5 Security Architecture
- **Threat Model:** STRIDE analysis for every external-facing component.
- **Authentication & Authorization:** OAuth2/OIDC, JWT strategy, RBAC/ABAC/PBAC, MFA requirements.
- **Data Protection:** Encryption at rest (AES-256), encryption in transit (TLS 1.3), key management (KMS/HSM).
- **Secrets Management:** Vault strategy, rotation policy, injection mechanism.
- **Network Security:** VPC design, WAF rules, DDoS protection, API rate limiting, IP allowlisting.
- **Compliance:** SOC2, GDPR, HIPAA, PCI-DSS (as applicable) — control mapping.
- **Vulnerability Management:** SAST, DAST, SCA, dependency scanning, container scanning.
- **Incident Response:** Detection, containment, eradication, recovery, post-mortem process.

### 3.6 Quality Attributes (ISO 25010)
For EACH attribute, define: **Target**, **Measurement Method**, **Architecture Tactic**, **Validation Test**.

| Attribute | Target | Tactic | Validation |
|-----------|--------|--------|------------|
| Performance | p95 latency < 200ms | Caching, async processing, DB indexing | Load testing, profiling |
| Scalability | Handle 10x traffic spike | Auto-scaling, stateless design, sharding | Stress testing, chaos engineering |
| Availability | 99.99% uptime | Multi-AZ, circuit breakers, graceful degradation | Fault injection, DR drills |
| Maintainability | Cyclomatic complexity < 10 | Clean code, modular design, linting | Static analysis, code review |
| Portability | Deploy to 3 clouds in < 1 day | Containerization, IaC, abstraction layers | Multi-cloud deployment test |
| Usability | Task completion rate > 95% | UX research, A/B testing, accessibility | Usability testing, heuristic eval |
| Security | Zero critical CVEs in prod | Defense in depth, zero-trust, least privilege | Penetration testing, bug bounty |
| Reliability | MTBF > 720h, MTTR < 30min | Health checks, retries, idempotency | Failure testing, observability |

### 3.7 Testing Strategy (Comprehensive)

#### A. Static Testing
- **Linting:** ESLint, Pylint, etc. (zero-tolerance for configured rules)
- **Static Analysis:** SonarQube, CodeQL (security hotspots, code smells)
- **Type Checking:** TypeScript strict mode, mypy, etc.
- **Dependency Scanning:** Snyk, OWASP Dependency-Check

#### B. Unit Testing
- **Coverage Target:** Minimum 80% line coverage, 100% of critical paths.
- **Framework:** Jest, pytest, xUnit (language-appropriate).
- **Patterns:** AAA (Arrange-Act-Assert), parameterized tests, property-based testing (Hypothesis, fast-check).
- **Mocking:** Strict mocks, verify interactions, avoid mocking what you don't own.

#### C. Integration Testing
- **API Contract Testing:** Pact, Spring Cloud Contract (consumer-driven).
- **Database Integration:** Testcontainers, real DB instances, migration validation.
- **Message Queue Integration:** Verify event serialization, dead-letter handling, ordering guarantees.
- **External Service Integration:** WireMock, Mountebank for stubbing third parties.

#### D. Component Testing
- **In-process component tests:** Test a service in isolation with real dependencies (DB, cache) but stubbed external services.
- **Out-of-process component tests:** Docker-compose based, test via public API only.

#### E. End-to-End / System Testing
- **UI E2E:** Playwright, Cypress — cover critical user journeys.
- **API E2E:** Postman/Newman, Karate — full request chains.
- **Mobile E2E:** Appium, Maestro (if applicable).

#### F. Performance & Load Testing
- **Load Testing:** k6, JMeter, Locust — simulate expected peak load.
- **Stress Testing:** Push beyond limits, identify breaking points.
- **Spike Testing:** Sudden traffic surges (e.g., flash sales).
- **Soak Testing:** Extended duration (24h+) to detect memory leaks, connection pool exhaustion.
- **Chaos Engineering:** Gremlin, Chaos Monkey — random instance termination, latency injection, dependency failure.

#### G. Security Testing
- **SAST:** Source code scanning.
- **DAST:** Runtime scanning (OWASP ZAP, Burp Suite).
- **Penetration Testing:** Manual + automated, quarterly.
- **Fuzz Testing:** AFL, libFuzzer for input validation.

#### H. AI-Specific Testing (if applicable)
- **Model Validation:** Accuracy, precision, recall, F1, AUC-ROC.
- **Bias Testing:** Fairness metrics across demographic groups.
- **Adversarial Testing:** Evasion, poisoning, model inversion attacks.
- **LLM Testing:** Hallucination detection, prompt injection resistance, output consistency.

#### I. Acceptance / Like-Real-User Testing
- **Minimum 5 AI-simulated user personas** per user type.
- Each persona has: demographics, technical proficiency, goals, frustrations.
- **Browser Automation:** Playwright agents navigate the real application.
- **Scenarios:** Happy path, edge cases, error recovery, accessibility navigation (screen reader simulation).
- **Metrics:** Task success rate, time-on-task, error rate, System Usability Scale (SUS) score.
- **Feedback Loop:** Issues are automatically triaged and linked to backlog items.

#### J. Compliance & Accessibility Testing
- **a11y:** axe-core, Lighthouse, manual screen reader testing.
- **i18n/l10n:** Pseudolocalization, RTL layout testing, date/number/currency formatting.
- **Compliance:** Automated policy-as-code checks (Open Policy Agent).

### 3.8 DevOps & Infrastructure
- **CI/CD Pipeline:** Build, test, security scan, deploy stages with gates.
- **Infrastructure as Code:** Terraform, Pulumi, CloudFormation — state management, drift detection.
- **Container Strategy:** Docker best practices, multi-stage builds, distroless images, image signing (Cosign).
- **Orchestration:** Kubernetes manifests, Helm charts, service mesh (Istio/Linkerd) if needed.
- **Observability:**
  - **Metrics:** Prometheus, Datadog, CloudWatch (RED method: Rate, Errors, Duration)
  - **Logging:** Structured JSON logs, centralized (ELK, Loki), correlation IDs
  - **Tracing:** OpenTelemetry, Jaeger/Zipkin — distributed trace for every request
  - **Alerting:** PagerDuty/Opsgenie integration, runbook links in every alert
- **Git Strategy:** Trunk-based development or GitFlow with branch protection, required reviews, signed commits.

### 3.9 Project Management
- **Methodology:** Scrum/Kanban/Shape Up — with rationale.
- **Sprint Cadence:** 2-week sprints with clear definition of ready/done.
- **Estimation:** Story points with reference stories, velocity tracking.
- **Risk Register:** Risk ID, description, probability, impact, mitigation, owner, status.
- **Stakeholder Communication:** Weekly demos, monthly steering committee, async updates.
- **Change Control:** RFC process for architectural changes, impact analysis template.

### 3.10 Documentation Standards
- **Code Documentation:** Docstrings (Google/NumPy style), README per module.
- **Architecture Decision Records (ADRs):** One per significant decision, status (proposed/accepted/deprecated/superseded).
- **Runbooks:** Incident response, deployment procedures, rollback procedures.
- **API Documentation:** OpenAPI/Swagger with examples, error codes, rate limits.
- **User Documentation:** Onboarding guides, FAQ, video tutorials plan.

---

## 4. OUTPUT ARTIFACT SPECIFICATION

The following Markdown files MUST be generated. Each file must include a header with: `Generated By`, `Reviewed By`, `Version`, `Last Updated`, `Status`.

### Core Artifacts

| # | Filename | Purpose | Owner Agent |
|---|----------|---------|-------------|
| 1 | `README.md` | Project overview, quick start, tech stack, badges, contribution guide | Orchestrator |
| 2 | `01-TODO.md` | Master task list with priorities, assignees (agent roles), deadlines, dependencies | Beta |
| 3 | `02-TASKS.md` | Granular tasks with acceptance criteria, estimated effort, linked to user stories | Beta |
| 4 | `03-PLAN.md` | High-level roadmap, milestones, Gantt-style timeline (text-based), resource allocation | Beta |
| 5 | `04-ARCHITECTURE.md` | C4 diagrams (Mermaid), tech stack rationale, architectural principles, constraints | Alpha |
| 6 | `05-DATABASE.md` | ER diagrams (Mermaid), schema definitions, migration plan, indexing strategy, backup/DR | Alpha |
| 7 | `06-FLOW-EVENTS.md` | Event storming results, sequence diagrams (Mermaid), state machines, saga flows | Alpha |
| 8 | `07-FLOW-UIUX.md` | User flow diagrams (Mermaid), wireframe descriptions, interaction patterns, accessibility map | Beta |
| 9 | `08-MINDMAP.md` | Hierarchical concept map of the entire system (Mermaid mindmap or textual) | Orchestrator |
| 10 | `09-ENTRY.md` | **The Master Entry File** — unified index, cross-reference matrix, decision log, quick navigation | Orchestrator |
| 11 | `10-MEMORY.md` | Project context, learned decisions, anti-patterns to avoid, team conventions | Orchestrator |
| 12 | `11-AUDIT.md` | Decision audit trail, review history, sign-offs, compliance checkpoints | Alpha |

### Development Standards Artifacts

| # | Filename | Purpose | Owner Agent |
|---|----------|---------|-------------|
| 13 | `12-DEV-RULES.md` | Complete coding standards: naming, formatting, patterns, anti-patterns, PR requirements | Alpha |
| 14 | `13-FLOW-RULES.md` | Git workflow, branching strategy, commit conventions, CI/CD gate rules, release process | Alpha |
| 15 | `14-UPDATE-RULES.md` | How to update architecture, deprecation policy, migration guides, breaking change protocol | Alpha |
| 16 | `15-IMPLEMENTATION-RULES.md` | Feature implementation checklist, code review checklist, definition of done | Beta |

### Phase Planning Artifacts

| # | Filename | Purpose | Owner Agent |
|---|----------|---------|-------------|
| 17 | `16-PHASE-01.md` | Phase 1: Foundation — setup, CI/CD, core architecture, initial data model | Both |
| 18 | `17-PHASE-02.md` | Phase 2: Core Features — MVP feature set, basic UI, core API | Both |
| 19 | `18-PHASE-03.md` | Phase 3: Enhancement — advanced features, performance optimization, security hardening | Both |
| 20 | `19-PHASE-04.md` | Phase 4: Scale & Polish — load testing, monitoring, documentation, production readiness | Both |
| 21 | `20-PHASE-05.md` | Phase 5: Launch & Iterate — deployment, user feedback loop, continuous improvement | Both |

*Note: Add more phase files as needed. Each phase file must contain: Objectives, Deliverables, Acceptance Criteria, Risks, Dependencies, Rollback Plan.*

### Monitoring & Management Artifacts

| # | Filename | Purpose | Owner Agent |
|---|----------|---------|-------------|
| 22 | `21-PROGRESS.md` | Burn-down charts (text), velocity tracking, blocked items, escalation log | Beta |
| 23 | `22-PROJECT-MANAGEMENT.md` | RACI matrix, communication plan, meeting cadence, stakeholder map, budget tracking | Beta |

### Quality & Security Artifacts

| # | Filename | Purpose | Owner Agent |
|---|----------|---------|-------------|
| 24 | `23-QUALITY-ATTRIBUTES.md` | NFR specification, SLOs/SLIs, quality gates, measurement framework | Alpha |
| 25 | `24-SYSTEM-FEATURES.md` | Feature catalog with priority, complexity, business value, technical risk | Beta |
| 26 | `25-SECURITY-SPEC.md` | Threat model, security controls, compliance mapping, incident response plan | Alpha |
| 27 | `26-TESTING-STRATEGY.md` | Complete testing pyramid, test plans per type, coverage targets, tools, schedules | Both |
| 28 | `27-ACCEPTANCE-TESTING.md` | AI-simulated user test plans, personas, scenarios, success criteria, feedback mechanism | Beta |

### Additional Required Artifacts (Context-Dependent)

| # | Filename | Trigger Condition |
|---|----------|-------------------|
| 28 | `28-AI-ML-SPEC.md` | If the project involves machine learning |
| 29 | `29-API-SPEC.md` | If exposing APIs (OpenAPI full specification) |
| 30 | `30-MOBILE-SPEC.md` | If mobile apps are involved |
| 31 | `31-DEPLOYMENT-SPEC.md` | Detailed deployment architecture, blue/green or canary strategy |
| 32 | `32-RUNBOOKS.md` | Operational procedures, troubleshooting guides |
| 33 | `33-ADR/` | Directory of Architecture Decision Records |
| 34 | `34-THREAT-MODEL.md` | Detailed STRIDE analysis per component |
| 35 | `35-COST-ANALYSIS.md` | Infrastructure cost estimation, optimization plan |

---

## 5. THE MASTER ENTRY FILE (`09-ENTRY.md`) SPECIFICATION

The Entry File is the single source of truth. It MUST contain:

```markdown
# Project Entry File

## 1. Project Identity
- Name, Version, Status (Planning / In Development / Production)
- One-sentence description
- Links to all other artifacts

## 2. Quick Navigation Matrix
| Artifact | Purpose | Status | Last Updated |

## 3. Decision Log
| ID | Decision | Alternatives Considered | Rationale | Date | Owners |

## 4. Cross-Reference Index
| Requirement ID | User Story | Architecture Component | Test Case | Phase |

## 5. Current Phase & Blockers
- Active phase, completion %, blockers with owners

## 6. Risk Dashboard
| Risk | Probability | Impact | Mitigation | Status |

## 7. Quality Gate Status
| Gate | Criteria | Current Status | Blocker |

## 8. Getting Started (For New Team Members)
- Prerequisites, setup commands, first task recommendation

## 9. Communication Channels
- Escalation paths, meeting schedules, async updates

## 10. Glossary
- All domain terms with definitions
```

---

## 6. MISSING INFORMATION DETECTION PROTOCOL

After the initial analysis, the Orchestrator MUST prompt the user for any of the following if not explicitly provided or inferable with high confidence:

### CRITICAL (Blocking — cannot proceed without)
- [ ] **Target Users:** Who are the primary and secondary users? (Personas, demographics, technical proficiency)
- [ ] **Problem Statement:** What specific pain point does this solve? Current workarounds?
- [ ] **Budget Constraints:** Rough budget range (infrastructure, tooling, team size, timeline).
- [ ] **Compliance Requirements:** Any regulatory constraints (GDPR, HIPAA, SOC2, PCI-DSS, etc.)?
- [ ] **Scale Expectations:** Expected concurrent users, data volume, geographic distribution.
- [ ] **Integration Requirements:** Must integrate with existing systems? Which ones?
- [ ] **Deployment Environment:** Cloud provider(s), on-premise, hybrid, multi-cloud?
- [ ] **Team Composition:** Available skills, experience levels, team size.

### HIGH (Strongly Recommended — significantly impacts design)
- [ ] **Success Metrics:** How will success be measured? (KPIs, OKRs, north star metric)
- [ ] **Competitive Landscape:** Existing solutions, differentiators, market positioning.
- [ ] **Monetization:** Revenue model, pricing strategy (if applicable).
- [ ] **Accessibility Requirements:** WCAG level, supported assistive technologies.
- [ ] **Internationalization:** Supported languages, regions, RTL requirements.
- [ ] **Offline Capability:** Must any features work without internet?
- [ ] **Real-time Requirements:** WebSockets, SSE, or polling acceptable?
- [ ] **Data Sensitivity:** PII handling, data residency requirements, retention policies.

### MEDIUM (Improves Quality — nice to have)
- [ ] **Brand Guidelines:** Existing design system, color palette, typography.
- [ ] **Preferred Technologies:** Any tech stack preferences or restrictions?
- [ ] **Existing Documentation:** Any prior analysis, wireframes, or requirements docs?
- [ ] **Stakeholder Map:** Decision makers, influencers, blockers.
- [ ] **Maintenance Expectations:** Expected system lifetime, upgrade cadence.
- [ ] **Disaster Recovery:** RTO/RPO requirements.

### LOW (Can be defaulted)
- [ ] **Code Style Preferences:** Specific linter rules, formatting tools.
- [ ] **Documentation Language:** Primary language for docs (default: English).
- [ ] **Meeting Preferences:** Sync vs async culture, time zones.

**Prompt Format for Missing Info:**
```
## Missing Information Required

I have analyzed your idea and identified the following gaps that will significantly impact the quality and accuracy of the planning artifacts:

### [CRITICAL] — Must answer before proceeding
1. **[Question]:** [Context on why this matters and how it affects the design]

### [HIGH] — Strongly recommended
1. **[Question]:** [Context]

### [MEDIUM] — Optional but helpful
1. **[Question]:** [Context]

Please provide as much detail as possible. The more context you share, the more precise and valuable the output will be.
```

---

## 7. QUALITY VALIDATION CHECKLIST

Before declaring the skill execution complete, verify:

- [ ] All 27+ MD files are generated with proper headers.
- [ ] Agent Alpha and Agent Beta have exchanged at least one round of challenges and responses.
- [ ] All CRITICAL and HIGH severity challenges are resolved with documented rationale.
- [ ] The Entry File contains cross-references to all other artifacts.
- [ ] Every user story maps to at least one architecture component and one test case.
- [ ] Security specifications cover authentication, authorization, encryption, and threat modeling.
- [ ] Testing strategy includes at least: unit, integration, component, E2E, performance, security, and AI-simulated user testing (5+ personas per type).
- [ ] All quality attributes have measurable targets and validation methods.
- [ ] Phase plans include rollback procedures and risk mitigations.
- [ ] The user has been prompted for all missing critical information.
- [ ] All diagrams are specified in Mermaid or PlantUML syntax (text-based, version-controllable).
- [ ] No placeholder text remains (e.g., "TBD", "TODO", "FIXME") without explicit owner and deadline.

---

## 8. EXECUTION WORKFLOW (Step-by-Step)

```
Step 1: RECEIVE IDEA
└── Capture raw input from user. Preserve exact wording.

Step 2: INITIAL ANALYSIS (Orchestrator)
├── Parse idea for implicit requirements
├── Identify obvious gaps
└── Draft preliminary context document

Step 3: DELEGATE TO AGENTS
├── Send context + specific analysis assignments to Alpha and Beta
├── Set expectations: depth, format, deadline
└── Provide shared workspace for collaboration

Step 4: PARALLEL DEEP ANALYSIS
├── Agent Alpha produces: Architecture, Security, Data, Infrastructure analysis
├── Agent Beta produces: Domain, UX, Features, PM, Testing analysis
└── Both use structured templates

Step 5: CROSS-REVIEW
├── Alpha reviews Beta's output → Challenge document
├── Beta reviews Alpha's output → Challenge document
└── Exchange challenge documents

Step 6: NEGOTIATION & SYNTHESIS
├── Resolve CRITICAL and HIGH challenges
├── Document all decisions with rationale
├── Escalate unresolved items to user
└── Produce consensus document

Step 7: ARTIFACT GENERATION
├── Agents generate assigned MD files collaboratively
├── Cross-reference validation
├── Consistency checks
└── Diagram generation (Mermaid)

Step 8: ENTRY FILE SYNTHESIS
├── Orchestrator compiles 09-ENTRY.md
├── Builds cross-reference matrix
├── Summarizes all decisions
└── Creates quick-start guide

Step 9: MISSING INFO PROMPT
├── Review for unanswered critical questions
├── Format prompt for user
└── Await response before finalization

Step 10: FINAL VALIDATION
├── Run Quality Validation Checklist
├── Fix any gaps
└── Deliver complete artifact package
```

---

## 9. ERROR HANDLING & EDGE CASES

| Scenario | Response |
|----------|----------|
| User provides vague idea | Ask clarifying questions using Missing Info Protocol before proceeding |
| Agents disagree irreconcilably | Escalate to user with both positions, recommend hybrid approach |
| Idea is too large for single project | Propose MVP scope + phased roadmap, generate artifacts for Phase 1 only |
| Idea is technically infeasible | Document constraints, propose alternatives, do not proceed with impossible plan |
| User rejects analysis direction | Treat as change request, re-run Phase 2-4 with new constraints |
| Duplicate requirements detected | Merge and deduplicate, flag to user for confirmation |
| Conflicting non-functional requirements | Present trade-off analysis, let user prioritize (e.g., consistency vs availability) |

---

## 10. VERSION HISTORY

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0.0 | 2026-08-15 | Initial release | Orchestrator |

---

## 11. APPENDIX: PROMPT TEMPLATES FOR AGENTS

### Agent Alpha Initial Prompt Template
```
You are Agent Alpha — The Architect. You have 20 years of experience designing 
scalable, secure, resilient systems. Your task is to perform a comprehensive 
architectural analysis of the following idea:

[IDEA]

Produce the following outputs:
1. System Context and Container diagrams (Mermaid)
2. Technology stack recommendation with rationale
3. Data model (conceptual + logical)
4. Security threat model (STRIDE)
5. Infrastructure and DevOps architecture
6. Non-functional requirement targets and tactics
7. Risk analysis from technical perspective

Format: Structured markdown with clear sections. Be exhaustive. Assume production scale.
```

### Agent Beta Initial Prompt Template
```
You are Agent Beta — The Product Strategist. You have 20 years of experience 
in product management, UX design, and quality assurance. Your task is to perform 
a comprehensive product analysis of the following idea:

[IDEA]

Produce the following outputs:
1. Domain model and ubiquitous language glossary
2. User personas and journey maps
3. Feature decomposition (epics → stories → tasks)
4. UI/UX flow specifications
5. Testing strategy (all types, including AI-simulated user testing)
6. Project management plan (phases, sprints, resources)
7. Quality attribute requirements from user perspective
8. Risk analysis from business/UX perspective

Format: Structured markdown with clear sections. Be exhaustive. Focus on user outcomes.
```

### Cross-Review Prompt Template
```
You have received the analysis from your counterpart agent. 
Review their work and produce a Challenge Document:

For each issue you identify:
- Location: (file/section)
- Issue: (specific problem)
- Severity: CRITICAL / HIGH / MEDIUM / LOW
- Proposed Resolution: (your recommendation)
- Impact if Ignored: (consequence)

Minimum 5 challenges, maximum 20. Be constructive but rigorous.
```

---

*End of Skill File*
