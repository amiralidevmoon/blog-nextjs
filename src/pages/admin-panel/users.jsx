import React from 'react';
import AdminLayout from "../../components/layouts/adminLayout";

function Users() {
    return (
        <div>users</div>
    );
}

export default Users;

Users.getLayout = (page) => {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}