import React, { Component } from 'react';
import { BASE } from './styled'

const Colunas = [{ name: 'Nome' }]
class index extends Component {
    render() {
        return (
            <div>
                <table>
                    <caption>Lista de Usuários</caption>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Instrument</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Instrument</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        <tr>
                            <td>John Lennon</td>
                            <td>Rhythm Guitar</td>
                        </tr>
                        <tr>
                            <td>Paul McCartney</td>
                            <td>Bass</td>
                        </tr>
                        <tr>
                            <td>George Harrison</td>
                            <td>Lead Guitar</td>
                        </tr>
                        <tr>
                            <td>Ringo Starr</td>
                            <td>Drums</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default index;