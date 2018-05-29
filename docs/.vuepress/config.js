module.exports = {
    title: 'Hello VuePress',
    description: 'work around',
    base: "/",
    themeConfig: {
        sidebar: [
            '/',
            '/memo/',
        ],
        nav: [
            { text: 'Home', link: '/' }
        ]
    },
    backend: {
        name: 'github',
        repo: 'simezi/matzzlog',
        branch: 'master',
    }
};