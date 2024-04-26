import React from 'react'
import './Kemea.css'

function Kemea() {
  return (
    <div className='kemea'>
        <div className="my-5 hero  rounded-3 container d-flex align-items-center justify-content-center">
            <div className='text-center mx-auto text-light inner'>
                <h2>Discover My Kemea Experience</h2>
                <p>Discover our exclusive selection of real estate projects by registering for free, or opt for a personalized real estate hunting service to find your property. Registration on the Kemea platform is non-binding.</p>
                <div className='d-flex gap-3 btns align-items-center justify-content-center'>
                    <button className='btn-outline-light rounded-5 bg-transparent text-light'>Log in</button>
                    <button className='bg-white rounded-5'>Sign up</button>
                </div>
            </div>
        </div>
        <div className="container allcontents">
          <div className="row">
            <div className="col col-lg-3 col-md-4 col-6">
              <div className="content rounded-4">
                <h4>Accélérez votre achat.</h4>
                <p>Les taux augmentent, votre budget baisse.</p>
              </div>
            </div>
            <div className="col col-lg-3 col-md-4 col-6">
              <div className="content rounded-4">
                <h4>Achetez au bon prix.</h4>
                <p>Le marché a évolué, nous négocions pour vous.</p>
              </div>
            </div>
            <div className="col col-lg-3 col-md-4 col-6">
              <div className="content rounded-4">
                <h4>Accédez à 100% des biens.</h4>
                <p>Chercher sur les portails, cela ne suffit plus.</p>
              </div>
            </div>
            <div className="col col-lg-3 col-md-4 col-6">
              <div className="content rounded-4">
                <h4>Achetez sereinement.</h4>
                <p>Défendre vos intérêts, c’est notre mission.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container support">
          <div className="row">
            <div className="col col-lg-6 col-md-5 col-12">
              <div className="text">
                <h2>More than just a personalized property service</h2>
                <p>My Kemea supports Advices and researchs, Efficient visits, negociation assistance ... </p>
                <p>Describe your project using the form provided.</p>
                <p>After analyzing the feasibility of your project, a property hunter will be dedicated to your search.</p>
                <p>Thanks to our technology dedicated to sourcing and our privileged networks, your property hunter sends you in real time the properties that correspond to your search.</p>
                <p>You no longer miss anything in your personal space.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Kemea