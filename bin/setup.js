#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const COLORS = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  cyan: '\x1b[36m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  magenta: '\x1b[35m',
};

function log(message, color = 'reset') {
  console.log(`${COLORS[color]}${message}${COLORS.reset}`);
}

function banner() {
  log('╔══════════════════════════════════════════════════════════════╗', 'bright');
  log('║        🚀  DELEGATE SKILLS — INSTALLER v1.0.0  🚀          ║', 'bright');
  log('║         Multi-Agent SDLC Orchestration Platform              ║', 'bright');
  log('║              by Eng. Salah Allsayani                           ║', 'bright');
  log('╠══════════════════════════════════════════════════════════════╣', 'bright');
  log('║  📧 eng.salahalssayani@gmail.com                             ║', 'bright');
  log('║  🏛️  Taiz University, Alsaeed Faculty of Engineering & IT    ║', 'bright');
  log('║  🏙️  Taiz, Yemen                                            ║', 'bright');
  log('╚══════════════════════════════════════════════════════════════╝', 'bright');
  console.log();
}

function findRepoRoot() {
  let dir = process.cwd();
  while (dir !== path.dirname(dir)) {
    if (fs.existsSync(path.join(dir, 'master-entry-orchestrator', 'SKILL.md'))) {
      return dir;
    }
    dir = path.dirname(dir);
  }
  return null;
}

function install() {
  banner();

  const repoPath = findRepoRoot();

  if (!repoPath) {
    log('❌ Could not find Delegate Skills repository.', 'red');
    log('   Please clone the repo first:', 'yellow');
    log('   git clone git@github.com:salahAlssayani/delegate-skills.git', 'yellow');
    log('   cd delegate-skills', 'yellow');
    log('   npx delegate-skills', 'yellow');
    process.exit(1);
  }

  log(`📁 Repository found at: ${repoPath}`, 'green');
  console.log();

  log('📚 Loading all 16 skills...', 'yellow');
  console.log();

  const skillDirs = [
    { id: '00', name: 'master-entry-orchestrator', desc: 'Root — Meta-Orchestration' },
    { id: '01', name: 'project-analysis-planning-orchestrator', desc: 'Planning & Analysis' },
    { id: '02', name: 'parallel-multi-agent-implementation-orchestrator', desc: 'Parallel Implementation' },
    { id: '03', name: 'operations-observability-orchestrator', desc: 'Operations & Observability' },
    { id: '04', name: 'continuous-evolution-debt-manager', desc: 'Evolution & Debt Mgmt' },
    { id: '05', name: 'cross-skill-phase-transition-orchestrator', desc: 'Phase Transition' },
    { id: '06', name: 'agent-health-context-manager', desc: 'Agent Health & Context' },
    { id: '07', name: 'skill-governance-meta-manager', desc: 'Skill Governance' },
    { id: '08', name: 'stakeholder-communication-reporter', desc: 'Stakeholder Communication' },
    { id: '09', name: 'experimentation-ab-testing-metrics', desc: 'Experimentation & A/B Testing' },
    { id: '10', name: 'security-operations-secops', desc: 'Security Operations' },
    { id: '11', name: 'data-operations-dataops', desc: 'Data Operations' },
    { id: '12', name: 'cost-optimization-finops', desc: 'Cost Optimization' },
    { id: '13', name: 'documentation-knowledge-base', desc: 'Documentation & Knowledge Base' },
    { id: '14', name: 'compliance-audit-automation', desc: 'Compliance & Audit' },
    { id: '15', name: 'multi-environment-promotion', desc: 'Environment Promotion' },
  ];

  const referenceFiles = [
    'skill_agent_entry_reference.md',
    'README.md',
    'LICENSE',
    'CONTRIBUTING.md',
    'package.json',
  ];

  let loaded = 0;

  skillDirs.forEach((skill) => {
    const skillPath = path.join(repoPath, skill.name, 'SKILL.md');
    if (fs.existsSync(skillPath)) {
      const content = fs.readFileSync(skillPath, 'utf-8');
      const size = (content.length / 1024).toFixed(1);
      log(`   ✅ Skill ${skill.id}: ${skill.name} (${size} KB) — ${skill.desc}`, 'green');
      loaded++;
    } else {
      log(`   ⚠️  Skill ${skill.id}: ${skill.name} — File not found`, 'yellow');
    }
  });

  referenceFiles.forEach((file) => {
    const filePath = path.join(repoPath, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const size = (content.length / 1024).toFixed(1);
      log(`   ✅ Reference: ${file} (${size} KB)`, 'cyan');
      loaded++;
    } else {
      log(`   ⚠️  Reference: ${file} — Not found`, 'yellow');
    }
  });

  const skillCount = skillDirs.length;
  console.log();
  log(`   📊 Skills loaded: ${skillCount}/16`, 'bright');
  log(`   📊 Reference files loaded: ${referenceFiles.filter(f => fs.existsSync(path.join(repoPath, f))).length}`, 'bright');
  console.log();

  log('⚙️  Creating convenience symlink...', 'yellow');
  const skillsLink = path.join(process.cwd(), 'skills');
  if (!fs.existsSync(skillsLink)) {
    try {
      fs.symlinkSync(repoPath, skillsLink, 'junction');
      log('   ✅ Symlink created: skills → repo', 'green');
    } catch (e) {
      log('   ℹ️  Symlink skipped (use the repo path directly)', 'cyan');
    }
  } else {
    log('   ℹ️  Symlink already exists', 'cyan');
  }

  console.log();
  log('╔══════════════════════════════════════════════════════════════╗', 'bright');
  log('║                   ✅ INSTALLATION COMPLETE ✅                  ║', 'bright');
  log('╚══════════════════════════════════════════════════════════════╝', 'bright');
  console.log();

  log('📌 Next steps:', 'yellow');
  console.log();
  log('   1. Load the Master Entry Orchestrator:', 'cyan');
  log('      cat skills/master-entry-orchestrator/SKILL.md', 'cyan');
  console.log();
  log('   2. Declare your agent:', 'cyan');
  log('      COMMAND: DECLARE', 'cyan');
  log('      agent_id: YOUR-ROLE-INSTANCE-001', 'cyan');
  log('      role: ARCHITECT', 'cyan');
  console.log();
  log('   3. Start orchestrating!', 'cyan');
  log('      COMMAND: INVOKE skill:01 action:design_architecture', 'cyan');
  console.log();

  log('🔗 Repository:', 'magenta');
  log('   https://github.com/salahAlssayani/delegate-skills', 'magenta');
  console.log();
}

install();
