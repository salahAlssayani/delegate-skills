# 📦 Publish Skills — Step-by-Step Guide

> **Version:** 1.0.0  
> **Author:** Eng. Salah Allsayani  
> **Email:** eng.salahalssayani@gmail.com  
> **University:** Taiz University, Alsaeed Faculty of Engineering & IT  
> **City:** Taiz, Yemen  
> **Last Updated:** 2026-09-08

---

## 📌 Purpose

This guide documents the complete process for publishing any skill folder to a public GitHub repository with full npx support, comprehensive README, LICENSE, CONTRIBUTING.md, and GitHub issue templates. It is designed to be **general and reusable** — adapt the placeholders for any skill.

---

## 📋 Quick Info Required

| Field | Value |
|-------|-------|
| **Skill Name** | `{{SKILL_NAME}}` |
| **Repository URL** | `{{REPO_URL}}` |
| **GitHub Username** | `{{GITHUB_USER}}` |
| **Author Name** | `{{AUTHOR_NAME}}` |
| **Author Email** | `{{AUTHOR_EMAIL}}` |
| **Author Career** | `{{AUTHOR_CAREER}}` |
| **University** | `{{UNIVERSITY}}` |
| **City** | `{{CITY}}` |
| **Country** | `{{COUNTRY}}` |
| **License** | `MIT` |
| **Description** | `{{SKILL_DESCRIPTION}}` |

---

## 🔍 Prerequisites Checklist

Before starting, verify:

- [ ] All SKILL.md files exist and have consistent `Version: 1.0.0`
- [ ] Each SKILL.md has proper YAML frontmatter with `name` and `description`
- [ ] Each SKILL.md has all required sections (Identity, Purpose, Workflow, Checklist, Version History)
- [ ] No placeholder text remains (TBD, TODO, FIXME) without owner and deadline
- [ ] Cross-references between skills are valid
- [ ] Version metadata is consistent across all skill files
- [ ] All classification labels are correct (CRITICAL / HIGH / MEDIUM / LOW)

---

## 📁 Directory Structure Template

```
{{REPO_NAME}}/
├── README.md                          ← Main documentation
├── LICENSE                            ← MIT License with author attribution
├── CONTRIBUTING.md                    ← Contribution guidelines
├── package.json                       ← npm package definition
├── bin/
│   └── setup.js                       ← npx-compatible installer script
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── bug_report.md              ← Bug report template
│       ├── feature_request.md         ← Feature request template
│       ├── enhancement.md             ← Enhancement template
│       └── question.md                ← Question template
├── {{SKILL_NAME_1}}/
│   └── SKILL.md                       ← Primary skill file
├── {{SKILL_NAME_2}}/
│   └── SKILL.md                       ← Secondary skill file
├── ...
└── {{REFERENCE_FILE}}.md              ← Reference/entry guide
```

---

## 📝 Step 1: Create README.md

### Required Sections

```markdown
# {{SKILL_NAME}} — {{TAGLINE}}

> **Version:** 1.0.0
> **Author:** {{AUTHOR_NAME}} — {{AUTHOR_CAREER}}
> **Email:** {{AUTHOR_EMAIL}}
> **University:** {{UNIVERSITY}}, {{FACULTY}}
> **City:** {{CITY}}, **Country:** {{COUNTRY}}
> **License:** [MIT License](LICENSE)

---

## 🏷️ Tags

[Comprehensive tag table covering all relevant categories]

| Category | Tags |
|----------|------|
| **AI & ML** | ai, ai-agents, artificial-intelligence, machine-learning, llm, ... |
| **Multi-Agent** | multi-agent, agent-framework, agent-orchestration, ... |
| **Development** | software-development, software-engineering, sdlc, ... |
| **DevOps** | devops, cloud-native, kubernetes, ci-cd, ... |
| **Security** | security, compliance, soc2, gdpr, ... |
| **Data** | data-engineering, data-ops, databases, ... |
| **Testing** | testing, quality-assurance, tdd, ... |
| **Platform** | open-source, mit-license, github, ... |
| **Specialized** | agent-health, context-management, ... |

---

## ⚡ Installation

### npx (Recommended)
```bash
npx github:{{GITHUB_USER}}/{{REPO_NAME}}
```

### Git Clone
```bash
git clone git@github.com:{{GITHUB_USER}}/{{REPO_NAME}}.git
cd {{REPO_NAME}}
node bin/setup.js
```

### npm Install (When Published)
```bash
npm install -g {{REPO_NAME}}
```

---

## 📌 Overview

[Description of what the skills do]

## 🧩 Skills Inventory

[Table of all skills with ID, name, and description]

## 🏗️ Architecture

[Diagram showing skill relationships]

## 📦 Installation & Setup

[Detailed installation steps]

## 🛠️ How to Use

[Command reference, agent declaration protocol, skill routing]

## 📊 Implementation Workflow

[Phase-based workflow diagram]

## 📄 License

[License attribution]

## 🤝 Contributing

[Contribution guidelines summary]

## 📈 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | {{DATE}} | Initial release |

## 📞 Contact

**{{AUTHOR_NAME}}**  
📧 {{AUTHOR_EMAIL}}  
💼 {{AUTHOR_CAREER}}  
🏛️ {{UNIVERSITY}}  
🏙️ {{CITY}}, {{COUNTRY}}
```

