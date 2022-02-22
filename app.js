'use strict';

const NavBar = ({ menuItems, handleClickMenuItem }) => {
  return (
    <nav>
      <ul>
        {menuItems.map(({ id, label, url }) => (
          <li key={id} onClick={e => handleClickMenuItem(url)}>
            {label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

const MainContent = ({ color, userName }) => {
  return <h1 style={{ color }}>Hello {userName ? userName : 'stranger'}</h1>;
};

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <footer>{this.props.nameCompany} Copyright and stuff</footer>;
  }
}

const App = () => {
  const menuItems1 = [
    { id: 1, label: 'Home', url: '/home' },
    { id: 2, label: 'About', url: '/about' },
    { id: 3, label: 'Contact', url: '/contact' }
  ];
  const menuItems2 = [
    { id: 1, label: 'Profile', url: '/profile' },
    { id: 2, label: 'Transactions', url: '/transactions' },
    { id: 3, label: 'History', url: '/history' }
  ];

  const handleClickMenuItem = url => console.log(url);
  return (
    <main className='container'>
      <NavBar menuItems={menuItems1} handleClickMenuItem={handleClickMenuItem} />
      <NavBar menuItems={menuItems2} handleClickMenuItem={handleClickMenuItem} />
      <MainContent userName='Jorge' color='blue' />
      <MainContent userName='Nett' color='yellow' />
      <MainContent userName='Dea' color='red' />
      <MainContent userName='Francois' color='pink' />
      <MainContent userName='Natasha' color='coral' />
      <MainContent userName='Shawn' color='darkgrey' />
      <Footer nameCompany='Dell' />
      <Footer nameCompany='ASUS' />
      <Footer nameCompany='Waterdrop' />
      <Footer nameCompany='Apple' />
      <Footer nameCompany='Casio' />
      <Footer nameCompany='Acer' />
    </main>
  );
};

ReactDOM.render(<App />, document.querySelector('#app'));
