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

  /**
   * Register Student to a Course.
   * @param {string} courseId Course to register the Student into.
   * @param {Function(Error)} callback
   */

  Student.register = function(courseId, callback) {
    var course = courseId;
    app.models.Registration.create({
      courseId: course
    }, function(err, role) {if (err) throw err;});

    callback(null, courseId);
  };

  // Operation hook to complete registration
  Student.afterRemote('register', function(ctx, remoteMethodOutput, next) {
    app.models.Registration.find({
      where:{courseId: remoteMethodOutput}}, function(err, register) {
        /*const token = ctx.options && ctx.options.accessToken;
        const userId = token && token.userId;
        const user = userId ? 'user#' + userId : '<anonymous>';
        app.models.Registration.updateAttribute({studentId: user}, function(err, instance) {});*/
        console.log(ctx.req);
    });
    next();
  });
};

// 5b713fb901aaa559efdd6377
