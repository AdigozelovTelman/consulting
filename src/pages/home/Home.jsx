import React from 'react'
import Layout from '../../components/layout/Layout'
import Best from './component/best/Best'
import Frobes from './component/frobes/Frobes'
import Servicesdata from './component/servicesdata/Servicesdata'
import Succes from './component/succes/Succes'
import Team from './component/team/Team'

const Home = () => {
  return (
    <>
        <Layout>
            <Succes/>
            <Servicesdata/>
            <Best/>
            <Team/>
            <Frobes/>
        </Layout>
    </>
  )
}

export default Home