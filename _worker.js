export default {
  async fetch(request, env) {
    // Serve static assets (HTML/CSS/PNG/etc) correctly
    return env.ASSETS.fetch(request);
  },
};
