import 'styles/globals.css'
import MainLayout from 'components/layouts/main-layout';
import {Provider} from "react-redux";
import {store} from "../store";

function MyApp({Component, pageProps}) {
    const getLayout = Component.getLayout || ((page) => <Provider store={store}><MainLayout>{page}</MainLayout></Provider>);

    return getLayout(<Provider store={store}><Component {...pageProps} /></Provider>);
}

export default MyApp;
