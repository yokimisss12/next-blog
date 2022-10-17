import Link from 'next/link';
import Head from 'next/head'
import Layout from '../../components/layout'
import './demo1.module.css'
import cn from 'classnames'
import styles from './demo1.module.css'
import Alert from '../alert';

export default function Index() {
  // 路由即目录，设置为index无需二层路由，若为二层路由，则取名为非index即可
  return (
    <Layout>
      <div>

        <Head>
          <title>First Post</title>
        </Head>
        <div>
          Demo1

          <Link href="/"><h1>回到首页</h1></Link>
        </div>
        {/* class切换 */}
        <div>
      <Alert />
    </div>
      </div>
    </Layout>
  )
}