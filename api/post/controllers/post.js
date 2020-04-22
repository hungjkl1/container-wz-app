'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  findOne: async(ctx) => {
    try {
      const { id } = ctx.params;
      const entity = await strapi.services.post.findOne({ id });
      const sanitized = sanitizeEntity(entity, { model: strapi.models.post })
      strapi.services.post.update({id}, {
        views: sanitized.views + 1
      })
      return sanitized;
    } catch (err) {
      console.log(err)
    }
  }
};
