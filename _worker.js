export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // ✅ If anyone hits the old file URL, send them to the safe folder URL
    if (url.pathname === "/app.html" || url.pathname === "/app.html/") {
      url.pathname = "/app/";
      return Response.redirect(url.toString(), 301);
    }

    // ✅ Optional: normalize /app to /app/ (nice and consistent)
    if (url.pathname === "/app") {
      url.pathname = "/app/";
      return Response.redirect(url.toString(), 301);
    }

    // ✅ Serve static site normally
    return env.ASSETS.fetch(request);
  },
};

