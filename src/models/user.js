export const loadUser = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    { tableName: 'users' }
  )
  // User.associate = function associate (models) {
  // }
  return User
}
