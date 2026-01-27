export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ✅ Force /app and /app/ to go to the real file
    if (url.pathname === "/app" || url.pathname === "/app/") {
      url.pathname = "/app.html";
      return Response.redirect(url.toString(), 301);
    }

    // ✅ Let Pages serve static assets + files normally
    return env.ASSETS.fetch(request);
  },
};

