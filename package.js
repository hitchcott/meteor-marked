// Source: https://github.com/chjj/marked

Package.describe({
  summary: "A markdown parser and compiler. With Emojis.",
  version: "0.3.0",
  name: "hitchcott:marked-with-emojis",
  git: "https://github.com/hitchcott/meteor-marked.git"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.1");
  api.use("templating", "client", {weak: true});

  api.add_files("pre-marked.js");
  api.add_files("marked/lib/marked.js");
  api.add_files("post-marked.js");

  api.add_files('template-integration.js', 'client');
  api.export('marked');
});
