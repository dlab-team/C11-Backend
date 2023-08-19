import router from "./api.router.js";

export const load = (app) => {
  /* BACKEND */
  app.use("/api", router);
  // Redirect Api
  app.use("*", (req, res) => res.redirect(`/api/`));
};
