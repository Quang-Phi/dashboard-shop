import { Form, Input, Button, Upload, notification } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { myAxios } from "../../service/axios";

export default function () {
    const [loading, setLoading] = useState(false);
    const [productForm] = Form.useForm();

    const params = useParams();

    const handleFetchProduct = async (id) => {
        if (id) {
            try {
                const productData = await myAxios.get(`/products/${id}`);

                productForm.setFieldsValue(productData.data);

            } catch (e) {
                console.log(e);
                notification.error({
                    title: "Rrror",
                    message: "Something went wrong !!",
                });
            }
        }
    };


    useEffect(() => {
        handleFetchProduct(params.id);
    }, [params.id]);

    const onFinish = async (values) => {
        console.log(values)
        setLoading(true);
        try {
            if (params.id) {
                const editData = {
                    ...values,
                    productName: values.productName,
                    title: values.title,
                    productPrice: Number(values.productPrice),
                    productOldPrice: Number(values.productOldPrice),
                    productUrlImg: values.productUrlImg,
                    size: Number(values.size),
                    color: values.color,
                    brand: values.brand,
                    category: values.category,
                    description: values.description
                };

                const newData = await myAxios.put(
                    `/products/${params.id}`,
                    editData
                );
                if (newData) {
                    notification.success({
                        title: "Success !!",
                        message: "Edit product success !!",
                    });
                }
                setLoading(false);
                return;
            }

            const addProductData = {
                ...values,
                ice: Number(values.productPrice),
                productOldPrice: Number(values.productOldPrice),
                productUrlImg: values.productUrlImg,
                size: Number(values.size),
                color: values.color,
                brand: values.brand,
                category: values.category,
                description: values.description

            };

            // post product to server
            const newProduct = await myAxios.post("/products", addProductData);

            if (newProduct) {
                notification.success({
                    title: "Success !!",
                    message: "Add product success !!",
                });
            }
        } catch (e) {
            notification.error({
                title: "Error !!",
                message: "Something went wrong !!",
            });
        }

        setLoading(false);
    };

    return (
        <div>
            <Form
                form={productForm}
                onFinish={onFinish}
                name="basic"
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 10,
                }}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="productName"
                    rules={[
                        {
                            required: true,
                            message: "Value can't be empty !!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Value can't be empty !!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="productPrice"
                    rules={[
                        {
                            required: true,
                            message: "Value can't be empty !!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Old - Price"
                    name="productOldPrice"
                    rules={[
                        {
                            required: true,
                            message: "Value can't be empty !!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Size"
                    name="size"
                    rules={[
                        {
                            required: true,
                            message: "Value can't be empty !!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Color"
                    name="color"
                    rules={[
                        {
                            required: true,
                            message: "Value can't be empty !!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Brand"
                    name="brand"
                    rules={[
                        {
                            required: true,
                            message: "Value can't be empty !!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Category"
                    name="category"
                    rules={[
                        {
                            required: true,
                            message: "Value can't be empty !!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item label="Description" name="description" rules={[
                    {
                        required: true,
                        message: "Value can't be empty !!",
                    },
                ]}>
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    label="IMG-URL"
                    name='productUrlImg'
                    rules={[
                        {
                            required: true,
                            message: "Please choose an image !!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button loading={loading} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

