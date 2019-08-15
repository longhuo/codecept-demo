exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:4200',
      show: false,
      restart: false,
      keepCookies: true,
      waitForNavigation: ['networkidle2', 'domcontentloaded'],
      "windowSize": "1440x700",
      chrome: {
        args: ['--no-sandbox', '--window-size=1440,700'],
      },
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept'
}