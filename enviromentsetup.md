# ⚡ Git & Node.js Quick Check + Plug-and-Play (Windows)

## ✅ 1) Check if Git is installed

```bat
git --version


```

Check if Node.js & npm are installed

node -v
npm -v

D:\portable\git\bin\git.exe --version

▶️ Run Portable Node.js directly

D:\portable\nodejs\node.exe -v
D:\portable\nodejs\npm.cmd -v

Optional) Temporary PATH for current terminal session
Command Prompt (cmd.exe)

set PATH=%PATH%;D:\portable\nodejs;D:\portable\git\bin

PowerShell

$env:Path += ";D:\portable\nodejs;D:\portable\git\bin"
