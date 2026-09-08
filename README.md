# 🚀 Delegate Skills — Multi-Agent SDLC Orchestration Platform

> **Version:** 1.0.0  
> **Author:** Eng. Salah Allsayani — Senior Full Stack Software Engineer & AI Engineer  
> **Email:** eng.salahalssayani@gmail.com  
> **University:** Taiz University, Alsaeed Faculty of Engineering & IT  
> **City:** Taiz, **Country:** Yemen  
> **License:** [MIT License](LICENSE)

---

## 🏷️ Tags

| Category | Tags |
|----------|------|
| **AI & Machine Learning** | `ai`, `ai-agents`, `artificial-intelligence`, `machine-learning`, `llm`, `large-language-models`, `ai-engineer`, `ai-powered`, `neural-networks`, `prompt-engineering` |
| **Multi-Agent & Orchestration** | `multi-agent`, `agent-framework`, `agent-orchestration`, `multi-agent-system`, `orchestration`, `agent-swarm`, `collaborative-ai`, `agent-communication` |
| **Software Development** | `software-development`, `software-engineering`, `sdlc`, `software-architecture`, `system-design`, `full-stack`, `web-development`, `backend`, `frontend` |
| **DevOps & Infrastructure** | `devops`, `devops-engineering`, `cloud-native`, `cloud-computing`, `microservices`, `containerization`, `kubernetes`, `ci-cd`, `infrastructure-as-code`, `deployment` |
| **Programming & Models** | `programming`, `models`, `ai-models`, `token`, `tokens`, `context-window`, `embedding`, `vector-database`, `rag`, `model-serving` |
| **Security & Compliance** | `security`, `cybersecurity`, `information-security`, `compliance`, `soc2`, `gdpr`, `hipaa`, `pci-dss`, `iso27001`, `nist`, `vulnerability-management`, `penetration-testing` |
| **Data & Analytics** | `data-engineering`, `data-ops`, `databases`, `data-pipelines`, `data-quality`, `ml-ops`, `data-lineage`, `big-data`, `analytics` |
| **Testing & Quality** | `testing`, `quality-assurance`, `test-automation`, `tdd`, `bdd`, `unit-testing`, `integration-testing`, `e2e-testing`, `quality-gates`, `code-review` |
| **Project Management** | `project-management`, `agile`, `scrum`, `kanban`, `planning`, `roadmap`, `stakeholder-management`, `risk-management`, `budget-tracking` |
| **Documentation & Knowledge** | `documentation`, `knowledge-base`, `technical-writing`, `markdown`, `wiki`, `onboarding`, `knowledge-management` |
| **Platform & Tools** | `open-source`, `open-source-software`, `mit-license`, `github`, `platform`, `developer-tools`, `automation`, `workflow-engine`, `skill-management` |
| **Specialized** | `agent-health`, `context-management`, `phase-transition`, `technical-debt`, `evolution`, `refactoring`, `deprecation`, `cost-optimization`, `finops`, `experimentation`, `a-b-testing`, `canary-deployment`, `feature-flags` |

---

## ⚡ Installation

Choose your preferred method below — both install the complete Delegate Skills ecosystem with all 16 skills.

### 🚀 Method 1: npx from GitHub (Works Now!)

```bash
# Run the installer directly from GitHub (no install needed)
npx github:salahAlssayani/delegate-skills

# Or use the shorter form with the package name
npx -p delegate-skills delegate-skills
```

This automatically:
- ✅ Clones the latest repository from GitHub
- ✅ Loads all 16 skill files
- ✅ Verifies all files are intact
- ✅ Creates a `skills/` symlink
- ✅ Prints next-step instructions

**Note:** You need Node.js and Git installed. npx will clone the repo to a temporary directory and run the setup script.

### 📦 Method 2: npm Install (Requires Publishing)

```bash
# This requires the package to be published to npm first.
# To publish: run `npm publish` from the repo directory.

# Install and run
npx delegate-skills

# Or install globally
npm install -g delegate-skills
delegate-skills
```

### 📥 Method 3: Git Clone

```bash
# 1. Clone the repository
git clone git@github.com:salahAlssayani/delegate-skills.git

# 2. Navigate into the project
cd delegate-skills

# 3. Run the installer
node bin/setup.js
```

That's it — all 16 skill files, LICENSE, CONTRIBUTING.md, and issue templates are now ready.

---

### 🔧 Post-Installation — Load All Skills

