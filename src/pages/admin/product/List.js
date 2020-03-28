import React from 'react'
import {
    Card,
    Table,
    Button
} from 'antd'
import { httpGet } from '../../../http';

var data = [{ id: 1, number: "6464708828", company: "申通快递", orderN: "773006665385948", state: "邮寄中" },
{ id: 2, number: "646470882", company: "圆通快递", orderN: "773006665385948", state: "邮寄中" },
{ id: 3, number: "646470882", company: "天天快递", orderN: "773006665385948", state: "邮寄中" },
{ id: 5, number: "646470882", company: "顺丰快递", orderN: "123123123", state: "邮寄中" },
{ id: 6, number: "646470882", company: "三心快递", orderN: "999999999", state: "邮寄中" },

];
export default function List() {
    const columns = [{
        title: '序号',
        key: 'id',
        width: 80,
        align: 'center',
        render: (txt, record, index) => index + 1
    }, {
        title: '名字',
        dataIndex: 'company'
    }, {
        title: '价格',
        dataIndex: 'state'
    }, {
        title: '操作',
        render: (txt, record, index) => {
            return <div>
                <Button type='primary' size='small'>修改</Button>
                <Button style={{ margin: '0 1rem' }} type='danger' size='small'>删除</Button>
            </div>
        }
    }];
    componetDidMount()
    async function componetDidMount() {
        let res = await httpGet('http://47.100.137.31:3005/in');
        console.log(res.data.msg);
        // data = res.data.msg;
        console.log(data)
    }
    return (
        <Card title='商品列表'
            extra={<Button type='primary' size='small' >新增</Button>} >
            <Table columns={columns} dataSource={data} bordered />
        </Card>
    )
}