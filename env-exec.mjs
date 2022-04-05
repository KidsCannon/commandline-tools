import { promises as fs } from 'fs'
import { spawn } from 'child_process'

const usageExit = () => {
  console.log('Usage: $ dotenv-exec [env-file] [command]')
  process.exit(2)
}

const [envFile, command, ...opts] = process.argv.splice(2)

if (envFile == null || command == null) usageExit()

const data = await fs.readFile(envFile)
const env = {}
for (const line of data.toString().split(/\r?\n/)) {
  const [name, ...values] = line.split('=')
  if (!name || name.startsWith('#')) continue
  env[name] = values.join('=').replace(/^["']/, "").replace(/["']$/, "")
}

const p = spawn(command, opts, { env: { ...process.env, ...env } })
p.stderr.pipe(process.stderr)
p.stdout.pipe(process.stdout)
p.on("close", (code) => process.exit(code))

