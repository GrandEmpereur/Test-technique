/**
 * Définition du type pour un élément de shopData.
 * @typedef {Object} ShopItems
 * @property {string} shop_name - Nom du shop.
 * @property {string} shop_adress - Adresse du shop.
 * @property {string} company_name - Nom de l'entreprise.
 * @property {string} shop_manager_surname - Nom du gérant du shop.
 * @property {string} shop_manager_name - Prénom du gérant du shop.
 * @property {string} shop_picture - URL de l'image du shop.
 * @property {number} total_shop_score - Score total du shop.
 * @property {ShopDataItems[]} data - Données du shop.
 */
export type ShopItems = {
    shop_name: string;
    shop_adress: string;
    company_name: string;
    shop_manager_surname: string;
    shop_manager_name: string;
    shop_picture: string;
    total_shop_score: number;
    data: ShopDataItems[];
};

/**
 * Définition du type pour un élément des données d'un shop.
 * @typedef {Object} ShopDataItems
 * @property {number} mean_shop - Moyenne du shop.
 * @property {number} R - R du shop.
 */
export type ShopDataItems = {
    mean_shop: number;
    R: number;
};

/**
 * Définition du type pour les données d'un shop.
 * @typedef {Object} ShopData
 * @property {ShopItems[]} shops - Liste des shops.
 */
export type ShopData = {
    shops: ShopItems[];
};
