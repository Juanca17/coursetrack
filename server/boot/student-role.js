/*
module.exports = function(app) {
  var User = app.models.user;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Student = app.models.Student;

  Student.find({}, function(err, students) {
    // create the admin role
    Role.create({
      name: 'student'
    }, function(err, role) {
      if (err) throw err;

      console.log('Created role:', role);

      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: students[1].id
      }, function(err, principal) {
        if (err) throw err;

        console.log('Created principal:', principal);
      });
    });

  });

};
*/
