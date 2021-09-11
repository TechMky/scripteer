import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../context/AppContext'
import { getAllStudents, getInstructorFeedback } from '../queries/service'
import { decode } from "jsonwebtoken";

function FeedbackReport() {

    const {activeBatch, token} = useContext(AppContext)

    const [students, setStudents] = useState([])
    const [feedbacks, setFeedbacks] = useState(null)
    
    useEffect(() => {
        

        getAllStudents(activeBatch).then(({students}) => setStudents(students))

        const instructorId = decode(token, {complete: true}).payload.userId

        getInstructorFeedback(instructorId, activeBatch).then(({feedbacks}) => setFeedbacks(feedbacks))
        
        
    }, [activeBatch, setStudents, token])

    return (
        <div>
            
        </div>
    )
}

export default FeedbackReport
