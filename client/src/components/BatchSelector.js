import React, { useContext, useEffect } from 'react'
import { withRouter } from 'react-router'
import AppContext from '../context/AppContext'
import { getAllBatch } from '../queries/service'
import { Card, Col, Row } from "antd";
import Meta from 'antd/lib/card/Meta';

function BatchSelector(props) {

    const { batches, setBatches, activeBatch, setActiveBatch } = useContext(AppContext)

    useEffect(() => {

        getAllBatch().then(({ batches }) => {

            if (Array.isArray(batches)) {
                setBatches([...batches])
                setActiveBatch(batches[0].batch_id)
            } else {

                props.history.push('/login')

            }


        })

    }, [setBatches, setActiveBatch, props.history])



    return (
        <Row gutter={16} className='my-2'>
            {batches.map(batch => {
                const { batch_id: batchId, name } = batch
                return (
                    <Col key={batchId}>
                        <Card hoverable onClick={() => setActiveBatch(batchId)} className={`${activeBatch === batchId ? 'active-batch' : ''} `} key={batchId}>
                            <Meta title={name} description={`Batch Id: ${batchId}`} />
                        </Card>
                    </Col>
                )

            })}
        </Row>
    )
}

export default withRouter(BatchSelector)
