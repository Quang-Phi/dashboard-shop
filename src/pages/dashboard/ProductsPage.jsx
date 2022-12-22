import { useEffect, useState } from "react";
import { Button, notification } from "antd";
import { useNavigate } from "react-router-dom";
import Table from ".././../components/Table/Table";
import { myAxios } from "../../service/axios";

export default function () {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    /* const [pagination, setPagination] = useState(null); */

    const navigate = useNavigate();

    const handleFetchProducts = async () => {
        setLoading(true);
        try {
            const products = await myAxios.get("/products");
            console.log('pro', products)
            setProducts(products.data);
        } catch (e) {
            notification.error({
                title: "error",
                message: "test",
            });
        }

        setLoading(false);
    };

    useEffect(() => {
        handleFetchProducts();
    }, [page]);

    const columns = [
        {
            title: "Product Name",
            dataIndex: "productName",
            key: "productName",
        },
        {
            title: "Price",
            dataIndex: "productPrice",
            key: "productPrice",
        },
        {
            title: "Image",
            dataIndex: "productUrlImg",
            key: "productUrlImg",
            render: (url) => {
                return <img src={url} style={{ width: "150px" }} />;
            },
        },
        {
            title: "Short description",
            dataIndex: "description",
            key: "description",
            render: (text) => {
                const shortDes = text.substring(0, 20) + "...";
                return <div>{shortDes}</div>;
            },
        },
        {
            title: "Actions",
            dataIndex: "id",
            key: "id",
            render: (id) => {
                return (
                    <>
                        <Button
                            className="edit"
                            onClick={() => navigate("/dashboard/products/edit/" + id)}
                            type="primary"
                        >
                            Edit
                        </Button>
                        <Button
                            className="delete"
                            onClick={() => handleDeleteProduct(id)}
                            type="primary"
                            danger
                        >
                            Delete
                        </Button>
                    </>
                );
            },
        },
    ];

    const handleDeleteProduct = async (id) => {
        if (window.confirm("Delete this product ?")) {
            setLoading(true);
            try {
                await myAxios.delete(`/products/${id}`);

                handleFetchProducts();
                notification.success({
                    title: 'Success',
                    message: 'Delete Completed !'
                })
            } catch (e) {
                notification.error({
                    title: "Error",
                    message: "Some thing went wrong, try agains !",
                });
            }
            setLoading(false);
        }
    };


    return (
        <div>
            <Table
                defaultPage={page}
                loading={loading}
                dataSource={products}
                columns={columns}
            />
        </div>
    );
};
