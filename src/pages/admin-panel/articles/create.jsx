import React, {useState} from 'react';
import AdminLayout from "../../../components/layouts/admin-layout";
import TextareaEditor from "../../../components/ui/textarea-editor";
import {useDispatch} from "react-redux";
import {setLoading} from "../../../store/slices/loading-slice";
import {addArticle} from "../../../store/slices/article-slice";
import {addArticleFromService} from "../../../services/article-service";
import {sweetAlert} from "../../../helpers/helpers";
import {useRouter} from "next/router";

function Create() {
    const dispatch = useDispatch();
    const router = useRouter();

    const [article, setArticle] = useState(
        {
            title: '',
            description: '',
            image: '',
            dataUri: '',
            createdAt: Date.now(),
        }
    );

    // handle create article submit form
    const createArticleHandler = async (e) => {
        e.preventDefault();

        dispatch(setLoading(true));

        if (article) {
            try {
                let newArticle = await addArticleFromService(article);
                dispatch(addArticle(newArticle));
                setArticle({
                    title: '',
                    description: '',
                    image: '',
                    dataUri: '',
                    createdAt: Date.now(),
                });
                dispatch(setLoading(false));
                sweetAlert('کاربر موردنظر با موفقیت ایجاد شد');

                await router.push('/admin-panel/articles');
            } catch (error) {
                sweetAlert(error.response.data.message, 'error');
                dispatch(setLoading(false));
            }
        }
    }


    return (
        <form className="space-y-8 divide-y divide-gray-200">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                    <div>
                        <h3 className="text-lg leading-6 font-medium text-gray-400">New article</h3>
                    </div>
                    <div className="space-y-6 sm:space-y-5">
                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 sm:mt-px sm:pt-2">
                                Title
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input type="text" id="small-input"
                                       className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       onChange={(e) => setArticle({
                                           ...article,
                                           title: e.target.value
                                       })}
                                />
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 sm:mt-px sm:pt-2">
                                Description
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <TextareaEditor setState={setArticle} state={article} field={article.description}/>
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 sm:mt-px sm:pt-2">
                                Image URL
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input type="text" id="small-input"
                                       className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       onChange={(e) => setArticle({
                                           ...article,
                                           image: e.target.value
                                       })}
                                />
                            </div>
                        </div>

                        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                            <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 sm:mt-px sm:pt-2">
                                Image BlurDataURL
                            </label>
                            <div className="mt-1 sm:mt-0 sm:col-span-2">
                                <input type="text" id="small-input"
                                       className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       onChange={(e) => setArticle({
                                           ...article,
                                           dataUri: e.target.value
                                       })}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-5">
                <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={(e) => {
                            createArticleHandler(e)
                        }}
                        type="submit"
                        className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create
                    </button>
                </div>
            </div>
        </form>
    );
}

export default Create;

Create.getLayout = (page) => {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}