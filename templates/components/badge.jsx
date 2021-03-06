var React = require('react');


var Badge = React.createClass({
  render: function() {
    var badge = this.props.badge,
        slug = "/badges/" + badge.slug + '?pretty=true';
    return (
      <div className="badge pure-u-1-8">
        <a href={slug} >
          <img src={badge.imageUrl}/>
          <span> {badge.name} </span>
        </a>
      </div>
    );
  }
});

module.exports = Badge;