import BaseService from "./BaseService";

class UserService extends BaseService {
  getUsers = (cb) => {
    // return super.apiGet('/users/all', cb);
    return [
      {
        id: 1,
        name: "John",
        city: "City One",
        username: "John Username",
      },
      {
        id: 2,
        name: "Peter",
        city: "City Two",
        username: "Peter Username",
      },
    ];
  };

  getUserPayments = (userId, cb) => {
    // return super.apiGet('/v2/payments/all?userId=' + userId, cb);
    const promotions = [
      {
        id: 1,
        description: "payment description",
        amount: "$1000.00",
        rewardMultiplier: 5,
        discount: "50%",
        lowerLimit: 35,
        upperLimit: 55,
        createdTS: 44,
        promotionElement: 'pel',
        user: {
            currencyType: '$'
        }
      },
    ];
    return promotions;
  };
  getCumulativeRewards = (category, cb) => {
    // return super.apiGet('/v2/user-rewards/cumulative?category=' + category, cb);
  };
  getPromotions = (cb) => {
    // return super.apiGet('/v2/promotions/all', cb);
    const promotions = [
      {
        id: 1,
        promotionName: "promotionOneName",
        category: "category 1 name",
        rewardMultiplier: 5,
        discount: "50%",
        lowerLimit: 35,
        upperLimit: 55,
        createdTS: 44,
      },
      {
        id: 2,
        promotionName: "promotion2Name",
        category: "category 2 name",
        rewardMultiplier: 5,
        discount: "30%",
        lowerLimit: 35,
        upperLimit: 55,
        createdTS: 44,
      },
      {
        id: 3,
        promotionName: "promotion3Name",
        category: "category 3 name",
        rewardMultiplier: 5,
        discount: "50%",
        lowerLimit: 35,
        upperLimit: 55,
        createdTS: 44,
      },
    ];
    return promotions;
  };

  getCategories = (cb) => {
    // return super.apiGet('/v2/categories', cb);
  };

  addPayment = (data, cb) => {
    // return super.apiPost('/v2/payments/add', data, cb);
  };
}

export default UserService;
