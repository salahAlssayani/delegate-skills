---
name: skill-governance-meta-manager
description: "Skill governance meta-manager. Use for skill versioning, dependency management, testing, composition, and deprecation of agent skills."
---

# Skill: Skill Governance & Meta-Management
## Version: 1.0.0
## Classification: CRITICAL — Meta-Meta Layer
## Scope: Skill Versioning, Dependencies, Testing, Composition, Deprecation
## Depends On: All skills

---

## 1. SKILL IDENTITY & PURPOSE

**Skill Name:** `skill_governance_meta_manager`
**Role:** Chief Knowledge Officer & Process Architect
**Objective:** Govern the skill files themselves — ensure they evolve correctly, maintain compatibility, and remain effective as the project and technology landscape change.

**Success Criteria:**
- All skill files are versioned with semantic versioning.
- Skill changes are tested before deployment to active projects.
- Skill dependencies are tracked and validated.
- No skill is used in production without passing governance review.
- Skill composition allows flexible project tailoring without breaking consistency.

---

## 2. SKILL VERSIONING

### 2.1 Semantic Versioning for Skills

```
MAJOR.MINOR.PATCH

MAJOR: Breaking change (alters workflow, removes artifacts, changes agent roles)
MINOR: New capability (adds section, new artifact, enhanced protocol)
PATCH: Fix or clarification (typo, better example, clearer instruction)

Examples:
1.0.0 → Initial release
1.1.0 → Added new quality gate
1.1.1 → Fixed typo in PR template
2.0.0 → Changed from 2-agent minimum to 3-agent minimum
```

### 2.2 Version Metadata

Every skill file MUST include:
```markdown
# Skill: {NAME}
## Version: {MAJOR}.{MINOR}.{PATCH}
## Classification: {CRITICAL/HIGH/MEDIUM/LOW}
## Scope: {DESCRIPTION}
## Depends On: {LIST OF SKILL VERSIONS}
## Supersedes: {PREVIOUS VERSION IF ANY}
## Compatible With: {PROJECT TYPES}
## Last Updated: {DATE}
## Author: {AGENT-ID}
## Reviewers: {LIST}
## Status: {DRAFT/REVIEW/ACTIVE/DEPRECATED}
```

---

## 3. SKILL DEPENDENCY MANAGEMENT

### 3.1 Dependency Graph

```
Skill 00: Meta-Orchestrator
    ├── Skill 01: Analysis & Planning (v1.0.0+)
    ├── Skill 02: Implementation (v1.0.0+, depends on 01 v1.0.0+)
    ├── Skill 03: Operations (v1.0.0+, depends on 02 v1.0.0+)
    ├── Skill 04: Evolution (v1.0.0+, depends on 02 v1.0.0+)
    ├── Skill 05: Phase Transition (v1.0.0+, depends on 01, 02)
    ├── Skill 06: Agent Health (v1.0.0+, depends on all)
    ├── Skill 07: Skill Governance (v1.0.0+, depends on all)
    ├── Skill 08: Stakeholder Communication (v1.0.0+, depends on 01, 02)
    ├── Skill 09: Experimentation (v1.0.0+, depends on 02, 03)
    ├── Skill 10: Security Operations (v1.0.0+, depends on 02, 03)
    ├── Skill 11: Data Operations (v1.0.0+, depends on 02, 03)
    ├── Skill 12: Cost Optimization (v1.0.0+, depends on 03)
    ├── Skill 13: Documentation Knowledge Base (v1.0.0+, depends on all)
    ├── Skill 14: Compliance Audit (v1.0.0+, depends on all)
    └── Skill 15: Environment Promotion (v1.0.0+, depends on 02, 03)
```

### 3.2 Dependency Validation

Before using any skill:
```
FOR each skill in project skill set:
    FOR each dependency in skill.depends_on:
        ASSERT dependency.version >= skill.minimum_required_version
        ASSERT dependency.status == ACTIVE
        ASSERT dependency is present in project skill set
    END
END
```

**Failure:** Cannot proceed until all dependencies satisfied.

---

## 4. SKILL TESTING

