import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PetsController {
  async index(ctx: HttpContextContract) {
    return 'GET Pets'
  }

  async store({ request }: HttpContextContract) {
    return 'POST Pets'
  }

  async show({ params }: HttpContextContract) {}

  async update({ params }: HttpContextContract) {}

  async destroy({ params }: HttpContextContract) {}
}
