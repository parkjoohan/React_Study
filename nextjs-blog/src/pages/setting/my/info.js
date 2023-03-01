import Layout from 'components/Layout'
import SubLayout from 'components/SubLayout'
import { useRouter } from 'next/router'
import { useState } from 'react'

export async function getServerSideProps() {
  console.log('server')

  return {
    props: { time: new Date().toISOString() },
  }
}

export default function MyInfo() {
  const router = useRouter()
  const [clicked, setClicked] = useState(false)
  const { status = 'initial' } = router.query;
  return (
    <>
      <h1 className="title">My Info</h1>
      <h1 className="title">Clicked: {String(clicked)}</h1>
      <h1 className="title">Status: {status}</h1>

      {/* 로컬 state 유지 안됨 (리렌더) */}
      <button onClick={() => {
        alert('edit')
        setClicked(true)
        location.replace('/setting/my/info?status=editing')
      }}>edit(replace)</button>

      <br />

      {/* 로컬 state 유지 / data fetching 발생 */}
      <button onClick={() => {
        alert('push')
        setClicked(true)
        router.push('/setting/my/info?status=editing')
      }}>edit(push)</button>

      <br />

      {/* 로컬 state 유지 / data fetching X */}
      <button onClick={() => {
        alert('shallow')
        setClicked(true)
        router.push('/setting/my/info?status=editing', undefined, {shallow: true})
      }}>edit(shallow)</button>
    </>
  )
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