```bash
# Load every SKILL.md into your agent system at once
for f in */SKILL.md skill_agent_entry_reference.md; do
  echo "Loading: $f"
  cat "$f"
done
```

### Load Specific Skills

```bash
cat skills/master-entry-orchestrator/SKILL.md       # Skill 00 (Root)
cat skills/project-analysis-planning-orchestrator/SKILL.md  # Skill 01
cat skills/parallel-multi-agent-implementation-orchestrator/SKILL.md  # Skill 02
```

### Verify Installation

```bash
# Confirm 16 skill directories exist
ls -d */ | wc -l
# Should output: 16

# Verify all SKILL.md files have consistent version
grep "Version:" */SKILL.md | sort
# All should show Version: 1.0.0
```

### First Agent Declaration

After installation, declare yourself to the system:

```
COMMAND: DECLARE
agent_id: DEVELOPER-001
role: ARCHITECT
model: gpt-4
context_window: 128000
specializations:
  primary: software-architecture
  secondary: security
  tertiary: data-engineering
capabilities:
  - 01: 9
  - 02: 8
  - 05: 7
  - 06: 8
constraints:
  max_complexity: COMPLEX
  work_style: COLLABORATIVE
```

After loading, declare yourself to the system:

```
COMMAND: DECLARE
agent_id: DEVELOPER-001
role: ARCHITECT
model: gpt-4
context_window: 128000
specializations:
  primary: software-architecture
  secondary: security
  tertiary: data-engineering
capabilities:
  - 01: 9
  - 02: 8
  - 05: 7
  - 06: 8
constraints:
  max_complexity: COMPLEX
  work_style: COLLABORATIVE
```

---

## 📌 Overview

**Delegate Skills** is a comprehensive, battle-tested ecosystem of **16 specialized AI agent skills** designed to orchestrate the entire Software Development Life Cycle (SDLC) through **parallel execution, multi-agent collaboration, and intelligent phase transitions**. This platform enables developers to delegate complex software engineering tasks to specialized AI agents that work in concert — analyzing, planning, implementing, deploying, operating, and evolving software systems with zero ambiguity and maximum efficiency.

Whether you're building a prototype, a customer-facing product, or an enterprise-grade system, Delegate Skills provides the meta-orchestration layer that ensures every agent knows exactly what to do, when to do it, and how to communicate with every other agent.

---

## 🎯 What Makes This Unique

| Capability | Description |
|---|---|
| **16 Specialized Skills** | Each skill handles a distinct SDLC phase or cross-cutting concern |
| **Parallel Multi-Agent Execution** | Fan out coding tasks across multiple AI agents simultaneously |
| **Phase Transition Gates** | Every transition between phases requires validated quality gates |
| **Adversarial Agent Synthesis** | Two agents independently analyze, then cross-review and challenge each other |
| **Self-Selection & Negotiation** | Agents review, challenge, and negotiate task assignments before coding begins |
| **Zero-Conflict Git Strategy** | Trunk-based development with feature environments, contract-first design, and automated conflict prevention |
| **Context-Aware Routing** | Automatic detection of project phase and routing to the correct skill |
| **Agent Health Monitoring** | Real-time drift detection, context management, and quality assurance |
| **Full Compliance Automation** | SOC 2, GDPR, HIPAA, PCI-DSS, ISO 27001, NIST CSF evidence collection |
| **FinOps & Cost Optimization** | Cloud cost monitoring, right-sizing, budget alerts, and waste elimination |
| **Experimentation Engine** | A/B testing, feature flags, canary releases, and statistical validation |
| **Documentation-as-Code** | Living knowledge base with auto-generation, freshness tracking, and semantic search |

---

## 🧩 The 16 Skills — Complete Inventory

### 🏛️ **Meta-Orchestration Layer**

| # | Skill | Description |
|---|-------|-------------|
| **00** | **Master Entry Orchestrator** | The root of all operations. Single unified entry point for every agent. Manages skill discovery, context routing, agent lifecycle, project profiles, and cross-skill communication. No agent operates without passing through this skill. |
| **07** | **Skill Governance & Meta-Management** | Governs the skill files themselves — versioning, dependency management, testing, composition, and deprecation. Ensures all skills evolve correctly and maintain compatibility. |

### 📐 **Planning & Analysis**

| # | Skill | Description |
|---|-------|-------------|
| **01** | **Project Analysis & Planning Orchestrator** | Decomposes a raw product idea into a fully specified, production-ready development blueprint. Uses two specialized agents (Agent Alpha: Architect, Agent Beta: Product Strategist) in a Collaborative Adversarial Synthesis pattern. Produces 35+ Markdown artifacts including C4 architecture diagrams, database schemas, security specs, testing strategies, and phase plans. |

