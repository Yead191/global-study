import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SingleUni = ({ university }) => {
    const { universityId } = useParams()
    const data = useLoaderData()
    const [uni, setUni] = useState(null)

    useEffect(() => {

        let singleUni = null;
        for (const country of data) {
            singleUni = country.universities.find(university => university.universityId === universityId);
            if (singleUni) break
        }
        setUni(singleUni)
    }, [data, universityId]);

    if (!uni) {
        return <div className="flex min-h-screen justify-center items-center"><span className="loading loading-bars loading-lg"></span></div>
    }
    const {universityName, universityImage, description, applyDate, rating, additionalInfo, tuitionFees } = uni
    console.log(uni);
    return (
        <div className='mt-28'>
            <img src={universityImage} alt="" />
            <h1>{universityName}</h1>
        </div>
    );
};

export default SingleUni;

/**
 * {
    "universityId": "UK-002",
    "universityName": "University of Cambridge",
    "universityImage": "https://i.ibb.co.com/DVwvW3f/Banner-Image-The-University-of-Cambridge.webp",
    "description": "Established in 1209, the University of Cambridge is globally recognized for its academic rigor and cutting-edge research. It has contributed immensely to the fields of science, literature, and arts, with alumni including Isaac Newton, Stephen Hawking, and Charles Darwin. Cambridge fosters innovation and intellectual growth within its vibrant collegiate system.",
    "applyDate": "2025-01-15",
    "rating": 4.8,
    "additionalInfo": {
        "location": "Cambridge, England",
        "programs": [
            "Law",
            "Mathematics",
            "Science"
        ],
        "tuitionFees": "£35,000 per year"
    }
}
 */