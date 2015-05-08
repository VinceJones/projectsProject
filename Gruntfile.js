module.exports = function(grunt) {
    //Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
            },
            build: {
                src: 'client/app.js',
                dest: 'server/public/assets/scripts/app.min.js'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        cwd: "node_modules/bootstrap",
                        src: [
                            "dist/css/*",
                            "dist/fonts/*",
                            "dist/js/*",
                            "fonts/*"
                        ],
                        "dest": "server/public/vendors/bootstrap"
                    },
                    {
                        expand: true,
                        cwd: "node_modules/",
                        src: [
                            "bootstrap/fonts/*"
                        ],
                        "dest": "server/public/vendors"
                    },
                    {
                        expand: true,
                        cwd: "node_modules/",
                        src: [
                            "jquery/dist/jquery.min.js",
                            "jquery/dist/jquery.min.map"
                        ],
                        "dest": "server/public/vendors"
                    },
                    {
                        expand: true,
                        cwd: "client/",
                        src: [
                            "styles.css"
                        ],
                        "dest": "server/public/assets/styles"
                    },
                    {
                        expand: true,
                        cwd: "client/",
                        src: [
                            "fruitStand.js"
                        ],
                        "dest": "server/public/assets/scripts"
                    }
                ]
            }
        }



    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //Default task(s)
    grunt.registerTask('default', ['copy', 'uglify']);
};