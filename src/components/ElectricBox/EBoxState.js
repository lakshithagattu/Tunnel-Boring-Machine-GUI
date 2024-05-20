import EBoxStateCSS from './EBoxState.css';
import { useEffect, useContext } from 'react';
import { DataContext} from '../../Context/DataContext';

function EBoxState() {

    const {data, setData} = useContext(DataContext);

    return(
        <div className="column">
            <div className="row">
                <p>Box 1</p>
                <p>{data[0]}</p>
                <div className="status-symbol"></div>
                <div className="status-symbol"></div>
            </div>
            
            <div className="row">
                <p>Box 2</p>
                <p>{data[1]}</p>
                <div className="status-symbol"></div>
                <div className="status-symbol"></div>
            </div>
        </div>
    )
}


export default EBoxState;