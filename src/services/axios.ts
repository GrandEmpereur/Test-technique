import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ShopData } from '../types/ShopData.types';
import { ApiResponse } from '../types/Axios.type';

/**
 * Une instance d'Axios pour faire des requêtes à l'API.
 */
let instance: AxiosInstance | null = null;

/**
 * Met à jour l'instance d'Axios avec les bonnes valeurs de base URL et d'entêtes.
 */
export function updateAxiosInstance() {
    const key = import.meta.env.VITE_JSONBIN_KEY ?? '';
    const binID = import.meta.env.VITE_JSONBIN_BIN_ID ?? '';

    if (!key || !binID) {
        throw new Error('Missing JSONBIN_KEY or JSONBIN_BIN_ID in .env file');
    }

    instance = axios.create({
        baseURL: `https://api.jsonbin.io/v3/b/${binID}`,
        headers: {
            'X-Master-Key': key,
        },
    });
}

/**
 * Récupère les données d'un shop depuis l'API.
 * 
 * @returns Les données d'un shop.
 * @throws Si la requête à l'API échoue.
 */
export async function getShop(): Promise<ShopData> {
    // On s'assure que l'instance Axios a été correctement initialisée.
    if (instance === null) {
        throw new Error('Axios instance not initialized. Call updateAxiosInstance() first.');
    }

    const response: AxiosResponse<ApiResponse> = await instance?.get('/latest');

    // On vérifie que le statut de la réponse est 200, sinon on lance une erreur.
    if (response?.status !== 200) {
        throw new Error('Error getting shop');
    }

    // On retourne les données du shop.
    return { shops: response?.data?.record.shops ?? [] } as ShopData;

}
