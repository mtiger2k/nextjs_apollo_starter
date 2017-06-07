import Head from 'next/head'

import LayoutWrapper from '../lib/layout/LayoutWrapper';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Controlbar from './Controlbar';

export default ({ children, user, title = 'Layout' }) => (
  <div>
    <Head>
      <title>{ title }</title>
    </Head>

    <LayoutWrapper color="red">
      <Header user={user}/>
      <Sidebar user={user}/>

      { children }

      <Footer />
      <Controlbar />
    </LayoutWrapper>
  </div>
)
