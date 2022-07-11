import React from 'react';

import DashboardLayout from "../../components/layouts/dashboard-layout";

function Profile() {
    return (
        <div>sddddddddddddd</div>
    );
}

export default Profile;

Profile.getLayout = (page) => {
    return (
        <DashboardLayout>
            {page}
        </DashboardLayout>
    )
}