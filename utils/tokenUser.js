const createTokenUser = function (user) {
  return {
    name: user.name,
    userId: user._id,
    role: user.role
  };
}

module.exports = createTokenUser;