import './login.less';
import logo from '../../assets/images/logo.jpeg';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom'
import { reqLogin } from '../../ajax'
import memoryUtil from '../../utils/memoryUtil'
import storeUtil from '../../utils/storeUtil'

export default function Login(props) {
    const { setUser } = storeUtil

    const onFinish = async (values) => {
        const result = await reqLogin(values)
        // const result = response.data
        if (result.status === 1) {
            message.success('Login Seccuss')
            setUser(result.data)
            memoryUtil.user = result.data
            props.history.replace('/')
        } else {
            message.error(result.msg)
        }
    };

    const user = memoryUtil.user
    if (user && user._id) return <Redirect to="/" />

    return (
        <div className="login">
            <header className="login-header" >
                <img src={logo} alt="logo" />
                <h1>Children Uni Information Management System</h1>
            </header>
            <section className="login-section" >
                <div className="form" >
                    <img src={logo} alt="logo" />
                    <h2>Staff Login</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="email"
                            rules={[{ required: true, type: 'email', message: 'Please input your Email!' },
                                // { min: 4, message: 'At least 4 digital!' },
                                // { max: 12, message: 'At most 12 digital!' },
                                // { pattern: /^[0-9a-z_]+$/, message: 'Could only contain letters, numbers and underline!' }
                            ]}
                        // validateStatus={null}
                        // help = {null}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{
                                validator: (_, value) => {
                                    if (!value) return Promise.reject(new Error('Please input your Password!'))
                                    else if (value.length < 4) return Promise.reject(new Error('At least 4 digital!'))
                                    else if (value.length > 12) return Promise.reject(new Error('At most 12 digital!'))
                                    else if (!/^[0-9a-z_]+$/.test(value)) return Promise.reject(new Error('Could only contain letters, numbers and underline!'))
                                    else return Promise.resolve()
                                }
                            }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>

                </div>

            </section>
        </div>
    )
}