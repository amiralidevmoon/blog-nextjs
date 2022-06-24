import React from 'react';
import {getSingleArticlesFromService} from "../../services/articleService";

function Single({article}) {

    return (
        <div>
            <h2>{article.id}-{article.title}</h2>
            <span>{article.description}</span>
        </div>
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