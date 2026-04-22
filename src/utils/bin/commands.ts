// List of commands that do not require API calls

import * as bin from './index';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
─── Keyboard Shortcuts ───
[Tab]         - Auto-complete command
[↑]/[↓]       - Navigate command history
[Ctrl+L]      - Clear terminal screen
[Ctrl+C]      - Cancel current input
[Enter]       - Execute command
\nType 'screenfetch' to display summary.
`;
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am Melo.
Welcome to my website!
More about me:
'screenfetch' - short summary.
'resume' - my latest resume.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open('https://www.baidu.com');
  return 'Opening resume...';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open('mailto:kdz1001@outlook.com');
  return 'Opening mailto:kdz1001@outlook.com...';
};

export const github = async (args: string[]): Promise<string> => {
  window.open('https://github.com/xym0602/');
  return 'Opening github...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const bing = async (args: string[]): Promise<string> => {
  window.open(`https://bing.com/search?q=${args.join(' ')}`);
  return `Wow, really? You are using bing for ${args.join(' ')}?`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return 'guest';
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.bilibili.com/video/BV1GJ411x7h7', '_blank');
  return `Permission denied: with little power comes... no responsibility? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `<div class="ascii-art">
  ███╗   ███╗███████╗██╗      ██████╗ ███████╗    ██╗  ██╗ ██████╗ ███╗   ███╗███████╗
  ████╗ ████║██╔════╝██║     ██╔═══██╗██╔════╝    ██║  ██║██╔═══██╗████╗ ████║██╔════╝
  ██╔████╔██║█████╗  ██║     ██║   ██║███████╗    ███████║██║   ██║██╔████╔██║█████╗
  ██║╚██╔╝██║██╔══╝  ██║     ██║   ██║╚════██║    ██╔══██║██║   ██║██║╚██╔╝██║██╔══╝
  ██║ ╚═╝ ██║███████╗███████╗╚██████╔╝███████║    ██║  ██║╚██████╔╝██║ ╚═╝ ██║███████╗
  ╚═╝     ╚═╝╚══════╝╚══════╝ ╚═════╝ ╚══════╝    ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝</div>

Type 'help' to see the list of available commands.
Type 'screenfetch' to display summary.
Type 'blog' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="https://blog.xn--4gq986klnp.cn" target="_blank">here</a></u> for the personal blog.
`;
};

export const blog = async (args: string[]): Promise<string> => {
  window.open('https://blog.xn--4gq986klnp.cn');
  return "Opening Melo's blog";
};

// Exit - close the page
export const exit = async (args: string[]): Promise<string> => {
  setTimeout(() => {
    window.close();
  }, 2000);
  return 'Bye';
};

// Claude CLI simulation (for fun)
export const claude = async (args: string[]): Promise<string> => {
  return `<pre style="font-family: monospace; line-height: 1.4; white-space: pre;">
<span style="color: #D78787;">╭─── Claude Code v8.8.888 ────────────────────────────────────────────────────────────────────╮</span>
<span style="color: #D78787;">│</span>                                     <span style="color: #D78787;">│</span> Tips for getting started                              <span style="color: #D78787;">│</span>
<span style="color: #D78787;">│</span>            Welcome back!            <span style="color: #D78787;">│</span> Run /init to create a CLAUDE.md file                  <span style="color: #D78787;">│</span>
<span style="color: #D78787;">│</span>                                     <span style="color: #D78787;">│</span> ───────────────────────────────────────────────────── <span style="color: #D78787;">│</span>
<span style="color: #D78787;">│</span>               <span style="color: #D78787;">▐▛███▜▌</span>               <span style="color: #D78787;">│</span> Recent activity                                       <span style="color: #D78787;">│</span>
<span style="color: #D78787;">│</span>              <span style="color: #D78787;">▝▜█████▛▘</span>              <span style="color: #D78787;">│</span> No recent activity                                    <span style="color: #D78787;">│</span>
<span style="color: #D78787;">│</span>                <span style="color: #D78787;">▘▘ ▝▝</span>                <span style="color: #D78787;">│</span>                                                       <span style="color: #D78787;">│</span>
<span style="color: #D78787;">│</span>                                     <span style="color: #D78787;">│</span>                                                       <span style="color: #D78787;">│</span>
<span style="color: #D78787;">│</span> Claude Opus 4.7 · API Usage Billing <span style="color: #D78787;">│</span>                                                       <span style="color: #D78787;">│</span>
<span style="color: #D78787;">│</span>     ~/a-fake-folder/vibecoding      <span style="color: #D78787;">│</span>                                                       <span style="color: #D78787;">│</span>
<span style="color: #D78787;">╰─────────────────────────────────────────────────────────────────────────────────────────────╯</span>
</pre>
This is a simulated Claude Code interface. For the real experience, visit: <u><a class="text-light-blue dark:text-dark-blue underline" href="https://claude.ai/code" target="_blank">https://claude.ai/code</a></u>`;
};

