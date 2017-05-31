import SimpleForm from './SimpleForm';

import PageWrapper from '../../../components/lib/page/PageWrapper';
import PageHeader from '../../../components/lib/page/PageHeader';
import Breadcrumb from '../../../components/lib/page/Breadcrumb';
import PageContent from '../../../components/lib/page/PageContent';
import Box from '../../../components/lib/widgets/Box';

import Layout from '../../../components/layout/Layout'
import withData from '../../../lib/withData'

const showResults = values =>
  new Promise(resolve => {
    setTimeout(() => {
      // simulate server latency
      window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
      resolve()
    }, 500)
  })

const page = () => (
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
              title="Simple Form!"
              status="primary"
              expandable>
              <SimpleForm onSubmit={showResults}/>
            </Box>
          </div>
        </div>
      </PageContent>
    </PageWrapper>
  </Layout>
)


export default withData(page)