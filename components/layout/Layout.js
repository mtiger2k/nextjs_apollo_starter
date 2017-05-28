import Head from 'next/head'

import LayoutWrapper from '../lib/layout/LayoutWrapper';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Controlbar from './Controlbar';

export default ({ children, title = 'Layout' }) => (
  <div>
    <Head>
      <title>{ title }</title>
    </Head>

    <LayoutWrapper color="red">
      <Header />
      <Sidebar />

      { children }

      <Footer />
      <Controlbar />
    </LayoutWrapper>
  </div>
)
