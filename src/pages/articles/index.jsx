import React from 'react';
import {getArticlesFromService} from "../../services/articleService";

function Index({articles}) {

    return (
        <div>
            {
                articles && articles.map(article => <div key={article.id}>
                    <li>{article.title}</li>
                </div>)
            }
        </div>
    );
}

export default Index;

export const getServerSideProps = async () => {
    try {
        let articles = await getArticlesFromService();

        return {
            props: {
                articles
            }
        }
    } catch (error) {
        console.log(error)
    }
}