// Matrix effect
export const matrix = async (args: string[]): Promise<string> => {
  const chars = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lines: string[] = [];
  for (let i = 0; i < 15; i++) {
    let line = '';
    for (let j = 0; j < 60; j++) {
      line += chars[Math.floor(Math.random() * chars.length)];
    }
    lines.push(`<span class="matrix-line">${line}</span>`);
  }
  return `<div class="matrix-container">
${lines.join('\n')}
<div class="exit-hint">Press Ctrl+L or type 'clear' to exit</div>
</div>`;
};

// Hack effect - simulate "hacking"
export const hack = async (args: string[]): Promise<string> => {
  const fakeCommands = [
    '> Connecting to target server...',
    '> Bypassing firewall... SUCCESS',
    '> Injecting payload... ',
    '> Exploiting CVE-2024-1337... ',
    '> Dumping database credentials...',
    '> Decrypting passwords... 83% complete',
    '> Accessing root shell... GRANTED',
    '> Installing backdoor... SUCCESS',
    '> Cleaning logs... DONE',
    '> Exfiltrating data... 2.3GB transferred',
    '> Covering tracks...',
    '> Mission complete. Welcome, hacker.',
  ];
  const lines = fakeCommands.map((cmd, i) => {
    const cls = cmd.includes('SUCCESS') || cmd.includes('GRANTED') ? 'hack-line success' :
                cmd.includes('complete') ? 'hack-line warning' : 'hack-line';
    return `<span class="${cls}" style="animation-delay: ${i * 0.1}s">${cmd}</span>`;
  });
  return `<div class="hack-container">
${lines.join('\n')}
<div class="exit-hint">Press Ctrl+L or type 'clear' to exit</div>
</div>`;
};

// Panic effect - system crash simulation
export const panic = async (args: string[]): Promise<string> => {
  const errors = [
    'KERNEL PANIC - not syncing: VFS: Unable to mount root fs',
    'CRITICAL ERROR: Memory corruption detected at 0xDEADBEEF',
    'FATAL: System integrity compromised',
    'ERROR: Sector 0 read failure - disk corrupted',
    'WARNING: CPU temperature exceeding limits',
    'SEGFAULT: Process 1337 terminated unexpectedly',
    'CRITICAL: Unauthorized access detected in /root',
    'ERROR: Filesystem corruption - attempting recovery...',
    'PANIC: Unable to handle kernel NULL pointer dereference',
    'FATAL: Hardware malfunction - check power supply',
    'WARNING: Multiple process failures detected',
    'ERROR: Network stack corrupted - all connections dropped',
    'CRITICAL: BIOS integrity check failed',
    'FATAL: Operating system corruption detected',
  ];
  const lines = errors.map((err, i) => {
    const cls = err.startsWith('CRITICAL') || err.startsWith('FATAL') ?
                'panic-line critical' : 'panic-line';
    return `<span class="${cls}" style="animation-delay: ${i * 0.05}s">${err}</span>`;
  });
  return `<div class="panic-container">
${lines.join('\n')}
<div class="exit-hint">Press Ctrl+L or type 'clear' to exit (this is fake, relax)</div>
</div>`;
};