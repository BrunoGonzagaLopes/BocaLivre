import RestaurantEntity from "../entities/restaurants";

const restaurantesEmMemoria = [
  {
    "id": 1,
    "name": "Celsinho Grill",
    "rating": 4.9,
    "adress": "Rua das Palmeiras, 123, Bairro Anchieta, Belo Horizonte, MG",
    "description": "Restaurante moderno, ambiente acolhedor, sabores únicos e pratos frescos.",
    "image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    "cpfDono": "",
    "distance": 6.2
  },
  {
    "id": 2,
    "name": "Bella Pizza",
    "rating": 4.7,
    "adress": "Avenida Amazonas, 456, Bairro Funcionários, Belo Horizonte, MG",
    "description": "Pizzas artesanais, forno a lenha, ambiente familiar.",
    "image": "https://images.unsplash.com/photo-1601924582971-3b3f36507dbf",
    "cpfDono": "",
    "distance": 7.5
  },
  {
    "id": 3,
    "name": "Sushi Master",
    "rating": 4.8,
    "adress": "Rua dos Guajajaras, 789, Bairro Savassi, Belo Horizonte, MG",
    "description": "Sushis frescos e combinados tradicionais japoneses.",
    "image": "https://images.unsplash.com/photo-1562158070-6c1d8aabf6a7",
    "cpfDono": "",
    "distance": 8.0
  },
  {
    "id": 4,
    "name": "Burger House",
    "rating": 4.5,
    "adress": "Rua da Bahia, 3210, Bairro Lourdes, Belo Horizonte, MG",
    "description": "Hambúrgueres gourmet, batatas crocantes e milkshakes.",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349",
    "cpfDono": "",
    "distance": 9.3
  },
  {
    "id": 5,
    "name": "La Pasta",
    "rating": 4.6,
    "adress": "Rua Espírito Santo, 222, Bairro Belvedere, Belo Horizonte, MG",
    "description": "Massas frescas e molhos artesanais, ambiente italiano.",
    "image": "https://images.unsplash.com/photo-1525755662778-989d0524087e",
    "cpfDono": "",
    "distance": 15.4
  },
  {
    "id": 6,
    "name": "Café do Bairro",
    "rating": 4.4,
    "adress": "Travessa Cataguases, 55, Bairro Santa Tereza, Belo Horizonte, MG",
    "description": "Cafés especiais, doces e ambiente aconchegante.",
    "image": "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "cpfDono": "",
    "distance": 4.5
  },
  {
    "id": 7,
    "name": "Churrascaria Prime",
    "rating": 4.9,
    "adress": "Rua Padre Eustáquio, 777, Bairro Padre Eustáquio, Belo Horizonte, MG",
    "description": "Carnes nobres, buffet variado e atendimento excelente.",
    "image": "https://images.unsplash.com/photo-1600891964342-1f0b1d04f1d7",
    "cpfDono": "",
    "distance": 2.8
  },
  {
    "id": 8,
    "name": "Veggie Delight",
    "rating": 4.3,
    "adress": "Rua Álvares Cabral, 135, Bairro Serra, Belo Horizonte, MG",
    "description": "Opções veganas criativas, sucos naturais e sobremesas.",
    "image": "https://images.unsplash.com/photo-1543353071-873f17a7a088",
    "cpfDono": "",
    "distance": 6.9
  },
  {
    "id": 9,
    "name": "Bistro do Bruno",
    "rating": 4.5,
    "adress": "Avenida do Contorno, 980, Bairro Santo Antônio, Belo Horizonte, MG",
    "description": "Ambiente aconchegante com pratos caseiros e receitas da casa.",
    "image": "https://picsum.photos/400/300?random=1",
    "cpfDono": "123.456.789-00",
    "distance": 5.0
  },
  {
    "id": 10,
    "name": "Café da Manhã do Bruno",
    "rating": 4.2,
    "adress": "Rua Padre Rolim, 45, Bairro Santo Agostinho, Belo Horizonte, MG",
    "description": "Cafeteria especializada em cafés especiais e brunch.",
    "image": "https://picsum.photos/400/300?random=2",
    "cpfDono": "123.456.789-00",
    "distance": 6.7
  },
  {
    "id": 11,
    "name": "Sushi House Maria",
    "rating": 4.8,
    "adress": "Av. G, 78, Bairro Funcionários, Belo Horizonte, MG",
    "description": "Sushi fresco e combinações autorais em ambiente moderno.",
    "image": "https://picsum.photos/400/300?random=3",
    "cpfDono": "987.654.321-00",
    "distance": 7.2
  },
  {
    "id": 12,
    "name": "Padaria Pão Quente",
    "rating": 4.0,
    "adress": "Av. I, 11, Bairro Savassi, Belo Horizonte, MG",
    "description": "Padaria tradicional com pães fresquinhos e doces variados.",
    "image": "https://picsum.photos/400/300?random=4",
    "cpfDono": "987.654.321-00",
    "distance": 8.5
  },
  {
    "id": 13,
    "name": "Bistrô da Maria",
    "rating": 4.6,
    "adress": "Rua C, 22, Bairro Belvedere, Belo Horizonte, MG",
    "description": "Pratos internacionais com toque caseiro.",
    "image": "https://picsum.photos/400/300?random=5",
    "cpfDono": "987.654.321-00",
    "distance": 14.0
  },
  {
    "id": 14,
    "name": "Churrascaria do Lucas",
    "rating": 4.7,
    "adress": "Rua C, 56, Bairro Santa Tereza, Belo Horizonte, MG",
    "description": "Carnes nobres, buffet variado e atendimento familiar.",
    "image": "https://picsum.photos/400/300?random=6",
    "cpfDono": "321.654.987-11",
    "distance": 4.2
  },
  {
    "id": 15,
    "name": "Hamburgueria Lucas",
    "rating": 4.3,
    "adress": "Av. D, 90, Bairro Padre Eustáquio, Belo Horizonte, MG",
    "description": "Hambúrgueres artesanais e milkshakes clássicos.",
    "image": "https://picsum.photos/400/300?random=7",
    "cpfDono": "321.654.987-11",
    "distance": 3.0
  },
  {
    "id": 16,
    "name": "Burguer Ana",
    "rating": 4.3,
    "adress": "Rua D, 78, Bairro Serra, Belo Horizonte, MG",
    "description": "Hambúrguer artesanal com opções veganas e milkshakes.",
    "image": "https://picsum.photos/400/300?random=8",
    "cpfDono": "654.987.321-22",
    "distance": 6.8
  },
  {
    "id": 17,
    "name": "Café Ana",
    "rating": 4.5,
    "adress": "Rua E, 15, Bairro Santo Antônio, Belo Horizonte, MG",
    "description": "Cafeteria moderna com bolos e salgados fresquinhos.",
    "image": "https://picsum.photos/400/300?random=9",
    "cpfDono": "654.987.321-22",
    "distance": 5.5
  }
]



