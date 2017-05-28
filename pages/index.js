import Layout from '../components/layout/Layout'

import PageWrapper from '../components/lib/page/PageWrapper';
import PageHeader from '../components/lib/page/PageHeader';
import Breadcrumb from '../components/lib/page/Breadcrumb';
import PageContent from '../components/lib/page/PageContent';
import Box from '../components/lib/widgets/Box';

export default () => (
  <Layout title="Home Page">
    <PageWrapper>
      <PageHeader
        title="Home Page"
        description="home page"
      >
        <Breadcrumb
          items={[
            { key: 1, icon: 'fa fa-dashboard', title: 'Home', url: '/' },
            { key: 2, title: 'Pages' },
            { key: 3, title: 'Home' },
          ]}
        />
      </PageHeader>
      <PageContent>
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <Box
              title="Hello, World!"
              status="primary"
              expandable
              removable>
              Hello World!
            </Box>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  </Layout>
)