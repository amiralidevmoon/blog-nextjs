import React, {useEffect} from 'react';
import AdminLayout from "../../components/layouts/adminLayout";
import TableHeader from "../../components/TableHeader";
import {getArticlesFromService} from "../../services/articleService";
import {setArticles} from "../../store/slices/articleSlice";
import {sweetAlert} from "../../helpers/helpers";
import Item from "../../components/articles/item";
import {useDispatch, useSelector} from "react-redux";

function Articles() {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articles.list);

    useEffect(() => {
        getArticles();
    }, []);

    const getArticles = async () => {
        try {
            let articles = await getArticlesFromService();
            dispatch(setArticles(articles));
        } catch (error) {
            sweetAlert(error.response.data.message, 'error');
        }
    }

    return (
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <TableHeader
                headerFields={['#', 'Title', 'Description', 'Created At', 'Settings']}/>
            <tbody>
            {
                articles && articles.map((article) => <Item article={article} key={article.id}/>)
            }
            </tbody>
        </table>
    );
}

export default Articles;

Articles.getLayout = (page) => {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}