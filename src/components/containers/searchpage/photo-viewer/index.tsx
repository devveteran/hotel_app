import { HotelInfo } from "@constants/types"
import styles from './style.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { server } from "@services/axios";
import { useEffect, useState } from "react";

interface PropType {
    hotel: HotelInfo
    onClose: () => void,
};

const PhotoViewer = ({hotel, onClose}: PropType) => {
    const [curImage, setCurImage] = useState<number>(0);
    
    const increaseIndex = (v: number) => {
        let newIndex = curImage + v;
        if (newIndex < 0)
            newIndex = 0;
        else if (newIndex >= hotel.photoURIs.length) {
            newIndex = hotel.photoURIs.length - 1;
        }
        setCurImage(newIndex);
    }

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return (() => {
            document.body.style.overflow = "auto";
        });
    }, []);
    
    return (<div className={`w-100 h-100 position-fixed start-0 top-0 ${styles.photoviewer_wrapper} d-flex`}>
        <span className={`p-0 position-absolute cursor-pointer border border-3 ${styles.close_button}`}
            onClick={onClose}>
            <FontAwesomeIcon icon={faTimes}/>
        </span>
        <div className={`flex-auto row row-cols-2 ms-1 height-fit-content mh-100 ${styles.image_roll}`}>
            {
                hotel.photoURIs.map((ele, i) => {
                    return <div key={ele} className={`position-relative m-0 p-0 d-flex justify-content-center cursor-pointer ${styles.image_roll_item}`}
                        onClick={() => setCurImage(i)}>
                        <img className={`p-1 rounded-2 w-100 h-100 `} style={{width:'150px'}} src={`${server}/Images/${hotel.name}/${ele}`} draggable="false"/>
                        <span className={`position-absolute m-1 start-0 top-0 end-0 bottom-0 rounded-2 ${styles.image_roll_hover_item} ${i === curImage ? styles.selected : ''}`} />
                    </div>
                })
            }
        </div>
        <div className={`col-md-9 d-flex m-6 position-relative`}>
            <div className={`position-absolute start-0 ${styles.nav_imgage}`} onClick={() => increaseIndex(-1)}>
                <FontAwesomeIcon size="xl" className={`p-3 cursor-pointer ${styles.image_nav_icon}`} icon={faChevronLeft}/>
            </div>
            <div className="h-100 w-100 d-flex justify-content-center">
                <img className="p-1 rounded-2 mw-100 h-auto object-fit-contain user-select-none" src={`${server}/Images/${hotel.name}/${hotel.photoURIs[curImage]}`} draggable="false"/>
            </div>
            <div className={`position-absolute end-0 ${styles.nav_imgage}`} onClick={() => increaseIndex(1)}>
                <FontAwesomeIcon size="xl" className={`p-3 cursor-pointer ${styles.image_nav_icon}`} icon={faChevronRight}/>
            </div>
        </div>

    </div>)
}
export default PhotoViewer;