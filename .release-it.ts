import type { Config } from 'release-it';

export default {
  git: {
    requireBranch: 'main',
    commitMessage: 'chore: release v${version}',
    commit: true,
    tag: true,
    push: true,
  },
  npm: {
    publish: true,
  },
  publishConfig: {
    access: 'public',
    registry: 'https://registry.npmjs.org/',
  },
  plugins: {
    '@release-it/conventional-changelog': {
      preset: {
        name: 'angular',
      },
      infile: 'CHANGELOG.md',
    },
  },
  hooks: {
    'before:init': ['yarn lint'],
    // 'after:conventional-changelog:bump': 'prettier --write "CHANGELOG.md"',
    'after:bump': 'yarn build',
    'after:release': 'git push origin HEAD --follow-tags',
  },
} satisfies Config;
