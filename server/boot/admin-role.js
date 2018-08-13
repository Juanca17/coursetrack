/*
module.exports = function(app) {
  var User = app.models.user;
  var Role = app.models.Role;
  var RoleMapping = app.models.RoleMapping;
  var Administrator = app.models.Administrator;

  Administrator.find({}, function(err, administrators) {
    // create the admin role
    Role.create({
      name: 'admin'
    }, function(err, role) {
      if (err) throw err;

      console.log('Created role:', role);

      role.principals.create({
        principalType: RoleMapping.USER,
        principalId: administrators[0].id
      }, function(err, principal) {
        if (err) throw err;

        console.log('Created principal:', principal);
      });
    });
  });

  Role.find({ name: 'admin' }, function(err, results) {
    console.log(results[0].id);
  });
};
*/
