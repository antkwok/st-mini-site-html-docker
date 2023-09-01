// @ts-check

const path = require('path')
const { name, version } = require('./package.json')

/** @type {import('caz').Template} */
module.exports = {
  name,
  version,
  source: 'st-html-docker',
  metadata: {
    // TODO: predefined template metadata
    year: new Date().getFullYear()
  },
  prompts: [
    // TODO: custom template prompts
    {
      name: 'name',
      type: 'text',
      message: 'Project name'
    },
    {
      name: 'version',
      type: 'text',
      message: 'Project version',
      initial: 'v1.0.0'
    },
    {
      name: 'description',
      type: 'text',
      message: 'Project description',
      initial: 'Awesome html-docker apps.'
    },
    {
      name: 'author',
      type: 'text',
      message: 'Project author name'
    },
    {
      name: 'email',
      type: 'text',
      message: 'Project author email'
    },
    // {
    //   name: 'url',
    //   type: 'text',
    //   message: 'Project author url'
    // },
    {
      name: 'namespace',
      type: 'text',
      message: 'aliyun container register namespace',
      initial: 'eastweek-minisites'
    },
    {
      name: 'container_name',
      type: 'text',
      message: 'aliyun container register container name'
    },
    {
      name: 'port',
      type: 'text',
      message: 'port',
      initial: '8001'
    },
    // {
    //   name: 'features',
    //   type: 'multiselect',
    //   message: 'Choose the features you need',
    //   instructions: false,
    //   choices: [
    //     // TODO: custom template features
    //     { title: 'Automatic test', value: 'test', selected: true },
    //     { title: 'Foo', value: 'foo' }
    //   ]
    // },
    // {
    //   name: 'install',
    //   type: 'confirm',
    //   message: 'Install dependencies',
    //   initial: true
    // },
    // {
    //   name: 'pm',
    //   type: prev => process.env.NODE_ENV === 'test' || prev ? 'select' : null,
    //   message: 'Package manager',
    //   hint: ' ',
    //   choices: [
    //     { title: 'npm', value: 'npm' },
    //     { title: 'pnpm', value: 'pnpm' },
    //     { title: 'yarn', value: 'yarn' }
    //   ]
    // }
  ],
  complete: async ctx => {
    // TODO: custom complete callback
    console.clear()
    console.log(`Created a new project in ${ctx.project} by the ${ctx.template} template.\n`)
    console.log('Getting Started:')
    if (ctx.dest !== process.cwd()) {
      console.log(`  $ cd ${path.relative(process.cwd(), ctx.dest)}`)
    }
    console.log(`  $ cp .env.developer.example .env.developer`)
    console.log(`  $ mkdir -p public/sup`)
    console.log(`\n  then place vendor's html code in it`)

    // console.log(`  $ ${ctx.config.install ? ctx.config.install : 'npm'} test`)
    console.log('\nBy Anthony Kwok :)\n')
  }
}
