module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            width: {
                '18': '4.5rem',
                '26': '6.5rem',
            },
            fontSize: {
                '2xs': '0.625rem',
                '3xs': '0.500rem',
            }
        },
    },
    plugins: [],
}
