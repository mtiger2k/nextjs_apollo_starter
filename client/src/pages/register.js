import Head from 'next/head'
import RegisterForm from '../components/RegisterForm'
import withData from '../lib/withData'

const page = () => (
	<div>
	    <Head>
	      <title>Register</title>
	    </Head>
		<RegisterForm />
	</div>
)

export default withData(page)