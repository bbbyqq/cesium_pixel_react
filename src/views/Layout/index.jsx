import { Component } from 'react'
import './index.css'
import ExampleCard from './ExampleCard'
import ServerCard from './ServerCard'
import MapCard from './MapCard'
import MemoryCard from './MemoryCard'
import LogCard from './LogCard'
import { Col, Row } from 'antd'

class Index extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col span={5}>
            <ExampleCard/>
            <ServerCard/>
          </Col>
          <Col span={14}>
            <MapCard />
            <MemoryCard />
          </Col>
          <Col span={5}>
            <LogCard/>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Index
