import { ShopItems } from './ShopData.types';

/**
 * Définition du type pour les props du composant Modal.
 * @typedef {Object} ModalProps
 * @property {ShopItems} shopData - Données du shop.
 * @property {() => void} onClose - Fonction pour fermer la modal.
 * @property {boolean} showModal - Booléen pour afficher ou non la modal.
 */
export interface ModalProps {
    shopData: ShopItems;
    onClose: () => void;
    showModal: boolean;
}
