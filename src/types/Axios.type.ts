import { ShopData } from "./ShopData.types";

/**
 * Définition du type pour la réponse de l'API.
 * @name ApiResponse
 * @type {Object}
 * @property {ShopData} record - Données du shop.
 * @returns {ApiResponse} La réponse de l'API.
 */
export type ApiResponse = {
    record: ShopData;
};