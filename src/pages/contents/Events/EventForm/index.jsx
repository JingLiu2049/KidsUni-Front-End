import moment from 'moment';
import { Form, Input, Button,DatePicker, message } from 'antd';
import {reqUpdateEvent} from '../../../../ajax'
import { useComponentDidMount } from '../../../../utils/hooks';
import { withRouter } from 'react-router';

function EventForm(props){
    useComponentDidMount(()=>{console.log("did mount")})
    const [form] = Form.useForm();
    console.log('aaaaa')
    form.setFieldsValue({title:'aaaaaaaaaaaa'})
    const layout = {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 12,
        },
      };
      /* eslint-disable no-template-curly-in-string */
      
      const validateMessages = {
        required: '${label} is required!'
      };
      const onFinish = async (values) => {
          const dateStr = values.event.date.format('DD/MM/YYYY')
          values.event.date = dateStr
          const result = await reqUpdateEvent(values.event)
          if (result.status === 1) {
            message.info(result.msg)
            props.history.push('/events')
            
        } else {
        }
      };
      const onReset = () => {
        form.resetFields();
        
      };
      const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    return(
        <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
          >
            <Form.Item
          name={['event', '_id']}
            hidden = {true}
            initialValue={props.event._id}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['event', 'title']}
          label="Title"
          initialValue={props.event.title}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['event', 'topic']}
          label="Topic"
          initialValue={props.event.topic}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['event', 'date']}
          label="Date"
          initialValue={props.event.date? moment(props.event.date,'DD/MM/YYYY'): null}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <DatePicker format={dateFormatList}/>
        </Form.Item>


        <Form.Item
          name={['event', 'location']}
          label="Locaton"
          initialValue={props.event.location}
          rules={[
            {
             required:true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={['event', 'note']} label="Note" initialValue={props.event.note}> 
          <Input.TextArea rows="6" />
        </Form.Item>
        <Form.Item wrapperCol={{ span:8, offset: 8 }}  >
          <Button type="primary" htmlType="submit" style={{width:"40%"}}>
            Submit
          </Button>
          <Button type="primary"  style={{width:"40%",marginLeft:"20%"}} onClick={onReset}>
              Reset
          </Button>
        </Form.Item>
      </Form>
    )
}

export default withRouter(EventForm)