import { Table, Pagination } from "antd";

export default function (props) {
  return (
    <>
      <Table pagination={true} loading={props.loading} dataSource={props.dataSource} columns={props.columns} />
    </>
  )
}
