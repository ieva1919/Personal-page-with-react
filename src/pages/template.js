import React from 'react'
import './Template.scss'
import TemplateHeader from '../components/TemplateHeader';
import BoxHeader from '../components/BoxHeader'

function Template() {
    return (
        <div className="container">
            <TemplateHeader />
            <div className="template">
                <div className="row">
                    <BoxHeader title="Templates for professional CV" container="MY CREATED TEMPLATES" />
                </div>
                <div class="row gallery-photos">
                    <div class="col-md-4">
                        <div class="gallery text-center">
                            <img src="/img/gyvenimo aprasymai/maza foto/cv1.jpg" data-src="gyvenimo aprasymai/didele foto/cv1.jpg" alt="Cinque Terre" />
                            <div class="desc text-center"><p>CV Nr. 1</p></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="gallery text-center">
                            <img src="/img/gyvenimo aprasymai/maza foto/cv2.jpg" data-src="gyvenimo aprasymai/didele foto/cv2.jpg" alt="Cinque Terre" />
                            <div class="desc text-center"><p>CV Nr. 2</p></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="gallery text-center">
                            <img src="/img/gyvenimo aprasymai/maza foto/cv3.jpg" data-src="gyvenimo aprasymai/didele foto/cv3.jpg" alt="Cinque Terre" />
                            <div class="desc text-center">
                                <p>CV Nr. 3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row gallery-photos">
                    <div class="col-md-4">
                        <div class="gallery text-center">
                            <img src="/img/gyvenimo aprasymai/maza foto/cv4.jpg" data-src="gyvenimo aprasymai/didele foto/cv4.jpg" alt="Cinque Terre" />
                            <div class="desc text-center"><p>CV Nr. 4</p></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="gallery text-center">
                            <img src="/img/gyvenimo aprasymai/maza foto/cv5.jpg" data-src="gyvenimo aprasymai/didele foto/cv5.jpg" alt="Cinque Terre" />
                            <div class="desc text-center"><p>CV Nr. 5</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Template;