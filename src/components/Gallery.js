import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import GalleryItem from './GalleryItem'

    const Gallery = () => {
        const display = data.map((item, index) => {
            return (
                <GalleryItem key={index} item={item} />
            )
        })

    return (
        <div>
            {display}
        </div>
    )
}

export default Gallery
