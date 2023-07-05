import { Component } from 'react'
import { Badge, Card } from 'antd'
import { exampleList } from '../../../service/api'

class Index extends Component {
  componentDidMount () {
    exampleList().then(res => {
    })
  }

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
