module.exports = {
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