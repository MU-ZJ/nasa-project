//import {jsonp} from 'jsonp';
import {useEffect, useState} from 'react';

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

let temp = []

function Gallery() {
    
    const [data, setData] = useState([])

    useEffect(() => {

        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=zZuTfX5huefKfc6jzWkftocfagNpSd11Ul53nrCR")
            .then(res => res.json())
            .then(result => setData(result))
    }, [])
    console.log(data)
    temp.push(data)
    console.log(temp)

const card = temp.map((item) => {
    return (

            <div className="card column is-one-quarter imagePreview">

                <div className="card-image">

                    <figure className="image is-4by3">

                        <img alt="" src={item.image_src} />

                    </figure>

                </div>

                <div className="card-content">

                    <div className="media-content">


                    </div>

                </div>

            </div>
    )
})
    return (

        <section className="section columns is-multiline">

            {card}

        </section>
    )
}

export default Gallery 
