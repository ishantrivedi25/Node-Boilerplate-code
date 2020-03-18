const AppAuthService = require('../../services/app-api/AppAuthService');
const { appMessages } = require('../../config/appMessages');

module.exports = {
    async Login(req, res) {
        try {
          let login = await AppAuthService.Login(req, res);
          if (login) {
            res.json({
              data : login,
              message: appMessages.loginMessage,
              status: 1
            });
          }
        } catch (error) {
          res.json({
            data: [],
            message: appMessages.errorMessage,
            status: 0
          });
        }
    },

    async Logout(req, res) {
        try {
          let logout = await AppAuthService.Logout(req, res);
          if (logout) {
            res.json({
              data: [],
              message: appMessages.logoutMessage,
              status: 1
            });
          }
        } catch (error) {
          res.json({
            data: [],
            message: appMessages.errorMessage,
            status: 0
          });
        }
    },

    async Signup(req, res) {
        try {
          let signup = await AppAuthService.Signup(req, res);
          if (signup) {
            res.json({
              data: [],
              message: appMessages.signupMessage,
              status: 1
            });
          }
        } catch (error) {
          res.json({
            data: [],
            message: appMessages.errorMessage,
            status: 0
          });
        }
    },

    async Resetpassword(req, res) {
      try {
        let resetpassword = await AppAuthService.ResetPassword(req, res);
        if (resetpassword) {
          res.json({
            data: [],
            message: appMessages.resetPasswordMessage,
            status: 1
          });
        }
      } catch (error) {
        res.json({
          data: [],
          message: appMessages.resetPasswordMessage,
          status: 0
        });
      }
    }
};