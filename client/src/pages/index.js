import Layout from '../components/layout/Layout'

import PageWrapper from '../components/lib/page/PageWrapper';
import PageHeader from '../components/lib/page/PageHeader';
import Breadcrumb from '../components/lib/page/Breadcrumb';
import PageContent from '../components/lib/page/PageContent';
import Box from '../components/lib/widgets/Box';

import PostList from '../components/posts/List'
import PostForm from '../components/posts/CreatePost'
import withData from '../lib/withData'

import { authenticate } from '../utils/AuthService'

class HomePage extends React.Component {
  
  static async getInitialProps({ req, res }) {
    const user = await authenticate(req, res);
    return { user };
  }

  render() {
    return (
      <Layout title="Home Page" user={this.props.user}>
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
            <PostList />
            <PostForm user={this.props.user} />
          </PageContent>
        </PageWrapper>
      </Layout>
    )
  }
}

export default withData(HomePage);