---

## 📝 Step 2: Create LICENSE

```
MIT License

Copyright (c) {{YEAR}} {{AUTHOR_NAME}}

[Full MIT license text]

---

Author: {{AUTHOR_NAME}}
Email: {{AUTHOR_EMAIL}}
Career: {{AUTHOR_CAREER}}
University: {{UNIVERSITY}}, {{FACULTY}}
City: {{CITY}}, {{COUNTRY}}

About the Author:
[Biography describing career, expertise, and focus areas]

---

This license grants free, public use of all skills, documentation, 
and associated materials within the {{REPO_NAME}} ecosystem.
```

---

## 📝 Step 3: Create CONTRIBUTING.md

### Required Sections

```markdown
# 🤝 Contributing to {{REPO_NAME}}

## 📜 Code of Conduct
[Standards for all contributions]

## 🚀 Getting Started
[Setup instructions]

## 📝 Types of Contributions
- Bug Reports
- Feature Requests
- Documentation Improvements
- Questions

## 📐 Skill File Guidelines
- Required YAML Frontmatter
- Required Sections
- Version Requirements (Semantic Versioning)
- Classification Levels

## 🔄 Development Workflow
1. Propose an RFC
2. Draft the Change
3. Review
4. Test
5. Approve & Deploy

## ✍️ Commit Conventions
{TYPE}({SCOPE}): {description} [AGENT:{ID}] [TASK:{TASK-ID}]

## 📤 Pull Request Process
[PR requirements and checklist]

## 📊 Quality Standards
[Markdown quality, content quality, consistency standards]

## 🐛 Reporting Issues
[How to report bugs]

## 📞 Contact
[Author information]
```

---

## 📝 Step 4: Create package.json

```json
{
  "name": "{{REPO_NAME}}",
  "version": "1.0.0",
  "description": "{{SKILL_DESCRIPTION}}",
  "main": "bin/setup.js",
  "bin": {
    "{{REPO_NAME}}": "./bin/setup.js",
    "skills": "./bin/setup.js"
  },
  "files": [
    "bin/",
    "{{SKILL_NAME}}/",
    "README.md",
    "LICENSE",
    "CONTRIBUTING.md"
  ],
  "scripts": {
    "setup": "node bin/setup.js",
    "postinstall": "node bin/setup.js"
  },
  "keywords": [
    "[ALL RELEVANT KEYWORDS — minimum 30-50 tags]"
  ],
  "author": "{{AUTHOR_NAME}}",
  "email": "{{AUTHOR_EMAIL}}",
  "homepage": "https://github.com/{{GITHUB_USER}}/{{REPO_NAME}}",
  "repository": {
    "type": "git",
    "url": "git@github.com:{{GITHUB_USER}}/{{REPO_NAME}}.git"
  },
  "license": "MIT",
  "dependencies": {},
  "devDependencies": {},
  "engines": {
    "node": ">=14.0.0"
  },
  "funding": {
    "type": "github",
    "url": "https://github.com/sponsors/{{GITHUB_USER}}"
  },
  "bugs": {
    "url": "https://github.com/{{GITHUB_USER}}/{{REPO_NAME}}/issues"
  }
}
```

