var express = require('express');
var router = express.Router();


const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

/* GET auth_group page. */
router.get('/', async function(req, res, next) {
  const users = await prisma.auth_group.findMany()



  
  res.json({users })
});

module.exports = router;
