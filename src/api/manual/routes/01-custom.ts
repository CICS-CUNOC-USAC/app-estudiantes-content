export default {
  routes: [
    {
      method: "GET",
      path: "/manuals/:slug",
      handler: "manual.findOne",
    },
  ],
};
