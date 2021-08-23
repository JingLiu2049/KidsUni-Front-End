import moment from 'moment';
import { Form, Input, Button, DatePicker, message } from 'antd';
import { reqUpdateEvent,reqAddEvent } from '../../../../ajax'
import { withRouter } from 'react-router';



function EventForm(props) {
  const [form] = Form.useForm();
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

  const getResult = async (reqFunc, reqData) => {
    const result = await reqFunc(reqData)
        if (result.status === 1) {
          message.info(result.msg)
          props.history.push('/events')
        } else {
          message.info(result.msg)
        }
  }


  const onFinish = async (values) => {
    const dateStr = values.event.date.format('DD/MM/YYYY')
    values.event.date = dateStr
    if (props.event._id==="new"){
      getResult(reqAddEvent,values.event)
    }else{
      getResult(reqUpdateEvent,values.event)
    }
  };
  const onReset = () => {
    form.resetFields();

  };
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
  return (
    <Form {...layout} form={form} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}
    >
      <Form.Item
        name={['event', '_id']}
        hidden={true}
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
        initialValue={props.event.date ? moment(props.event.date, 'DD/MM/YYYY') : null}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker format={dateFormatList} />
      </Form.Item>


      <Form.Item
        name={['event', 'location']}
        label="Locaton"
        initialValue={props.event.location}
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['event', 'note']} label="Note" initialValue={props.event.note?props.event.note:''}>
        <Input.TextArea rows="6" />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 8, offset: 8 }}  >
        <Button type="primary" htmlType="submit" style={{ width: "40%" }}>
          Submit
        </Button>
        <Button type="primary" style={{ width: "40%", marginLeft: "20%" }} onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  )
}

export default withRouter(EventForm)