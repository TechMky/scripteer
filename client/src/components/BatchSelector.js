import React, { useContext, useEffect } from 'react'
import { Card, Container } from 'react-bootstrap'
import AppContext from '../context/AppContext'
import { getAllBatch } from '../queries/service'

function BatchSelector(props) {

    const { batches, setBatches, activeBatch, setActiveBatch } = useContext(AppContext)

    useEffect(() => {

        getAllBatch().then(({ batches }) => {
            setBatches([...batches])
            setActiveBatch(batches[0].batch_id)
        })

    }, [setBatches, setActiveBatch])



    return (
        <Container className="d-flex justify-content-center">
            {batches.map(batch => {
                const {batch_id: batchId, name} = batch

                return (
                    <Card onClick={() => setActiveBatch(batchId)} className={`shadow mx-3 ${activeBatch === batchId ? 'active-batch text-white': '' } `}>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                Batch ID: {batchId}
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                )

            })}
        </Container>
    )
}

export default BatchSelector
