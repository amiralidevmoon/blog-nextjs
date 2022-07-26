import {Provider} from "react-redux";

import MainLayout from '@/components/layouts/main-layout';
import {store} from "store";

import 'styles/globals.css'

function MyApp({Component, pageProps}) {
    const getLayout = Component.getLayout || ((page) => <Provider store={store}><MainLayout>{page}</MainLayout></Provider>);

    return getLayout(<Provider store={store}><Component {...pageProps} /></Provider>);
}

export default MyApp;
