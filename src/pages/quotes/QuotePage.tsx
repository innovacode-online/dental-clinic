import { FC } from 'react'
import { useParams } from 'react-router-dom'

export const QuotePage: FC = () => {

    const params =  useParams();
    console.log(params);

    return (
        <div>QuotePage</div>
    )
}
