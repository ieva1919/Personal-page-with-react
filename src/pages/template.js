import React from 'react'
import './Template.scss'
import TemplateHeader from '../components/TemplateHeader';
import BoxHeader from '../components/BoxHeader'
import Mymodal from '../components/Mymodal'
import { Link } from 'react-router-dom'

function Template() {
    return (
        <div className="container">
            <TemplateHeader />
            <div className="template">
                <div className="row">
                    <BoxHeader title="Templates for professional CV" container="MY CREATED TEMPLATES" />
                </div>
                <div className="row gallery-photos">
                    <div className="col-md-4">
                        <div className="gallery text-center">
                            <Mymodal body={<img src="/img/gyvenimo aprasymai/didele foto/cv1.jpg" data-src="gyvenimo aprasymai/didele foto/cv1.jpg" alt="Cinque Terre" />}>
                                <img src="/img/gyvenimo aprasymai/maza foto/cv1.jpg" data-src="gyvenimo aprasymai/didele foto/cv1.jpg" alt="Cinque Terre" />
                            </Mymodal>
                            <div className="desc text-center"><p>CV Nr. 1</p></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="gallery text-center">
                            <Mymodal body={<img src="/img/gyvenimo aprasymai/didele foto/cv2.jpg" data-src="gyvenimo aprasymai/didele foto/cv2.jpg" alt="Cinque Terre" />}>
                                <img src="/img/gyvenimo aprasymai/maza foto/cv2.jpg" data-src="gyvenimo aprasymai/didele foto/cv2.jpg" alt="Cinque Terre" />
                            </Mymodal>
                            <div className="desc text-center"><p>CV Nr. 2</p></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="gallery text-center">
                            <Mymodal body={<img src="/img/gyvenimo aprasymai/didele foto/cv3.jpg" data-src="gyvenimo aprasymai/didele foto/cv3.jpg" alt="Cinque Terre" />}>
                                <img src="/img/gyvenimo aprasymai/maza foto/cv3.jpg" data-src="gyvenimo aprasymai/didele foto/cv3.jpg" alt="Cinque Terre" />
                            </Mymodal>
                            <div className="desc text-center">
                                <p>CV Nr. 3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gallery-photos">
                    <div className="col-md-4">
                        <div className="gallery text-center">
                            <Mymodal body={<img src="/img/gyvenimo aprasymai/didele foto/cv4.jpg" data-src="gyvenimo aprasymai/didele foto/cv4.jpg" alt="Cinque Terre" />}>
                                <img src="/img/gyvenimo aprasymai/maza foto/cv4.jpg" data-src="gyvenimo aprasymai/didele foto/cv4.jpg" alt="Cinque Terre" />
                            </Mymodal>
                            <div className="desc text-center"><p>CV Nr. 4</p></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="gallery text-center">
                            <Mymodal body={<img src="/img/gyvenimo aprasymai/didele foto/cv5.jpg" data-src="gyvenimo aprasymai/didele foto/cv5.jpg" alt="Cinque Terre" />}>
                                <img src="/img/gyvenimo aprasymai/maza foto/cv5.jpg" data-src="gyvenimo aprasymai/didele foto/cv5.jpg" alt="Cinque Terre" />
                            </Mymodal>
                            <div className="desc text-center"><p>CV Nr. 5</p></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2">
                        <Link to="/"><button className="mybutton"> Back to the main page
                        </button></Link>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Template;