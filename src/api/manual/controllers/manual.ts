/**
 * manual controller
 */

import { factories } from "@strapi/strapi";

// export default factories.createCoreController('api::manual.manual');

export default factories.createCoreController(
  "api::manual.manual",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      // Find the manual by slug
      const entity = await strapi.db.query("api::manual.manual").findOne({
        where: { slug },
        populate: ["content"],
      });

      // If not found, return 404
      if (!entity) {
        return ctx.notFound("Manual not found");
      }

      // Return the manual data
      return entity;
    },
  }),
);
