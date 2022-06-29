import React, {useEffect} from 'react';
import AdminLayout from "../../../components/layouts/adminLayout";
import TableHeader from "../../../components/sections/TableHeader";
import {getArticlesFromService} from "../../../services/articleService";
import {setArticles} from "../../../store/slices/articleSlice";
import {sweetAlert} from "../../../helpers/helpers";
import Item from "../../../components/articles/item";
import {useDispatch, useSelector} from "react-redux";
import Link from "next/link";

function Index() {
    const dispatch = useDispatch();
    const articlesList = useSelector((state) => state.articles.list);

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
        <>
            <Link href='/admin-panel/articles/create' passHref>
                <button type="button"
                        className="mt-5 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Create
                    new article
                </button>
            </Link>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-2">
                <TableHeader
                    headerFields={['#', 'Title', 'Description', 'Created At', 'Settings']}/>
                <tbody>
                {
                    articlesList && articlesList.map((article) => <Item article={article} key={article.id}/>)
                }
                </tbody>
            </table>
        </>
    );
}

export default Index;

Index.getLayout = (page) => {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}