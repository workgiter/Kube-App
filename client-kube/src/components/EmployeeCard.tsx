import { Button, Card, CardActions, Typography } from "@mui/material"
import CardContent from '@mui/material/CardContent';

import { IEmployee } from "../interfaces/IEmployeeList"

interface IProps {
    key: number,
    employee: IEmployee,
    index: number,
    setEditIndex: (x: string) => void
    deleteEmployee: (x: string) => void
}

const EmployeeCard = (props: IProps) => {

    return (
        <Card sx={{ maxWidth: 500, margin: 1 }}>
            <CardContent>
                <Typography variant="h5" component="div">
                    {props.employee.name}
                </Typography>
                <Typography>
                    {props.employee.email}
                </Typography>
                <Typography>
                    {props.employee.age}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => props.setEditIndex(props.employee.id)} size="small">Edit</Button>
                <Button onClick={() => props.deleteEmployee(props.employee.id)} size="small">Delete</Button>
            </CardActions>
        </Card>
    )
}


export default EmployeeCard