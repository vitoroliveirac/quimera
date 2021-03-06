"use strict";

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

const User = use("App/Models/User");

class UserSeeder {
  async run() {
    await User.create({
      id: 1,
      orgao_codigo: 36000,
      login: "admin",
      name: "Administrador do Sistema",
      email: "desenvolvimento@setc.se.gov.br",
      password: "admsetc2019"
    });
  }
}

module.exports = UserSeeder;
