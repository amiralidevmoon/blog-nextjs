import React from 'react';
import DashboardLayout from "../../components/layouts/dashboardLayout";

function Index() {
    return (
        <div>saaaaaaa</div>
    );
}

export default Index;

Index.getLayout = (page) => {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}