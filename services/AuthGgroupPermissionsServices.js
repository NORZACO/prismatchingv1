/**
 *
 */
const Serialize = require("serialize-javascript");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// class AuthGroupPermissions
class AuthGgroupPermissions {
  constructor(prisma) {
    this.prisma = prisma;
  }

  // get all authGroupPermissions
  async getAll() {
    const auth_group_permissions =
      await prisma.auth_group_permissions.findMany();

    // check
    if (!auth_group_permissions) {
      throw Error("auth_group_permissions not found");
    }
    return {
      // if there is bigint change to json // serialize a BigInt
      auth_group_permissions: auth_group_permissions.map(
        (auth_group_permissions) => {
          return {
            ...auth_group_permissions,
            id: Number(auth_group_permissions.id),
          };
        }
      ),
    };
  }

  // get one authGroupPermissions
  async getOne(id) {
    const auth_group_permissions =
      await prisma.auth_group_permissions.findUnique({
        where: {
          id: parseInt(id),
        },
      });
    // check
    if (!auth_group_permissions) {
      throw Error("auth_group_permissions not found");
    }
    // if there is bigint change to json // serialize a BigInt
    return {
      ...auth_group_permissions,
      id: Number(auth_group_permissions.id),
    };
  }


    // create authGroupPermissions
    async Create(get_group_id, get_permission_id) {
      const auth_group_permissions =
        await prisma.auth_group_permissions.create({
          data: {
            group_id: get_group_id,
            permission_id: get_permission_id,
          },
        });
      // check
      if (!auth_group_permissions) {
        throw Error("auth_group_permissions not created");
      }
      // if there is bigint change to json // serialize a BigInt
      return {
        ...auth_group_permissions,
        id: Number(auth_group_permissions.id),
      };  
    }

  //   // update authGroupPermissions
  //   async update(id, data) {
  //     const auth_group_permissions = await prisma.auth_group_permissions.update({
  //       where: {
  //         id: parseInt(id),
  //       },
  //       data: {
  //         group_id: data.group_id,
  //         permission_id: data.permission_id,
  //       },
  //     });
  //     // check
  //     if (!auth_group_permissions) {
  //       throw Error("auth_group_permissions not updated");
  //     }
  //     return auth_group_permissions;
  //   }

  //   // delete authGroupPermissions
  //   async delete(id) {
  //     const auth_group_permissions = await prisma.auth_group_permissions.delete({
  //       where: {
  //         id: parseInt(id),
  //       },
  //     });
  //     // check
  //     if (!auth_group_permissions) {
  //       throw Error("auth_group_permissions not deleted");
  //     }
  //     return auth_group_permissions;
  //   }
  //
  }


module.exports = AuthGgroupPermissions;
