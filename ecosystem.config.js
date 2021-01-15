module.exports = {
    apps : [{
        name: 'nextjs',
        script: 'yarn',
        args:"start",
        cwd:"/Index/eney/Documents/hanyang_web",
        instances: 2,
        autorestart: true,
        watch: false,
        max_memory_restart: '2G',
}]
};
