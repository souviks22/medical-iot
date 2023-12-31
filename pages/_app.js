import { wrapper } from '@/store'
import '@/styles/globals.css'

import Layout from '@/components/ui/Layout'

const App = ({ Component, pageProps }) => {
    return (<Layout>
        <Component {...pageProps} />
    </Layout>)
}

export default wrapper.withRedux(App)