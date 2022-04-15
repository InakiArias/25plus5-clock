import './LengthControls.css';

function LengthControls({ name, length, incMethod, decMethod }) {
    const labelname = name[0].toUpperCase() + name.slice(1, name.length);

    return (
        <div className="wrapper">
            <div id={name + "-label"}>{labelname} Length</div>
            <div className="controls">
                <button id={name + "-increment"} onClick={incMethod}>
                    +
                </button>
                <div id={name + "-length"}>{length / 60}</div>
                <button id={name + "-decrement"} onClick={decMethod}>
                    -
                </button>

            </div>
        </div>
    );
}

export default LengthControls;