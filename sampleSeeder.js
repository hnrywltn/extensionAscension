'use strict';

module.exports = {
  up: async (queryInterface) => {
    const products = await queryInterface.bulkInsert('Products', [
        {
            name: 'Prettier',
            description: 'Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
            imageUrl: 'https://svipas.gallerycdn.vsassets.io/extensions/svipas/prettier-plus/4.2.2/1594129719274/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'Benas Svipas',
            categoryId: 1
        },
        {
            name: 'Bracket Pair Colorizer',
            description: 'This extension allows matching brackets to be identified with colours. The user can define which characters to match, and which colours to use.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer',
            imageUrl: 'https://coenraads.gallerycdn.vsassets.io/extensions/coenraads/bracket-pair-colorizer/1.0.61/1542132753296/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'CoenraadS',
            categoryId: 1
        },
        {
            name: 'ESLint',
            description: 'Integrates ESLint into VS Code.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint',
            imageUrl: 'https://dbaeumer.gallerycdn.vsassets.io/extensions/dbaeumer/vscode-eslint/2.1.23/1623763213709/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'Dirk Baeumer',
            categoryId: 1
        },
        {
            name: 'Beautify',
            description: "VS Code uses js-beautify internally, but it lacks the ability to modify the style you wish to use. This extension enables running js-beautify in VS Code, AND honouring any .jsbeautifyrc file in the open file's path tree to load your code styling.",
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify',
            imageUrl: 'https://hookyqr.gallerycdn.vsassets.io/extensions/hookyqr/beautify/1.5.0/1556863124877/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'HookyQR',
            categoryId: 1
        },
        {
            name: 'Paste JSON as Code',
            description: 'Interactively generate types and (de-)serialization code from JSON, JSON Schema, and TypeScript; Paste JSON/JSON Schema/TypeScript as code',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype',
            imageUrl: 'https://quicktype.gallerycdn.vsassets.io/extensions/quicktype/quicktype/12.0.46/1537458509039/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'quicktype',
            categoryId: 1
        },
        {
            name: 'Better Comments',
            description: 'The Better Comments extension will help you create more human-friendly comments in your code.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments',
            imageUrl: 'https://aaron-bond.gallerycdn.vsassets.io/extensions/aaron-bond/better-comments/2.1.0/1594671781043/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'Aaron Bond',
            categoryId: 1
        },
        {
            name: 'Python Indent',
            description: 'Correct python indentation in Visual Studio Code.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=KevinRose.vsc-python-indent',
            imageUrl: 'https://kevinrose.gallerycdn.vsassets.io/extensions/kevinrose/vsc-python-indent/1.14.2/1619061123948/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'Kevin Rose',
            categoryId: 1
        },
        {
            name: 'Formatting Toggle',
            description: 'A VS Code extension that allows you to toggle the formatter (Prettier, Beautify, …) ON and OFF with a simple click.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle',
            imageUrl: 'https://tombonnike.gallerycdn.vsassets.io/extensions/tombonnike/vscode-status-bar-format-toggle/2.0.0/1571152475226/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'tombonnike',
            categoryId: 1
        },
        {
            name: 'Git Lens',
            description: 'GitLens supercharges the Git capabilities built into Visual Studio Code. It helps you to visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
            imageUrl: 'https://eamodio.gallerycdn.vsassets.io/extensions/eamodio/gitlens/11.5.1/1623683139488/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'Eric Amodio',
            categoryId: 2
        },
        {
            name: 'Live Share',
            description: 'This extension pack includes everything you need to start collaboratively editing and debugging in real time, including integrated audio and text chat. This provides you and your team/class with a one-click installation, in order to begin pair programming, performing remote code reviews, driving interactive lectures, and more, without needing to leave Visual Studio Code.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack',
            imageUrl: 'https://ms-vsliveshare.gallerycdn.vsassets.io/extensions/ms-vsliveshare/vsliveshare-pack/0.4.0/1591125099437/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'Microsoft',
            categoryId: 2
        },
        {
            name: 'CodeStream',
            description: 'CodeStream is a developer collaboration platform that integrates essential dev tools into VS Code. Eliminate context-switching and simplify code discussion and code review by putting collaboration tools in your IDE.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=CodeStream.codestream',
            imageUrl: 'https://codestream.gallerycdn.vsassets.io/extensions/codestream/codestream/11.0.11/1624393100460/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'CodeStream',
            categoryId: 2
        },
        {
            name: 'Chat',
            description: 'Team Chat is a light-weight companion chat for VS Live Share however, you can configure it to link to Slack or Discord. It has a notification counter which is less disruptive than pop-up tray notifications.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=karigari.chat',
            imageUrl: 'https://karigari.gallerycdn.vsassets.io/extensions/karigari/chat/0.35.0/1592096079680/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'Arjun Attam',
            categoryId: 2
        },
        {
            name: 'Pomodoro Timer',
            description: 'A simple Pomodoro timer shows in the status bar.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=lkytal.pomodoro',
            imageUrl: 'https://lkytal.gallerycdn.vsassets.io/extensions/lkytal/pomodoro/1.1.3/1567301972991/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'Maxfield Walker',
            categoryId: 2
        },
        {
            name: 'Material Icon Theme',
            description: 'Get the Material Design icons into your VS Code',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme',
            imageUrl: 'https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/main/logo.png',
            creatorName: 'Philipp Kief',
            categoryId: 3
        },
        {
            name: 'Dracula Official',
            description: 'A dark theme for Visual Studio Code.',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula',
            imageUrl: 'https://dracula-theme.gallerycdn.vsassets.io/extensions/dracula-theme/theme-dracula/2.22.4/1623770247403/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'Derek Sifford',
            categoryId: 3
        },
        {
            name: 'Github Theme',
            description: "GitHub's VS Code themes",
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme',
            imageUrl: 'data:image/jpeg;base64,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',
            creatorName: 'GitHub',
            categoryId: 3
        },
        {
            name: 'Shades of Purple',
            description: 'A professional theme suite with hand-picked & bold shades of purple for your VS Code editor and terminal apps',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=ahmadawais.shades-of-purple',
            imageUrl: 'https://ahmadawais.gallerycdn.vsassets.io/extensions/ahmadawais/shades-of-purple/6.13.0/1617883683788/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'Ahmad Awais',
            categoryId: 3
        },
        {
            name: 'Monokai Pro',
            description: 'Professional theme and matching icons, from the author of the original Monokai color scheme',
            productUrl: 'https://marketplace.visualstudio.com/items?itemName=monokai.theme-monokai-pro-vscode',
            imageUrl: 'https://monokai.gallerycdn.vsassets.io/extensions/monokai/theme-monokai-pro-vscode/1.1.19/1617689615821/Microsoft.VisualStudio.Services.Icons.Default',
            creatorName: 'monokai',
            categoryId: 3
        }

    ]
    )
}
}
