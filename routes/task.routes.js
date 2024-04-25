const express = require('express');

const {getAllTask, createTask, updateTask, deleteTask} = require('../controllers/task.controller');

const router = express.Router();

router.get("/" , getAllTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);


module.exports = router;