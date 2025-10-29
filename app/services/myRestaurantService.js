import RestaurantService from './RestaurantService';

class MyRestaurantService {
  static async getAll(cpf = null) {
    return cpf 
      ? await RestaurantService.getByCpf(cpf)
      : await RestaurantService.buscarRestaurantes();
  };
};

export default MyRestaurantService;