module.exports = {
    future: {
        webpack5: true,
    },
    async redirects() {
        return [
            {
                source: '/page/1',
                destination: '/',
                permanent: true,
            },
        ]
    },
}