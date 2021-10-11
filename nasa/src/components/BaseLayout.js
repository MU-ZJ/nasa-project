import Nav from './Nav';
import Footer from './Footer';

function BaseLayout(props) {
    return (
        <div>
            <Nav />
            {props.children}
            <Footer />
        </div>
    )
}

export default BaseLayout
