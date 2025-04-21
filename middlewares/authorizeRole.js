// function authorizeRole(roles) {
//     return (req, res, next) => {
//       if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
  
//       console.log('AuthorizeRole - User role:', req.user.role);
//       console.log('AuthorizeRole - Allowed roles:', roles);
  
//       if (!roles.includes(req.user.role)) {
//         return res.status(403).json({ message: 'Forbidden: You are not authorized' });
//       }
//       next();
//     };
//   }
  
//   module.exports = { authorizeRole };

function authorizeRole(roles) {
    return (req, res, next) => {
      if (!req.user) return res.status(401).json({ message: 'Unauthorized' });
  
      const userRole = req.user.role.toLowerCase();
      console.log('AuthorizeRole - User role:', userRole);
      console.log('AuthorizeRole - Allowed roles:', roles);
  
      if (!roles.includes(userRole)) {
        return res.status(403).json({ message: 'Forbidden: You are not authorized' });
      }
      next();
    };
  }
  
  module.exports = { authorizeRole };
  
  