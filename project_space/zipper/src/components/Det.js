import './Det.css';

const data = [
    { sem: "I", per: 80, bl: "0" },
    { sem: "II", per: 78, bl: "1" },
    { sem: "II", per: 78, bl: "1" },
    { sem: "II", per: 78, bl: "1" },
    { sem: "II", per: 78, bl: "1" }
]

function Det() {
    return (

        <div className="Det">
            <h3>Sem-Wise Academic Details</h3>
            <table className="det_table">
                <tr>
                    <th>SEMESTER</th>
                    <th>PERCENTAGE</th>
                    <th>BACKLOGS</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.sem}</td>
                            <td>{val.per}</td>
                            <td>{val.bl}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    );
}

export default Det;
