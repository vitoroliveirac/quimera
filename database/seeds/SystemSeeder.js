"use strict";

/*
|--------------------------------------------------------------------------
| SystemSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

const System = use("App/Models/System");
const Env = use("Env");

class SystemSeeder {
  async run() {
    await System.create({
      id: 1,
      name: "Central SETC",
      description: "Central para os sistemas da SETC",
      active: true,
      url: "http://172.22.21.120:3000"
    });
  }
}

module.exports = SystemSeeder;
