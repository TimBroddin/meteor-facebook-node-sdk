Package.describe({
    summary: "Facebook SDK API"
});

Npm.depends({
    "facebook-node-sdk": "0.2.0"
});

Package.on_use(function(api) {
    api.export(['Facebook']);
    api.add_files("main.js", "server");
});