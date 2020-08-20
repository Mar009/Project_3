module.exports = function (sequelize, DataTypes) {
    const Symptom = sequelize.define("Symptom", {

        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        locale: {
            type: DataTypes.STRING,
            allowNull: false
        },
        doctorType: {
            type: DataTypes.STRING,
            allowNull: true
        },
        time: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Symptom.associate = function(models) {
        Symptom.belongsTo(models.User,{
            foreignKey: {
                allowNull: false
            }
        });

    };

    return Symptom;
}