const WebAuthService = require('../../services/web-api/WebAuthService');
const { webMessages } = require('../../config/webMessages');

module.exports = {
    async Login(req, res) {
        try {
          let login = await WebAuthService.Login(req, res);
          if (login) {
            res.json({
              data : login,
              message: webMessages.loginMessage,
              status: 1
            });
          }
        } catch (error) {
          res.json({
            data: [],
            message: webMessages.errorMessage,
            status: 0
          });
        }
    },

    async Logout(req, res) {
        try {
          let logout = await WebAuthService.Logout(req, res);
          if (logout) {
            res.json({
              data: [],
              message: webMessages.logoutMessage,
              status: 1
            });
          }
        } catch (error) {
          res.json({
            data: [],
            message: webMessages.errorMessage,
            status: 0
          });
        }
    },

    async Signup(req, res) {
        try {
          let signup = await WebAuthService.Signup(req, res);
          if (signup) {
            res.json({
              data: [],
              message: webMessages.signupMessage,
              status: 1
            });
          }
        } catch (error) {
          res.json({
            data: [],
            message: webMessages.errorMessage,
            status: 0
          });
        }
    },

    async Resetpassword(req, res) {
      try {
        let resetpassword = await WebAuthService.ResetPassword(req, res);
        if (resetpassword) {
          res.json({
            data: [],
            message: webMessages.resetPasswordMessage,
            status: 1
          });
        }
      } catch (error) {
        res.json({
          data: [],
          message: webMessages.resetPasswordMessage,
          status: 0
        });
      }
    }
};