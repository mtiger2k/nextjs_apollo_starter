import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
     <html>
       <Head>
         <meta charset="utf-8"></meta>
         <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
         <title>Simple Admin</title>
         <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport"></meta>
         <script src="/static/admin-lte/plugins/jQuery/jquery-2.2.3.min.js"></script>
         <link rel="stylesheet" href="/static/admin-lte/bootstrap/css/bootstrap.min.css"></link>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"></link>         
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css"></link>
         <link rel="stylesheet" href="/static/admin-lte/dist/css/AdminLTE.min.css"></link>
         <link rel="stylesheet" href="/static/admin-lte/dist/css/skins/_all-skins.min.css"></link>
         <link rel="stylesheet" href="/static/app.css"/>
       </Head>
       <body className="hold-transition skin-blue sidebar-mini">
         {this.props.customValue}
         <Main />
         <NextScript />

         <script src="/static/admin-lte/bootstrap/js/bootstrap.min.js"></script>
         <script src="/static/admin-lte/plugins/fastclick/fastclick.js"></script>
         <script src="/static/admin-lte/dist/js/app.min.js"></script>
       </body>
     </html>
    )
  }
}