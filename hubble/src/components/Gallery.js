import jsonp from 'jsonp';
import {useEffect, useState} from 'react';



let temp = []

function testHTML(credits) {
    return {__html: credits};
}

function Gallery() {
    
    const [id, setId] = useState([])
    
    const [data, setData] = useState([])

    useEffect(() => {

jsonp('http://hubblesite.org/api/v3/images/all', null, (err, data) => {
    if(err) {
        console.error(err.message)
    } else {
        const id = data.map((item) => {
            return item.id
        })
        
        id.map((item) => {

    jsonp(`http://hubblesite.org/api/v3/image/${item}`, null, (err, data) => {
        if(err) {
            console.error(err.message)
        } else {
            temp.push(data)
            setData(temp)
        }
    })

        })
        setId(id)
    }

})
        
    }, [])

const card = data.map((item) => {
    return (

            <div className="card column is-one-quarter imagePreview">

                <div className="card-image">

                    <figure className="image is-4by3">

                        <img src={`https:${item.image_files[0]['file_url']}`} />

                    </figure>

                </div>

                <div className="card-content">

                    <div className="media-content">

                        <p className="title is-4">{item.name}</p>

                        <p className="subtitle is-6" dangerouslySetInnerHTML={testHTML(item.credits)}></p>

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
