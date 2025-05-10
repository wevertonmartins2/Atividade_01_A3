const Cliente = require('../models/cliente');

class ClienteRepository {
  async findAll() {
    return await Cliente.findAll();
  }

  async findById(id) {
    return await Cliente.findByPk(id);
  }

  async create(data) {
    return await Cliente.create(data);
  }

  async update(id, data) {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return null;
    return await cliente.update(data);
  }

  async delete(id) {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) return false;
    await cliente.destroy();
    return true;
  }
}

module.exports = new ClienteRepository();