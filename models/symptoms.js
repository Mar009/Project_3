module.exports = function (sequelize, DataTypes) {
    var Symptom = sequelize.define("Symptom", {

        symptom: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // UserId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false
        // },
        problemId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        time: {
            type: DataTypes.INTEGER,
            allowNull: false,
            default: Date.now()
        }
    });

    Symptom.associate = function(models) {
        Symptom.belongsTo(models.User);

    };

    return Symptom;
}