### ⚡ **Execution**

| # | Skill | Description |
|---|-------|-------------|
| **02** | **Parallel Multi-Agent Implementation Orchestrator** | Executes a fully planned project by orchestrating multiple specialized AI implementation agents in parallel. Features self-selection & negotiation protocol, unified implementation roadmaps, extreme Git strategy (zero-conflict by design), TDD enforcement, quality gates, and real-time monitoring. Supports 8 agent role profiles: Frontend, Backend, Data, Infra, Security, AI/ML, QA, Mobile. |

### 🔄 **Operations & Observability**

| # | Skill | Description |
|---|-------|-------------|
| **03** | **Operations & Observability Orchestrator** | Ensures production systems are observable, reliable, and recoverable. Implements RED/USE methods, distributed tracing (OpenTelemetry), structured logging, alerting (SEV-1 through SEV-4), incident response playbooks, SLO/SLI/error budget management, auto-scaling, and disaster recovery with 3 DR tiers. |
| **15** | **Multi-Environment Promotion** | Ensures code and configuration promote safely across environments (Local → Dev → Staging → Production). Features environment parity matrices, promotion gates, configuration management, data anonymization, per-PR ephemeral environments, and multi-level rollback strategies. |

### 📈 **Evolution & Quality**

| # | Skill | Description |
|---|-------|-------------|
| **04** | **Continuous Evolution & Technical Debt Management** | Prevents technical debt from accumulating to project collapse. Features debt quantification (scoring formula), architecture fitness functions, deprecation lifecycle (4 stages), refactoring sprints, knowledge decay management, and automated drift detection. |
| **05** | **Cross-Skill Phase Transition Orchestrator** | Ensures seamless transitions between skills (01→02→03→04). Validates artifact completeness before each transition, manages go/no-go gates (GATE-01 through GATE-04), handles feedback loops (implementation→planning replanning), and enables rolling replanning when discoveries invalidate plans. |
| **06** | **Agent Health, Context Management & Quality Assurance** | Ensures all AI agents operate at peak effectiveness. Tracks 7+ quality metrics per agent, detects 5 types of agent drift (quality, context, style, motivation, knowledge), manages context window budgeting, implements 4-level rotation protocol, and resolves conflicts through a 4-level escalation ladder. |

### 🔬 **Experimentation & Validation**

| # | Skill | Description |
|---|-------|-------------|
| **09** | **Experimentation, A/B Testing & Metrics-Driven Development** | Validates that implemented features deliver measurable business value. Features full experiment lifecycle (design → implementation → launch → analysis → decision), feature flag taxonomy and hygiene, canary/dark launch strategies, statistical validation (p < 0.05), segmentation analysis, and north star metric tracking. |

### 🔒 **Security & Compliance**

| # | Skill | Description |
|---|-------|-------------|
| **10** | **Security Operations (SecOps)** | Maintains continuous security posture through automated scanning, threat detection, vulnerability management, and incident response. Supports SAST/SCA/DAST/container scanning, defines vulnerability SLAs (CRITICAL: 8-hour total), implements incident classification (Class I-IV), and automates compliance evidence collection for SOC 2, GDPR, HIPAA, PCI-DSS. |
| **14** | **Compliance & Audit Automation** | Automates compliance evidence collection, enforces policies as code (Open Policy Agent), maintains immutable audit trails, and generates regulatory reports. Supports SOC 2, ISO 27001, GDPR, HIPAA, PCI-DSS, and NIST CSF frameworks with control mapping matrices. |

### 📊 **Data & Intelligence**

| # | Skill | Description |
|---|-------|-------------|
| **11** | **Data Operations (DataOps)** | Ensures data pipelines are reliable, data quality is high, data lineage is traceable, and ML models are monitored for drift. Features pipeline health metrics, data quality framework (6 dimensions), lineage documentation, ML ops lifecycle (5 stages), model drift detection, and GDPR/CCPA automation. |
| **12** | **Cost Optimization & FinOps** | Optimizes cloud and infrastructure spending. Features cost allocation tagging, optimization strategies (right-sizing, reserved capacity, waste elimination), budget alerts at 5 thresholds, cost-per-transaction tracking, and anomaly detection. |

### 📝 **Communication & Knowledge**

