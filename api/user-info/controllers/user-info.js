'use strict';
const moment = require('moment')
/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  findAnewUsersData: async(ctx) => {
    const endOfYear = moment().endOf("year").toDate()
    console.log(endOfYear)
    const startOfYear = moment().startOf("years").toDate()
    console.log(startOfYear)
    try {
      const entities = await strapi.query('user', 'users-permissions').model.aggregate([
        {
          $match:{
            createdAt: { 
              $gte: startOfYear, 
              $lt: endOfYear
            }
          }
        },
        {
          $group: { 
            "_id" : {
              month : {$month : "$createdAt"}, 
              year : {$year :  "$createdAt"}
            },
            "count" : {"$sum": 1}
          }
        },
        { $sort: {
          '_id.month': 1, 
        } } 
      ])
      console.log(entities)
      return entities
    } catch (err) {
      console.log(err)
    }
  }
};
