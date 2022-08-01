import { Component } from 'react'
import { Badge, Card } from 'antd'

class Index extends Component {
  render () {
    return (
      <div>
        <Card title={<div><Badge color="#18c7f2" />监控日志</div>} style={{ height: 'calc(100vh - 110px)' }} className="card">
        </Card>
      </div>
    )
  }
}

export default Index