### Keywords Strategy (minimum 50 tags)

Include tags across these categories:
- **AI:** ai, ai-agents, artificial-intelligence, machine-learning, llm, large-language-models, ai-engineer, ai-powered, neural-networks, prompt-engineering
- **Multi-Agent:** multi-agent, agent-framework, agent-orchestration, multi-agent-system, orchestration, agent-swarm, collaborative-ai, agent-communication
- **Development:** software-development, software-engineering, sdlc, software-architecture, system-design, full-stack, web-development, backend, frontend
- **DevOps:** devops, devops-engineering, cloud-native, cloud-computing, microservices, containerization, kubernetes, ci-cd, infrastructure-as-code, deployment
- **Programming:** programming, models, ai-models, token, tokens, context-window, embedding, vector-database, rag, model-serving
- **Security:** security, cybersecurity, information-security, compliance, soc2, gdpr, hipaa, pci-dss, iso27001, nist, vulnerability-management, penetration-testing
- **Data:** data-engineering, data-ops, databases, data-pipelines, data-quality, ml-ops, data-lineage, big-data, analytics
- **Testing:** testing, quality-assurance, test-automation, tdd, bdd, unit-testing, integration-testing, e2e-testing, quality-gates, code-review
- **Management:** project-management, agile, scrum, kanban, planning, roadmap, stakeholder-management, risk-management, budget-tracking
- **Documentation:** documentation, knowledge-base, technical-writing, markdown, wiki, onboarding, knowledge-management
- **Platform:** open-source, open-source-software, mit-license, github, platform, developer-tools, automation, workflow-engine, skill-management
- **Specialized:** agent-health, context-management, phase-transition, technical-debt, evolution, refactoring, deprecation, cost-optimization, finops, experimentation, a-b-testing, canary-deployment, feature-flags

---

## 📝 Step 5: Create bin/setup.js

### Key Features

The setup script must:
1. **Find repo root** by walking up from `process.cwd()` looking for SKILL.md files
2. **Load all skills** by reading each directory's SKILL.md
3. **Verify files** by checking existence and size
4. **Create symlink** at `skills/` pointing to repo root
5. **Print instructions** for next steps

```javascript
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function findRepoRoot() {
  let dir = process.cwd();
  while (dir !== path.dirname(dir)) {
    if (fs.existsSync(path.join(dir, '{{SKILL_NAME}}', 'SKILL.md'))) {
      return dir;
    }
    dir = path.dirname(dir);
  }
  return null;
}

// ... full implementation with colored output, loading all skills, verification, etc.
```

### Make Executable

On Linux/Mac: `chmod +x bin/setup.js`
On Windows: The shebang `#!/usr/bin/env node` handles it via Node.js

---

## 📝 Step 6: Create GitHub Issue Templates

### `.github/ISSUE_TEMPLATE/bug_report.md`
- Bug report with affected skill, expected vs actual behavior, steps to reproduce, severity

### `.github/ISSUE_TEMPLATE/feature_request.md`
- Feature request with type, problem statement, proposed solution, impact analysis

### `.github/ISSUE_TEMPLATE/enhancement.md`
- Enhancement/improvement with current state, desired state, justification

### `.github/ISSUE_TEMPLATE/question.md`
- Question with topic selection, detailed question, context, expected outcome

---

## 📝 Step 7: Verify All SKILL.md Metadata

Run this verification across ALL skill directories:

```bash
# Check all versions are consistent
grep "Version:" */SKILL.md | sort
# All should show Version: 1.0.0

# Check all have proper YAML frontmatter
grep "name:" */SKILL.md

# Check all have classifications
grep "Classification:" */SKILL.md

# Count skill directories
ls -d */ | wc -l
# Should match expected count
```

### Verification Checklist

