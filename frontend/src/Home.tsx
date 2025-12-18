import React from 'react';
import { Link } from 'react-router-dom';


const Home: React.FC = () => {
  return (
    <div className='container'>
    <div className='row'>
      <div className='col-6'>
        <h1 className='fs-2 mt-5 text-center p-3'>Boostez vos projets grâce à la plus grande communauté en intelligence artificielle</h1>
        <p style={{padding: '40px'}}>Intégrez une communauté mondiale de plus de 28 millions de passionnés et d’experts en machine learning. Échangez des idées, expérimentez de nouvelles approches et suivez les dernières avancées technologiques. Accédez à une large collection de modèles, de données et de codes partagés pour donner vie à vos futurs projets.</p>

        <button className="btn btn-outline-dark" style={{borderRadius: '20px'}} type="submit">
           Commencez
        </button>
      
       </div>
       <div className='col-6 text-end'>
        <img className='img-fluid'style={{marginTop: '30px'}} src="src/assets/66f55c17558bc8b4580d7bd3_hero_image.svg" alt="" />
        </div>  
    </div>
    </div>
   
  );
};

export default Home;
