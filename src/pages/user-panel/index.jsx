import React from 'react';
import UserLayout from "../../components/layouts/userLayout";

function Index() {
    return (
        <div>saaaaaaa</div>
    );
}

export default Index;

Index.getLayout = (page) => {
    return (
        <UserLayout>
            {page}
        </UserLayout>
    )
}