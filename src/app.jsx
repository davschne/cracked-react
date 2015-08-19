var React = require('react');

var Nav = React.createClass({
  render: function() {
    var navItems = this.props.items.map(function(item) {
      return (
        <li>{item}</li>
      );
    });
    return (
      <nav>
        <ul>{navItems}</ul>
      </nav>
    );
  }
});

var HeaderContainer = React.createClass({
  getInitialState: function() {
    return {
      navItems: [
        "Articles", "Videos", "Photoplasty", "Personal Experiences", "Forums", "More"
      ]
    };
  },
  render: function() {
    return (
      <header>
        <h1>CRACK'D</h1>
        <Nav items={this.state.navItems}/>
        <links></links>
      </header>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <body>
        <HeaderContainer/>
        <main>

        </main>
      </body>
    );
  }
});

React.render(<App/>, document.body);
