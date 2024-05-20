import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const Switches = ({}) => {

    //true is autonomous false is manual
    const [mode, setMode] = useState('Autonomous');
    const [showAlertMessages, setShowAlertMessages] = useState(false);
    return (
    <div className='switches-container'>
        {/* <div> */}
            <p>
                Mode: {mode}
                <Form>
                    <Form.Check type='switch' onChange={() => {setMode(`${mode === 'Autonomous' ? 'Manual' : 'Autonomous'}`)}}/>
                </Form>
            </p>
        {/* </div> */}

        {/* <div> */}
            <Button variant='primary'>Abort</Button>
        {/* </div> */}

        {/* <div> */}
            <p>
                Alert Messages: {showAlertMessages ? 'ON' : 'OFF'}
                <Form>
                    <Form.Check type='switch' onChange={() => {setShowAlertMessages(!showAlertMessages)}}/>
                </Form>
            </p>
        {/* </div> */}

    </div>
    );
}


export default Switches; 