| # | Skill | Description |
|---|-------|-------------|
| **08** | **Stakeholder Communication & Reporting** | Bridges AI agent operations and human stakeholders. Features automated daily/weekly reports, risk escalation with business impact translation, demo preparation with auto-generated scripts, budget tracking with alerts, and RACI-based communication matrix for 6 stakeholder roles. |
| **13** | **Documentation-as-Code & Knowledge Base** | Transforms static documentation into a living, searchable, queryable knowledge base. Features documentation freshness scoring, auto-generation from code/IaC/tests, semantic indexing with vector search, FAQ auto-generation, and onboarding simulation testing. |

### 📚 **Reference**

| # | File | Description |
|---|------|-------------|
| **REF** | **Agent Entry Skill Reference** | Practical reference for any agent operating within the 16-skill ecosystem. Contains declaration protocol, skill routing matrix, command reference, agent lifecycle states, project profiles, quality gates, communication rules, context management, error handling, daily workflow, emergency protocols, and quick reference card. |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    SKILL 00: MASTER ENTRY ORCHESTRATOR            │
│                  (Root — All skills depend on this)               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│  │  SKILL 01 │───▶│  SKILL 02 │───▶│  SKILL 03 │───▶│  SKILL 04 │  │
│  │Planning  │    │Implement.│    │Operations│    │ Evolution │  │
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘  │
│       │                │                │                │      │
│       ▼                ▼                ▼                ▼      │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│  │  SKILL 05 │    │  SKILL 06 │    │  SKILL 09 │    │  SKILL 10 │  │
│  │Transition│    │ Agent Hlth │    │Experiments│    │ SecOps   │  │
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘  │
│                                                                 │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐  │
│  │  SKILL 11 │    │  SKILL 12 │    │  SKILL 13 │    │  SKILL 14 │  │
│  │ DataOps  │    │  FinOps  │    │Docs/KBase│    │Compliance│  │
│  └──────────┘    └──────────┘    └──────────┘    └──────────┘  │
│                                                                 │
│  ┌──────────┐    ┌──────────┐                                   │
│  │  SKILL 15 │    │  SKILL 07 │    ┌──────────┐                 │
│  │Env.Promot│    │ Governance │    │ REF:Agent │                 │
│  └──────────┘    └──────────┘    │ Entry Ref │                 │
│                                 └──────────┘                 │
└─────────────────────────────────────────────────────────────────┘
```

### Project Profile System

Based on project characteristics, the Master Entry Orchestrator automatically selects the appropriate skill profile:

| Profile | Active Skills | Agent Count | Use Case |
|---------|--------------|-------------|----------|
| **minimal** | 01, 02, 05, 06 | 2-3 | Internal tool, prototype |
| **standard** | 01, 02, 05, 06, 08, 13 | 3-5 | Customer-facing product |
| **enterprise** | 01–15 | 5-10 | Mission-critical system |
| **ai-native** | 01, 02, 05, 06, 09, 11, 13 | 4-7 | AI/ML product |
| **security-critical** | 01, 02, 05, 06, 10, 14, 15 | 4-7 | Fintech, healthcare |
| **data-intensive** | 01, 02, 05, 06, 11, 12, 13 | 4-7 | Analytics platform |
| **custom** | User-selected subset | Variable | Special requirements |

---

## 📦 Installation & Setup

### Prerequisites

- An AI agent platform that supports skill files (OpenAI, Anthropic, or any LLM-based agent system)
- Access to the skill files in this repository
- Basic familiarity with SDLC concepts and AI agent interaction patterns

### Quick Start — 30 Seconds

```
1. CLONE this repository
2. LOAD all SKILL.md files into your agent system
3. DECLARE your agent to Skill 00 (Master Entry Orchestrator)
4. RECEIVE your project profile and active skills
5. INVOKE the appropriate skill for your action
6. REPORT status after every task
```

### Installation Steps

```bash
# 1. Clone the repository
git clone <REPOSITORY_URL> delegate-skills

# 2. Navigate to the skills directory
cd delegate-skills

# 3. Verify all skill files are present
ls -la */SKILL.md
# Should show 16 SKILL.md files across 16 directories

# 4. Load the reference guide
cat skill_agent_entry_reference.md

