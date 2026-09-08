#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const GITHUB_REPO = 'salahAlssayani/delegate-skills';
const SKILLS_DIR = path.join(process.cwd(), 'skills');
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
  log('║         Multi-Agent SDLC Orchestration Platform            ║', 'bright');
  log('║              by Eng. Salah Allsayani                       ║', 'bright');
  log('╚══════════════════════════════════════════════════════════════╝', 'bright');
  log(`   📧 ${COLORS.cyan}eng.salahalssayani@gmail.com${COLORS.reset}`);
  log(`   🏛️  ${COLORS.cyan}Taiz University, Alsaeed Faculty of Engineering & IT${COLORS.reset}`);
  log(`   🏙️  ${COLORS.cyan}Taiz, Yemen${COLORS.reset}`);
  console.log();
}

function checkPrerequisites() {
  log('📋 Checking prerequisites...', 'yellow');

  const hasGit = execSync('git --version 2>nul || echo NOT_FOUND', { encoding: 'utf-8' }).trim();
  if (hasGit.includes('NOT_FOUND')) {
    log('❌ Git is not installed. Please install Git first.', 'red');
    process.exit(1);
  }
  log('   ✅ Git found', 'green');

  const hasNode = execSync('node --version 2>nul || echo NOT_FOUND', { encoding: 'utf-8' }).trim();
  if (hasNode.includes('NOT_FOUND')) {
    log('❌ Node.js is not installed. Please install Node.js >= 14.', 'red');
    process.exit(1);
  }
  log(`   ✅ Node.js found (${hasNode})`, 'green');

  console.log();
}

function cloneOrUseLocal() {
  const localSkillsDir = path.join(process.cwd(), 'master-entry-orchestrator');
  const hasLocalSkills = fs.existsSync(localSkillsDir);

  if (hasLocalSkills) {
    log('📁 Local skills found — using existing repository files.', 'cyan');
    return process.cwd();
  }

  log('📥 Cloning repository from GitHub...', 'yellow');
  const targetDir = path.join(process.cwd(), 'delegate-skills');

  if (fs.existsSync(targetDir)) {
    log('   Repository already exists, pulling latest...', 'cyan');
    execSync('git pull origin master', { cwd: targetDir, stdio: 'inherit' });
  } else {
    execSync(`git clone https://github.com/${GITHUB_REPO}.git`, { stdio: 'inherit' });
  }

  return path.join(process.cwd(), 'delegate-skills');
}

function loadAllSkills(repoPath) {
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

  const referenceFiles = ['skill_agent_entry_reference.md', 'README.md', 'LICENSE', 'CONTRIBUTING.md'];

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
    }
  });

  console.log();
  log(`   📊 Total files loaded: ${loaded}`, 'bright');
  return loaded;
}

function createSymlink(repoPath) {
  const skillLink = path.join(process.cwd(), 'skills');
  if (!fs.existsSync(skillLink)) {
    try {
      fs.symlinkSync(repoPath, skillLink, 'junction');
      log(`   ✅ Symlink created: skills → ${repoPath}`, 'green');
    } catch (e) {
      log(`   ℹ️  Symlink creation skipped (requires admin): ${e.message}`, 'yellow');
    }
  }
}

function setupPostInstall(repoPath) {
  log('⚙️  Running post-install setup...', 'yellow');

  const packageJsonPath = path.join(repoPath, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    log('   ✅ package.json found', 'green');
  }

  const skillCount = fs.readdirSync(path.join(repoPath)).filter(
    (d) => fs.statSync(path.join(repoPath, d)).isDirectory() && fs.existsSync(path.join(repoPath, d, 'SKILL.md'))
  ).length;

  log(`   ✅ ${skillCount} skill directories verified`, 'green');

  console.log();
}

function printFinalInstructions(repoPath) {
  log('╔══════════════════════════════════════════════════════════════╗', 'bright');
  log('║                   ✅ INSTALLATION COMPLETE ✅               ║', 'bright');
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
  log(`   https://github.com/${GITHUB_REPO}`, 'magenta');
  console.log();

  log('📖 Documentation:', 'magenta');
  log('   cat skills/README.md', 'magenta');
  log('   cat skills/CONTRIBUTING.md', 'magenta');
  console.log();
}

function main() {
  banner();
  checkPrerequisites();

  const repoPath = cloneOrUseLocal();
  loadAllSkills(repoPath);
  createSymlink(repoPath);
  setupPostInstall(repoPath);
  printFinalInstructions(repoPath);
}

main();
