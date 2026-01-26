export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);

  // ✅ Never rewrite static assets — serve them as real files
  if (url.pathname.startsWith("/assets/")) {
    return fetch(request);
  }

  return next();
}