# 5. Load the Master Entry Orchestrator first
cat master-entry-orchestrator/SKILL.md
```

### Directory Structure

```
delegate-skills/
├── README.md                          ← This file
├── LICENSE                            ← MIT License
├── skill_agent_entry_reference.md     ← Agent entry reference guide
├── master-entry-orchestrator/
│   └── SKILL.md                     ← Skill 00 (Root)
├── project-analysis-planning-orchestrator/
│   └── SKILL.md                     ← Skill 01
├── parallel-multi-agent-implementation-orchestrator/
│   └── SKILL.md                     ← Skill 02
├── operations-observability-orchestrator/
│   └── SKILL.md                     ← Skill 03
├── continuous-evolution-debt-manager/
│   └── SKILL.md                     ← Skill 04
├── cross-skill-phase-transition-orchestrator/
│   └── SKILL.md                     ← Skill 05
├── agent-health-context-manager/
│   └── SKILL.md                     ← Skill 06
├── skill-governance-meta-manager/
│   └── SKILL.md                     ← Skill 07
├── stakeholder-communication-reporter/
│   └── SKILL.md                     ← Skill 08
├── experimentation-ab-testing-metrics/
│   └── SKILL.md                     ← Skill 09
├── security-operations-secops/
│   └── SKILL.md                     ← Skill 10
├── data-operations-dataops/
│   └── SKILL.md                     ← Skill 11
├── cost-optimization-finops/
│   └── SKILL.md                     ← Skill 12
├── documentation-knowledge-base/
│   └── SKILL.md                     ← Skill 13
├── compliance-audit-automation/
│   └── SKILL.md                     ← Skill 14
├── multi-environment-promotion/
│   └── SKILL.md                     ← Skill 15
└── agent_health_context_manager/      ← Skill 06 (duplicate reference)
```

---

## 🛠️ How to Use

### Agent Declaration Protocol

Before any work, every agent MUST declare itself to Skill 00:

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
constraints:
  max_complexity: {SIMPLE|MEDIUM|COMPLEX}
  work_style: {INDEPENDENT|COLLABORATIVE|PAIR}
```

### Command Reference

| Command | Syntax | Purpose |
|---------|--------|---------|
| **DECLARE** | `DECLARE agent_id={ID} role={ROLE} ...` | Register yourself to the system |
| **INVOKE** | `INVOKE skill={01-15} action={ACTION} ...` | Request skill execution |
| **STATUS** | `STATUS agent_id={ID} task={TASK} progress={N}%` | Report current progress |
| **CONTEXT** | `CONTEXT agent_id={ID} type={FULL\|SUMMARY\|TASK}` | Request context refresh |
| **ESCALATE** | `ESCALATE agent_id={ID} issue={...} severity={LEVEL}` | Raise a blocker or issue |
| **QUERY** | `QUERY question="..." scope={PROJECT\|GLOBAL}` | Search knowledge base |
| **PROPOSE** | `PROPOSE type={RFC\|BUG\|IMPROVEMENT} details={...}` | Suggest a change or RFC |
| **ROTATE** | `ROTATE agent_id={ID} reason={...}` | Request task/agent rotation |
| **REFRESH** | `REFRESH agent_id={ID}` | Request context window refresh |

### Skill Routing by Action

| If You Need To... | Invoke Skill | Gate Required |
|---|---|---|
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

### Quality Gates

**GATE-01: Planning → Implementation** (All 12 must pass)
- All 35+ artifacts exist with proper headers
- No unresolved placeholders
- Architecture reviewed
- Security spec complete
- Test strategy defined
- Entry file cross-references all artifacts
- And 6 more criteria...

**GATE-02: Implementation → Operations** (All 12 must pass)
- All features implemented and tested
- Code coverage > 80%
- Zero CRITICAL/HIGH CVEs
- Performance benchmarks met
- Observability stack deployed
- Runbooks written
- And 6 more criteria...

---

## 📊 Implementation Workflow

```
PHASE 0: SYSTEM INITIALIZATION
├── Load all skill files into registry
├── Validate skill versions and dependencies
├── Initialize event bus
└── Verify system health

PHASE 1: PROJECT ONBOARDING
├── RECEIVE: User submits idea + constraints
├── ANALYZE: Determine project profile
├── ACTIVATE: Load required skills
├── ASSIGN: Select and onboard initial agents
└── NOTIFY: All agents of project start

PHASE 2: ACTIVE ORCHESTRATION
├── ROUTE: Agent requests → correct skill
├── MONITOR: Agent health, project progress
├── COORDINATE: Cross-skill communication
├── ESCALATE: Blockers, risks, failures
└── ADAPT: Adjust profile, skills, agents

PHASE 3: PHASE TRANSITIONS
├── DETECT: Transition conditions met
├── VALIDATE: Gate criteria
├── COORDINATE: Source → Destination skill handoff
└── NOTIFY: All agents of phase change

PHASE 4: PROJECT COMPLETION
├── VERIFY: All success criteria met
├── ARCHIVE: Final artifacts, decisions, learnings
├── REPORT: Final project report
└── CLOSE: Project in master index
```

