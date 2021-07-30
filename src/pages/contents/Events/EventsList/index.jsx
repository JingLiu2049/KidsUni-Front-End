import { useState } from 'react';
import { Table, Space, Popconfirm } from 'antd';

import { useComponentDidMount } from '../../../../utils/hooks';
import { reqEvents, reqDeleteEvent } from '../../../../ajax';
import { getRespFunc, Column} from '../../../../utils/globalFunc';
import LinkButton from '../../../../components/LinkButton';



export default function EventsList(props) {
    function onChange(pagination, filters, sorter, extra) {
        // console.log('params', pagination, filters, sorter, extra);
    }
    // declear the state eventsData to manage all the data of events
    const [eventsData, setEventsData] = useState([])
    // declear the state loading for Table to display before response get back
    const [loading, setLoading] = useState(true)
    const [totalPage] = useState(eventsData.length)
    // function used to send request and set the state eventsData 
    const getData = getRespFunc(reqEvents, setEventsData,setLoading)
    // call the function while the component did mount
    useComponentDidMount(getData)

    
        
    

    const getFilterItem = (arr,column) => {
       let uniqueItems = arr.reduce((prev,cur)=>prev.includes(cur[column])?prev:[...prev,cur[column]],[])
       return uniqueItems.map(i=>({text:i,value:i}))
    }

    const filterTopic = getFilterItem(eventsData,'topic')
    const fiterLocation = getFilterItem(eventsData,'location')

    const title = new Column('Title','15%')
    const topic = new Column('Topic','auto',null,filterTopic)
    const location = new Column('Location','15%',null,fiterLocation )
    const note = new Column('Note')
    const time = new Column('Time','15%')
    const action = new Column('Action')
    time.sorter = (a, b) => {
        const getTime = obj => obj.time.replace(/\D/g, "") * 1
        return getTime(a) - getTime(b)
    }
    action.render = (text, record) => {
        const handleEdit = () => {
            // console.log('record', record)
        }
        const handleDelete = async (key) => {
            getRespFunc(reqDeleteEvent, setEventsData,setLoading,key._id)()
        };
        return (
            <Space size="middle">
                <LinkButton onClick={handleEdit} >Edit</LinkButton>
                <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record)}>
                    <LinkButton >Delete</LinkButton>
                </Popconfirm>
            </Space>
        )
    }


    const columns = [
        title,
        topic,
        time,
        location,
        note,
        action
    ];

    return (
        <Table
            columns={columns}
            dataSource={eventsData}
            onChange={onChange}
            rowKey="_id"
            loading={loading}
            pagination={{
                defaultPageSize: 12, total: totalPage,
                showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`
            }}
        />
    )
}