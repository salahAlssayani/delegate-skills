# 🤝 Contributing to Delegate Skills

Thank you for your interest in contributing to **Delegate Skills**! This document provides guidelines and instructions for contributing to the 16-skill multi-agent SDLC orchestration ecosystem.

---

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Types of Contributions](#types-of-contributions)
- [Skill File Guidelines](#skill-file-guidelines)
- [Development Workflow](#development-workflow)
- [Commit Conventions](#commit-conventions)
- [Pull Request Process](#pull-request-process)
- [Quality Standards](#quality-standards)
- [Reporting Issues](#reporting-issues)

---

## 📜 Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. By participating, you are expected to uphold the following:

- Be respectful and constructive in all interactions
- Focus on the technical merit of contributions
- Be welcoming to newcomers and different perspectives
- Follow the established patterns and conventions
- Report any unacceptable behavior to the maintainer

---

## 🚀 Getting Started

### Prerequisites

- Familiarity with AI agent skill systems
- Understanding of SDLC concepts (planning, implementation, operations, evolution)
- Ability to read and write Markdown
- Access to a GitHub account

### Setup

```bash
# 1. Fork the repository
gh repo fork delegate-skills --clone

# 2. Navigate to the project
cd delegate-skills

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes
# 5. Verify all quality validation checklists pass
# 6. Submit a pull request
```

---

## 📝 Types of Contributions

### 🐛 Bug Reports

If you find an issue in a SKILL.md file, use the [Bug Report](ISSUE_TEMPLATE/bug_report.md) template. Include:

- The skill file where the bug exists
- What you expected to happen vs. what actually happened
- Steps to reproduce the issue
- Screenshots or relevant code snippets

### ✨ Feature Requests

To request a new skill or enhancement to an existing skill, use the [Feature Request](ISSUE_TEMPLATE/feature_request.md) template. Include:

- A clear description of the proposed feature
- The problem it solves
- How it integrates with existing skills
- Expected behavior and success criteria

### 📖 Documentation Improvements

Improvements to existing documentation, clarifications, or additional examples are always welcome. Use the [Enhancement](ISSUE_TEMPLATE/enhancement.md) template.

### 💡 Questions

If you have a question about how to use the skills or how the system works, use the [Question](ISSUE_TEMPLATE/question.md) template.

---

## 📐 Skill File Guidelines

All SKILL.md files must follow this structure:

### Required YAML Frontmatter

```yaml
---
name: skill-name-kebab-case
description: "A clear, concise description of what this skill does."
---
```

### Required Sections

Every skill file MUST contain:

1. **Header** — Skill name, version, classification, scope, dependencies
2. **SKILL IDENTITY & PURPOSE** — What the skill does and its role
3. **Agent Orchestration / Execution Protocol** — How agents interact with the skill
4. **Quality Validation Checklist** — Verification criteria for skill completion
5. **Execution Workflow** — Step-by-step master sequence
6. **Version History** — Tracking changes over time

### Version Requirements

- All skills use **Semantic Versioning** (MAJOR.MINOR.PATCH)
- Initial release is **1.0.0**
- MAJOR: Breaking changes to workflow or agent roles
- MINOR: New capabilities or sections
- PATCH: Fixes, clarifications, or typo corrections

### Classification Levels

| Classification | Meaning | Examples |
|---------------|---------|----------|
| **CRITICAL** | Core orchestration, cannot operate without | Skills 00–07 |
| **HIGH** | Major functional layer, highly recommended | Skills 08–15 |
| **MEDIUM** | Important but optional | Cost Optimization |
| **LOW** | Nice to have | — |

---

## 🔄 Development Workflow

### 1. Propose an RFC

For any significant change to a skill file:

```markdown
## RFC: [Skill Name] Change

### What
Specific changes to be made

### Why
Rationale and expected benefit

### Impact
Affected projects, agents, artifacts

### Backward Compatibility
Yes/No, migration path
```

### 2. Draft the Change

- Branch: `skill/{name}/v{major}.{minor}.{patch}`
- Update version metadata
- Mark all changes with `[CHANGED]` tag

### 3. Review

- Peer review by 2+ contributors
- Check for contradictions with other skills
- Verify dependency compatibility
- Test on a sample project

### 4. Test

Run all verification checks:
- ✅ Syntax check (valid markdown, no broken structure)
- ✅ Completeness check (all required sections present)
- ✅ Cross-reference check (all internal links valid)
- ✅ Logic check (no contradictory instructions)
- ✅ Simulation test (skill produces expected outputs)

### 5. Approve & Deploy

- All tests pass
- Reviewers approve
- Update CHANGELOG
- Mark ACTIVE in the registry
- Archive previous version after 90 days

---

## ✍️ Commit Conventions

We use **Conventional Commits** with agent/task tracking:

```
{TYPE}({SCOPE}): {description} [AGENT:{ID}] [TASK:{TASK-ID}]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature or capability |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Formatting, linting |
| `refactor` | Code restructuring without behavior change |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `build` | Build system changes |
| `ci` | CI/CD configuration changes |
| `chore` | Maintenance tasks |
| `revert` | Reverting a previous commit |

### Examples

```
feat(skill-02): add agent self-selection protocol [AGENT:ORCHESTRATOR] [TASK:SKILL-02-001]
fix(skill-05): correct GATE-01 checklist criteria [AGENT:CONTRIBUTOR] [TASK:SKILL-05-003]
docs(readme): add comprehensive tag listing [AGENT:CONTRIBUTOR]
```

---

## 📤 Pull Request Process

1. **Fork** the repository and create a feature branch
2. **Make your changes** following the guidelines above
3. **Run quality validation** — Ensure all checklists pass
4. **Update the version** if your changes affect skill files
5. **Write a clear PR description** describing the changes and their impact
6. **Link any related issues** using `Closes #ISSUE-NUMBER`
7. **Request review** from at least 2 maintainers
8. **Address feedback** promptly
9. **Merge** after approval and passing all checks

### PR Requirements

- [ ] All SKILL.md files have proper YAML frontmatter
- [ ] Version metadata is updated
- [ ] No contradictions with existing skills
- [ ] All quality validation checklists pass
- [ ] CHANGELOG.md updated (if applicable)
- [ ] README.md updated (if adding new skills or features)

---

## 📊 Quality Standards

Every contribution must meet these standards:

### Markdown Quality
- Valid YAML frontmatter in all SKILL.md files
- Proper heading hierarchy (#, ##, ###)
- Consistent formatting across all files
- No placeholder text (TBD, TODO, FIXME) without owner and deadline

### Content Quality
- All instructions are actionable and unambiguous
- Cross-references between skills are valid
- Quality gates are clearly defined with verifiable criteria
- Execution workflows are complete and sequential

### Consistency
- All skills use the same versioning scheme
- Classification labels are consistent
- Dependency declarations are accurate
- Agent role naming follows the established convention

---

## 🐛 Reporting Issues

Use the appropriate [issue template](.github/ISSUE_TEMPLATE/) for your report. Be as specific as possible:

- **Environment:** Which skill(s) are affected?
- **Expected Behavior:** What should happen?
- **Actual Behavior:** What happens instead?
- **Steps to Reproduce:** How can the issue be triggered?
- **Impact:** Severity and affected components

---

## 🙏 Acknowledgments

Contributors to Delegate Skills are valued. Every contribution, whether large or small, helps make this ecosystem better for everyone.

---

## 📞 Contact

**Eng. Salah Allsayani** — Project Creator & Maintainer  
📧 **Email:** eng.salahalssayani@gmail.com  
🏛️ **University:** Taiz University, Alsaeed Faculty of Engineering & IT, Taiz, Yemen

---

<p align="center">
  <b>Delegate Skills</b> — <i>Orchestrate. Parallelize. Deliver.</i>
</p>