class RestaurantService {
  static toEntity(d) {
    return new RestaurantEntity(
      d.id, d.name, d.rating ?? 0, d.adress, d.description,
      d.image, d.cpfDono, d.distance ?? 0
    );
  };

  static async create(data) {
    const now = String(Date.now());
    const novo = {
      id: now,
      name: data.name ?? '',
      description: data.description ?? '',
      adress: data.adress ?? '',
      cpfDono: data.cpfDono ?? '',
      image: data.image ?? `https://picsum.photos/400/300?random=${now}`,
      rating: data.rating ?? 0,
      distance: data.distance ?? 0,
    };
    restaurantesEmMemoria.push(novo);
    return this.toEntity(novo);
  }

  static async getAll(cpf = null) {
    if (!cpf) return restaurantesEmMemoria.map(this.toEntity);
    return restaurantesEmMemoria
      .filter(r => r.cpfDono === cpf)
      .map(this.toEntity);
  }

  static async getById(id) {
    const rest = restaurantesEmMemoria.find(r => String(r.id) === String(id));
    return rest ? this.toEntity(rest) : null;
  }

  static async update(id, dados) {
    const idx = restaurantesEmMemoria.findIndex(r => String(r.id) === String(id));
    if (idx === -1) return false;
    restaurantesEmMemoria[idx] = { ...restaurantesEmMemoria[idx], ...dados };
    return true;
  }
  static async getByCpf(cpf) {
  if (!cpf) return restaurantesEmMemoria.map(this.toEntity);
  const filtrados = restaurantesEmMemoria.filter(r => r.cpfDono === cpf);
  return filtrados.map(this.toEntity);
}

  static async delete(id) {
    const idx = restaurantesEmMemoria.findIndex(r => String(r.id) === String(id));
    if (idx === -1) return false;
    restaurantesEmMemoria.splice(idx, 1);
    return true;
  }
}

export default RestaurantService;