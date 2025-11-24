const BASE_URL = "https://fakestoreapi.com/products";

// GET - ler todos os produto
// @returns {Promise<Array>}

export async function getProducts() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro em getProducts: ", error);
    return [];
  }
}

// Get - ler um produto pelo ID
// @params {Number} id - id do produto
// @returns {Promise<object>}

export async function getProductsById(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar o produto");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro em getProductById: ", error);
    return null;
  }
}

// POST - criar um novo produto
// @param {Object} product
// @returns {Promise<Object>}

export async function createProduct(product) {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error("Erro ao criar produto");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro em createProduct: ", error);
    return null;
  }
}

// PUT - Atualizar produto
// @param {Number} id
// @param {Object} product
// @returns {Promise<Object>}

export async function updateProduct(id, product) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error("Erro ao atualizar produto");
    }
    const data = response.json();
  } catch (error) {
    console.error("Erro em updateProduct: ", error);
    return null;
  }
}

// DELETE - excluir produto
// @param {number} id
// @return {Promise<boolean>}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new error("Erro ao deletar produto");
    }
    return true;
  } catch (error) {
    console.error("erro em deleteProduct: ", error);
    return false;
  }
}
