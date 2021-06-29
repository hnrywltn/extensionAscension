'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Products', [
        {
            productName: 'Prettier',
            description: 'Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
            imgUrl: 'https://svipas.gallerycdn.vsassets.io/extensions/svipas/prettier-plus/4.2.2/1594129719274/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 1,
            categoryId: 1
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Bracket Pair Colorizer',
            description: 'This extension allows matching brackets to be identified with colours. The user can define which characters to match, and which colours to use.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer',
            imgUrl: 'https://coenraads.gallerycdn.vsassets.io/extensions/coenraads/bracket-pair-colorizer/1.0.61/1542132753296/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 2,
            categoryId: 1
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'ESLint',
            description: 'Integrates ESLint into VS Code.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint',
            imgUrl: 'https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/2.1.23/1623763213709/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 3,
            categoryId: 1
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Beautify',
            description: "VS Code uses js-beautify internally, but it lacks the ability to modify the style you wish to use. This extension enables running js-beautify in VS Code, AND honouring any .jsbeautifyrc file in the open file's path tree to load your code styling.",
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify',
            imgUrl: 'https://hookyqr.gallerycdn.vsassets.io/extensions/hookyqr/beautify/1.5.0/1556863124877/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 4,
            categoryId: 1
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Paste JSON as Code',
            description: 'Interactively generate types and (de-)serialization code from JSON, JSON Schema, and TypeScript; Paste JSON/JSON Schema/TypeScript as code',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype',
            imgUrl: 'https://quicktype.gallerycdn.vsassets.io/extensions/quicktype/quicktype/12.0.46/1537458509039/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 5,
            categoryId: 1
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Better Comments',
            description: 'The Better Comments extension will help you create more human-friendly comments in your code.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments',
            imgUrl: 'https://aaron-bond.gallerycdn.vsassets.io/extensions/aaron-bond/better-comments/2.1.0/1594671781043/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 6,
            categoryId: 1
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Python Indent',
            description: 'Correct python indentation in Visual Studio Code.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=KevinRose.vsc-python-indent',
            imgUrl: 'https://kevinrose.gallerycdn.vsassets.io/extensions/kevinrose/vsc-python-indent/1.14.2/1619061123948/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 7,
            categoryId: 1
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Formatting Toggle',
            description: 'A VS Code extension that allows you to toggle the formatter (Prettier, Beautify, …) ON and OFF with a simple click.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle',
            imgUrl: 'https://tombonnike.gallerycdn.vsassets.io/extensions/tombonnike/vscode-status-bar-format-toggle/2.0.0/1571152475226/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 8,
            categoryId: 1
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Git Lens',
            description: 'GitLens supercharges the Git capabilities built into Visual Studio Code. It helps you to visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
            imgUrl: 'https://eamodio.gallerycdn.vsassets.io/extensions/eamodio/gitlens/11.5.1/1623683139488/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 9,
            categoryId: 2
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Live Share',
            description: 'This extension pack includes everything you need to start collaboratively editing and debugging in real time, including integrated audio and text chat. This provides you and your team/class with a one-click installation, in order to begin pair programming, performing remote code reviews, driving interactive lectures, and more, without needing to leave Visual Studio Code.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack',
            imgUrl: 'https://ms-vsliveshare.gallerycdn.vsassets.io/extensions/ms-vsliveshare/vsliveshare-pack/0.4.0/1591125099437/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 10,
            categoryId: 2
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'CodeStream',
            description: 'CodeStream is a developer collaboration platform that integrates essential dev tools into VS Code. Eliminate context-switching and simplify code discussion and code review by putting collaboration tools in your IDE.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=CodeStream.codestream',
            imgUrl: 'https://codestream.gallerycdn.vsassets.io/extensions/codestream/codestream/11.0.11/1624393100460/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 11,
            categoryId: 2
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Chat',
            description: 'Team Chat is a light-weight companion chat for VS Live Share however, you can configure it to link to Slack or Discord. It has a notification counter which is less disruptive than pop-up tray notifications.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=karigari.chat',
            imgUrl: 'https://karigari.gallerycdn.vsassets.io/extensions/karigari/chat/0.35.0/1592096079680/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 12,
            categoryId: 2
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Pomodoro Timer',
            description: 'A simple Pomodoro timer shows in the status bar.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=lkytal.pomodoro',
            imgUrl: 'https://lkytal.gallerycdn.vsassets.io/extensions/lkytal/pomodoro/1.1.3/1567301972991/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 13,
            categoryId: 2
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Material Icon Theme',
            description: 'Get the Material Design icons into your VS Code',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme',
            imgUrl: 'https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/logo.png',
            userId: 14,
            categoryId: 3
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Dracula Official',
            description: 'A dark theme for Visual Studio Code.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula',
            imgUrl: 'https://dracula-theme.gallerycdn.vsassets.io/extensions/dracula-theme/theme-dracula/2.22.4/1623770247403/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 15,
            categoryId: 3
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Github Theme',
            description: "GitHub's VS Code themes",
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme',
            imgUrl: 'https://github.gallerycdn.vsassets.io/extensions/github/github-vscode-theme/4.1.1/1619620767725/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 16,
            categoryId: 3
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Shades of Purple',
            description: 'A professional theme suite with hand-picked & bold shades of purple for your VS Code editor and terminal apps',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple',
            imgUrl: 'https://ahmadawais.gallerycdn.vsassets.io/extensions/ahmadawais/shades-of-purple/6.13.0/1617883683788/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 17,
            categoryId: 3
        , createdAt: new Date(), updatedAt: new Date() },
        {
            productName: 'Monokai Pro',
            description: 'Professional theme and matching icons, from the author of the original Monokai color scheme',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode',
            imgUrl: 'https://monokai.gallerycdn.vsassets.io/extensions/monokai/theme-monokai-pro-vscode/1.1.19/1617689615821/Microsoft.VisualStudio.Services.Icons.Default',
            userId: 18,
            categoryId: 3
        , createdAt: new Date(), updatedAt: new Date() }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Products', null, {});
  }
};
