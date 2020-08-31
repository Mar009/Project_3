module.exports = function (sequelize, DataTypes) {
    var Symptom = sequelize.define("Symptom", {

        symptom: {
            type: DataTypes.STRING,
            allowNull: true
        },
        problemId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false,
            
        }
    });

    Symptom.associate = function(models) {
        Symptom.belongsTo(models.User);

    };

    return Symptom;
}