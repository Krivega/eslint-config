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
    'after:bump': 'yarn build',
    'after:release': 'git push origin HEAD --follow-tags',
  },
} satisfies Config;
