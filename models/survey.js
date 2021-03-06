module.exports = function(sequelize, DataTypes) {
  var SurveyResults = sequelize.define("SurveyResults", {
    name_: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [1, 30]
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true,
        len: [1, 30]
      }
    },
    group_: {
      type: DataTypes.STRING,
      allowNull: false     
    },
    discResults: {
      type: DataTypes.TEXT
    },
    myersResults: {
      type: DataTypes.TEXT
    },
    enneagramResults: {
      type: DataTypes.TEXT
    }
  });
  return SurveyResults;
};




