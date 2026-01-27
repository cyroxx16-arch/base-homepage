export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ✅ Normalize any weird trailing slash on html
    if (url.pathname.endsWith(".html/")) {
      url.pathname = url.pathname.slice(0, -1);
      return Response.redirect(url.toString(), 301);
    }

    // ✅ Force clean app route to the real file
    if (url.pathname === "/app" || url.pathname === "/app/") {
      url.pathname = "/app.html";
      return Response.redirect(url.toString(), 301);
    }

    // ✅ IMPORTANT: keep /app.html from being "cleaned" to /app (avoids 308 loops on iOS)
    if (url.pathname === "/app.html") {
      // Serve the file directly
      return env.ASSETS.fetch(request);
    }

    return env.ASSETS.fetch(request);
  },
};

