const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
// class AuthUserServices
class AuthUserServices {
  constructor(prisma) {
    this.prisma = prisma;
  }

    async getAll() {
        const auth_users = await prisma.auth_user.findMany();
        // check
        if (!auth_users) {
        throw Error("auth_users not found");
        }
        return auth_users;
    }

    async getOne(id) {
        const auth_user = await prisma.auth_user.findUnique({
        where: {
            id: parseInt(id),
        },
        });
        // check
        if (!auth_user) {
        throw Error("auth_user not found");
        }
        return auth_user;
    }


    async Create(username, password, email, first_name, last_name, is_staff, is_active, date_joined) {
        const auth_user = await prisma.auth_user.create({
        data: {
            username,
            password,
            email,
            first_name,
            last_name,
            is_staff,
            is_active,
            date_joined,
        },
        });
        // check
        if (!auth_user) {
        throw Error("auth_user not created");
        }
        return auth_user;
    }


    async update(id, data) {
        const auth_user = await prisma.auth_user.update({
        where: {
            id: parseInt(id),
        },
        data: {
            username: data.username,
            password: data.password,
            email: data.email,
            first_name: data.first_name,
            last_name: data.last_name,
            is_staff: data.is_staff,
            is_active: data.is_active,
            date_joined: data.date_joined,
        },
        });
        // check
        if (!auth_user) {
        throw Error("auth_user not updated");
        }
        return auth_user;
    }



    // delete
    async delete(id) {
        const auth_user = await prisma.auth_user.delete({
        where: {
            id: parseInt(id),
        },
        });
        return auth_user;
    }

}

export default AuthUserServices;
