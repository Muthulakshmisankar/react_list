import React, {useState} from 'react';
import { Button, Table } from 'antd';


const columns = [
  {
    title: 'Receipt',
    dataIndex: 'receipt',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (_, { status }) => (
        <>
                <div className='status_helper' style={{backgroundColor: status == 'Unposted' ? 'orange' : 'green'  }} >
                {status.toUpperCase()}
                </div>
        </>
      ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Grave site',
    dataIndex: 'grave_site',
  },
  {
    title: 'Paid by',
    dataIndex: 'paid_by',
  },
  {
    title: 'No of payments',
    dataIndex: 'no_of_payments',
  },
  {
    title: 'Total',
    dataIndex: 'total',
  },
];

// const data = [];
// for (let i = 0; i < 46; i++) {
//   data.push({
//     key: i,
//     name: `Edward King ${i}`,
//     age: 32,
//     address: `London, Park Lane no. ${i}`,
//   });
// }


function TableComponent({data}) {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    // ajax request after empty completing
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <div className='table_wrapper'>
      <div >
       
        <span >
          {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
        </span>
      </div>
      <Table  size="small" rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  );
}

export default TableComponent;