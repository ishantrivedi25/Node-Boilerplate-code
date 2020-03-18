const CMSAuthService = require('../../services/cms-api/CMSAuthService');
const { cmsMessages } = require('../../config/cmsMessages');

module.exports = {
    async Login(req, res) {
        try {
          let login = await CMSAuthService.Login(req, res);
          if (login) {
            res.json({
              data : login,
              message: cmsMessages.loginMessage,
              status: 1
            });
          }
        } catch (error) {
          res.json({
            data: [],
            message: cmsMessages.errorMessage,
            status: 0
          });
        }
    },

    async Logout(req, res) {
        try {
          let logout = await CMSAuthService.Logout(req, res);
          if (logout) {
            res.json({
              data: [],
              message: cmsMessages.logoutMessage,
              status: 1
            });
          }
        } catch (error) {
          res.json({
            data: [],
            message: cmsMessages.errorMessage,
            status: 0
          });
        }
    },

    async Signup(req, res) {
        try {
          let signup = await CMSAuthService.Signup(req, res);
          if (signup) {
            res.json({
              data: [],
              message: cmsMessages.signupMessage,
              status: 1
            });
          }
        } catch (error) {
          res.json({
            data: [],
            message: cmsMessages.errorMessage,
            status: 0
          });
        }
    },

    async Resetpassword(req, res) {
      try {
        let resetpassword = await CMSAuthService.ResetPassword(req, res);
        if (resetpassword) {
          res.json({
            data: [],
            message: cmsMessages.resetPasswordMessage,
            status: 1
          });
        }
      } catch (error) {
        res.json({
          data: [],
          message: cmsMessages.resetPasswordMessage,
          status: 0
        });
      }
    }
};