define("views\/version",["dust.core"],function(dust){dust.register("views\/version",body_0);function body_0(chk,ctx){return chk.w("<p>Running Dust version <strong>").f(ctx.get(["version"], false),ctx,"h").w("</strong></p>");}body_0.__dustBody=!0;return body_0});
