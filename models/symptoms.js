module.exports = function (sequelize, Datatypes) {
    const Symptoms = sequelize.define("Symptoms", {
        symptoms: {
            type: Datatypes.STRING,
            allowNull: false
        },
        //age & gender is for the diagnosis bit. Diagnosis requires it. 
        age: {
            type: Datatypes.STRING,
            allowNull: false
        },
        //API medic is Binary 
        gender: {
            type: Datatypes.STRING,
            allowNull: false
        }
    })
    //Associate symptoms to user since there is going to be a history to view
    Symptoms.associate = function (models) {
        Symptoms.belongTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Symptoms;
}