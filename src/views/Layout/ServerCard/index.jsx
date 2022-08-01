import { Component } from 'react'
import { Badge, Card } from 'antd'

class Index extends Component {
  render () {
    return (
      <div>
        <Card title={<div><Badge color="#18c7f2" />服务器监控</div>} className="card">
        </Card>
      </div>
    )
  }
}

export default Index
