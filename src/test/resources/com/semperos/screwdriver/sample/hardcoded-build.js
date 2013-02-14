{
    mainConfigFile: 'output/javascripts/common.js',
    optimize: 'none',
    baseUrl: 'output/javascripts', // was full canonical path
    findNestedDependencies: true,
    include: [ 'common' ],
    insertRequire: [ 'common' ],
    // This is relative to baseUrl
    name: 'vendor/almond-0.2.4',
    wrap: true,
    out: 'output/built/javascripts/common-built.js',
    logLevel: 0,
    originalBaseUrl: 'output/javascripts'
}
