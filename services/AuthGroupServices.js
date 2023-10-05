const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


// class AuthGroupServices
class AuthGroupServices {
  constructor() {
    this.prisma = prisma;
  }

  // GET ALL
  async getAll() {
    const auth_groups = await this.prisma.auth_group.findMany();
    // check
    if (!auth_groups) {
      throw Error("auth_groups not found");
    }
    return auth_groups;
  }

  async getOne(id) {
    const auth_group = await prisma.auth_group.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    // check
    if (!auth_group) {
      throw Error("auth_group not found");
    }
    return auth_group;
  }

  async Create(name) {
    const find_auth_group = await prisma.auth_group.findUnique({where: { name },});
    if (find_auth_group) throw Error("auth_group already exist");
    const auth_group = await prisma.auth_group.create({ data: {name,},});
    // check
    if (!auth_group) throw Error("auth_group not created");
    return auth_group;
  }

  async update(id, data) {
    const auth_group = await prisma.auth_group.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: data.name,
      },
    });
    return auth_group;
  }

  async delete(id) {
    const auth_group = await prisma.auth_group.delete({
      where: {
        id: parseInt(id),
      },
    });
    return auth_group;
  }
}


// export class
module.exports = AuthGroupServices;
