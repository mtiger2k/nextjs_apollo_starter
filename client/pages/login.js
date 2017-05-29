import Head from 'next/head'
import LoginForm from '../components/LoginForm'
import withData from '../lib/withData'

const page = () => (
	<div>
	    <Head>
	      <title>Login</title>
	    </Head>
		<LoginForm />
	</div>
)

export default withData(page)