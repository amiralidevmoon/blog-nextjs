import React from 'react';
import {getSingleArticlesFromService} from "../../services/articleService";
import Image from "next/image";

function Single({article}) {

    return (
        <>
            <div className='flex flex-col text-center mt-5'>
                <h2 className='text-4xl mb-5'>{article.id}-{article.title}</h2>
                <Image className='rounded-lg' src={article.image} blurDataURL={article.dataUri} alt={article.title} width='640'
                       height='480' placeholder='blur'/>
            </div>
            <h2 className='mt-5 text-center max-w-2xl'>{article.description}</h2>
        </>
    );
}

export default Single;

export const getServerSideProps = async ({params}) => {
    try {
        let article = await getSingleArticlesFromService(params.id);

        if (!article.id) {
            return {notFound: true};
        }

        return {
            props: {
                article
            }
        }
    } catch (error) {
        console.log(error)
    }
}