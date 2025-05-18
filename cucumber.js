module.exports = {
    default: [
        '--require ./features/step_definitions/**/*.js',
        '--format progress-bar',
        '--format node_modules/cucumber-pretty',
        '--publish-quiet',
        './features/**/*.feature'
    ].join(' ')
};