import React from 'react';

import AdminLayout from "../../components/layouts/admin-layout";

function Users() {
    return (
        <div>users</div>
    );
}

export default React.memo(Users);

Users.getLayout = (page) => {
    return (
        <AdminLayout>
            {page}
        </AdminLayout>
    )
}