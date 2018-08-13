'use strict';

module.exports = function(Student) {
  var app = require('../../server/server');

  // make admin role to the new instance
  Student.observe('after save', async function(ctx) {
    app.models.Role.find({ name: 'student' }, function(err, results) {
      results[1].principals.create({
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
