import { FC, useEffect, useState } from 'react';
import { ModalProps } from '../types/Modal.types';
import '../scss/Modal.scss';
import Icon from '../common/Icon';
import PrecisionRoll from './PrecisionRoll';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loading from './Loading.tsx';
import Skeleton from 'react-loading-skeleton';

/**
 * Un composant pour afficher un popup avec les informations sur un shop.
 * @param shopData Les données du magasin.
 * @param onClose Le gestionnaire pour fermer le modal.
 * @param showModal La visibilité du modal.
 * @returns Le composant Modal.
 */
const Modal: FC<ModalProps> = ({ shopData, onClose, showModal }) => {
    const [isClosing, setIsClosing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    /**
     * Gère la fermeture du modal.
     */
    const handleClose = () => {
        setIsClosing(true);
        onClose();
    }

    useEffect(() => {
        /**
         * Vérifie si les données du magasin sont vides et met à jour l'état de chargement en conséquence.
         */
        const isShopdataEmpty = Object.keys(shopData).length === 0;
        if (isShopdataEmpty) {
            setIsLoading(true);
        } else {
            setIsLoading(false);
        }
    }, [shopData]);

    return (
        <div className={`Modal ${showModal ? 'active' : ''}`}>
            <div className={`Modal__content ${showModal ? 'active' : ''}`}>
            {shopData && isLoading && <Loading />}
                <div className="Modal__content--shopTitle animated">
                    <h2>{isLoading ? <Skeleton /> : shopData.shop_name}</h2>
                    <Icon name="X" onClick={handleClose} />
                </div>

                <div className='Modal__content--shopInformation animated'>
                    {isLoading ? (
                        <Skeleton height={200} width={200} />
                    ) : (
                        <LazyLoadImage
                            src={shopData.shop_picture}
                            alt="shop"
                            placeholder={<Skeleton height={200} width={200} />}
                        />
                    )}
                    <div>
                        {isLoading ? (
                            <>
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </>
                        ) : (
                            <>
                                <p className='animated'>{shopData.shop_adress}</p>
                                <p className='animated'>{shopData.company_name}</p>
                                <p className='animated'>{shopData.shop_manager_name} {shopData.shop_manager_surname}</p>
                                <p className='animated'>score: {shopData.total_shop_score}</p>
                            </>
                        )}
                    </div>
                </div>

                <div className='Modal__content--shopScore'>
                    {shopData.data.map((data, index) => (
                        <div key={index} className='Modal__content--shopScore-items'>
                            <div className='Modal__content--shopScore--items-score animated'>
                                <p>Score n°{index + 1}</p>
                                <p>{data.mean_shop}</p>
                            </div>

                            <div className='Modal__content--shopScore--items-R animated'>
                                <p>R</p>
                                <PrecisionRoll R={data.R} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Modal;