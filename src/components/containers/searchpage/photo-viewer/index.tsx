import { HotelInfo } from "@constants/types"
import styles from './style.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface PropType {
    hotel: HotelInfo
};

const PhotoViewer = ({hotel}: PropType) => {
    return (<div className={`w-100 h-100 position-fixed start-0 top-0 ${styles.photoviewer_wrapper}`}>
        <span className="p-2 border border-3 top-10 end-10"><FontAwesomeIcon icon={faTimes}/></span>
    </div>)
}
export default PhotoViewer;