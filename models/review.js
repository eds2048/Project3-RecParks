module.exports = function(sequelize, DataTypes) {
    const Review = sequelize.define("Review", {
      park_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false
      },
      review_text: {
        type: DataTypes.STRING(2000),
        allowNull: true,
        unique: false
      },
      overall_rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false
      },
      accessibility_rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false
      },
      cleanliness_rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false
      },
      activities_rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
        unique: false
      }
    });
    return Review
}