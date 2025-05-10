const ProdutoRepository = require('../repositories/produtoRepository');

class ProdutoService {
  async getAllProdutos() {
    return await ProdutoRepository.findAll();
  }

  async getProdutoById(id) {
    const produto = await ProdutoRepository.findById(id);
    if (!produto) throw new Error('Produto não encontrado');
    return produto;
  }

  async createProduto(data) {
    if (!data.nome || !data.preco || !data.categoria) {
      throw new Error('Nome, preço e categoria são obrigatórios');
    }
    data.createdAt = new Date();
    data.updatedAt = new Date();
    return await ProdutoRepository.create(data);
  }

  async updateProduto(id, data) {
    data.updatedAt = new Date();
    const updated = await ProdutoRepository.update(id, data);
    if (!updated) throw new Error('Produto não encontrado');
    return updated;
  }

  async deleteProduto(id) {
    const deleted = await ProdutoRepository.delete(id);
    if (!deleted) throw new Error('Produto não encontrado');
    return true;
  }
}

module.exports = new ProdutoService();