- [ ] All SKILL.md files have `## Version: 1.0.0`
- [ ] All have YAML frontmatter with `name:` and `description:`
- [ ] All have `## Classification:` (CRITICAL / HIGH / MEDIUM / LOW)
- [ ] All have `## Depends On:` section
- [ ] All have proper section numbering
- [ ] No TODO/FIXME/TBD without owner and deadline
- [ ] Cross-references between skills are valid

---

## 📝 Step 8: Git Setup & Push

```bash
# Initialize git repository
git init

# Add remote
git remote add origin git@github.com:{{GITHUB_USER}}/{{REPO_NAME}}.git

# Stage all files
git add -A

# Create initial commit
git commit -m "Initial commit: {{SKILL_NAME}} — Multi-Agent SDLC Orchestration Platform"

# Push to GitHub
git push -u origin master
```

### Subsequent Updates

```bash
git add .
git commit -m "Update: {{description of changes}}"
git push origin master
```

---

## 📝 Step 9: Verify GitHub Repository

After pushing, verify on GitHub:

- [ ] All files are visible in the repository
- [ ] README.md renders correctly with all sections
- [ ] LICENSE is properly displayed
- [ ] Issue templates are available when creating new issue
- [ ] Tags are visible in the repository sidebar
- [ ] `package.json` is properly formatted
- [ ] `bin/setup.js` is executable
- [ ] `.github/ISSUE_TEMPLATE/` directory shows all 4 templates

---

## 📝 Step 10: npx Compatibility Verification

Test that npx works:

```bash
# Test from any directory
npx github:{{GITHUB_USER}}/{{REPO_NAME}}

# This should:
# 1. Clone the repo
# 2. Run setup.js
# 3. Load all skills
# 4. Print completion message
```

When you're ready to publish to npm:

```bash
# Login to npm
npm login

# Publish
npm publish

# Then npx delegate-skills works directly
npx delegate-skills
```

---

## 📊 Summary: All Files Created

| File | Purpose | Lines |
|------|---------|-------|
| `README.md` | Main documentation with tags, installation, usage | 400+ |
| `LICENSE` | MIT License with author attribution | 45+ |
| `CONTRIBUTING.md` | Contribution guidelines & code of conduct | 300+ |
| `package.json` | npm package definition with 50+ keywords | 60+ |
| `bin/setup.js` | npx-compatible installer | 200+ |
| `.github/ISSUE_TEMPLATE/bug_report.md` | Bug report template | 30+ |
| `.github/ISSUE_TEMPLATE/feature_request.md` | Feature request template | 30+ |
| `.github/ISSUE_TEMPLATE/enhancement.md` | Enhancement template | 30+ |
| `.github/ISSUE_TEMPLATE/question.md` | Question template | 30+ |
| `{{SKILL_NAME}}/SKILL.md` × N | All skill files | 200-1200 each |
| `{{REFERENCE_FILE}}.md` | Agent entry reference | 400+ |

**Total files: 24-30+ depending on skill count**

---

## 🔑 Key Insights from This Session

1. **npx `github:owner/repo`** is the most reliable one-command install method — no npm publish required
2. **Full URL is clearest** — `npx github:salahAlssayani/delegate-skills` avoids ambiguity
3. **PowerShell doesn't support `&&`** — use separate bash commands or `;`
4. **setup.js must use `findRepoRoot()`** — walk up from `process.cwd()` to find SKILL.md files
5. **All SKILL.md files must have consistent Version metadata** — verification is critical before publishing
6. **50+ keywords in package.json** significantly improves GitHub discoverability
7. **Comprehensive tags section in README** with 12 categories makes the repo searchable
8. **MIT License with full author attribution** including university, city, and country is professional

---

## 📞 Support

**Eng. Salah Allsayani** — Project Creator & Maintainer
- 📧 eng.salahalssayani@gmail.com
- 🏛️ Taiz University, Alsaeed Faculty of Engineering & IT
- 🏙️ Taiz, Yemen
- 🌐 https://github.com/salahAlssayani

---

<p align="center">
  <b>Delegate Skills</b> — <i>Orchestrate. Parallelize. Deliver.</i>
</p>

*This guide was created to make publishing skills a repeatable, professional process. Adapt the placeholders and follow the steps for any skill folder.*
