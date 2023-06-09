import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { getShop, updateAxiosInstance } from '../services/axios';
import Modal from './Modal';
import '../scss/App.scss';
import { ShopData } from '../types/ShopData.types';
import Loading from './Loading'

/**
 * Le composant principal de l'application.
 * @returns Le composant App.
 */
const App: React.FC = () => {
    const [shopData, setShopData] = useState<ShopData | null>(null);
    const [currentShopIndex, setCurrentShopIndex] = useState<number | null>(null);

    useEffect(() => {
        /**
         * La fonction pour récupérer les données du magasin.
         */
        const fetchShopData = async () => {
            updateAxiosInstance();
            const data = await getShop();
            setShopData(data);
        }

        fetchShopData();
    }, []);

    return (
        <div className="Main">
            <div className="content">
                {shopData ? shopData.shops.map((shop, index) => (
                    <div 
                        key={index} 
                        className='content__shopName animated' 
                        onClick={() => setCurrentShopIndex(index)}
                    >
                        <p>{shop.shop_name}</p>
                    </div>
                )) : <Loading />}
            </div>

            {shopData && shopData.shops.map((shop, index) => (
                <CSSTransition
                    key={index}
                    in={currentShopIndex === index}
                    timeout={300} // Correspond à la durée de votre transition dans votre CSS
                    classNames="Modal"
                    unmountOnExit
                >
                    <Modal
                        shopData={shop}
                        onClose={() => setCurrentShopIndex(null)}
                        showModal={currentShopIndex === index}
                    />
                </CSSTransition>
            ))}
        </div>
    );
}

export default App;
