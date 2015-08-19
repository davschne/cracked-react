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

var Article = React.createClass({
  render: function() {
    return (
      <a href={this.props.contents.link}>
        <article>
          <h2>{this.props.contents.title}</h2>
          <ul>
            <li>By {this.props.contents.author}</li>
            <li>{this.props.contents.date}</li>
            <li>{this.props.contents.views} Views</li>
            <li>{this.props.contents.numComments} Comments</li>
          </ul>
        </article>
      </a>
    );
  }
});

var RelatedContainer = React.createClass({
  render: function() {
    var relatedArticles = this.props.contents.map(function(article) {
      return (
        <Article contents={article}/>
      );
    });
    return (
      <div id="related">
        {relatedArticles}
      </div>
    );
  }
});

var FeaturedContainer = React.createClass({
  getInitialState: function() {
    return ({
      article: {
        title: "10 Reasons You're an Idiot Just Like Everybody Else",
        author: "John Cheese",
        date: "August 32, 2012",
        views: 156835,
        numComments: 200,
        link: "http://www.crack'd.com/youre-an-idiot.html"
      },
      related: [
        {
          title: "Why That Movie Everybody Likes Is Actually Stupid",
          author: "Skip Spoiler",
          date: "August 28, 2012",
          views: 4024,
          numComments: 321,
          link: "http://www.crack'd.com/stupid-movie.html"
        },
        {
          title: "5 Popular Video Games That Are Absurd, Xenophobic Bullshit",
          author: "J.F. Sargent",
          date: "August 29, 2012",
          views: 3216,
          numComments: 379,
          link: "http://www.crack'd.com/absurd-bullshit-games.html"
        },
        {
          title: "8 Movie Themes From The 80s That Probably Warped You For Life",
          author: "A.C. Grimes",
          date: "August 31, 2012",
          views: 46223,
          numComments: 421,
          link: "http://www.crack'd.com/movies-that-warped-you.html"
        }
      ]
    });
  },
  render: function() {
    return (
      <main>
        <Article contents={this.state.article}/>
        <aside>
          <RelatedContainer contents={this.state.related}/>
        </aside>
      </main>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <body>
        <HeaderContainer/>
        <FeaturedContainer/>
      </body>
    );
  }
});

React.render(<App/>, document.body);
