import {useEffect, useState} from 'react';
import axios from 'axios';

function Gallery() {
    
    const [images, setImages] = useState([])

    useEffect(() => {

        axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=100&api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setImages(res.data.photos)
            })

    }, [])

    return (

        <section className="section columns is-multiline">

          {images.map(image => (

            <div className="card column is-one-quarter imagePreview">

                <div className="card-image">

                    <figure className="image is-4by3">

                      <img alt={image.camera.full_name} src={image.img_src} />

                    </figure>

                </div>

                <div className="card-content">

                    <div className="media-content">

                    </div>

                </div>

            </div>

          ))}

        </section>
    )
}

export default Gallery 
