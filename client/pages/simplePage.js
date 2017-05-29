import PageWrapper from '../components/lib/page/PageWrapper';
import PageHeader from '../components/lib/page/PageHeader';
import Breadcrumb from '../components/lib/page/Breadcrumb';
import PageContent from '../components/lib/page/PageContent';
import Box from '../components/lib/widgets/Box';

import Layout from '../components/layout/Layout'

export default () => (
  <Layout title="simple page">
    <PageWrapper>
      <PageHeader
        title="Simple page"
        description="description about the simple page"
      >
        <Breadcrumb
          items={[
            { key: 1, icon: 'fa fa-dashboard', title: 'Home', url: '/' },
            { key: 2, title: 'Pages' },
            { key: 3, title: 'Simple' },
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
              You can collapse or close this box window using right upper buttons.
            </Box>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  </Layout>
)

