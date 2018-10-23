import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Landing extends Component {
  render() {
    return (
      <div style={{padding: 10}}>
        <h1>1er Tarea</h1>
        <p>
          {'La '}
          <Link to="/home">HOME</Link>
          {' actualmente tiene dos componentes, "TopBar" y "HomeContent"."'}
        </p>
        <p>
          {'Hay un botón de "Iniciar sesión" en cada uno. Tu primera tarea es implementar '}
          {'los botones de "Iniciar sesión" para que al hacer clic en uno de ellos inicie sesión.'}
        </p>
        <p>
          {'Cuando haya iniciado sesión, ambos botones deberían cambiar a "Cerrar sesión" y hacer clic en cualquiera de ellos debería volver al estado de cierre de sesión. '}
        </p>
        <p>
          {'El botón de inicio de sesión de TopBar debe cambiar a sus iniciales (vea el ejemplo a continuación) y el botón de registro debe cambiar a Cerrar sesión.'}
        </p>
        <div style={{textAlign: 'center'}}>
          <img alt={'initials'} style={{maxHeight: 44}}src="topbar-example.png"/>
        </div>
        <h1>2da Tarea</h1>
        <p>
          {'Crear una ruta para una lista de usuarios; nombre su componente "UserList".'}
        </p>
        <p>
          {'Utilice https://randomuser.me/ para obtener los 20 usuarios y mostrarlos en una lista en la página.'}
          {'Las propiedades que se mostrarán en los elementos de la lista deben ser:'}
          <dd>
            {'First Name, Last Name, Email, Phone.'}
          </dd>
        </p>
        <p>
          {'Cuando se muestra la lista de usuarios, al hacer clic en cualquier elemento del usuario, la aplicación debe navegar a'}
          {'la ruta del detalle del usuario (pantalla); nombre su componente "UserDatail" componente. Esta página de detalles del usuario sería dinámica.'}
          {'la url debe contener la identificación del usuario mientras navega a la página de detalles del usuario.'}
        </p>
        <p>
          {'Debería haber un botón Atrás en la página de detalles del usuario para que el usuario final pueda volver a la página de listado de usuarios.'}
          {'Las propiedades a mostrar en los detalles del usuario son:'}
          <dd>
            {'Picture, First Name, Last Name, Email, Phone'}
          </dd>
        </p>
        <h1>3ra Task</h1>
        <p>
          {'Elimine el directorio node_modules / de su ejercicio de trabajo y comprima el directorio y envíenoslo para que lo revisemos.'}
        </p>
        <h1>Notas</h1>
        <ul>
          <li>{'Se le juzgará según su capacidad para seguir estas instrucciones, así como también la forma en que efectivamente ejecuta estas tareas.'}</li>
          <li>{'Tómese el tiempo para pulir su presentación. Quieres impresionarnos!'}</li>
        </ul>
      </div>
    );
  }
}