---

## 🔬 Agent Self-Selection & Negotiation

The parallel implementation skill features a unique **3-round negotiation protocol**:

**Round 1 — Task Review:** Each agent reviews assigned tasks, rates interest (1-10) and confidence (1-10), proposes swaps and splits.

**Round 2 — Cross-Agent Negotiation:** Agents share review documents, negotiate task swaps (mutual consent + orchestrator approval), splits, and new task proposals.

**Round 3 — Final Assignment:** Orchestrator produces Final Task Assignment Matrix with primary and backup owners for every task.

---

## 📝 Key Artifacts (35+ Markdown Files)

When Skill 01 completes analysis, it generates 35+ artifacts:

| Category | Files |
|----------|-------|
| **Core** | README, TODO, TASKS, PLAN, ARCHITECTURE, DATABASE, FLOW-EVENTS, FLOW-UIUX, MINDMAP, ENTRY, MEMORY, AUDIT |
| **Dev Standards** | DEV-RULES, FLOW-RULES, UPDATE-RULES, IMPLEMENTATION-RULES |
| **Phase Plans** | PHASE-01 through PHASE-05 (extensible) |
| **Monitoring** | PROGRESS, PROJECT-MANAGEMENT |
| **Quality & Security** | QUALITY-ATTRIBUTES, SYSTEM-FEATURES, SECURITY-SPEC, TESTING-STRATEGY, ACCEPTANCE-TESTING |
| **Context-Dependent** | AI-ML-SPEC, API-SPEC, MOBILE-SPEC, DEPLOYMENT-SPEC, RUNBOOKS, ADRs, THREAT-MODEL, COST-ANALYSIS |

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

### Author Attribution

**Eng. Salah Allsayani**  
📧 **Email:** eng.salahalssayani@gmail.com  
💼 **Career:** Senior Full Stack Software Engineer & AI Engineer  
🏛️ **University:** Taiz University, Alsaeed Faculty of Engineering & IT  
🏙️ **City:** Taiz, **Country:** Yemen

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork this repository
2. Create a feature branch
3. Update the relevant SKILL.md file
4. Ensure all quality validation checklists pass
5. Submit a pull request with a clear description

### Repository Structure

```
delegate-skills/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── LICENSE                          ← MIT License with author attribution
├── skill_agent_entry_reference.md
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md
│       ├── feature_request.md
│       ├── enhancement.md
│       └── question.md
├── master-entry-orchestrator/         ← Skill 00
├── project-analysis-planning-orchestrator/  ← Skill 01
├── parallel-multi-agent-implementation-orchestrator/  ← Skill 02
├── operations-observability-orchestrator/   ← Skill 03
├── continuous-evolution-debt-manager/       ← Skill 04
├── cross-skill-phase-transition-orchestrator/  ← Skill 05
├── agent-health-context-manager/            ← Skill 06
├── skill-governance-meta-manager/           ← Skill 07
├── stakeholder-communication-reporter/      ← Skill 08
├── experimentation-ab-testing-metrics/      ← Skill 09
├── security-operations-secops/              ← Skill 10
├── data-operations-dataops/                 ← Skill 11
├── cost-optimization-finops/                ← Skill 12
├── documentation-knowledge-base/            ← Skill 13
├── compliance-audit-automation/             ← Skill 14
└── multi-environment-promotion/             ← Skill 15
```

---

## 📈 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-08-15 | Initial release — 16-skill multi-agent SDLC orchestration ecosystem |

---

## 📞 Contact

**Eng. Salah Allsayani**  
📧 **Email:** eng.salahalssayani@gmail.com  
💼 **Career:** Senior Full Stack Software Engineer & AI Engineer  
🏛️ **University:** Taiz University, Alsaeed Faculty of Engineering & IT  
🏙️ **City:** Taiz, **Country:** Yemen

---

<p align="center">
  <b>Delegate Skills</b> — <i>Orchestrate. Parallelize. Deliver.</i>
</p>

*This skill ecosystem is your command center for multi-agent software development. Trust the process. Route everything through Skill 00.*