### 4.1 Skill Test Types

| Test Type | Purpose | Method |
|-----------|---------|--------|
| **Syntax Check** | No broken markdown, valid structure | Automated parser |
| **Completeness Check** | All required sections present | Checklist validation |
| **Cross-Reference Check** | All internal links valid | Link checker |
| **Logic Check** | No contradictory instructions | Manual review + automated logic rules |
| **Simulation Test** | Skill produces expected outputs | Run on sample project |
| **Integration Test** | Skill works with its dependencies | Multi-skill simulation |
| **Regression Test** | Changes don't break existing behavior | Before/after comparison |

### 4.2 Skill Change Process

```
1. PROPOSE: Create RFC for skill change
   ├── What: Specific changes
   ├── Why: Rationale and expected benefit
   ├── Impact: Affected projects, agents, artifacts
   └── Backward compatibility: Yes/No, migration path

2. DRAFT: Create new version in DRAFT status
   ├── Branch: skill/{name}/v{major}.{minor}.{patch}
   ├── Update version metadata
   └── Mark all changes with [CHANGED] tag

3. REVIEW: Peer review by 2+ agents
   ├── Check for contradictions with other skills
   ├── Verify dependency compatibility
   ├── Test on sample project
   └── Collect feedback

4. TEST: Run full test suite
   ├── Syntax, completeness, cross-reference
   ├── Simulation on 3 project types (small, medium, large)
   ├── Integration with dependent skills
   └── Regression against previous version

5. APPROVE: Governance sign-off
   ├── All tests pass
   ├── Reviewers approve
   ├── No unresolved concerns
   └── Update CHANGELOG.md

6. DEPLOY: Mark ACTIVE
   ├── Update skill registry
   ├── Notify all active projects
   └── Archive previous version (mark DEPRECATED after 90 days)
```

---

## 5. SKILL COMPOSITION

### 5.1 Project Skill Profiles

Projects can compose skills based on needs:

| Profile | Skills Included | Use Case |
|---------|----------------|----------|
| **Minimal** | 01, 02 | Small project, single agent |
| **Standard** | 01, 02, 05, 06 | Medium project, multiple agents |
| **Enterprise** | 01-15 | Large project, full SDLC |
| **AI-Native** | 01, 02, 05, 06, 09, 11 | ML/AI product |
| **Security-Critical** | 01, 02, 05, 06, 10, 14 | Fintech, healthcare |
| **Data-Intensive** | 01, 02, 05, 06, 11, 12 | Analytics platform |

### 5.2 Composition Rules

```
RULE 1: Skill 05 (Phase Transition) requires both 01 and 02.
RULE 2: Skill 06 (Agent Health) requires at least one active implementation skill.
RULE 3: Skill 07 (Governance) is always active when any other skill is active.
RULE 4: If Skill 03 (Operations) is active, Skill 12 (Cost) is recommended.
RULE 5: If Skill 10 (SecOps) is active, Skill 14 (Compliance) is recommended.
RULE 6: No skill may be skipped in a dependency chain (if B depends on A, A must be present).
```

---

## 6. SKILL DEPRECATION

### 6.1 Deprecation Process

```
1. ANNOUNCE: 30 days notice, mark skill as DEPRECATED
2. MIGRATE: Provide migration guide to replacement skill
3. FREEZE: No new projects may use deprecated skill
4. SUPPORT: Existing projects continue using it for 90 days
5. ARCHIVE: Move to archive, remove from active registry
6. DELETE: After 1 year, remove from repository
```

---

## 7. SKILL REGISTRY

```markdown
# Skill Registry

| ID | Name | Version | Status | Dependencies | Projects Using |
|----|------|---------|--------|--------------|----------------|
| 01 | Analysis & Planning | 1.0.0 | ACTIVE | None | 5 |
| 02 | Implementation | 1.0.0 | ACTIVE | 01 v1.0.0+ | 5 |
| ... | ... | ... | ... | ... | ... |

## Changelog
| Date | Skill | Version | Change | Author |
|------|-------|---------|--------|--------|
```

---

*End of Skill 07*
