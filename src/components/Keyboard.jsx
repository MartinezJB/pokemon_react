import React from 'react'

export default function Keyboard() {
    return (
        <div>
            <table className="botones">
                <tbody>
                    <tr>
                        <td id="ATAQUE1">ATAQUE1</td>
                        <td id="ATAQUE2">ATAQUE2</td>
                    </tr>

                    <tr>
                        <td id="ATAQUE3">ATAQUE3</td>
                        <td id="ATAQUE4">ATAQUE4</td>
                    </tr>
                </tbody>
            </table>
            <div className="buttons">
                <button>Exit</button>
                <button>+</button>
                <button>Bag</button>
            </div>
        </div>
    )
}
