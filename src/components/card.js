import react from 'react';

function Card({Name, Title, Description, Image, company}) {
    return(
        <div className="bg-purple-100 rounded-lg shadow-lg p-6 m-4">
            <img src={Image} alt="Profile" className="rounded-full h-32 w-32 mx-auto"/>
            <h2 className='text-center'>{Name}</h2>
            <h5 className='text-center'>{Title}</h5>
            <img src={company} alt="Company" className="h-15 w-20 mx-auto"/>
            <br />
            <p className='text-base'>{Description}</p>
        </div>
    );
}

export default Card;

