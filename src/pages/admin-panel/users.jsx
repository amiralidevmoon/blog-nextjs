import React from 'react';

import AdminLayout from "@/components/layouts/admin-layout";

function Users() {
    return (
        <div>This is our users list</div>
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