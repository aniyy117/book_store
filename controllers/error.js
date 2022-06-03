
export const error_page = (req, res, next) => {
    res.status(404).render("404.pug", { docTitle: "404" });
  };
  