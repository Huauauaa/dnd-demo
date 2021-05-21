import React, { Component } from 'react';
import { Card } from 'antd';

export default class CardItem extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <div>
        <Card title={title} style={{ width: 300 }}>
          <p>{content}</p>
        </Card>
      </div>
    );
  }
}
