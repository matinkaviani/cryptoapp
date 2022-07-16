import React from "react";
import { Table, Spin } from 'antd';
import { useNavigate } from "react-router-dom";
import CoinDataContext from './CoinDataContext';
import CoinInfo from './../../CoinInfo/index';

const MainTable = ({ columns, data, loading }) => {
    const navigate = useNavigate();
    const navigateToDetails = (e) => {
        navigate(`/CoinInfo/${e.name}`);
    };
    function onChange(pagination, filters, sorter, extra) {
        console.log('params', pagination, filters, sorter, extra);
    }
    return (
        <div>
            {loading ? (
                <Spin />
            ) : (
                <>
                    <CoinDataContext.Provider
                            value={{
                                ...data
                        }}
                        >
                            {/*<CoinInfo />*/}
                        <Table onRow={(record, rowIndex) => {
                            return {
                                onClick: event => navigateToDetails(record)
                            };
                            }}
                                pagination={false}
                            rowKey={record => record.rank}
                            className="main-table"
                            columns={columns}
                            dataSource={data}
                            onChange={onChange}
                        />
                    </CoinDataContext.Provider>
                </>
            )}
        </div>
    );
}

export default MainTable;