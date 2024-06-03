// pages/_app.tsx
import '../styles/globals.css';
import Layout from '../app/layout/Layout';

// @ts-ignore
function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
