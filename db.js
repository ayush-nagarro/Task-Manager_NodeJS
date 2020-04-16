const sequelize = require('sequelize')

const db = new sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/todos.db'
})

const Todos = db.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    task: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    Description: {
        type: Sequelize.STRING(256),
    },
    done: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    due: {
        type: Sequelize.DATE,
        allowNull: false
    },
    priority: {
        type: sequelize.STRING(10),
        defaultValue: "Medium"
    },
    completed: {
        type: sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

const Notes = db.define('notes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    note: {
        type: Sequelize.STRING(256),
        allowNull: false
    }
})

module.exports = {
    db, Todos, Notes
}