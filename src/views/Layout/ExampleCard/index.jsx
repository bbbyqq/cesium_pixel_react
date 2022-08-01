import { Component } from 'react'
import { Badge, Card } from 'antd'

class Index extends Component {
  render () {
    return (
      <div>
        <Card title={<div><Badge color="#18c7f2" />实例列表</div>} className="card">
        </Card>
      </div>
    )
  }
}

export default Index
