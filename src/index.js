import React, {useSate, Component} from 'react';
import ReactDOM from 'react-dom';
import App from './routes/App'


ReactDOM.render(<App />, document.getElementById('app'));


/*Componentes que tienen un estado -* - STATEFULL - *-
const Button = () => {
    const [name, setname] = useState('Hola Mundo')
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

Componentes sin estado -* - STATELESS - *-
const Button = () => {
    <div>
        <h1>Hola Mundo</h1>
    </div>
};
O de esta manera
const Button = ({text}) => <ButtonRed text={text}/>;

Componentes con clases -* - CLASES - *-
class App extends Component {

    Ya no es muy utilizada lo remplazaron los Hooc y los statefull
    constructor() {

    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}

Componentes con High Orden Componet -* - CLASES - *-
function ComponentWrapper(WrapperComponent) {
    class Wrapper extends Component {
        render() {
            return <WrapperComponent {...this.props} />
        }
    }
}*/