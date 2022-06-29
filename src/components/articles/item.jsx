import React from 'react';
import {EyeIcon} from "@heroicons/react/solid";

function Item({article}) {
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition duration-200">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap text-center">
                {article.id}
            </th>
            <td className="px-6 py-4 text-center">
                {article.title}
            </td>
            <td className="px-6 py-4 text-center">
                {article.description}
            </td>
            <td className="px-6 py-4 text-center">
                {new Date(article.createdAt).toLocaleDateString('fa-IR')}
            </td>
            <td className="px-6 py-4 text-right flex gap-4 text-center ml-6 align-middle">
                {/*<Edit user={user}/>*/}
                {/*<UserDelete userId={user.id}/>*/}
                {/*<Link href={`/users/${user.id}`} className="h-5 w-5 hover:text-cyan-400 text-cyan-700 transition duration-200">*/}
                {/*    <EyeIcon/>*/}
                {/*</Link>*/}
                <EyeIcon className='w-5 h-5'/>
            </td>
        </tr>
    );
}

export default Item;