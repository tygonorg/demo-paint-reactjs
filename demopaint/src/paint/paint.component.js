import React, { Component } from 'react';
import { SketchField, Tools } from './';
import { Row, Col, Divider, Button } from 'antd';
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';


export default class PaintApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tool: Tools.Pencil,
            drawings: [],
        }
    }
    _removeSelected = () => {
        this._sketch.removeSelected()
      };
    _selectToolCircle = event => {
        this.setState({
            tool: Tools.Circle,
        });
    };
    _selectToolSquarte = event => {
        this.setState({
            tool: Tools.Rectangle,
        });
    };
    _selectToolSelect = event => {
        this.setState({
            tool: Tools.Select,
        });
    };
    _selectToolLine = event => {
        this.setState({
            tool: Tools.Line,
        });
    };
    _selectToolTwoCircle = event => {
        this.setState({
            tool: Tools.TwoCircle,
        });
    };
    _delteObject = event => {
        this._sketch.removeSelected();
    };
    render() {
        return (
            <Row>
                <Col span={6}>
                    <Row style={{ margin: 20 }}>
                        <Col span={12}>
                            <Row>
                                <Button onClick={this._selectToolCircle} type="primary">Tròn</Button>
                            </Row>
                            <Row>
                                <Button onClick={this._selectToolSquarte} type="primary">Vuông</Button>
                            </Row>
                            <Row>
                                <Button onClick={this._selectToolSelect} type="primary">Chọn</Button>
                            </Row>
                        </Col>
                        <Col span={12}>
                            <Row>
                                <Button onClick={this._selectToolLine} type="primary">Đường Thẳng</Button>
                            </Row>
                            <Row>
                                <Button onClick={this._selectToolTwoCircle} type="primary">Hai hình tròn</Button>
                            </Row>
                            <Row>
                                <Button onClick={this._delteObject} type="primary">Xoá</Button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={18} style={{ border: 1, borderBlockStyle: 'solid' }}>
                    <Row>
                        <SketchField
                            width='100%'
                            height={400}
                            ref={c => (this._sketch = c)}
                            tool={this.state.tool}
                            lineColor='black'
                            lineWidth={3} />
                    </Row>
                </Col>
            </Row>

        );
    }
}
