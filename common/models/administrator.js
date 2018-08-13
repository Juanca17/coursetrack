'use strict';

module.exports = function(Administrator) {
  var app = require('../../server/server');

  // make admin role to the new instance
  Administrator.observe('after save', async function(ctx) {
    app.models.Role.find({ name: 'admin' }, function(err, results) {
      results[0].principals.create({
        principalType: app.models.RoleMapping.USER,
        principalId: ctx.instance.id
      }, function(err, principal) {
        if (err) throw err;

        // console.log('Created principal:', principal);
      });
    });
    return;
  });
};
