const Produto = require('../models/produto');

class ProdutoRepository {
  async findAll() {
    return await Produto.findAll();
  }

  async findById(id) {
    return await Produto.findByPk(id);
  }

  async create(data) {
    return await Produto.create(data);
  }

  async update(id, data) {
    const produto = await Produto.findByPk(id);
    if (!produto) return null;
    return await produto.update(data);
  }

  async delete(id) {
    const produto = await Produto.findByPk(id);
    if (!produto) return false;
    await produto.destroy();
    return true;
  }
}

module.exports = new ProdutoRepository();