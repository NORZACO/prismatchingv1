const express = require("express");
const jsend = require("jsend");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
router.use(jsend.middleware);
const AuthGgroupPermissionsServices = require("../services/AuthGgroupPermissionsServices");
const authGgroupPermissionsServices = new AuthGgroupPermissionsServices();

// get all authGroupPermissions user jsend
router.get("/", async (req, res, next) => {
  try {
    const auth_group_permissions = await authGgroupPermissionsServices.getAll();
    res.jsend.success({
      result: auth_group_permissions,
    });
  } catch (err) {
    res.jsend.fail({
      message: err.message,
    });
  }
});

// get one authGroupPermissions user jsend
router.get("/:id", async (req, res, next) => {
  try {
    const auth_group_permissions = await authGgroupPermissionsServices.getOne(
      req.params.id
    );
    res.jsend.success({ result: auth_group_permissions });
  } catch (err) {
    res.jsend.fail({
      message: err.message,
    });
  }
});

// create authGroupPermissions user jsend
router.post("/", jsonParser, async (req, res, next) => {
  const { get_group_id, get_permission_id } = req.body;
  if (!get_group_id || !get_permission_id) {
    res.jsend.fail({
      message: "missing fields",
    });
    return;
  }
  try {
    const auth_group_permissions = await authGgroupPermissionsServices.Create(
      get_group_id,
      get_permission_id
    );
    res.jsend.success({ result: auth_group_permissions });
  } catch (err) {
    res.jsend.fail({
      message: err.message,
    });
  }
});

// update authGroupPermissions user jsend
router.put("/:id", jsonParser, async (req, res, next) => {
  try {
    const auth_group_permissions = await authGgroupPermissionsServices.update(
      req.params.id,
      req.body
    );
    res.jsend.success(auth_group_permissions);
  } catch (err) {
    res.jsend.fail({
      message: err.message,
    });
  }
});

// delete authGroupPermissions user jsend
router.delete("/:id", async (req, res, next) => {
  try {
    const auth_group_permissions = await authGgroupPermissionsServices.delete(
      req.params.id
    );
    res.jsend.success(auth_group_permissions);
  } catch (err) {
    res.jsend.fail({
      message: err.message,
    });
  }
});

// export
module.exports = router;
