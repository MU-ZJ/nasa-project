//import {jsonp} from 'jsonp';
import {useEffect, useState} from 'react';
import axios from 'axios';
//import {useEffect} from 'react';

/*
        if(err) {
            console.error(err.message)
        } else {
            temp.push(data)
            setData(temp)
        }
    })
                     <p className="title is-4">{item.camera.full_name}</p>
*/

function Gallery() {
    
    const [images, setImages] = useState([])

    useEffect(() => {

        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=zZuTfX5huefKfc6jzWkftocfagNpSd11Ul53nrCR")
            //.then(res => res.json())
            //.then(result => setData(result.photos))
            .then(res => {
                console.log(res.data.photos)
                setImages(res.data.photos)
            })

    }, [])
    //temp.push(data)
    console.log(images)

    //for (let i = 0; i <= temp.length; i++) {
        //console.log(temp[i].img_src);
    //}


    return (

        <section className="section columns is-multiline">

          {images.map(image => (

            <div className="card column is-one-quarter imagePreview">

                <div className="card-image">

                    <figure className="image is-4by3">

                        <img alt="" src={image.img_src} />

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
