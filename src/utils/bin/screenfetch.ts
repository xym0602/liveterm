import config from '../../../config.json';

const screenfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
      return `
        _____       ____                     screenfetch: summary
      .\'     \'.__  |    |                   -----------
    @@@@         \'. |¯¯|                     ABOUT
  .-.@@¯¯¯|¯|¯¯¯¯¯\|  |                      ${config.name}
  \`-\` @@  '-'@     )  /                     ﰩ ${config.ps1_hostname}
    \ @@    @@@@@@@@ /                       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
   __\____   ____.' /                       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
  /   \  \\___\\__ '                        -----------
  \___/__/ o  o  '/¯¯\                       CONTACT 
   /¯¯\       __ /   /                       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
  /   /   .-'¯  ¯\__/                        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
  \__/-.-'                                  
      `;
      




//     return `                                                  
//              @@@@@@@@@@@@@                   screenfetch: summary
//         @@@@               @@@@             -----------
//       @@                       @@            ABOUT
//     @@                           @@          ${config.name}
//   @@                               @@       ﰩ ${config.ps1_hostname}
//  @@                         @@@     @@       <u><a href="${config.resume_url}" target="_blank">resume</a></u>
// @@        @@@                        @@     爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
// @@                                   @@     -----------
// @@             .@@@@@@@@@@.          @@      CONTACT 
//  @@           @@          @@        @@       <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
//   @@           @@        @@        @@        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
//    @@             @@@@@@          @@         <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
//      @@@                        @@@         -----------
//         @@@                  @@@ @@          DONATE 
//          @|  @@@@@@@@@@@@@@@@   @@           <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
//          @|                      @@          <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

// `;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  screenfetch
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > L I V E T E R M        ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             DONATE 
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀                <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀                   <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  }
};

export default screenfetch;