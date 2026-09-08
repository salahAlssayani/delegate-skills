---
name: documentation-knowledge-base
description: "Documentation and knowledge base manager. Use for docs indexing, freshness checks, auto-generation, search, and onboarding simulation."
---

# Skill: Documentation-as-Code & Knowledge Base
## Version: 1.0.0
## Classification: HIGH — Knowledge Layer
## Scope: Documentation Indexing, Freshness, Auto-Generation, Search, Onboarding Simulation
## Depends On: All skills

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `documentation_knowledge_base`
**Role:** Chief Knowledge Officer & Technical Writer
**Objective:** Transform static documentation into a living, searchable, queryable knowledge base that accelerates onboarding, reduces repeated questions, and stays synchronized with code.

**Success Criteria:**
- New agent/team member can find any answer in < 2 minutes.
- Documentation freshness score > 95% (updated within 30 days of code change).
- 50% reduction in repeated questions after FAQ auto-generation.
- Architecture diagrams auto-generated from code and match reality.

---

## 2. DOCUMENTATION ARCHITECTURE

### 2.1 Documentation Types & Ownership

| Type | Format | Owner | Update Trigger | Review Frequency |
|------|--------|-------|----------------|------------------|
| **Code Docs** | Inline comments, docstrings | Implementing agent | Every PR | Per PR |
| **API Docs** | OpenAPI/Swagger | API owner | API change | Per release |
| **Architecture** | C4 (Mermaid) | Architect agent | Structural change | Monthly |
| **Runbooks** | Markdown | Operations agent | Procedure change | Monthly |
| **ADRs** | Markdown | Decision maker | New decision | Per decision |
| **Onboarding** | Markdown | Team lead | Process change | Per new hire |
| **FAQ** | Markdown | Auto-generated | New question pattern | Weekly |
| **Troubleshooting** | Markdown | Operations agent | New incident | Per incident |

### 2.2 Documentation Structure

```
docs/
├── 00-INDEX.md              # Master navigation
├── 01-README.md             # Project overview
├── 02-GETTING-STARTED.md    # Quick start
├── 03-ARCHITECTURE/         # C4 diagrams, decisions
│   ├── 01-context.md
│   ├── 02-containers.md
│   ├── 03-components.md
│   └── 04-decisions/        # ADRs
├── 04-API/                  # API documentation
│   ├── 01-overview.md
│   └── 02-endpoints/        # Per-endpoint docs
├── 05-OPERATIONS/           # Runbooks, monitoring
│   ├── 01-deployment.md
│   ├── 02-monitoring.md
│   └── 03-troubleshooting.md
├── 06-DEVELOPMENT/          # Coding standards, workflows
│   ├── 01-standards.md
│   ├── 02-git-workflow.md
│   └── 03-testing.md
├── 07-SECURITY/             # Security docs
├── 08-DATA/                 # Data models, pipelines
├── 09-FAQ.md                # Auto-generated FAQ
└── 10-GLOSSARY.md           # Domain terminology
```

---

## 3. DOCUMENTATION FRESHNESS

### 3.1 Freshness Scoring

```
Freshness Score = (Recently Updated Docs / Total Docs) × 100

"Recently Updated" = Modified within 30 days of last code change in related module

Target: > 95%
Warning: < 90%
Critical: < 80%
```

### 3.2 Freshness Tracking

| Artifact | Max Age | Check | Auto-Action |
|----------|---------|-------|-------------|
| API docs | 7 days | Per PR | Block merge if stale |
| README | 30 days | Weekly | Flag for update |
| Architecture | 90 days | Monthly | Compare with code, alert if drift |
| Runbooks | 30 days | Monthly | Test against reality |
| ADRs | 180 days | Quarterly | Review for obsolescence |
| Onboarding | 90 days | Per new hire | Collect feedback, update |

### 3.3 Stale Documentation Alert

```
IF doc.last_modified > code.last_modified + threshold:
    CREATE ticket: "Update {doc} — code changed {N} days ago"
    ASSIGN to: code.owner
    PRIORITY: matches doc type priority
```

---

## 4. AUTO-GENERATION

### 4.1 Auto-Generated Documentation

