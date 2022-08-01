import { Component } from 'react'
import { Badge, Card } from 'antd'

class Index extends Component {
  render () {
    return (
      <div>
        <Card title={<div><Badge color="#18c7f2" />当前内存监控</div>} style={{ height: 'calc(35vh - 60px)', margin: '10px 0' }} className="card">
        </Card>
      </div>
    )
  }
}

export default Index
