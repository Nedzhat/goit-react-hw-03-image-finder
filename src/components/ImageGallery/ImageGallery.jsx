import { GalleryList } from "./ImageGallery.styled";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import PropTypes from 'prop-types';


export const ImageGallery = ({items}) => {
    return <GalleryList>
        {items.map(item => (
                <ImageGalleryItem item={item} key={item.id} />
            ))}
    </GalleryList>
}

ImageGallery.propTypes = {
    items: PropTypes.array.isRequired
};

