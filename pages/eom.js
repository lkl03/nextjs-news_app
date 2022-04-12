import styles from '../styles/eom.module.css'
import Toolbar from '../components/Toolbar'

const eom = ({employee}) => {
    console.log(employee);
  return (
    <div className="page-container">

        <Toolbar />

        <div className={styles.main}>
            <h1>Employee Of The Month</h1>

            <div className={styles.employeeOfTheMonth}>
                <h3>{employee.name}</h3>
                <h6>{employee.position}</h6>
                <img src={employee.image} />
                <p>{employee.description}</p>
            </div>
        </div>
    </div>
  )
}

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://my-json-server.typicode.com/lkl03/nextjs-news_app/employeeOfTheMonth'
    )
    const employee = await apiResponse.json()
    return {
        props: {
            employee
        }
    }
}

export default eom