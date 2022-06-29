import React from 'react';
import AdminLayout from "../../components/layouts/adminLayout";

function Index() {
    return (
        <div>Welcome to admin panel</div>
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