| Source | Generated Doc | Tool | Frequency |
|--------|--------------|------|-----------|
| Code comments | API reference | Swagger, TypeDoc, Sphinx | Per build |
| Database schema | ER diagram | dbdocs, tbls | Per migration |
| Terraform/IaC | Infrastructure diagram | Terraform docs, diagrams | Per change |
| OpenAPI spec | API client SDK | OpenAPI Generator | Per spec change |
| Test results | Coverage report | Coverage.py, Istanbul | Per build |
| Git history | Changelog | git-chglog, semantic-release | Per release |
| Error patterns | Troubleshooting guide | Log analysis | Weekly |
| Common questions | FAQ | NLP on Slack/support tickets | Weekly |

### 4.2 Architecture Diagram Auto-Generation

```
FROM CODE:
├── Parse imports/dependencies
├── Generate dependency graph
├── Map to C4 container diagram
├── Compare with existing diagram
├── FLAG drift if mismatch > threshold
└── Suggest diagram update
```

---

## 5. KNOWLEDGE BASE SEARCH

### 5.1 Semantic Indexing

```
INDEXING:
1. Extract text from all markdown files
2. Chunk into semantic paragraphs (preserve context)
3. Generate embeddings (vector representation)
4. Store in vector database (Pinecone, Weaviate, pgvector)
5. Tag with: doc type, last updated, owner, related code files

QUERYING:
1. Convert question to embedding
2. Semantic search (cosine similarity)
3. Retrieve top 5 matches
4. Rank by: relevance, freshness, authority
5. Return answer with source attribution
```

### 5.2 FAQ Auto-Generation

```
INPUT: Support tickets, Slack questions, PR comments, incident post-mortems
PROCESS:
1. Cluster similar questions (topic modeling)
2. Extract most frequent clusters
3. For each cluster:
   a. Find answer in documentation
   b. If found: Link to doc
   c. If not found: Flag for doc creation
4. Generate FAQ entry with question + answer + source
OUTPUT: Updated FAQ.md
```

---

## 6. ONBOARDING SIMULATION

### 6.1 Automated Onboarding Test

```
TEST: Can a new agent/team member become productive?

SCENARIO 1: Environment Setup
├── Follow GETTING-STARTED.md
├── Measure time to first successful build
├── Target: < 30 minutes
└── If > 30 min: Flag doc for improvement

SCENARIO 2: First Task
├── Assign simple bug fix
├── Agent uses docs to find relevant code
├── Measure time to first PR
├── Target: < 2 hours
└── If > 2 hours: Flag docs + code organization

SCENARIO 3: Architecture Understanding
├── Ask agent to explain system flow
├── Compare with actual architecture
├── Target: 90% accuracy
└── If < 90%: Flag architecture docs

SCENARIO 4: Troubleshooting
├── Present common error scenario
├── Agent uses troubleshooting docs to resolve
├── Target: Self-resolution in < 30 minutes
└── If failed: Flag runbooks
```

### 6.2 Onboarding Feedback Loop

Every new agent/team member produces:
```markdown
# Onboarding Feedback — {NAME} — {DATE}

## Time to Productive
| Milestone | Target | Actual | Notes |

## Documentation Gaps
| What I needed | Where I looked | What I found | Suggestion |

## Confusing Areas
| Topic | Why Confusing | Suggested Improvement |

## What Worked Well
[Positive feedback]
```

---

## 7. EXECUTION WORKFLOW

```
PHASE 0: BASELINE
├── Audit all existing documentation
├── Calculate initial freshness score
├── Set up auto-generation pipelines
├── Initialize vector search index
└── Create documentation structure

PHASE 1: AUTO-GENERATION
├── Deploy doc generation from code
├── Deploy diagram generation from IaC
├── Deploy FAQ generation from tickets
├── Deploy changelog generation from git
└── Verify output quality

PHASE 2: FRESHNESS MONITORING
├── Set up stale doc detection
├── Create freshness dashboard
├── Alert on stale docs
└── Track freshness score trend

PHASE 3: KNOWLEDGE BASE
├── Deploy semantic search
├── Index all documentation
├── Test query accuracy
└── Integrate with agent workflows

PHASE 4: CONTINUOUS
├── Weekly: Review freshness score
├── Weekly: Review FAQ additions
├── Monthly: Onboarding simulation test
├── Monthly: Architecture drift check
└── Quarterly: Full documentation audit
```

---

*End of Skill 13*
