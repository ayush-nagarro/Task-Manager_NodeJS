const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/tasks.db'
})

const Tasks = db.define('task', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(256),
    },
    due: {
        type: Sequelize.DATE,
        allowNull: false
    },
    priority: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

const Notes = db.define('notes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    task: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    note: {
        type: Sequelize.STRING(256),
        allowNull: false
    }
})

module.exports = {
    db, Tasks, Notes
}