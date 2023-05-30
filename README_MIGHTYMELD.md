# MightyMeld Setup

1. Check out the repo.
2. `yarn`
3. Start via runner: `./runner.sh -u ../user-servers/netflix`

# Babel plugin and devigner development

1. In spiderbox/client-pgk: `yarn link`
2. In this repo: `yarn link @mightymeld/runtime`

To clear cache created by babel plugin: `rm -rf node_modules/.cache`
